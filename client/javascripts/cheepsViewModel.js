define(['knockout', 'dataSource', 'utilities'], function(ko, dataSource, util) {
  
  //  Presentation logic for /views/cheeps.jade
  
  return function cheepsViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(false);
    self.inactive = ko.observable(true);
    self.cheeps = ko.observableArray();
    self.status = ko.observable();
    
    //
    //  Functions
    
    //  Checks whether a cheep can be posted
    self.canPost = ko.computed(function() {
      return (/\S/).test(self.status() || '') && dataSource.nicknameExists(); 
    });
    
    //  Posts a cheep
    self.post = function() {
      if(!self.canPost()) return;
      dataSource.postCheep({
        author: dataSource.nickname(),
        body: self.status()
      });
      self.status(null);
    };
    
    //  Converts a name into a muppet
    self.muppetMe = util.muppetMe;
    
    //
    //  Initialise
    
    dataSource
      .onCheep(function(data) { self.cheeps.unshift(data); });
    
    dataSource
      .getCheeps()
      .done(function(data) { self.cheeps(data); });
  };
});