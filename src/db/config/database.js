require('@babel/register');

// eslint-disable-next-line import/first
const { config } = require('dotenv');

config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_DEV,
  DB_TEST
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DEV,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_TEST,
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    logging: false
  }
};
