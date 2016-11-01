

//from https://css-tricks.com/snippets/jquery/smooth-scrolling/

//also see https://www.youtube.com/watch?v=b0tnynJtm18
//      https://www.youtube.com/watch?v=MilW6gVPYJM


$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});