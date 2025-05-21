export default async function enviarTarefa(canal) {
    const tarefa = {
      texto: "Executar tarefa em " + new Date().toISOString()
    };
  
    canal.sendToQueue("minha_tarefa", Buffer.from(JSON.stringify(tarefa)));
  }
  