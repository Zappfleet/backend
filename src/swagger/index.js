const { Router } = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const { getRandomInt } = require("../utils");
const path = require("path");
const config = require("config");

const expressBasicAuth = require("express-basic-auth");

const router = Router();


router.use("/api-docs", swaggerUI.serve);


router.get("/api-docs",
    expressBasicAuth({
        users: { [config.get("BASIC_ACCESS_USERNAME")]: config.get("BASIC_ACCESS_PASSWORD") },
        challenge: true,
        realm: "Imb4T3st4pp",
    }),
    swaggerSetup());

function swaggerSetup() {
    const swaggerSpec = swaggerJsDoc({
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: "Zapp Api Documents",
                version: "v2.0.0",
                description: "zapp backend api documents",
                contact: {
                    name: "Mehdi Hamze",
                    email: "mhamze1994@gmail.com",
                },
            },
            servers: [
                {
                    //sgh
                    //url: "http://0.0.0.0",
                    url: "https://zapp-backend.liara.run:4000",
                   // url: "http://localhost:4000",
                },
                {
                   // url: "https://zapp-backend.liara.run:4000",
                    url: "http://testpanel.zappfleet.ir",
                },
            ],
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
            security: [{ BearerAuth: [] }],
        },
        apis: ["./**/routes/**/*.js"],
    });

    const swaggerUiOptions = {
        explorer: true,
    }
    return swaggerUI.setup(swaggerSpec, swaggerUiOptions)
}

module.exports = { swaggerRouter: router }