jQuery(function($) {
    $('.hamburger').click(function() {
        $(this).toggleClass('hamburger-active');
        $('.nav').toggleClass('nav-active');
    });
});
