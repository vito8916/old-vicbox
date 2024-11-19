$(document).ready(function (event) {
    setTimeout(function(){
            $(".preloader-area").addClass('animated fadeOutLeft');
        },
        200);

    $('#toggle').on('click', function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

});


$(document).ready(function (event) {
    jQuery('.portfolio-5c0cdbc9485a0').each(function(){
        var head_slider = jQuery(this),
            head_slider_area = jQuery(this).parent();

        if(head_slider.find('article').length > 1){
            head_slider.find('article').each(function(index) {
                jQuery(this).attr('data-index', index+1);
            });

            head_slider.on('initialized.owl.carousel translated.owl.carousel', function(event) {
                var current = event.item.index,
                    index = jQuery(event.target).find('.owl-item').eq(current).find('article').attr('data-index'),
                    count = event.item.count;

                if(index < 0) {
                    index = 0;
                }

                /* $('.btn-vicxbox-white').on('mouseover', function(){
                    $(this).parent().parent().parent().parent().addClass('owl-item-expand');
                    }).on('mouseout', function(){
                    $(this).parent().parent().parent().parent().removeClass('owl-item-expand');
                }); */

                head_slider.on('onInitialize', function(){
                    console.log("GJGJFJDJFJFHFJFHFJFJ");
                    
                });

                head_slider_area.find('.counter').html('<span>'+index+'</span> / <span>'+count+'</span>');

                head_slider_area.find('.line div').css('transition', 'all 5000ms ease').addClass('go');
            }).on('translate.owl.carousel', function(event) {
                head_slider_area.find('.line div').css('transition', 'all 5ms ease').removeClass('go');
            });

            if(head_slider.hasClass('mousewheel')) {
                head_slider.on('mousewheel', function(event) {
                    if(status != true) {
                        status = true;
                        if(event.originalEvent.deltaY < 0) {
                            head_slider.trigger('prev.owl.carousel');
                            setTimeout(function(){status = false}, 600);
                        } else {
                            head_slider.trigger('next.owl.carousel');
                            setTimeout(function(){status = false}, 600);
                        }
                    }
                });
            }


            head_slider.addClass('owl-carousel').owlCarousel({
                loop:false,
                autoWidth: false,
                items:1,
                nav: true,
                dots: false,
                autoplay: false,
                mouseDrag: true,
                navText: false,
                navContainer: head_slider_area.find('.portfolio-navigation .owl-nav'),
                navClass: ['owl-prev fa fa-arrow-left','owl-next fa fa-arrow-right'],
               // responsiveClass:true,
                responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    992:{
                        items:2
                    },
                    1200:{
                        items:4
                    }
                },
                onInitialized: function(){
                    Morph('a.morph-1', 'div.morph-1');
                    Morph('a.morph-2', 'div.morph-2');
                    Morph('a.morph-3', 'div.morph-3');
                    Morph('a.morph-4', 'div.morph-4');
                }
            });
        }
    });
});
