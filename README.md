# CRUD de Usuários

Este projeto é uma aplicação CRUD (Create, Read, Update, Delete) para gerenciar usuários. A aplicação permite criar, listar, editar e remover usuários, com um frontend desenvolvido em React e um backend em Node.js usando SQLite. O projeto foi desenvolvido para o desafio técnico da empresa Supera.

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/JhulyBastos/desafio-supera.git
   cd desafio-supera
   ```

2. **Instale as dependências do frontend:**

   ```bash
   cd frontend
   npm install
   ```

3. **Instale as dependências do backend:**

   ```bash
   cd ../server
   npm install
   ```

## Execução

1. **Inicie o backend:**

   No diretório `server`, execute o comando:

   ```bash
   npm run start
   ```

   O backend estará rodando em [http://localhost:3001](http://localhost:3001).

2. **Inicie o frontend:**

   No diretório `frontend`, execute o comando:

   ```bash
   npm run dev
   ```

   O frontend estará rodando em [http://localhost:3000](http://localhost:3000).

## Endpoints da API

### Base URL: `http://localhost:3001`

- **GET /users**: Lista todos os usuários com paginação e filtros opcionais.
- **POST /users**: Cria um novo usuário.
- **PUT /users/:id**: Atualiza um usuário existente.
- **DELETE /users/:id**: Remove um usuário existente.

### Parâmetros de Filtros

Os seguintes parâmetros podem ser usados para filtrar usuários no endpoint `GET /users`:

- **page**: Número da página para paginação (opcional).
- **search**: Pesquisa por nome ou email (opcional).
- **profile**: Filtra por tipo de perfil de usuário (opcional).

## Tecnologias Utilizadas

### Frontend

- **NextJS**
- **React**
- **Axios**
- **React Toastify**
- **Tailwind CSS**

### Backend

- **Node.js** com **Express**
- **SQLite** como banco de dados
- **TypeScript** para tipagem estática
