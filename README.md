# Fullstack ORM Template

Este projeto foi desenvolvido com o objetivo de estudar e praticar o uso do Prisma ORM em um ambiente Node.js. A aplicação contém duas entidades principais, usuários e questões, permitindo criar, listar, atualizar e remover registros enquanto explora conceitos fundamentais do Prisma, como migrations, client, schema modeling e seeds.
O projeto também utiliza Docker para provisionar o banco de dados PostgreSQL de forma isolada e reprodutível.

## Tecnologias Utilizadas

- Node.js
- Express
- Typescript
- Prisma ORM
- PostgreSQL (via Docker)

## Funcionalidades

### Users
- Listagem de usuários
- Criação de usuários
- Exibição de usuário pelo ID

### Questions
- Listagem de questões
- Criação de questões
- Atualização de questões
- Remoção de questões

## Como Rodar o Projeto

### 1. Clonar o repositório
```bash
git clone https://github.com/leosouza5/prisma_answers_api.git
cd fullstack-orm-template
```

### 2. Configurar o ambiente
Crie um arquivo `.env` na raiz seguindo o exemplo:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5435/api"
```

### 3. Inicializar Serviço
```bash
# 3. Subir o banco de dados com Docker
docker compose up -d

# 4. Instalar dependências
npm install

# 5. Rodar as migrations do Prisma
npx prisma migrate dev

# 6. (Opcional) Rodar seeds
npx prisma db seed

# 7. Iniciar o servidor
npm run dev
```



A API estará disponível em:
```
http://localhost:3000
```

## Arquitetura do Projeto

- src/server.ts – Inicialização da aplicação Express
- src/routes – Definição das rotas de Users e Questions
- src/controllers – Controladores responsáveis por lidar com a lógica de cada entidade
- prisma/schema.prisma – Modelagem do banco de dados
- prisma/seed.ts – Script para popular a base
- docker-compose.yml – Configuração do ambiente PostgreSQL

## Licença

Este projeto está licenciado sob ISC.
