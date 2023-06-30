const { Client } = require("pg");
const config = require('../config/db.json');

const dbConfig = config[process.env.NODE_ENV || 'development'];

const client = new Client(dbConfig);

const db = {
    client
}

client.connect()

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
    client.end();
  });

module.exports = client;