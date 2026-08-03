# Démonstration Swagger - VNR ERP API

## 1. Register
**POST** `/api/auth/register`

```json
{
  "email": "demo@vnr.com",
  "password": "password123"
}
```

---

## 2. Login
**POST** `/api/auth/login`

```json
{
  "email": "demo@vnr.com",
  "password": "password123"
}
```

Copier le token puis cliquer sur **Authorize** et coller :

```
Bearer VOTRE_TOKEN
```

---

## 3. Créer un client
**POST** `/api/customers`

```json
{
  "name": "Cheikh Fall",
  "phone": "770000111",
  "email": "cheikh@vnr.com"
}
```

---

## 4. Lister les clients
**GET** `/api/customers`

Paramètres :

```
search :
page : 1
limit : 10
```

Recherche :

```
search : Cheikh
page : 1
limit : 10
```

---

## 5. Récupérer un client
**GET** `/api/customers/{id}`

```
id : 1
```

---

## 6. Modifier un client
**PUT** `/api/customers/{id}`

Paramètre :

```
id : 1
```

Body :

```json
{
  "name": "Cheikh Fall Modifié",
  "phone": "770000222",
  "email": "cheikh.modifie@vnr.com"
}
```

---

## 7. Supprimer un client
**DELETE** `/api/customers/{id}`

```
id : 1
```

---

# Tests d'erreur

## Téléphone déjà existant

```json
{
  "name": "Autre Client",
  "phone": "770000222",
  "email": "autre@vnr.com"
}
```

Réponse attendue :

```json
{
  "message": "Ce numéro de téléphone existe déjà."
}
```

---

## Validation

```json
{
  "name": "",
  "phone": "",
  "email": "abc"
}
```

Attendu : HTTP 400.

---

## Client introuvable

GET `/api/customers/{id}`

```
id : 999
```

Réponse :

```json
{
  "message": "Client introuvable"
}
```

---

# Déroulement conseillé

1. Register
2. Login
3. Authorize (Bearer Token)
4. POST Client
5. GET Tous les clients
6. GET Client par ID
7. PUT Modifier
8. GET Tous les clients
9. DELETE
10. GET Tous les clients
