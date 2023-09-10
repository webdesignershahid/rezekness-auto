(function ($) {
    "use strict";

    var iAutolizings = {        

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fa fa-arrow-up'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.menu-toggler', '.mobile-sidebar, .header-sidebar-overlay');

            $(".header-sidebar-overlay").on("click", function () {
                $(".mobile-sidebar, .header-sidebar-overlay").removeClass("is-menu-open");
            });
        },

        /* ============================================================ */
        /* Swiper Slider 
        /* ============================================================ */
        swiperCarousel: function () {

            var swiperSlider = $('.swiper');
            if (swiperSlider.length) {

                // Client Logos Slider
                var logos_slider = new Swiper('.logos-slider', {                
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000,
                    },
                    breakpoints: {
                       576: {
                          slidesPerView: 4,
                          spaceBetween: 40,
                        },
                        992: {
                          slidesPerView: 4,
                        },
                    },        
                });

            }          
            
        },

        /* ============================================================ */
        /* General
        /* ============================================================ */
        general: function () {
            $('select').niceSelect();

        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
                var $this = $(this);

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
                    $this.css("background-size", $this.attr("data-bg-size"));
                    $this.css("background-repeat", $this.attr("data-bg-repeat"));
                    $this.css("background-position", $this.attr("data-bg-position"));
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
                }
                // Background Color    
                if( $("[data-bg-color]") ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                // Background Color   
                if( $("[data-color]") ){
                    $this.css("color", $this.attr("data-color") );
                }
            });
        },


        
        initialize: function() {
			iAutolizings.mobile_menu();
			iAutolizings.swiperCarousel();
			iAutolizings.general();
			iAutolizings.background_image();
			iAutolizings.scroll_to_top();
		}
    };
    
    $(function() {
		iAutolizings.initialize();
	});
    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".pre_loader").fadeOut();     
    });
})(jQuery);