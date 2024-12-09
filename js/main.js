(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Initiate the wowjs
  new WOW().init();
  // new code start
  $(document).ready(function () {
    // Initialize the main carousel
    
    const carousell = $(".header-carousel");

    // Main header carousel initialization
    carousell.owlCarousel({
        loop: true, // Enables continuous loop
        autoplay: true, // Auto-plays the carousel
        autoplayTimeout: 5000, // Time between auto-slide
        items: 1, // Number of items per view
        nav: true, // Enables the left and right arrows
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
        ],
        dots: true, // Enables dots navigation
        video: true, // Support for video slides
        responsive: {
            0: {
                items: 1, // One item for smaller screens
            },
            600: {
                items: 1, // One item for medium screens
            },
            1000: {
                items: 1, // One item for larger screens
            },
        },
    });

  

    // Award carousel initialization
    const awardCarousel = $(".award-carousel");
    awardCarousel.owlCarousel({
        loop: true, // Enables continuous loop
        autoplay: true, // Auto-plays the carousel
        autoplayTimeout: 5000, // Time between auto-slide
        items: 6, // Number of items per view
        nav: true, // Enables the left and right arrows
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
        ],
        dots: true, // Enables dots navigation
        responsive: {
            0: {
                items: 1, // One item for smaller screens
            },
            600: {
                items: 1, // One item for medium screens
            },
            1000: {
                items: 6, // Six items for larger screens
            },
        },
    });

    // Stop autoplay on mouseover for the content container
    $("#main-content").on('mouseover', function () {
        carousell.trigger('stop.owl.autoplay'); // Stop autoplay for header-carousel
    });

    // Resume autoplay on mouseout for the content container
    $("#main-content").on('mouseout', function () {
        carousell.trigger('play.owl.autoplay'); // Resume autoplay for header-carousel
    });
});




  // new code end
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(window).width() > 992) {
      if ($(this).scrollTop() > 45) {
        $(".sticky-top .container")
          .addClass("shadow-sm")
          .css("max-width", "100%");
      } else {
        $(".sticky-top .container")
          .removeClass("shadow-sm")
          .css("max-width", $(".topbar .container").width());
      }
    } else {
      $(".sticky-top .container")
        .addClass("shadow-sm")
        .css("max-width", "100%");
    }
  });



  // Project carousel
  $(".project-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
