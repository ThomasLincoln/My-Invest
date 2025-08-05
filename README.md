
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

A funcionalidade de backend está em desenvolvimento.

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
