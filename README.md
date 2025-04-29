Este projeto simula um sistema de fila de atendimento médico com três agentes principais:  
- **AC (Agente Cliente)** – emite senhas via totem digital.  
- **AA (Agente Atendente)** – chama e atende senhas em guichês.  
- **AS (Agente Sistema)** – coordena a lógica de atendimento, controle de filas e relatórios.

O sistema foi desenvolvido usando **Ionic + Angular** e simula toda a lógica **sem backend**, com dados mantidos localmente na sessão do navegador.

## ✅ Funcionalidades

- Emissão de senhas por prioridade (SP, SG, SE).
- Atendimento com lógica de prioridade: SP → SE/SG → SP → ...
- Histórico de últimas 5 senhas chamadas.
- Simulação de horários de expediente (7h às 17h).
- Relatório diário e mensal (emitido via serviço).
- Simulação de 5% de senhas descartadas.
- Numeração de senha no padrão `YYMMDD-PPSQ`.

---

## 🛠️ Requisitos para rodar o projeto

- [Node.js (v16 ou superior)](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)
- [Git](https://git-scm.com/) (para clonar o projeto)

- Tela do cliente: /cliente
- Tela do atendente: /atendente
- Painel de chamadas: /painel
