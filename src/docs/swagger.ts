import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VNR ERP API",
      version: "1.0.0",
      description: "API de gestion des clients ERP VNR",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  

  apis: ["./src/routes/*.ts"],
};
export const swaggerSpec = swaggerJsdoc(options);
