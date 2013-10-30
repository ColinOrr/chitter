var mongojs = require('mongojs');

//	Development connection string
var connection = 'test';

//  Cloud 9 connection string
if(process.env.IP) {
	connection = process.env.IP + '/test';
}

//  AppFog connection string
if(process.env.VCAP_SERVICES) {
  var env = JSON.parse(process.env.VCAP_SERVICES);
  var cfg = env['mongodb-1.8'][0].credentials;
  
  connection = "mongodb://" + cfg.username + ":" + cfg.password + "@" + cfg.hostname + ":" + cfg.port +"/" + cfg.db;
}

module.exports = mongojs(connection, ['cheeps']);