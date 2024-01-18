const jwt = require("jsonwebtoken");
const logs = require('../prisma/models/logs');

const verify = function verifyToken(req, res, next){
    let token = req.headers["authorization"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env["OAUTH_CLIENT_SECRET"], (err, decoded) => {
        // console.log(err, decoded);
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!" + err.toString()
            });
        }

        // disallow access to admin routes (notifications, events, schools ...) for non-admins users
        // non-admins can only access scores
        if (req.originalUrl.includes("scores")) {
            if (!decoded.groups.includes("admin_cartel") && !decoded.groups.includes("benevole_cartel")) {
                return res.status(403).send({
                    message: "Forbidden!"
                });
            }
        }
        else{
            if (!decoded.groups.includes("admin_cartel")) {
                return res.status(403).send({
                    message: "Forbidden!"
                });
            }
        }
        // console.log(decoded.email, req.method, req.originalUrl, JSON.stringify(req.body));
        // get body from request
        // only for non log pages
        if (!req.originalUrl.includes("logs")) {
            let arr = []
            req.on('data', (chunk) => {
                arr.push(chunk)
            })
            req.on('end', () => {
                const body = new Buffer.concat(arr).toString();
                let content = body.toString().replace("{", "").replace("}", "");
                let result = logs.create(decoded.email, req.method, req.originalUrl, content);
            });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verify;
