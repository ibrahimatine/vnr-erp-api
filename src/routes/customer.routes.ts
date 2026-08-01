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
 */
router.get("/:id", authMiddleware, getCustomerById);

router.put("/:id", authMiddleware, updateCustomer);

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
