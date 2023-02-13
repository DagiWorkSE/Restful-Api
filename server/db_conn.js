const Pool = require("pg").Pool;
const todo_db = new Pool({
    user:'postgres',
    password:'123',
    host:'localhost',
    port:5432,
    database:'restful_todo_app'
});

module.exports = todo_db;