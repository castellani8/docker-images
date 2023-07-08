const express = require('express')
const mysql = require('mysql2')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config)
const app = express()
const port = 3000

const sql = `INSERT INTO nodedb.people VALUES(1, 'Castellani')`;
connection.query(sql);
connection.end();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})