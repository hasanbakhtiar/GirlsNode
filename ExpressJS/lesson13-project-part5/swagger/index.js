const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Documantation',
        version: '0.0.1',
        description: "Api documantation prepared for Express project"
    },
    servers: [
        {
            url: "http://localhost:3000"
        }
    ],
    components: {
        securitySchemes: {
            customAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'x-auth-token',
                description: 'Statik və ya login token, Bearer olmadan',
            },
            apiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'static-access',
                description: 'Statik API açarı',
            },
        },
    },
    security: [
        {
            customAuth: [],
        },
        {
            apiKeyAuth: [],
        },
    ],
}

const options = {
    swaggerDefinition,
    apis: ['./swagger/docs/client**/*.yaml', './swagger/docs/admin**/*.yaml'],
};

const swaggerDocs = swaggerJsdoc(options);
module.exports = swaggerDocs;