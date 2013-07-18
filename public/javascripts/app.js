var app = Sammy();

app.get('#:pane', function(){
  $('.selected.pane').removeClass('selected');
  $('#'+ this.params.pane).addClass('selected');
});

app.run('#login');