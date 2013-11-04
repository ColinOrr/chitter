define(['jquery', 'socketio', 'knockout', 'localStorage'], function($, io, ko, storage) {

  //  Sources data from RESTful services, web sockets and local storage 

  var socket = io.connect('/');
  
  //  The current user's nickname
  var nickname = ko.observable(null, { persist: 'nickname' });
  
  //  True if a nickname has been entered
  var nicknameExists = ko.computed(function() {
    return (/\S/).test(nickname() || ''); 
  });
  
  //  Gets all cheeps from the server
  function getCheeps() {
    return $.get('/cheeps');
  }
  
  //  Get an individual cheep from the server
  function getCheep(id) {
    return $.get('/cheeps/' + id);
  }
  
  //  Posts a cheep to the server
  function postCheep(cheep) {
    $.post('/cheeps', cheep);
  }
  
  //  Callback when a cheep is sent
  function onCheep(callback) {
    socket.on('cheep', callback);
  }
  
  return {
    nickname: nickname,
    nicknameExists: nicknameExists,
    getCheeps: getCheeps,
    getCheep: getCheep,
    postCheep: postCheep,
    onCheep: onCheep
  };
});