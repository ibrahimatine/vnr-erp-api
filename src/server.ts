import app from "./app";
import { pool } from "./config/database";

const PORT = 3000;

async function startServer() {
    try {
        await pool.query("SELECT NOW()");

        console.log("Connexion PostgreSQL réussie");

        app.listen(PORT, () => {
            console.log(`Serveur lancé sur le port ${PORT}`);
        });

    } catch (error) {
        console.error("Erreur connexion DB :", error);
        process.exit(1);
    }
}

startServer();