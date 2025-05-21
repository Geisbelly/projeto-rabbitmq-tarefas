import express from "express";
import amqp from "amqplib";
import http from "http";
import { Server } from "socket.io";
import enviarTarefa from "../tarefa/tarefa.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

let canal;

async function iniciarRabbit() {
  const conn = await amqp.connect("amqp://localhost");
  canal = await conn.createChannel();
  await canal.assertQueue("minha_tarefa");
}
iniciarRabbit();

app.post("/start-task", async (req, res) => {
  await enviarTarefa(canal); // envia tarefa para o RabbitMQ
  res.sendStatus(200);
});

app.post("/task-finished", (req, res) => {
  const { msg } = req.body;
  io.emit("task_done", msg);
  res.sendStatus(200);
});

server.listen(3000, () => console.log("API ouvindo em http://localhost:3000"));
