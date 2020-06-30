$(function () {
  let isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;

    // Mobile height fix
    $(".height-fix").each(function () {
      var h = $(this).height();
      $(this).height(h);
    });
  }

  // Sticky Nav on Mobile
  if (isMobile) {
    $("nav").addClass("fixed");
  } else {
    $("nav").addClass("desk");
  }

  // NAV POSITION
  let navPos = $("nav").position().top;
  let lastPos = 0;

  $(window).on("scroll", function () {
    let pos = $(window).scrollTop();
    let pos2 = pos + 50;

    if (!isMobile) {
      if (pos >= navPos + $("nav").height() && lastPos < pos) {
        $("nav").addClass("fixed");
      }
      if (pos < navPos && lastPos > pos) {
        $("nav").removeClass("fixed");
      }
      lastPos = pos;
    }

    // Link Highlighting
    if (pos2 > $("#home").offset().top) {
      highlightLink("home");
    }
    if (pos2 > $("#bio").offset().top) {
      highlightLink("bio");
    }
    if (pos2 > $("#portfolio").offset().top) {
      highlightLink("portfolio");
    }
    if (
      pos2 > $("#contact").offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink("contact");
    }
  });

  function highlightLink(anchor) {
    $("nav .active").removeClass("active");
    $("nav")
      .find('[dest="' + anchor + '"]')
      .addClass("active");
  }

  // EVENT HANDLERS
  $(".page-link").click(function () {
    let anchor = $(this).attr("dest");
    $(".link-wrap").removeClass("menu-toggle-flex");

    $("nav span").removeClass("active");
    $("nav")
      .find('[dest="' + anchor + '"]')
      .addClass("active");

    $("html, body").animate(
      {
        scrollTop: $("#" + anchor).offset().top,
      },
      400
    );
  });

  $(".toggle-icon").click(function () {
    $(".link-wrap").toggleClass("menu-toggle-flex");
  });

  $("#link-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      400
    );
  });
});
