(function($) {
    'use strict';

    function Morph(btn, el) {

        init(btn, el);

        function init(btn, el) {
            var el = $(el),
                btn = $(btn);

            btn.click(function(event) {
                event.preventDefault();
                open(el, $(this));
            });

            el.find('.morph-close').click(function(event) {
                event.preventDefault();
                close(el, btn);
            });
        }

        function open(el, btn) {
            noScroll(el, $('body'));

            el.css({
                opacity: 1,
                display: 'block',
                width: btn.width() + 62,
                height: btn.height() + 19,
                'z-index': 9999,
                position: 'fixed',
                left: btn.offset().left,
                top: setBtnPos(btn)
            })
                .velocity({
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                }, 'easeInOutQuart', function() {
                    $(this).find('.hidden').velocity('fadeIn', function() {
                        allowScroll(el);
                    });
                });
        }

        function close(el, btn) {
            noScroll(el, $('body'));

            el.find('.hidden').velocity('fadeOut', function() {
                el.velocity({
                    left: btn.offset().left,
                    top: setBtnPos(btn),
                    width: btn.width() + 62,
                    height: btn.height() + 18
                }, 'easeInOutQuart', function() {
                    $(this).velocity('fadeOut', function() {
                        allowScroll($('body'), el);
                    });
                });
            });
        }

        function setBtnPos(btn) {
            return btn.offset().top - $(window).scrollTop() + 'px';
        }
    }

    function noScroll() {
        $.each([].slice.call(arguments), function() {
            $(this).css({ overflow: 'hidden' });
        })
    }

    function allowScroll() {
        $.each([].slice.call(arguments), function() {
            $(this).css({ overflow: '' });
        })
    }

    window.Morph = Morph;

}(jQuery));

/* Morph('a.morph-1', 'div.morph-1');
Morph('a.morph-2', 'div.morph-2');
Morph('a.morph-3', 'div.morph-3');
Morph('a.morph-4', 'div.morph-4'); */
