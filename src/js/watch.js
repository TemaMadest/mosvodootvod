(function(){
  
  var watch = $('a.watch'),
  back = $('a.default'),
  
  forward = function(){
    $('html').css({'font-size': '19px'});
    $('a.watch').css({'display': 'none'});
    $('a.default').css({'display': 'block'});    
  },
  
  ago = function(){
    $('html').css({'font-size': ''});
    $('a.watch').css({'display': ''});
    $('a.default').css({'display': ''});
  };
  
  watch.on('click touch', function(e){
    forward();
    e.preventDefault();
  });
  back.on('click touch', function(e){
    e.preventDefault();
    ago();
  });
  
}());