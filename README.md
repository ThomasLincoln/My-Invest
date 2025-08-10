# My-Invest: Gerenciador de Investimentos

Bem-vindo(a) ao repositório do My-Invest, uma plataforma para gerenciar seus investimentos.
Este documento contém as instruções para configurar e executar o projeto localmente.

---

## 🚀 Tecnologias Utilizadas

- **Frontend**: Vue.js (^3.4.x)
- **Backend**: Node.js (em desenvolvimento), Typescript, TypeORM
- **Banco de Dados**: PostgreSQL (^16.0.0)

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

O backend é responsável pela lógica de negócio e persistência de dados. Ele é construído com Express e TypeScript, utilizando o **TypeORM** para interagir com o PostgreSQL.

### Setup do Backend

1.  **Instalação das Dependências:**
    Abra o terminal na pasta `/backend` e instale os pacotes:
    ```bash
    npm install
    ```
2.  **Configuração de Ambiente (`.env`):**
    Crie o arquivo `.env` na raiz da pasta `/backend` com as seguintes informações para a conexão com o banco de dados e autenticação:
    ```env
    DB_USER=
    DB_PASSWORD=
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=myinvest_db
    JWT_SECRET=
    ```
    - `DB_HOST` e `DB_PORT`: Onde o seu servidor PostgreSQL está rodando.
    - `DB_NAME`: O nome do banco de dados que você criou para o projeto.

### Conexão com o PostgreSQL

A conexão é gerenciada pelo **TypeORM** a partir do arquivo `data-source.ts`. Este arquivo 
obtém as variáveis de ambiente e configura a conexão, além de definir quais entidades serão
mapeadas para as tabelas.

As configurações princiáis são:
- `type`: Define o tipo de banco a ser usado.
- `entities`: Uma lista de todas as classes de entidade que o TypeORM irá 
gerenciar, como a `User.entity.ts`.
- `synchronize`: Define se o TypeORM deve sincronizar o esquema do banco de dados
com as entidades automaticamente.

### Como Executar o Backend

Para rodar o servidor de desenvolvimento, execute o seguinte comando na pasta `/backend`:
```bash
npm run start
```