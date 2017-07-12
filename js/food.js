$(document).ready(function() {

    var distance = $('.recent-post').offset().top;
$(window).scroll(function(){
    if ($(this).scrollTop() > distance) {
        $(".recent-post").addClass('fixed');
    } else {
        $(".recent-post").removeClass('fixed');
    }
})
});