define(function() {
  return {
  
    //  Converts a name into a muppet
    muppetMe: function(name) {
      var hash = 0;
      for(var i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
      }
      return 'muppet-' + (hash % 16 + 1);
    }
  
  };
});