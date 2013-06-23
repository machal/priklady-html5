// History.js example

(function(window){

  // Inicializovat History.JS
  var History = window.History; // Note: We are using a capital H instead of a lower h

  $('[role=navigation] a').click(function(e){
    History.pushState(null, null, $(this).attr('href'));
    e.preventDefault();
  })

  History.Adapter.bind(window,'statechange',function(){ 
    var State = History.getState(); 
    History.log(State.data, State.title, State.url);
  });  

})(window);
