define(['knockout', 'dataSource'], function(ko, dataSource) {
  
  //  Presentation logic for /views/login.jade
  
  return function loginViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(true);
    self.inactive = ko.observable(false);
    self.nickname = dataSource.nickname;
    
    //
    //  Operations
    
    self.canLogin = ko.computed(function() {
      return (/\S/).test(self.nickname() || ''); 
    });
    
    self.login = function() {
      if(!self.canLogin()) return;
      window.location = '#cheeps';
    };
  };
});