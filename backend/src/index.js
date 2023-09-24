const express = require('express')
const db = require ('./database')
const cors = require('cors')

const app = express();

app.use (cors())

db.hasConnection()

app.use(express.json());

module.exports = app;