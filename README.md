# VNR ERP API

API REST de gestion des clients pour un ERP.

## Stack

- Node.js
- Express
- TypeScript
- PostgreSQL
- JWT

## Installation

Installer les dépendances :

npm install

Créer une base PostgreSQL :
vnr_erp

Configurer le fichier .env :

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=

Lancer le projet :

npm run dev


## Endpoints

### Authentification

POST /api/auth/login


### Clients

GET /api/customers

POST /api/customers

GET /api/customers/:id

PUT /api/customers/:id

DELETE /api/customers/:id