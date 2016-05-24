/**
 * Created by phongbui on 3/17/16.
 */

// last position, check scroll direction
var lastScrollTop = 0;
$(document).ready(function(){
    // trigger event click for vote star
    $('label.star').click(function () {
        var input = $(this).prev('input');
        if(input){
            input.trigger('click');
        }
    })

    // Check offset show 'move to top' button
    $(window).scroll(function(){
        var aTop = $('.ad').height();
        if ($(this).scrollTop()>= 150){
            $('.goto-top').removeClass('active');
            $('.goto-top').addClass('active');
        } else {
            $('.goto-top').removeClass('active');
        }

        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // downscroll: hide top nav
            $('.top-nav').removeClass('active');
        } else {
            // upscroll: show top nav
            $('.top-nav').removeClass('active');
            $('.top-nav').addClass('active');

        }
        lastScrollTop = st;
    });

    // trigger class active for like button
    $('.product-like .icon-like').click(function(){
        $(this).toggleClass('active');
    });

    $('.goto-top').click(function(){
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});