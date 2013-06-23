// History.js example

(function(window){

  // Initialize History.JS
  var History = window.History; // Note: We are using a capital H instead of a lower h

  // Clicking on navigation items
  $('[role=navigation] a').click(function(e){    
    History.pushState(null, null, $(this).attr('href'));
    e.preventDefault();    
  })

  // Listening 'statechange' event: on pushState and click on back or forward buttons
  History.Adapter.bind(window,'statechange',function(){ 
    var State = History.getState(); 
    History.log(State.data, State.title, State.url);        
    ContentLoad(State.url);
  });  
  
  
  // Content loading function
  function ContentLoad(url) {    
    // Active class on navigation
    $('[role=navigation] a').removeClass('active');
    $('[role=navigation] a[href="'+url+'"]').addClass('active');
    // Loading indication + History.JS pushstate + ajax load 
    $('[role=main]').addClass('loading');      
    $('[role=main]').load(
      url + ' [role=main]',
      function() {
        $('[role=main]').removeClass('loading');
      }
    );    
  }

})(window);
