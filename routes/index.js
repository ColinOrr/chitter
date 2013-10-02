var mongojs = require('mongojs');
var db = mongojs(process.env.IP + '/test', ['cheeps']);

exports.index = function(req, res) {
  res.render('index');
};

exports.getCheeps = function(req, res) {
  db.cheeps.find().sort({posted : -1}, function(err, data) {
    console.log(err);
    res.send(data);
  });
};

exports.getCheep = function(req, res) {
  var id = mongojs.ObjectId(req.params.id);
  db.cheeps.findOne(id, function(err, data) {
    console.log(err);
    if(data === null) {
      res.status(404).send('Sorry, cheep not found :-(');
    }
    else {
      res.send(data);
    }
  });
};

exports.postCheep = function(io) {
  return function(req, res) {
    var cheep = req.body;
    cheep._id = mongojs.ObjectId();
    cheep.posted = new Date();
    db.cheeps.insert(cheep, function() {});
    io.sockets.emit('cheep', cheep);
    res.send(cheep._id);
  };
};