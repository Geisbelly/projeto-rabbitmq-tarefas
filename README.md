# 🐇 Arquitetura Distribuída com RabbitMQ + Node.js + WebSocket

Este projeto demonstra uma arquitetura distribuída utilizando:

- **RabbitMQ** para orquestração de tarefas assíncronas
- **Express + Socket.IO** como API e servidor WebSocket
- **Worker separado** para consumir e executar tarefas
- **Interface web** para disparo e exibição do status da tarefa

---

## 📺 Apresentação

🔗 [Apresentação no Canva – Clique para ver](https://www.canva.com/design/DAGoHMVRWWw/6xkXfwsKkyp3b47WukpTng/view)

---

## 🧑‍🏫 Informações Acadêmicas

**Turma:** Arquitetura de Software  
**Alunas:**  
- Geisbelly Victória  
- Maria Antônia  

---

## ✅ Requisitos da Atividade

| # | Requisito                                                                 | Status |
|:-:|--------------------------------------------------------------------------|:------:|
| 1 | Interface do usuário para iniciar uma tarefa                             | ✅     |
| 2 | API com endpoint que envia a mensagem ao broker (RabbitMQ)               | ✅     |
| 3 | Consumidor que escuta o broker e executa a tarefa                        | ✅     |
| 4 | Consumidor ou outro recurso avisa a interface via WebSocket              | ✅     |

---

## 🔧 Tecnologias Utilizadas

- 🐇 **RabbitMQ**
- ⚙️ **Node.js**
- 🚀 **Express.js**
- 🔁 **Socket.IO**
- 🌐 **HTML + JS Vanilla**
- 📦 **Axios**
- 🖥️ **Docker** 

---

## 🗂️ Estrutura de Pastas

```bash
📦 projeto-arquitetura-distribuida/
├── api/
│   ├── index.js           # Servidor Express + Socket.IO + integração com RabbitMQ
│   └── tarefa/
│       └── tarefa.js      # Função que envia mensagens para a fila
├── worker/
│   └── worker.js          # Worker que consome tarefas da fila e notifica a API
├── public/
│   └── index.html         # Interface web para iniciar a tarefa
├── README.md              # Documentação completinha
