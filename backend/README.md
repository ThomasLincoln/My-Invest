# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

# File Dictionary
**src/index.ts** -> é a entrada da apicação, ele inicia a aplicação express
**src/controller/UserController.ts** -> Gerencia e lida com as funções de CRUD
**src/data-source.ts** -> Esse arquivo é responsável por configurar a 
base de dados
**src/routes** -> Aqui que a gente cria os endpoints do CRUD

---
# Pastas
**service** -> Aqui fica toda a lógica do negócio.
**repository** -> Aqui estabelecemos a conexão entre nossas entidades e nossos 
serviços
**Controller** -> Aqui todos dados aceitos pelos usuários ou clientes irá ser
recebida e enviada para o serviço.
**Entidade** -> Aqui é onde todos os nossos modelos relacionados a database tables
e database relationships estão.
