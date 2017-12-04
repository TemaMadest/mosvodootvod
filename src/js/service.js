(function(){
  
  var btn_service = $('a.srv');
  var SendPrice = $('input[name="price"]');
  var SendService = $('input[name="service"]');
  var SendTitle = $('div#chooice');
  
  var handler = function(e){
    
    var price = 0, service = '', chooice = '';
    price = $(this).attr('data-price');
    service = $(this).attr('data-service');
    chooice = $(this).attr('data-service');
    
    SendPrice.attr('value', price);
    SendService.attr('value', service);
    SendTitle.html(chooice);
  };
  
  if(isMobile.any){
    btn_service.on('tap', handler);
  }else{
    btn_service.on('click', handler);
  }
  
  
}());