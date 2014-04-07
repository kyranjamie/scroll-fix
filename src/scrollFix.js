window.scrollFix = (function(document) {
  
  var elems = document.querySelectorAll('[scroll-fix]');
  
  /**
   * Check elem is not overflowed
   * http://bit.ly/1qfTf7D
   * @param  {Object} elem
   * @return {Bool}
   */
  var _checkOverflow = function (elem) {
    var currentOverflow = elem.style.overflow;
    if (!currentOverflow || currentOverflow === 'visible') {
      elem.style.overflow = "hidden";      
    }
    var isOverflowed = elem.clientWidth < elem.scrollWidth  || elem.clientHeight < elem.scrollHeight;
    elem.style.overflow = currentOverflow;
    return isOverflowed;
  };

  /**
   * Stops scroll event
   * @param  {Event}
   */
  var stopScroll = function (e) {
    if (_checkOverflow(this)) {
      var delta = e.wheelDelta || -e.detail;
      this.scrollTop -= delta;
      e.preventDefault();      
    }
  };
  
  /**
   * Loop elems and attach event
   */
  var i = elems.length;
  while (i--) {
    elems[i].addEventListener('mousewheel', stopScroll, false);
  }
  
})(document);

