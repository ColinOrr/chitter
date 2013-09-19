define(['knockout', 'dataSource'], function(ko, dataSource) {
  
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
    
    self.canPost = ko.computed(function() {
      return (/\S/).test(self.status() || ''); 
    });
    
    self.post = function() {
      if(!self.canPost()) return;
      dataSource.postCheep({
        author: dataSource.nickname(),
        body: self.status()
      });
      self.status(null);
    };
    
    //
    //  Initialise
    
    dataSource
      .onCheep(function(data) { self.cheeps.unshift(data); });
    
    dataSource
      .getCheeps()
      .done(function(data) { self.cheeps(data); });
  };
});