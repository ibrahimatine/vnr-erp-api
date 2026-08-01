# VNR ERP API

API REST de gestion des clients pour l'ERP VNR.

## Technologies utilisées

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT
- bcrypt
- Zod
- Swagger / OpenAPI

---

## Architecture

```
src/
├── config
│   └── database.ts
├── controllers
│   ├── auth.controller.ts
│   └── customer.controller.ts
├── middlewares
│   └── auth.middleware.ts
├── routes
│   ├── auth.routes.ts
│   └── customer.routes.ts
├── services
│   └── auth.service.ts
└── validators
		└── customer.validator.ts
```

---

## Installation

1. Cloner le projet

```bash
git clone <repository>
cd vnr-erp-api
```

2. Installer les dépendances

```bash
npm install
```

3. Configuration

Créer un fichier `.env` à la racine et ajouter les variables d'environnement nécessaires :

```
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/vnr_erp
JWT_SECRET=secret_key
```

4. Lancer le projet (mode développement)

```bash
npm run dev
```

L'API sera disponible sur : http://localhost:3000

La documentation Swagger est accessible à : http://localhost:3000/api-docs

---

## Authentification

- Inscription : POST /api/auth/register
- Connexion : POST /api/auth/login

La connexion retourne un JWT à utiliser pour les routes protégées via l'en-tête :

Authorization: Bearer <TOKEN>

---

## Gestion des clients

- Créer un client : POST /api/customers
- Lister les clients : GET /api/customers
	- Recherche et pagination : GET /api/customers?search=test&page=1&limit=10
- Obtenir un client par ID : GET /api/customers/:id
- Modifier : PUT /api/customers/:id
- Supprimer : DELETE /api/customers/:id

---

## Sécurité

- Mots de passe hachés avec bcrypt
- Authentification par JWT
- Routes protégées par un middleware d'authentification
- Requêtes SQL paramétrées pour prévenir les injections SQL
- Validation des données entrantes (Zod)