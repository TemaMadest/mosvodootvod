(function(){
  
  var slide_btn = $('.contrl');
  var default_class_item = $('.wrapp-bg-slide-img');
  
  var activeLinks = function(el){
    slide_btn.removeClass('active');
    $(el).addClass('active');
  };  
  
  var slide_image = function(next, current){
    current.css({'left': ''});
    next.css({'left': ''});    
    setTimeout(function(){
      current.removeClass('first-item second-item').addClass('first-item');
      next.removeClass('first-item second-item').addClass('second-item');
    },10);    
    setTimeout(function(){
      current.addClass('in');
      next.addClass('in');
    },30);    
    setTimeout(function(){
      current.css({'left': '-100%'});
      next.css({'left': '0'});
    },50);
    setTimeout(function(){
      current.removeClass('in current first-item');
      next.removeClass('in second-item').addClass('current');
      slide_btn.css({'pointer-events': ''});
      if(current.hasClass('dev')) current.removeClass('dev');
      if(next.hasClass('dev')) next.removeClass('dev');
    },500);    
  };  
  
  var slide_text = function(next, current){
    current.removeClass('active show');
    next.addClass('show active');   
  };
  
  var head_image = function(){
    if($('.slide-image').length > 0) $('.slide-image').addClass('scle');
    if(isMobile.any) {
      var body = $('body'), section = $('section');
      body.addClass('mobile');
      section.removeClass('js-scroll-animate').addClass('js-scroll-done');
    }
  };
  
  slide_btn.click(function(e){
    var id = $(this).attr('id'),
          next_img = $('div[data-id-img="'+id+'"]'),
          current_img = $('.current'),
          next_text = $('div[data-id-text="'+id+'"]'),
          current_text = $('.slide-content > .active');
    
    if(current_img.attr('data-id-img') === id) return false;    
    slide_btn.css({'pointer-events': 'none'});
    activeLinks(this);
    slide_image(next_img, current_img);
    slide_text(next_text, current_text);
    e.preventDefault();
    return false;
  });
  
  $(document).ready(function(){
    head_image();
    $('.bxslider').bxSlider({
      slideWidth: 150,
      maxSlides: 5,
      slideMargin: 110,
      controls: false,
      adaptiveHeight: true
    });
  });  
  
})();