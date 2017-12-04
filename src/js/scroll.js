var Scroll = (function () {
  
  var w = $(window),
      wH = w.height(),
      wScrollPos = w.scrollTop(),
      //viewPos = wScrollPos + (wH*0.75),
      viewPos = wScrollPos + (wH),
      hScrollPos = $('header')[0].offsetHeight,
      $els = $('.js-scroll-animate'),
      $top_btn = $('.back_to_top'),
      mobile = isMobile.any,
  
  updateValues = function () {
    wH = w.height();
    wScrollPos = w.scrollTop();
    //viewPos = wScrollPos + (wH*0.75);
    viewPos = wScrollPos + (wH);
  },
  
  back_to_top = function(){
    $('html, body').animate({
        scrollTop: 0
    }, 800);
  },
  
  showHide =function(){
    if(this.scrollY >= 768){
      if(!$top_btn.hasClass('show')){
        $top_btn.css({display: 'block'});
        setTimeout(function(){
          $top_btn.addClass('show');
        },10);        
      }
    }else{
      if($top_btn.hasClass('show')){
        $top_btn.removeClass('show');
        setTimeout(function(){
          $top_btn.css({display: 'none'});
        },500);
      }
    }
  },
  
  scroll = function () {
    if(!mobile) showHide();    
    updateValues();    
    $els.each(function () {
      var t = $(this),
          offset = t.offset().top;
      if (((viewPos >= offset) && (offset >= wScrollPos)) || (viewPos > offset) && (offset <= wScrollPos)) {
        t.removeClass('js-scroll-animate').addClass('js-scroll-done');
        $els = $('.js-scroll-animate');
      }
    });    
    if(wScrollPos >= hScrollPos) {
      if(!$('nav.main').hasClass('scroll')) $('nav.main').addClass('scroll');
    }else{
      if($('nav.main').hasClass('scroll')) $('nav.main').removeClass('scroll');
    }
  },
  
  init = function () {
    if(!mobile) $top_btn.on('click', back_to_top);    
    w.on('scroll', $.throttle(100, scroll));
  };

  init();
  
  
}());