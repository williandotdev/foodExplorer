const config = require("../../../knexfile"); //importando configurações do arquivo knexfile
const knex = require('knex'); // importando o knex

const connection = knex(config.development);//buscando configurações do arquivo knexfile

module.exports = connection;