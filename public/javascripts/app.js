var app = Sammy();

app.get('#:pane', function(context) {
  var current = $('.active.pane');
  var target = $('#' + context.params.pane);
  if(current[0] === target[0]) return;
  
  target.removeClass('inactive');
  
  //  Yuck!
  setTimeout(function() {
    target.addClass('active');
    current.removeClass('active');
  }, 0);
  
  setTimeout(function(){
    current.addClass('inactive');
  }, 250);
});

app.run('#login');