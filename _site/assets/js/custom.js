$('a.js-scroll-trigger[href^="#"]:not([href="#"])').on('click', function(event) {
    var target = this.hash;
    var element = $(this.hash)

    event.preventDefault();

    if (element.data("transitioning")) {
        return
    }
  
    var navOffset = document.getElementById('mainNav').offsetHeight;
    if (Math.max(0, element.offset().top - navOffset) != document.documentElement.scrollTop) {
        element.data("transitioning", true)
    return $('html, body').animate({
      scrollTop: $(this.hash).offset().top - navOffset
    }, 1e3,"easeInOutExpo", function(completion) {
        element.data("transitioning", false)
        /*return window.history.pushState(null, null, target);*/
      });
}
  });

!function(e) {
    "use strict";
    /*e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        e.preventDefault;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = e(this.hash);
            if ((a = a.length ? a : e("[name=" + this.hash.slice(1) + "]")).length)
            if (Math.max(0, a.offset().top - 72) != document.documentElement.scrollTop) {
                return e("html, body").animate({
                    scrollTop: a.offset().top - 72
                }, 1e3, "easeInOutExpo"),
                !1
            }
        }
    }),*/
    e(".js-scroll-trigger").click(function() {
        e(".navbar-collapse").collapse("hide")
    }),
    e("body").scrollspy({
        target: "#mainNav",
        offset: 75
    });
    var a = function() {
        0 < e("#mainNav").offset().top ? e("#mainNav").addClass("navbar-scrolled") : e("#mainNav").removeClass("navbar-scrolled")
    };
    a(),
    e(window).scroll(a),
    e(window)
}(jQuery);