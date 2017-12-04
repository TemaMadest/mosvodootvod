(function(){
  
  var elem = $('.preload-overlay'),
        w = window;
  
  var closePreload = function(){
    $(elem).css({
      opacity: 0
    });    
    setTimeout(function(){
      $(elem).remove()
    }, 500);
  };
  
  if(isMobile.any) closePreload();
  else $(document).ready(closePreload);
  
})();