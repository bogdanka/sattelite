$(document).ready(function () {
    $('.contacts').click(function () {
        let scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1000);
        }
        return false;
    });
    $('.to-top').click(function () {
        $('body,html').animate({scrollTop:0},1000);
    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0 && $(this).scrollTop() > 400) {
                $('.to-top').fadeIn();
            } else {
                $('.to-top').fadeOut();
            }
        });
    });
});




