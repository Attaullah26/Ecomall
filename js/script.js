
$(document).ready(function () {

    // Language List Dropdown

    $('.language').mouseenter(function () {
        $('.lang-list').slideDown();
    });

    $('.language').mouseleave(function () {
        $('.lang-list').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.language').length) {
            $('.lang-list').slideUp();
        }
    });


    // Currency List Dropdowon


    $('.currency').mouseenter(function () {
        $('.currency-list').slideDown();
    });

    $('.currency').mouseleave(function () {
        $('.currency-list').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.currency').length) {
            $('.currency-list').slideUp();
        }
    });


    // Popup Login 


    $('.account').mouseenter(function () {
        $('.popup-login').slideDown();
    });

    $('.account').mouseleave(function () {
        $('.popup-login').fadeOut();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.account').length) {
            $('.popup-login').slideUp();
        }
    });


    // Popup card 

    $('.cart').mouseenter(function () {
        $('.cart-popup').slideDown().css("display", "flex");
    });

    $('.cart').mouseleave(function () {
        $('.cart-popup').fadeOut().css("display", "none");
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.cart').length) {
            $('.cart-popup').slideUp();
        }
    });



    // Shop categories dropdown

    $('.shop-categories').mouseenter(function () {
        $('.cat-dropdown').slideDown();
    });

    $('.shop-categories').mouseleave(function () {
        $('.cat-dropdown').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.shop-categories').length) {
            $('.cat-dropdown').slideUp();
        }
    });



    // // smartphone dropdown 
    $('.smartphone').mouseenter(function () {
        $('.smartphone-dropdown').slideDown();
    });

    $('.smartphone').mouseleave(function () {
        $('.smartphone-dropdown').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.smartphone').length) {
            $('.smartphone-dropdown').slideUp();
        }
    });


    // laptops dropdown
    $('.laptop').mouseenter(function () {
        $('.laptop-dropdown').slideDown();
    });

    $('.laptop').mouseleave(function () {
        $('.laptop-dropdown').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.laptop').length) {
            $('.laptop-dropdown').slideUp();
        }
    });


    // Home dropdown
    $('.home').mouseenter(function () {
        $('.home-dropdown').slideDown();
    });

    $('.home').mouseleave(function () {
        $('.home-dropdown').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.home').length) {
            $('.home-dropdown').slideUp();
        }
    });


    // LAPTOP DROPDOWN TWO

    $('.laptop-two').mouseenter(function () {
        $('.laptop-dropdown-wrap').fadeIn();
    });

    $('.laptop-two').mouseleave(function () {
        $('.laptop-dropdown-wrap').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.laptop-two').length) {
            $('.laptop-dropdown-wrap').slideUp();
        }
    });


    // SMARTPHONE DROPDOWN TWO
    $('.smartphone-two').mouseenter(function () {
        $('.smartphone-dropdown-wrap').fadeIn();
    });

    $('.smartphone-two').mouseleave(function () {
        $('.smartphone-dropdown-wrap').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.smartphone-two').length) {
            $('.smartphone-dropdown-wrap').slideUp();
        }
    });


    // HEADPHONES DROPDOWN
    $('.headphone-main').mouseenter(function () {
        $('.headphone-dropdown').fadeIn();
    });

    $('.headphone-main').mouseleave(function () {
        $('.headphone-dropdown').hide();
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.headphone-main').length) {
            $('.headphoe-dropdown').slideUp();
        }
    });



    // Deal countdown timer
    var countDownDate = new Date('Apr 1,2024 00:00:00').getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();

        var distance = countDownDate - now;

        if (distance < 0) {
            countDownDate += 2 * 24 * 60 * 60 * 1000;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.day-ref').text(days);
        $('.hour-ref').text(hours);
        $('.min-ref').text(minutes);
        $('.sec-ref').text(seconds);

        if (distance < 0) {
            updateCountdown();

        }

    }, 1000);




    // Prodcut Hover Selections

    // product 1
    $('.products-main-container .products-wrap .product').hover(function () {
        $('.products-main-container .products-wrap .product .image .heart, .products-main-container .products-wrap .product .image .search, .products-main-container .products-wrap .product .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product').mouseleave(function () {
        $('.products-main-container .products-wrap .product .image .heart, .products-main-container .products-wrap .product .image .search, .products-main-container .products-wrap .product .image .compare').fadeOut();
    })

    // product 2
    $('.products-main-container .products-wrap .product-2').hover(function () {
        $('.products-main-container .products-wrap .product-2 .image .heart, .products-main-container .products-wrap .product-2 .image .search, .products-main-container .products-wrap .product-2 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-2').mouseleave(function () {
        $('.products-main-container .products-wrap .product-2 .image .heart, .products-main-container .products-wrap .product-2 .image .search, .products-main-container .products-wrap .product-2 .image .compare').fadeOut();
    })

    // product 3
    $('.products-main-container .products-wrap .product-3').hover(function () {
        $('.products-main-container .products-wrap .product-3 .image .heart, .products-main-container .products-wrap .product-3 .image .search, .products-main-container .products-wrap .product-3 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-3').mouseleave(function () {
        $('.products-main-container .products-wrap .product-3 .image .heart, .products-main-container .products-wrap .product-3 .image .search, .products-main-container .products-wrap .product-3 .image .compare').fadeOut();
    })

    // product 4
    $('.products-main-container .products-wrap .product-4').hover(function () {
        $('.products-main-container .products-wrap .product-4 .image .heart, .products-main-container .products-wrap .product-4 .image .search, .products-main-container .products-wrap .product-4 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-4').mouseleave(function () {
        $('.products-main-container .products-wrap .product-4 .image .heart, .products-main-container .products-wrap .product-4 .image .search, .products-main-container .products-wrap .product-4 .image .compare').fadeOut();
    })

    // product 5
    $('.products-main-container .products-wrap .product-5').hover(function () {
        $('.products-main-container .products-wrap .product-5 .image .heart, .products-main-container .products-wrap .product-5 .image .search, .products-main-container .products-wrap .product-5 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-5').mouseleave(function () {
        $('.products-main-container .products-wrap .product-5 .image .heart, .products-main-container .products-wrap .product-5 .image .search, .products-main-container .products-wrap .product-5 .image .compare').fadeOut();
    })

    // product 6
    $('.products-main-container .products-wrap .product-6').hover(function () {
        $('.products-main-container .products-wrap .product-6 .image .heart, .products-main-container .products-wrap .product-6 .image .search, .products-main-container .products-wrap .product-6 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-6').mouseleave(function () {
        $('.products-main-container .products-wrap .product-6 .image .heart, .products-main-container .products-wrap .product-6 .image .search, .products-main-container .products-wrap .product-6 .image .compare').fadeOut();
    })

    // product 7
    $('.products-main-container .products-wrap .product-7').hover(function () {
        $('.products-main-container .products-wrap .product-7 .image .heart, .products-main-container .products-wrap .product-7 .image .search, .products-main-container .products-wrap .product-7 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-7').mouseleave(function () {
        $('.products-main-container .products-wrap .product-7 .image .heart, .products-main-container .products-wrap .product-7 .image .search, .products-main-container .products-wrap .product-7 .image .compare').fadeOut();
    })

    // product 8
    $('.products-main-container .products-wrap .product-8').hover(function () {
        $('.products-main-container .products-wrap .product-8 .image .heart, .products-main-container .products-wrap .product-8 .image .search, .products-main-container .products-wrap .product-8 .image .compare').fadeIn();
    })

    $('.products-main-container .products-wrap .product-8').mouseleave(function () {
        $('.products-main-container .products-wrap .product-8 .image .heart, .products-main-container .products-wrap .product-8 .image .search, .products-main-container .products-wrap .product-8 .image .compare').fadeOut();
    })



    // Product Descripton Hover Show 

    // product 1
    $('.products-main-container .products-wrap .product').hover(function () {
        $('.products-main-container .products-wrap .product .product-desc').show();
    })

    $('.products-main-container .products-wrap .product').mouseleave(function () {
        $('.products-main-container .products-wrap .product .product-desc').hide();
    })

    // product 2
    $('.products-main-container .products-wrap .product-2').hover(function () {
        $('.products-main-container .products-wrap .product-2 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-2').mouseleave(function () {
        $('.products-main-container .products-wrap .product-2 .product-desc').hide();
    })

    // product 3
    $('.products-main-container .products-wrap .product-3').hover(function () {
        $('.products-main-container .products-wrap .product-3 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-3').mouseleave(function () {
        $('.products-main-container .products-wrap .product-3 .product-desc').hide();
    })

    // product 4
    $('.products-main-container .products-wrap .product-4').hover(function () {
        $('.products-main-container .products-wrap .product-4 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-4').mouseleave(function () {
        $('.products-main-container .products-wrap .product-4 .product-desc').hide();
    })

    // product 5
    $('.products-main-container .products-wrap .product-5').hover(function () {
        $('.products-main-container .products-wrap .product-5 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-5').mouseleave(function () {
        $('.products-main-container .products-wrap .product-5 .product-desc').hide();
    })

    // product 6
    $('.products-main-container .products-wrap .product-6').hover(function () {
        $('.products-main-container .products-wrap .product-6 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-6').mouseleave(function () {
        $('.products-main-container .products-wrap .product-6 .product-desc').hide();
    })

    // product 7
    $('.products-main-container .products-wrap .product-7').hover(function () {
        $('.products-main-container .products-wrap .product-7 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-7').mouseleave(function () {
        $('.products-main-container .products-wrap .product-7 .product-desc').hide();
    })

    // product 8
    $('.products-main-container .products-wrap .product-8').hover(function () {
        $('.products-main-container .products-wrap .product-8 .product-desc').show();
    })

    $('.products-main-container .products-wrap .product-8').mouseleave(function () {
        $('.products-main-container .products-wrap .product-8 .product-desc').hide();
    })


    // Product hover inside slelction


    // product heart
    // product 1
    $('.products-main-container .products-wrap .product .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product .image .whitelist').hide();
    })

    // product 2
    $('.products-main-container .products-wrap .product-2 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-2 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-2 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-2 .image .whitelist').hide();
    })

    // product 3
    $('.products-main-container .products-wrap .product-3 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-3 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-3 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-3 .image .whitelist').hide();
    })

    // product 4
    $('.products-main-container .products-wrap .product-4 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-4 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-4 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-4 .image .whitelist').hide();
    })

    // product 5
    $('.products-main-container .products-wrap .product-5 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-5 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-5 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-5 .image .whitelist').hide();
    })

    // product 6
    $('.products-main-container .products-wrap .product-6 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-6 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-6 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-6 .image .whitelist').hide();
    })

    // product 7
    $('.products-main-container .products-wrap .product-7 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-7 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-7 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-7 .image .whitelist').hide();
    })

    // product 8
    $('.products-main-container .products-wrap .product-8 .image .heart').hover(function () {
        $('.products-main-container .products-wrap .product-8 .image .whitelist').show();
    })

    $('.products-main-container .products-wrap .product-8 .image .heart').mouseleave(function () {
        $('.products-main-container .products-wrap .product-8 .image .whitelist').hide();
    })




    // Product Search

    // product 1
    $('.products-main-container .products-wrap .product .image .search').hover(function () {
        $('.products-main-container .products-wrap .product .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product .image .quick-view').hide();
    })

    // product 2
    $('.products-main-container .products-wrap .product-2 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-2 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-2 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-2 .image .quick-view').hide();
    })

    // product 3
    $('.products-main-container .products-wrap .product-3 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-3 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-3 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-3 .image .quick-view').hide();
    })

    // product 4
    $('.products-main-container .products-wrap .product-4 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-4 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-4 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-4 .image .quick-view').hide();
    })

    // product 5
    $('.products-main-container .products-wrap .product-5 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-5 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-5 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-5 .image .quick-view').hide();
    })

    // product 6
    $('.products-main-container .products-wrap .product-6 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-6 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-6 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-6 .image .quick-view').hide();
    })

    // product 7
    $('.products-main-container .products-wrap .product-7 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-7 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-7 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-7 .image .quick-view').hide();
    })

    // product 8
    $('.products-main-container .products-wrap .product-8 .image .search').hover(function () {
        $('.products-main-container .products-wrap .product-8 .image .quick-view').show();
    })

    $('.products-main-container .products-wrap .product-8 .image .search').mouseleave(function () {
        $('.products-main-container .products-wrap .product-8 .image .quick-view').hide();
    })

    // Product Compare   

    // product 1
    $('.products-main-container .products-wrap .product .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product .image .com').show();
    })

    $('.products-main-container .products-wrap .product .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product .image .com').hide();
    })

    // product 2
    $('.products-main-container .products-wrap .product-2 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-2 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-2 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-2 .image .com').hide();
    })

    // product 3
    $('.products-main-container .products-wrap .product-3 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-3 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-3 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-3 .image .com').hide();
    })

    // product 4
    $('.products-main-container .products-wrap .product-4 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-4 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-4 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-4 .image .com').hide();
    })

    // product 5
    $('.products-main-container .products-wrap .product-5 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-5 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-5 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-5 .image .com').hide();
    })

    // product 6
    $('.products-main-container .products-wrap .product-6 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-6 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-6 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-6 .image .com').hide();
    })

    // product 7
    $('.products-main-container .products-wrap .product-7 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-7 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-7 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-7 .image .com').hide();
    })

    // product 8
    $('.products-main-container .products-wrap .product-8 .image .compare').hover(function () {
        $('.products-main-container .products-wrap .product-8 .image .com').show();
    })

    $('.products-main-container .products-wrap .product-8 .image .compare').mouseleave(function () {
        $('.products-main-container .products-wrap .product-8 .image .com').hide();
    })









    // ''''''''''''''''''Trending Products Section''''''''''''''''''''''''


    // Product Hover 
    // product 1
    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1').hover(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .heart, .trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .search, .trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .compare').fadeIn();
    })

    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .heart, .trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .search, .trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .compare').fadeOut();
    })

    // product 2
    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2').hover(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .heart, .trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .search, .trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .compare').fadeIn();
    })

    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .heart, .trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .search, .trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .compare').fadeOut();
    })

    // product 3
    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3').hover(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .heart, .trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .search, .trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .compare').fadeIn();
    })

    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .heart, .trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .search, .trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .compare').fadeOut();
    })

    // product 4
    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4').hover(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .heart, .trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .search, .trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .compare').fadeIn();
    })

    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .heart, .trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .search, .trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .compare').fadeOut();
    })





    // Product Button Hover Show 

    // product 1
    $('.trending-products-slider-main .trending-product-1').hover(function () {
        $('.trending-products-slider-main .trending-product-1 .shop-now-btn ').show();
    })

    $('.trending-products-slider-main .trending-product-1').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-1 .shop-now-btn').hide();
    })


    // product 2
    $('.trending-products-slider-main .trending-product-2').hover(function () {
        $('.trending-products-slider-main .trending-product-2 .shop-now-btn ').show();
    })

    $('.trending-products-slider-main .trending-product-2').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-2 .shop-now-btn').hide();
    })

    // product 3
    $('.trending-products-slider-main .trending-product-3').hover(function () {
        $('.trending-products-slider-main .trending-product-3 .shop-now-btn ').show();
    })

    $('.trending-products-slider-main .trending-product-3').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-3 .shop-now-btn').hide();
    })

    // product 4
    $('.trending-products-slider-main .trending-product-4').hover(function () {
        $('.trending-products-slider-main .trending-product-4 .shop-now-btn ').show();
    })

    $('.trending-products-slider-main .trending-product-4').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-4 .shop-now-btn').hide();
    })


    // Product hover inside slelction


    // product heart
    // product 1
    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .heart').hover(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .whitelist').show();
    })

    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .heart').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .whitelist').hide();
    })


    // product 2
    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .heart').hover(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .whitelist').show();
    })

    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .heart').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .whitelist').hide();
    })

    // product 3
    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .heart').hover(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .whitelist').show();
    })

    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .heart').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .whitelist').hide();
    })

    // product 4
    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .heart').hover(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .whitelist').show();
    })

    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .heart').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .whitelist').hide();
    })




    // product search
    // product 1
    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .search').hover(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .quick-view').show();
    })

    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .search').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .quick-view').hide();
    })

    // product 2
    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .search').hover(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .quick-view').show();
    })

    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .search').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .quick-view').hide();
    })

    // product 3
    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .search').hover(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .quick-view').show();
    })

    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .search').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .quick-view').hide();
    })

    // product 4
    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .search').hover(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .quick-view').show();
    })

    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .search').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .quick-view').hide();
    })



    // product Compare
    // product 1
    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .compare').hover(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .com').show();
    })

    $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .compare').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-1 .trending-product-inside-1 .image .com').hide();
    })

    // product 2
    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .compare').hover(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .com').show();
    })

    $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .compare').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-2 .trending-product-inside-2 .image .com').hide();
    })

    // product 3
    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .compare').hover(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .com').show();
    })

    $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .compare').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-3 .trending-product-inside-3 .image .com').hide();
    })

    // product 4
    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .compare').hover(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .com').show();
    })

    $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .compare').mouseleave(function () {
        $('.trending-products-slider-main .trending-product-4 .trending-product-inside-4 .image .com').hide();
    })


});

