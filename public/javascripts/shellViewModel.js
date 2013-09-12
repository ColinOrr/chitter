define(['knockout', 'sammy', 'loginViewModel', 'cheepsViewModel', 'cheepViewModel'], function(ko, sammy, loginViewModel, cheepsViewModel, cheepViewModel) {

  //  Controls the visible panes and the navigation between them
  
  return function shellViewModel() {
    var self = this;
    
    //
    //  Panes
    
    self.login = new loginViewModel();
    self.cheeps = new cheepsViewModel();
    self.cheep = new cheepViewModel();
    
    //
    //  Routes
    
    var routes = new sammy();
    
    routes.get('#login', function() {
      activate(self.login);
    });
    
    routes.get('#cheeps', function() {
       activate(self.cheeps); 
    });
    
    routes.get('#cheeps/:id', function(cxt) {
       self.cheep.display(cxt.params.id);
       activate(self.cheep);
    });
    
    //
    //  Initialise
    
    ko.applyBindings(self);
    routes.run('#login');
    
    //
    //  Helpers
    
    //  Finds the currently active pane
    function findCurrent() {
      if (self.login.active()) return self.login;
      if (self.cheeps.active()) return self.cheeps;
      if (self.cheep.active()) return self.cheep;
      return null;
    }
    
    //  Activates the specified pane
    function activate(target) {
      var current = findCurrent();
      if (target == current) return;
      
      target.inactive(false);
      
      //  This timeout seems to be required to apply the CSS change, before 
      //  making the transition :-(
      setTimeout(function() {
        target.active(true);
        current.active(false);
      });
      
      //  Deactivate after the transition completes
      setTimeout(function() {
        current.inactive(true);
      }, 250);
    }
  };
});