const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);






/**
 * Parametros
 * 
 * Query: parametros nomeados enviados na rota após simbolo ? e geralmente servem para filtros, 
 * paginação
 * Route Params: Parametros utilizados para identificar recursos
 * Request body: corpo de requisição utilizado para criar ou alterar recursos
 */

 /**
  * SQL: 'SQLite', MySQL, PostgreSQL, Oracle, M$ SQL Server
  * NoSQL: MongoDB, etc
  * 
  * 
  * SQLite 
  * - DRIVER: para acessar BD - select * from users
  * - Query Builder: table('users').select('*').where()
  * Para esse exemplo vamos usar KNEX.js
  */





