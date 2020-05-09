$(function() {

  // NAV POSITION
  var navPos = $('nav').position().top;
  var lastPos = 0;

  $(window).on('scroll', function() {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (pos >= navPos + $('nav').height() && lastPos < pos) {
      $('nav').addClass('fixed');
    }
    if (pos < navPos && lastPos > pos) {
      $('nav').removeClass('fixed');
    }
    lastPos = pos;

    // Link Highlighting
    if (pos2 > $('#home').offset().top) {
      highlightLink('home');
    }
    if (pos2 > $('#bio').offset().top) {
      highlightLink('bio');
    }
    if (pos2 > $('#portfolio').offset().top) {
      highlightLink('portfolio');
    }
    if (
      pos2 > $('#contact').offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink('contact');
    }
  });

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');
  }

  // EVENT HANDLERS
  $('.page-link').click(function() {
    var anchor = $(this).attr('dest');
    $('.link-wrap').removeClass('visible');

    $('nav span').removeClass('active');
    $('nav')
      .find('[dest="' + anchor + '"]')
      .addClass('active');

    $('html, body').animate(
      {
        scrollTop: $('#' + anchor).offset().top
      },
      400
    );
  });

  $('#link-top').click(function() {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
      },
      400
    );
  });
});
