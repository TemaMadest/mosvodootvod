var Prlxs = (function () {
  
  var w = $(window),
      wW = w.width(),
      wH = w.height(),
      rows = $('.js-prlxs'),
      scrollPos = w.scrollTop() + wH,
      
  onScroll = function () {    
    scrollPos = w.scrollTop() + wH;
    
    rows.each(function () {
      var $this = $(this),
          $list = $this.find('.wrap-parall-image'),
          listScrollPos = $list.offset().top;
      
      if (scrollPos >= listScrollPos) {
        var $img = $this.find('.wrap-parall-image img'),
            listHeight = parseInt($list.css('height')),
            offset = (listHeight*0.25) - (scrollPos - listScrollPos)*0.25;        
        $img.css('transform', 'translateY('+offset+'px)');
      }
      
    });
    
  },
  
  setDefaults = function () {
    rows.each(function () {
      var $this = $(this),
          $img = $this.find('.wrap-parall-image img'),
          $list = $this.find('.wrap-parall-image'),
          listHeight = parseInt($list.css('height')),
          listScrollPos = $list.offset().top,
          offset = (listHeight*0.25) - (scrollPos - listScrollPos)*0.25;
      $img.css('transform', 'translateY('+offset+'px)');
    });
  },
  
  init = function () {
    if ((wW >= 768) && (rows.length)) {
      setDefaults();
      w.on('scroll', onScroll);
    }
  };
  
  init();
  
}());