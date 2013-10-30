define(['knockout', 'dataSource'], function(ko, dataSource) {
  
  //  Presentation logic for /views/login.jade
  
  return function loginViewModel() {
    var self = this;
    
    //
    //  Data
    
    self.active = ko.observable(false);
    self.inactive = ko.observable(true);
    self.nickname = dataSource.nickname;
    
    //
    //  Operations
    
    self.canLogin = dataSource.nicknameExists;
    
    self.login = function() {
      if(!self.canLogin()) return;
      window.location = '#cheeps';
    };
  };
});