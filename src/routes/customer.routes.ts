import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import {
  getCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customer.controller";

const router = Router();

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: Liste des clients avec recherche et pagination
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Recherche par nom ou téléphone
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *     responses:
 *       200:
 *         description: Liste des clients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Cheikh Fall
 *                   phone:
 *                     type: string
 *                     example: "770000001"
 *                   email:
 *                     type: string
 *                     example: cheikh@vnr.com
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 */
router.get("/", authMiddleware, getCustomers);

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Créer un client
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mamadou Diallo
 *               phone:
 *                 type: string
 *                 example: 771234567
 *               email:
 *                 type: string
 *                 example: mamadou@gmail.com
 *     responses:
 *       201:
 *         description: Client créé
 */
router.post("/", authMiddleware, createCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Récupérer un client par son ID
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Client trouvé
 *       404:
 *         description: Client introuvable
 */
router.get("/:id", authMiddleware, getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     summary: Modifier un client
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du client
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Client modifié
 *       404:
 *         description: Client introuvable
 */
router.put("/:id", authMiddleware, updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     summary: Supprimer un client
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Identifiant du client
 *     responses:
 *       200:
 *         description: Client supprimé
 *       404:
 *         description: Client introuvable
 */
router.delete("/:id", authMiddleware, deleteCustomer);

/**
 * @swagger
 * /api/customers:
 *   post:
 *     summary: Créer un client
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Client créé
 *       400:
 *         description: Données invalides
 */
export default router;
