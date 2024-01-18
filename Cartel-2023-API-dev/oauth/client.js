const express = require('express');
const router = express.Router();

router.get('/authorize', async (req, res) => {
    // open id authorization flow to get id token
    const authorize_url = "https://auth.emait.fr/application/o/authorize/";
    const redirect_uri = process.env["OAUTH_REDIRECT_URI"];
    const client_id = process.env["OAUTH_CLIENT_ID"];
    const scope = "openid email profile";
    const response_type = "id_token token";
    const state = "state";
    const nonce = "nonce";
    const url = authorize_url + "?redirect_uri=" + redirect_uri + "&client_id=" + client_id + "&scope=" + scope + "&response_type=" + response_type + "&state=" + state + "&nonce=" + nonce;
    res.redirect(url);
});

router.get('/callback', async (req, res) => {
    res.redirect('/'); // needs to be a client page because token are in url fragment
});

router.get('/userinfo', async (req, res) => {
    // get user info
    const url = "https://auth.emait.fr/application/o/userinfo/";
    const token = req.headers.authorization.split(" ")[1];
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }),
    });
    const data = await response.json();
    res.json(data);
});

module.exports = router;