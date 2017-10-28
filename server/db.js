var mongojs = require('mongojs');

var connection = 'mongodb://chitter_db/chitter';
module.exports = mongojs(connection, ['cheeps']);
