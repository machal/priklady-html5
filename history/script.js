// History.js example

(function(window){

  // Inicializovat History.JS
  var History = window.History; // Note: We are using a capital H instead of a lower h

  $('[role=navigation] a').click(function(e){
    
    // Active class
    $('[role=navigation] a').removeClass('active');
    $(this).addClass('active');
    
    // Loading indication + History.JS pushstate + ajax load 
    $('[role=main]').addClass('loading');      
    History.pushState(null, null, $(this).attr('href'));
    $('[role=main]').load(
      $(this).attr('href') + ' [role=main]',
      function() {
        $('[role=main]').removeClass('loading');
      }
    );
    
    // Prevent default click behavior
    e.preventDefault();    
  })

  History.Adapter.bind(window,'statechange',function(){ 
    var State = History.getState(); 
    History.log(State.data, State.title, State.url);
  });  

})(window);
