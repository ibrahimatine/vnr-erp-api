# Démonstration API VNR ERP

## 1. Démarrer le serveur

```bash
npm run dev
```

Swagger :

```
http://localhost:3000/api-docs
```

---

# 2. Créer un utilisateur

```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
"email":"demo@vnr.com",
"password":"password123"
}'
```

Réponse attendue :

```json
{
  "message": "Utilisateur créé"
}
```

---

# 3. Connexion

```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
"email":"demo@vnr.com",
"password":"password123"
}'
```

Copier le token.

---

# 4. Créer un client

Remplacer VOTRE_TOKEN.

```bash
curl -X POST http://localhost:3000/api/customers \
-H "Authorization: Bearer VOTRE_TOKEN" \
-H "Content-Type: application/json" \
-d '{
"name":"Cheikh Fall",
"phone":"770000111",
"email":"cheikh@vnr.com"
}'
```

Réponse attendue :

```json
{
"id":1,
"name":"Cheikh Fall"
}
```

---

# 5. Récupérer tous les clients

```bash
curl http://localhost:3000/api/customers \
-H "Authorization: Bearer VOTRE_TOKEN"
```

---

# 6. Recherche

```bash
curl "http://localhost:3000/api/customers?search=cheikh&page=1&limit=10" \
-H "Authorization: Bearer VOTRE_TOKEN"
```

---

# 7. Récupérer un client

```bash
curl http://localhost:3000/api/customers/1 \
-H "Authorization: Bearer VOTRE_TOKEN"
```

---

# 8. Modifier un client

```bash
curl -X PUT http://localhost:3000/api/customers/1 \
-H "Authorization: Bearer VOTRE_TOKEN" \
-H "Content-Type: application/json" \
-d '{
"name":"Cheikh Fall Modifié",
"phone":"770000222",
"email":"cheikh2@vnr.com"
}'
```

---

# 9. Supprimer un client

```bash
curl -X DELETE http://localhost:3000/api/customers/1 \
-H "Authorization: Bearer VOTRE_TOKEN"
```

Réponse attendue :

```json
{
"message":"Client supprimé"
}
```

---

# Tests d'erreur

## Sans token

```bash
curl http://localhost:3000/api/customers
```

Attendu :

```json
{
"message":"Token manquant"
}
```

---

## Mauvais token

```bash
curl http://localhost:3000/api/customers \
-H "Authorization: Bearer mauvais_token"
```

Attendu :

401 Unauthorized

---

## Téléphone déjà utilisé

```bash
curl -X POST http://localhost:3000/api/customers \
-H "Authorization: Bearer VOTRE_TOKEN" \
-H "Content-Type: application/json" \
-d '{
"name":"Autre Client",
"phone":"770000111",
"email":"autre@vnr.com"
}'
```

Attendu :

```json
{
"message":"Ce numéro de téléphone existe déjà."
}
```

---

## Client inexistant

```bash
curl http://localhost:3000/api/customers/999 \
-H "Authorization: Bearer VOTRE_TOKEN"
```

Attendu :

```json
{
"message":"Client introuvable"
}
```

---

# Démonstration Swagger

1. Ouvrir :
```
http://localhost:3000/api-docs
```

2. Register

3. Login

4. Copier le JWT

5. Cliquer sur **Authorize**

6. Coller :

```
Bearer VOTRE_TOKEN
```

7. Tester :
- GET /customers
- POST /customers
- GET /customers/{id}
- PUT /customers/{id}
- DELETE /customers/{id}