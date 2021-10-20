$(document).ready(function() {
    $('#btn-open-menu').click(function() {
        $('.menu-mobile').addClass('show-menu')
    })
    $('#btn-close-menu').click(function() {
        $('.menu-mobile').removeClass('show-menu')
    })
    $('#btn-talk').click(function() {
        $('#get-talk').addClass('show-talk')
    })
    $('#btn-close-talk').click(function() {
        $('#get-talk').removeClass('show-talk')
    })
    $('#btn-filter').click(function() {
        $('#popup-for-filter').toggleClass('show-popup')
        $('#popup-for-provider').removeClass('show-popup')
    })
    $('#btn-provider').click(function() {
        $('#popup-for-provider').toggleClass('show-popup')
        $('#popup-for-filter').removeClass('show-popup')
    })
    $('.dropdown-api').click(function() {
        $('.dropdown-api-content').toggleClass('show-api-menu')
    })
    $(window).scroll(function() {
        var kq = this.scrollY;
        if (kq >= 1266) {
            $('.cando .solution-right .solution-right-games').css('top', -200 - (0.08 * kq) + 'px');
            $('.cando .solution-right .solution-right-providers').css('bottom', -80 + (0.08 * kq) + 'px');
        } else {
            $('.cando .solution-right .solution-right-games').css('top', -200 + 'px');
            $('.cando .solution-right .solution-right-providers').css('bottom', -80 + 'px');
        }
    })
})