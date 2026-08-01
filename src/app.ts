import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customer.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/customers", customerRoutes);

app.get("/", (req,res)=>{
    res.json({message:"VNR ERP API"});
});

export default app;