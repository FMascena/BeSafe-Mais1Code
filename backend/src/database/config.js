require('dotenv').config()

module.exports = {
  "develop": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_DEV,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}