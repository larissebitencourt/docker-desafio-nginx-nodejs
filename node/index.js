const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

app.get('/', (_req, res) => {
  InsertName(res);
});

app.listen(port, () => {
  console.log('Executando na porta ' + port);
});

async function InsertName(res) {
  const name = 'Larisse';
  const connection = mysql.createConnection(dbConfig);

  connection.query(`INSERT INTO people(name) values('${name}')`, (error, _results, _fields) => {

  ListNames(res, connection);
  });
}

function ListNames(res, connection) {

  connection.query(`SELECT id, name FROM people`, function (err, result, fields) {

	const names = JSON.stringify(result);

    res.send(`
      <h1>Full Cycle Rocks!</h1>
      ${names}
    `);

    connection.end();
  });
}