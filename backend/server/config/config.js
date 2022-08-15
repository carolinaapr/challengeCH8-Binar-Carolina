require('dotenv').config()
module.exports = {
  "development": {
    username: 'postgres',
    password: '12345678',
    database: 'challenge_chapter8',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  "test": {
    username: 'postgres',
    password: '12345678',
    database: 'challenge_chapter8',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  "production": {
    username: 'postgres',
    password: '12345678',
    database: 'challenge_chapter8',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
