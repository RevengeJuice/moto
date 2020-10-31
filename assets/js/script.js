$( document ).ready(function() {
	var time = 0;
    var mobclos = false;
	$('.moblie_nav_button').on('click' , function () {
        if ( mobclos == false ) {
            mobclos = true;
            $('.navbar-main').css({height:'auto', transition:'0.5s','opacity':'1'});
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay':'0.'+time+'s'});
                $(this).addClass('anim-menu')
            })
        } else if ( mobclos == true ) {
            mobclos = false;
            $('.navbar-main').css({height:'0px',transition:'0.5s','opacity':'1'});
            time=0;
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity':'0',transition:'0.2s'})
                }
            })
        }
	});

    $('.mob-nav-title').on('click' , function () {
        if ( mobclos == false ) {
            mobclos = true;
            $('.navbar-main').css({height:'auto', transition:'0.5s','opacity':'1'});
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay':'0.'+time+'s'});
                $(this).addClass('anim-menu')
            })
        } else if ( mobclos == true ) {
            mobclos = false;
            $('.navbar-main').css({height:'0px',transition:'0.5s','opacity':'1'});
            time=0;
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity':'0',transition:'0.2s'})
                }
            })
        }
    });

    $('.catalog-product-this-open').on('click' , function () {
        if ( mobclos == false ) {
            mobclos = true;
            $('.navbar-main').css({height:'auto', transition:'0.5s','opacity':'1'});
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay':'0.'+time+'s'});
                $(this).addClass('anim-menu')
            })
        } else if ( mobclos == true ) {
            mobclos = false;
            $('.navbar-main').css({height:'0px',transition:'0.5s','opacity':'1'});
            time=0;
            var menu_li = $(".navbar-main nav ul li");
            $(menu_li).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity':'0',transition:'0.2s'})
                }
            })
        }
        $('.navbar-content-block-position').css({
            'overflow' : 'auto',
            'width' : '100%',
            'transition' : '0.5s',
            'opacity' : '1',
        });
        $('.left-nav-list-main').css({
            'opacity' : '1',
            'visibility' : 'visible',
        })
        $('body').css('overflow' , 'hidden');
    });

    $('.mob-nav-title_product_catalog').on('click' , function () {
        $('.navbar-content-block-position').css({
            'overflow' : 'auto',
            'width' : '100%',
            'transition' : '0.5s',
            'opacity' : '1',
        });
        $('.left-nav-list-main').css({
            'opacity' : '1',
            'visibility' : 'visible',
        })
        $('body').css('overflow' , 'hidden');
    });

    $('.close-mobile-cataloc').on('click' , function () {
        $('.navbar-content-block-position').css({
            'overflow' : 'hidden',
            'width' : '0%',
            'transition' : '0.5s',
            'opacity' : '0',
        });
        $('.left-nav-list-main').css({
            'opacity' : '0',
            'visibility' : 'hidden',
        })
        $('body').css('overflow' , 'auto');
    });

	$('.navbar-main').on('click' , function (e) {
        e.stopPropagation();
    });

    $('.moblie_nav_button').on('click' , function (e) {
        e.stopPropagation();
    });

    $('.bestsellers-slider').slick({
        infinite: true,
        speed: 300,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });

    $('.main-content-top-slider').slick({
        infinite: true,
        speed: 300,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        vertical: true,
        verticalSwiping: true,
        responsive: [
		{
		  breakpoint: 1080,
		  settings: {
		    slidesToShow: 1,
		    infinite: true,
		    rows: 1,
		    dots: true
		  }
		},
		]
    });

    $('.our-advantages-list-content').slick({
    	responsive: [
	    	{
	            breakpoint: 9999,
	            settings: "unslick"
	        },
	        {
				breakpoint: 768,
				settings: {
				    slidesToShow: 1,
				    slidesToScroll: 1,
				    infinite: true,
				}
	        }
	     ]
    });
    $('.main-popular-goods-content-main').slick({
    	responsive: [
	    	{
	            breakpoint: 9999,
	            settings: "unslick"
	        },
	        {
				breakpoint: 768,
				settings: {
				    slidesToShow: 1,
				    slidesToScroll: 1,
				    infinite: true,
				}
	        }
	     ]
    });

    $('.pop-ap-content-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
         ]
    });

    $('.close-popap').on('click' , function () {
        var close = $(this).parents().map( function() {
            return this.id;
        })[2];
        $('#'+close).css('display','none');
    });

    $('body').on('click' , '.close-popap' , function () {
        $('#feedback').css('display','none');
    });

    $(".phone-mask").mask("+7 (9999) 999-99-99");

    $('.mobile-top-scrol-button button').on('click' , function () {
        $("html, body").animate({
          scrollTop: 0
        }, 500);
        return false;
    });

    $('.header-block-call-me').on('click' , function () {
        $('#feedback').css('display' , 'block');
    });

    $('.button-login-and-registration').on('click' , function (){
        if ( $(this).attr('data-value') == 'login' ) {
            $('#zxod').css('display' , 'block');
        } else if ( $(this).attr('data-value') == 'reg' ) {
            $('#reg').css('display' , 'block');
        }
    })

    $('.what-can-be-improved-on-this-page-text').on('click' , function () {
        $('#uluchshit').css('display' , 'block');
    });

    $('.lico-and-comanay').on('click' , function () {
        if ( $('.lico-and-comanay:checked').attr('data-value') == 'lico' ) {
            $('#company').css('display' , 'none');
            $('#li').css('display' , 'flex');
        } else if ( $('.lico-and-comanay:checked').attr('data-value') == 'copmaya' ) {
            $('#li').css('display' , 'none');
            $('#company').css('display' , 'flex');
        }
    })
})