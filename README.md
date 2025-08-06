
# My-Invest: Gerenciador de Investimentos

Bem-vindo(a) ao repositório do My-Invest, uma plataforma para gerenciar seus investimentos.
Este documento contém as instruções para configurar e executar o projeto localmente.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: Vue.js (^3.4.x)
- **Backend**: Node.js (em desenvolvimento)
- **Banco de Dados**: PostgreSQL (versão que você instalou)

---

## 🛠️ Requisitos de Desenvolvimento

Certifique-se de que as seguintes ferramentas estão instaladas na sua máquina.

- **Node.js**: `^18.0.0` ou superior.
- **npm**: `^9.0.0` ou superior.
- **PostgreSQL**: `^16.0.0` ou superior.

---

## 💻 Como Executar o Frontend

Para rodar a aplicação frontend, siga os passos abaixo:

1.  **Instalação das Dependências:**
    Abra o terminal na pasta `frontend/my-invest` e instale os pacotes:
    ```bash
    npm install
    ```

2.  **Inicialização do Servidor de Desenvolvimento:**
    Após a instalação, inicie o frontend com o comando:
    ```bash
    npm run dev
    ```
    O frontend será executado localmente e estará acessível em: `http://localhost:5173/`

---

## ⚙️ Backend
Primeiro precisamos instalar as dependências, para isso é necessário executar o seguinte comando em `/backend`
```bash
npm i
```
Precisamos criar o .env, que deve ter as seguintes informações:
```env
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
DB_NAME=
JWT_SECRET=
```
### Conexão com o PostgreSQL
🚧 Precisa ser melhorado 🚧

Isso é feito a partir do arquivo backend/db.ts, ele é um módulo de conexão, código:

```js
import dotenv from "dotenv";
import { Pool } from "pg";
import cron from "node-cron";

// Carregar informações do .env
dotenv.config();

console.log("🔄 Loading environment variables...");
console.log("user:", process.env.DB_USER);
console.log("host:", process.env.DB_HOST);
console.log("database:", process.env.DB_NAME);
console.log("port:", process.env.DB_PORT);
console.log("password:", process.env.DB_PASSWORD ? "********" : "not set");


// Configuração da connection pool do postgresql
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Verificar de forma assíncrona a conexão com o PostgreSQL
async function verificarConexao(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log("✅ Connected to PostgreSQL database");
    client.release();
  }
  catch (error) {
    console.error('❌ Error connecting to the database:', error);
  }
}

verificarConexao();
export default pool;
```

---

## 💾 Setup Inicial do Banco de Dados

Para configurar o banco de dados, você precisa criar as tabelas necessárias.

**Aviso:** O script abaixo é para o PostgreSQL. Ajuste o nome do banco de dados e as credenciais conforme a sua configuração.

```sql
-- Script para a criação da tabela de usuários
CREATE TABLE users(
  user_id SERIAL Primary key,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  email varchar(100) unique,
  password_hash text not null,
  created_at TIMESTAMP default current_timestamp,
  last_login timestamp
);
