define(['knockout', 'dataSource'], function(ko, dataSource) {
  
  //  Presentation logic for /views/cheeps.jade
  
  return function cheepsViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(false);
    self.inactive = ko.observable(true);
    self.cheeps = ko.observableArray();
    
    //
    //  Initialise
    
    dataSource
      .getCheeps()
      .done(function(data) { self.cheeps(data); });
  };
});