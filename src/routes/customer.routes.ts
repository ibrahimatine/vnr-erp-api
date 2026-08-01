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

router.post("/", authMiddleware, createCustomer);

router.get("/:id", authMiddleware, getCustomerById);

router.put("/:id", authMiddleware, updateCustomer);

router.delete("/:id", authMiddleware, deleteCustomer);
export default router;
