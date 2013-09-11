require.config({
  paths: {
    jquery:   '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    knockout: '//cdnjs.cloudflare.com/ajax/libs/knockout/2.3.0/knockout-min',
    sammy:    '//cdnjs.cloudflare.com/ajax/libs/sammy.js/0.7.4/sammy.min'
  },
  shim: {
    sammy: { deps: ['jquery'], exports: 'Sammy' }
  }
});

require(['shellViewModel'], function(shellViewModel) {
  new shellViewModel();
});