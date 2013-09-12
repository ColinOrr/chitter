define(['knockout', 'dataSource'], function(ko, dataSource) {
  
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
    
    self.display = function (id) {
      dataSource
        .getCheep(id)
        .done(function(data) { self.cheep(data); });
    };
  };
});