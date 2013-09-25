define(['knockout', 'dataSource', 'utilities'], function(ko, dataSource, util) {
  
  //  Presentation logic for /views/cheep.jade
  
  return function cheepViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(false);
    self.inactive = ko.observable(true);
    self.cheep = ko.observable();
    
    //
    //  Functions
    
    //  Retrieves and displays an individual cheep
    self.display = function (id) {
      dataSource
        .getCheep(id)
        .done(function(data) { self.cheep(data); });
    };
    
    //  Converts a name into a muppet
    self.muppetMe = util.muppetMe;
    
  };
});