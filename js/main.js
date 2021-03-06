/*------------------------------------
 *Author:FortunaTheme
 *Template:Avita
 *Version:1.0
 *-------------------------------------
 */
(function($) {

    "use strict";

    jQuery(document).on("ready", function() {



        /*
         * -----------------------------------------------------------------
         *---------------------------Preloader and Anchor Tag---------------
         * -----------------------------------------------------------------
         */

        var themeWindow = $(window);
        var pagebody = $('html, body');
        themeWindow.on("load", function() {

            var preloader = jQuery('.preloader');
            var preloaderArea = jQuery('.preloader-area');
            preloader.fadeOut();
            preloaderArea.delay(200).fadeOut('slow');
            themeWindow.scrollTop(0);
        });

        var anchor = $('a[href="#"]');
        anchor.on("click", function() {
            e.preventDefault();
        });


        /*
         * -----------------------------------------------------------------
         *-------------------single-page-nav-plugin------------------------
         * -----------------------------------------------------------------
         */



        // Prevent console.log from generating errors in IE for the purposes of the demo
        if (!window.console) console = {
            log: function() {}
        };

        // The actual plugin
        if ($(".welcome-area").is("#welcome-area")) {
            var singleNav = jQuery('.single-page-nav');
            singleNav.singlePageNav({
                offset: singleNav.outerHeight(),
                filter: ':not(.external)',
                updateHash: false
            });

            /*
             * -----------------------------------------------------------------
             *-------------------------Skill------------------------------------
             * -----------------------------------------------------------------
             */

            var skill = $('.skills');

            var width1 = $(".prog1").data("progress");
            var progBar1 = $(".prog1");
            skill.waypoint(function() {
                progBar1.css({
                    "width": width1,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width1
            });


            var width2 = $(".prog2").data("progress");
            var progBar2 = $(".prog2");
            skill.waypoint(function() {
                progBar2.css({
                    "width": width2,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width2
            });


            var width3 = $(".prog3").data("progress");
            var progBar3 = $(".prog3");
            skill.waypoint(function() {
                progBar3.css({
                    "width": width3,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width3
            });

            var width4 = $(".prog4").data("progress");
            var progBar4 = $(".prog4");
            skill.waypoint(function() {
                progBar4.css({
                    "width": width4,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width4
            });

            var width5 = $(".prog5").data("progress");
            var progBar5 = $(".prog5");
            skill.waypoint(function() {
                progBar5.css({
                    "width": width5,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width5
            });

            var width6 = $(".prog6").data("progress");
            var progBar6 = $(".prog6");
            skill.waypoint(function() {
                progBar6.css({
                    "width": width6,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width6
            });

            var width7 = $(".prog7").data("progress");
            var progBar7 = $(".prog7");
            skill.waypoint(function() {
                progBar7.css({
                    "width": width7,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width7
            });

            var width8 = $(".prog8").data("progress");
            var progBar8 = $(".prog8");
            skill.waypoint(function() {
                progBar8.css({
                    "width": width8,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width8
            });

            var width9 = $(".prog9").data("progress");
            var progBar9 = $(".prog9");
            skill.waypoint(function() {
                progBar9.css({
                    "width": width9,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width9
            });

            var width10 = $(".prog10").data("progress");
            var progBar10 = $(".prog10");
            skill.waypoint(function() {
                progBar10.css({
                    "width": width10,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width10
            });

            var width11 = $(".prog11").data("progress");
            var progBar11 = $(".prog11");
            skill.waypoint(function() {
                progBar11.css({
                    "width": width11,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width11
            });

            var width12 = $(".prog12").data("progress");
            var progBar12 = $(".prog12");
            skill.waypoint(function() {
                progBar12.css({
                    "width": width12,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width12
            });

            var width13 = $(".prog13").data("progress");
            var progBar13 = $(".prog13");
            skill.waypoint(function() {
                progBar13.css({
                    "width": width13,
                    "transition": "2s ease-in"
                });
            }, {

                offset: width13
            });


            /*
             * -----------------------------------------------------------------
             *-------------------------button animation-------------------------
             * -----------------------------------------------------------------
             */



            var serviceBtn = $(".service-btn");

            serviceBtn.on("click", function() {
                $('html, body').animate({
                    scrollTop: ($("#portfolio").offset().top) - 60
                }, 2000);
            });
            var hireBtn = $(".hire-btn");

            hireBtn.on("click", function() {
                $('html, body').animate({
                    scrollTop: ($("#contact").offset().top) - 60
                }, 2000);
            });


            /*
             * -----------------------------------------------------------------
             *------------------------Personal Details--------------------------
             * -----------------------------------------------------------------
             */

            var personal = $('#personal-detail .nav .nav-item');

            personal.on("click", function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $(this).tab('show');
            });

            /*
             * -----------------------------------------------------------------
             *--------------------Animation using animate.css-------------------
             * -----------------------------------------------------------------
             */



            var animation1 = $('.animation');

            animation1.waypoint(function() {
                var thisElement = $(this.element);
                var animation = thisElement.attr('data-animation');

                thisElement.css('opacity', '1');
                thisElement.addClass("animated " + animation).delay(2000);
            }, {
                offset: '75%',
            });


            /*
             * -----------------------------------------------------------------
             *------------------------------slicknav----------------------------
             * -----------------------------------------------------------------
             */


            var menu = $("#menu");

            menu.slicknav({
                label: '',
            });

            /*
             * -----------------------------------------------------------------
             *-------------------------------Mixit Up---------------------------
             * -----------------------------------------------------------------
             */



            var portfolioContent = $('.portfolio-content');

            portfolioContent.mixItUp();



            /*
             * -----------------------------------------------------------------
             *-----------------------------lightbox-----------------------------
             * -----------------------------------------------------------------
             */



            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                showImageNumberLabel: false,
            });


            /*
             * -----------------------------------------------------------------
             *-----------------------------Ajax Chimp---------------------------
             * -----------------------------------------------------------------
             */


            var chimpForm = $('#mc-form');

            chimpForm.ajaxChimp({
                url: 'https://tahsinscreation.us17.list-manage.com/subscribe/post?u=8d43c37bb4dbc0d0b8078d874&amp;id=c638bf1e04'
            });




            /*
             * -----------------------------------------------------------------
             *----------------------Contact form ajax---------------------------
             * -----------------------------------------------------------------
             */



            var contactSubmit = $('#contact-submit');

            contactSubmit.on('click', function(e) {
                e.preventDefault();
                var name = $('#form-name').val();
                var email = $('#form-email').val();
                var subject = $('#form-subject').val();
                var message = $('#form-message').val();
                var form = new Array({
                    'name': name,
                    'email': email,
                    'subject': subject,
                    'message': message
                });
                $.ajax({
                    type: 'POST',
                    url: "contact.php",
                    data: ({
                        'action': 'contact',
                        'form': form
                    })
                }).done(function(data) {

                    var conResult = $('#contact .result');
                    conResult.html(data);
                    $(".contact-form-area")[0].reset();

                });

            });


            /*
             * -----------------------------------------------------------------
             *--------------------Owl Carousel For Testimonial------------------
             * -----------------------------------------------------------------
             */



            var testimonial = $("#client-testimonial #owl-demo-testimonial");

            testimonial.owlCarousel({
                autoplay: true,
                autoplayTimeout: 5000,
                items: 2,
                autoPlay: 6000,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    600: {
                        items: 1
                    },
                    // breakpoint from 768 up
                    900: {
                        items: 1
                    },
                    1000: {
                        items: 3
                    }
                },
                pauseOnHover: true,
                nav: true,
                dots: false,
                navText: ["<i class='icon-277'></i>", "<i class='icon-276'></i>"]
            });

            /*
             * -----------------------------------------------------------------
             *-------------------------------CounterUp---------------------------
             * -----------------------------------------------------------------
             */

            var count = $('.counter');
            count.counterUp({
                delay: 20,
                time: 40,
            });

            /*
             * -----------------------------------------------------------------
             *-------------------------------Service Item-----------------------
             * -----------------------------------------------------------------
             */


            var serviceItem = $("#service #owl-demo-service");

            serviceItem.owlCarousel({
                autoplay: true,
                autoplayTimeout: 5000,
                items: 3,
                autoPlay: 6000,
                responsive: {
                    0: {
                        items: 1
                    },
                    // breakpoint from 480 up
                    500: {
                        items: 2
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1000: {
                        items: 2
                    }
                },
                pauseOnHover: true,
                nav: true,
                dots: false,
                navText: ["<i class='icon-277'></i>", "<i class='icon-276'></i>"]
            });




            /*
             * -----------------------------------------------------------------
             *-----------------------------Typed Js-----------------------------
             * -----------------------------------------------------------------
             */

            if ($(".welcome-area").is(".animated-text")) {
                var typed = new Typed("#typed", {
                    stringsElement: '#typed-strings',
                    typeSpeed: 60,
                    backSpeed: 30,
                    backDelay: 2000,
                    startDelay: 1000,
                    loop: true

                });
            }

        }
        /*
         * -----------------------------------------------------------------
         *-----------------------Scroll Top Events--------------------------
         * -----------------------------------------------------------------
         */



        var scrollTopBtn = $("#scroll-top-area");

        scrollTopBtn.on("click", function() {
            pagebody.animate({
                scrollTop: 0
            }, 2000);
        });

        themeWindow.on("scroll", function() {
            var top = themeWindow.scrollTop();
            var header = $("header");
            var headerText = $("header nav ul li a");
            var logo = $(".logo img");
            var scrollTopArea = $("#scroll-top-area");
            var darkLogo = logo.data("dark");
            if (top < 150) {
                scrollTopArea.css('display', 'none');
                logo.attr("src", "images/logoWhite.png");
                headerText.css('color', '#fff');
                header.css({
                    'background': 'transparent',
                    'box-shadow': 'none',
                    'height': '100px',
                    'line-height': '100px'
                });
            } else if (top >= 150) {
                scrollTopArea.css('display', 'block');
                logo.attr("src", darkLogo);
                headerText.css('color', '#f34f68');
                header.css({
                    'background': '#fff',
                    'box-shadow': '0px 1px 6px #484848',
                    'height': '80px',
                    'line-height': '80px'
                });
            }

        });

    });

})(jQuery);