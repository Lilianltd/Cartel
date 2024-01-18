const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

const apiRoute = require('../routes/api');
const authRoute = require('../oauth/client');
const notificationRoute = require('../routes/notification');
const subscriptionRoute = require('../routes/subscription');
const verifyToken = require("../middleware/authMiddleware");
const jsonParser = express.json();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger-doc.json');

app.use(cors());
app.use('/auth', jsonParser, authRoute);
app.use('/subscription', jsonParser, subscriptionRoute);

// verifyToken for get routes only on logs
app.get('/api/logs', verifyToken);
app.post('*', verifyToken);
app.put('*', verifyToken);
app.delete('*', verifyToken);

app.use('/api', jsonParser, apiRoute);
// app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/notifications', jsonParser, notificationRoute);

app.use(express.static(__dirname + '/../views'));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/../views'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});
