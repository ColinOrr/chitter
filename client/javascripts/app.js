require.config({
  paths: {
    jquery:       '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    knockout:     '//cdnjs.cloudflare.com/ajax/libs/knockout/2.3.0/knockout-min',
    sammy:        '//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min',
    socketio:     '/socket.io/socket.io',
    localStorage: 'https://rawgithub.com/jimrhoskins/knockout.localStorage/38a1dba4f74e2ca4b8e961c01de8c1ae796b2af3/knockout.localStorage'
  },
  shim: {
    sammy:        { deps: ['jquery'], exports: 'Sammy' },
    localStorage: { deps: ['knockout'] }
  }
});

require(['shellViewModel'], function(shellViewModel) {
  new shellViewModel();
});