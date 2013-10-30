define(['knockout'], function(ko) {
  
  //  Presentation logic for /views/loading.jade
  
  return function loadingViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(true);
    self.inactive = ko.observable(false);
    
  };
});