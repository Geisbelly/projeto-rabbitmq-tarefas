import amqp from "amqplib";
import axios from "axios";

async function start() {
  const conn = await amqp.connect("amqp://localhost");
  const canal = await conn.createChannel();
  await canal.assertQueue("minha_tarefa");

  canal.consume("minha_tarefa", async (msg) => {
    const conteudo = JSON.parse(msg.content.toString());

    console.log("🔧 Executando tarefa:", conteudo.texto);
    await new Promise((r) => setTimeout(r, 3000)); // Simula tarefa

    await axios.post("http://localhost:3000/task-finished", {
      msg: conteudo.texto,
    });

    canal.ack(msg);
  });
}

start();
