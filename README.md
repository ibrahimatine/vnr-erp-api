# VNR ERP API

API REST de gestion des clients développée avec **Node.js**, **Express** et **TypeScript** dans le cadre d'un module ERP.

L'application permet :

- Authentification des utilisateurs (JWT)
- Gestion complète des clients (CRUD)
- Recherche multicritère
- Pagination
- Validation des données
- Documentation Swagger
- Déploiement avec Docker

---

# Technologies

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt
- Zod
- Swagger / OpenAPI
- Docker & Docker Compose

---

# Architecture

```
src/
├── app.ts
├── server.ts
│
├── config/
│   └── database.ts
│
├── controllers/
│   ├── auth.controller.ts
│   └── customer.controller.ts
│
├── middlewares/
│   └── auth.middleware.ts
│
├── routes/
│   ├── auth.routes.ts
│   └── customer.routes.ts
│
├── services/
│   └── auth.service.ts
│
├── validators/
│   └── customer.validator.ts
│
└── docs/
```

---

# Installation (Sans Docker)

## 1. Cloner le projet

```bash
git clone <repository>
cd vnr-erp-api
```

---

## 2. Installer les dépendances

```bash
npm install
```

---

## 3. Configurer les variables d'environnement

Créer un fichier `.env`

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres123
DB_NAME=vnr_erp

JWT_SECRET=secret_vnr_2026
```

---

## 4. Démarrer le serveur

```bash
npm run dev
```

L'API sera disponible sur :

```
http://localhost:3000
```

Swagger :

```
http://localhost:3000/api-docs
```

---

# Installation avec Docker

Le projet est entièrement conteneurisé.

Il suffit d'exécuter :

```bash
docker compose up --build
```

Docker démarre automatiquement :

- PostgreSQL
- L'API Node.js

Le script `database/init.sql` crée automatiquement les tables :

- users
- customers

Aucune création manuelle de la base de données n'est nécessaire.

---

# Documentation Swagger

Une fois l'application démarrée :

```
http://localhost:3000/api-docs
```

Swagger permet de tester l'ensemble des endpoints directement depuis le navigateur.

---

# Authentification

## Inscription

```
POST /api/auth/register
```

Exemple :

```json
{
  "email": "admin@vnr.com",
  "password": "password123"
}
```

---

## Connexion

```
POST /api/auth/login
```

Retour :

```json
{
  "token": "JWT_TOKEN"
}
```

Le token doit être envoyé dans les routes protégées :

```
Authorization: Bearer JWT_TOKEN
```

---

# Gestion des clients

## Créer un client

```
POST /api/customers
```

---

## Lister les clients

```
GET /api/customers
```

---

## Recherche multicritère

```
GET /api/customers?search=cheikh
```

---

## Pagination

```
GET /api/customers?page=1&limit=10
```

---

## Recherche + Pagination

```
GET /api/customers?search=cheikh&page=1&limit=10
```

---

## Récupérer un client

```
GET /api/customers/:id
```

---

## Modifier un client

```
PUT /api/customers/:id
```

---

## Supprimer un client

```
DELETE /api/customers/:id
```

---

# Sécurité

Le projet met en œuvre plusieurs mécanismes de sécurité :

- Authentification JWT
- Mots de passe hachés avec bcrypt
- Middleware protégeant les routes privées
- Validation des données avec Zod
- Requêtes SQL paramétrées pour prévenir les injections SQL

---

# Base de données

Deux tables principales sont utilisées :

## users

Contient les utilisateurs pouvant se connecter.

| Champ | Description |
|--------|-------------|
| id | Identifiant |
| email | Adresse email |
| password | Mot de passe haché |
| created_at | Date de création |

---

## customers

Contient les clients de l'ERP.

| Champ | Description |
|--------|-------------|
| id | Identifiant |
| name | Nom complet |
| phone | Téléphone (unique) |
| email | Email |
| created_at | Date de création |
| updated_at | Date de modification |

---

# Structure du projet

Chaque dossier possède une responsabilité précise.

| Dossier | Rôle |
|----------|------|
| config | Configuration PostgreSQL |
| controllers | Gestion des requêtes HTTP |
| routes | Déclaration des endpoints |
| middlewares | Authentification JWT |
| services | Logique métier |
| validators | Validation Zod |
| docs | Configuration Swagger |

---

# Fonctionnalités implémentées

- Authentification JWT
- CRUD complet des clients
- Recherche multicritère
- Pagination SQL (LIMIT / OFFSET)
- Validation des données
- Documentation Swagger
- Docker & Docker Compose
- Initialisation automatique de PostgreSQL

---

# Auteur

Développé dans le cadre du test technique **VNR ERP**.