import express from "express";
import { connectMongoDb } from "./src/config/db/mongoDbConfig.js";
import { createInitialData } from "./src/config/db/initialData.js";
import { connectRabbitMq } from "./src/config/rabbitmq/rabbitConfig.js";
import checkToken from "./src/config/auth/checkToken.js";

const app = express();
const env = process.env;
const port = env.PORT || 8082;

connectMongoDb();
createInitialData();
connectRabbitMq();
app.use(checkToken);

app.get("/api/status", async (req, res) => {
  return res.json({
    service: "Sales-API",
    status: "up",
    httpStatus: 200,
  });
});

app.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
