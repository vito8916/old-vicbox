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
