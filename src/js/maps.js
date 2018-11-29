var Maps = (function(){
  
  
  var init = function(){
    
    var placemark = [
      new ymaps.Placemark([55.569866, 37.596228], {hintContent: 'Варшавское шоссе 164', balloonContent: 'Варшавское шоссе 164' }),
      new ymaps.Placemark([55.762515, 37.709784], {hintContent: 'ул.Авиамоторная 5', balloonContent: 'ул.Авиамоторная 5' }),
      new ymaps.Placemark([55.860661, 37.483041], {hintContent: 'ул.Смольная 24', balloonContent: 'ул.Смольная 24' }),
      new ymaps.Placemark([55.676108, 37.526313], {hintContent: 'Ленинский проспект 88', balloonContent: 'Ленинский проспект 88' })
    ];    
    
    var map = new ymaps.Map("maps", {
      center: [55.722950, 37.888318],
      zoom: 10
    });
    
    for(var i = 0; i < placemark.length; i++){
      map.geoObjects.add(placemark[i]);
    }
    
    map.behaviors.disable('scrollZoom');
  };  
    
    
  if(typeof ymaps !== "undefined"){
    /*if(isMobile.any){
      var mobilemaps = new Image();
      mobilemaps.src = "http://maps.google.com/maps/api/staticmap?size=1200x650&markers=label:1|color:blue|55.860661,37.483041&markers=label:2|color:red|55.676108,37.526313&markers=label:2|color:yellow|55.762515,37.709784&markers=label:2|color:green|55.569866,37.596228";
      mobilemaps.style.height = "100%";
      $('#maps').append(mobilemaps);
    }else{
      ymaps.ready(init);
    }*/

    ymaps.ready(init);
  }

  
}());