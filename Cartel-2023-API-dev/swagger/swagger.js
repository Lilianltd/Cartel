const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger-doc.json';
const endpointsFiles = ['./endpoints.js'];

const doc = {
    info: {
        version: '1.0.0',
        title: 'Cartel API',
        description: 'Cartel API Documentation'
    },
    host: 'localhost:8080',
    basePath: '/api',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'Events',
            description: 'Events related endpoints'
        },
        {
            name: 'Places',
            description: 'Places related endpoints'
        },
        {
            name: 'Schools',
            description: 'Schools related endpoints'
        },
        {
            name: 'Scores',
            description: 'Scores related endpoints'
        },
        {
            name: 'Teams',
            description: 'Teams related endpoints'
        }
    ]
};

swaggerAutogen(outputFile, endpointsFiles, doc);
