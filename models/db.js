var settings = require('../settings');
var Db = require('mongodb').Db;
var connection = require('mongodb').Connection;
var server = require('mongodb').Server;

module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_  PORT, {})); 