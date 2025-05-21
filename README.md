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
│   └── index.js           # Servidor Express + Socket.IO + integração com RabbitMQ
│── tarefa/
│   └── tarefa.js      # Função que envia mensagens para a fila
├── worker/
│   └── worker.js          # Worker que consome tarefas da fila e notifica a API
├── frontend/
│   └── index.html         # Interface web para iniciar a tarefa
├── README.md              # Documentação completinha

```

---

## ▶️ Como Rodar o Projeto

> Antes de tudo, certifique-se de que o **RabbitMQ** está em execução na sua máquina.

### 🐳 Usando Docker (recomendado)

```bash
docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

> Interface de gerenciamento: [http://localhost:15672](http://localhost:15672)
> Usuário padrão: `guest` — Senha: `guest`

---

### 📦 Instalar dependências

Entre nas pastas `api/` e `worker/` e instale as dependências:

```bash
cd api
npm install

cd ../worker
npm install
```

---


### 🚀 Iniciar os serviços

Em terminais separados, inicie os dois servidores:

```bash
# Terminal 1 - Iniciar a API
cd api
node index.js

# Terminal 2 - Iniciar o Worker
cd worker
node worker.js
```

---

## 💡 Como Usar

1. **Abra a interface web**

   * Navegue até a pasta `frontend/`
   * Abra o arquivo `index.html` no navegador (ou use o Live Server do VSCode)

2. **Clique no botão "Iniciar tarefa"**

   * Isso dispara uma chamada `POST /start-task` para a API

3. **A tarefa é processada pelo Worker**

   * Ele simula a execução (aguarda 3 segundos)

4. **A interface é atualizada em tempo real**

   * Usando **Socket.IO**, a API emite o evento de conclusão
   * A página mostra o status da tarefa concluída ✅

---

## 🧠 Diagrama da Arquitetura

```
[ Interface Web ]
       |
       |  POST /start-task
       v
[ API / Express ]
       |
       |  RabbitMQ (sendToQueue)
       v
[ 🐇 RabbitMQ ]
       |
       |  Consome tarefa
       v
[ Worker Node.js ]
       |
       |  POST /task-finished
       v
[ API / Socket.IO ]
       |
       |  Emit 'task_done'
       v
[ Interface Web ]
```
