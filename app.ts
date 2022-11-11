import { app, db } from "./src/api-rest";
import authRoutes from "./src/api-rest/routes/auth.routes";

app.listen(app.get("port"));
console.log("Servidor en puerto", app.get("port"));

const onConnectionDB = async () => {
  await db.conect();
};

onConnectionDB();

app.use(authRoutes);
