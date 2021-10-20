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
})