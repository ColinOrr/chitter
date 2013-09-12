var cheeps = [
  {
    id: 5,
    author: 'Scott Hanselman',
    posted: new Date(2013, 09, 10, 11, 33, 15),
    body: 'Meeting with @engineyard to talk about their @WindowsAzure stuff today.'
  },
  {
    id: 4,
    author: 'Meeting Boy',
    posted: new Date(2013, 09, 10, 10, 11, 48),
    body: 'Another day, another meeting scheduled during lunch.'
  },
  {
    id: 3,
    author: 'Martin Fowler',
    posted: new Date(2013, 09, 10, 06, 55, 38),
    body: 'bliki: Page Objects are a vital technique for testing web apps and other UIs by encapsulating the widgetry.'
  },
  {
    id: 2,
    author: 'Scott Hanselman',
    posted: new Date(2013, 09, 09, 20, 15, 22),
    body: 'Robot Turtles: The Board Game for Little Programmers (remember LOGO?)'
  },
  {
    id: 1,
    author: 'Meeting Boy',
    posted: new Date(2013, 09, 09, 19, 05, 59),
    body: '44 emails since I left the office, all about when to schedule a 30-minute call with the client. And still no time set.'
  }
];

exports.index = function(req, res) {
  res.render('index');
};

exports.getCheeps = function(req, res) {
  res.send(cheeps);
};

exports.getCheep = function(req, res) {
  var index = cheeps.length - req.params.id;
  if(index < 0 || index >= cheeps.length) {
    res.status(404).send('Sorry, cheep not found :-(')
  }
  else {
    res.send(cheeps[index]);
  }
};

exports.postCheep = function(req, res) {
  var cheep = req.body;
  cheeps.splice(0, 0, cheep);
  cheep.id = cheeps.length;
  cheep.posted = new Date();
  res.send(cheep.id);
};