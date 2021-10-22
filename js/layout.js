$(document).ready(function() {

    const reporting = {
        content: `The Hub88 back office lets you focus on what's really important. That means giving casino managers access to real-time data and streamlining reporting to quickly action business decisions.`,
        bottom: `Drill down with pre-built segments and filters or customise the report according to your needs.`,
        img: 'reporting.png'
    };
    const recomment = {
        content: `Everyone loves a personal touch. Our recommendation system empowers you to deliver relevant games to the right audience at the perfect time. Our enhanced list of attributes helps you match games to players.`,
        bottom: `You can even put the player in control, allowing them to customise their own homepage of games, based on theme, volatility or category.`,
        img: 'recommendation-system.png'
    }
    const wallet = {
        content: `never fits all. Whether you are targeting Europe, Asia or crypto markets, you need the solution that's right for you.`,
        bottom: 'pports two types of wallets, giving you the freedom to decide which best suits your needs.',
        img: 'wallet.png'
    }
    const game = {
        content: 'Plan your game release roadmap with a powerful game management system. All information about the games, such as game description, categories, RTP, volatility and more, in provided in a single source.',
        img: 'game-management.png'
    }
    const free = {
        content: 'Acquire new and engage existing players through various game incentives, such as free spins, tournaments and must-drop jackpots.',
        img: 'free-spins.png'
    }
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
        $('#btn-filter').toggleClass('active')
        $('#btn-provider').removeClass('active')
        $('#popup-for-filter').toggleClass('show-popup')
        $('#popup-for-provider').removeClass('show-popup')
    })
    $('#btn-provider').click(function() {
        $('#btn-provider').toggleClass('active')
        $('#btn-filter').removeClass('active')
        $('#popup-for-provider').toggleClass('show-popup')
        $('#popup-for-filter').removeClass('show-popup')
    })
    $('.dropdown-api').click(function() {
        $('.dropdown-api-content').toggleClass('show-api-menu')
    })

    const menu_item = document.getElementById('header-menu').querySelectorAll('a');
    menu_item.forEach((item) => {
        var loca = window.location.pathname.split('/');
        var cur = item.href.split("/")
        if (loca[1] === cur[3]) {
            var el = document.createElement('span');
            item.appendChild(el);
        }
    })

    const activeMenu = () => {
        menuItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                menuItems.forEach((element) => {
                    console.log(element)
                    element.classList.remove('active');
                    e.target.classList.add('active');
                })
            })
        })
    }
    const remove = () => {
        menuItems = document.getElementById('working-ul').querySelectorAll('li');
        console.log(menuItems.length)
        for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('active');
        }
    }
    $('#li-report').click(function() {
        remove();
        $('#li-report').addClass('active');
        $('.working-analyst-content').text(reporting.content);
        $('.working-analyst-bottom').text(reporting.bottom);
        $('#working-img').attr('src', "./img/home/working/" + reporting.img);
    })
    $('#li-recomment').click(function() {
        remove();
        $('#li-recomment').addClass('active')
        $('.working-analyst-content').text(recomment.content);
        $('.working-analyst-bottom').text(recomment.bottom);
        $('#working-img').attr('src', "./img/home/working/" + recomment.img);
    })
    $('#li-wallet').click(function() {
        remove();
        $('#li-wallet').addClass('active');
        $('.working-analyst-content').text(wallet.content);
        $('.working-analyst-bottom').text(wallet.bottom);
        $('#working-img').attr('src', "./img/home/working/" + wallet.img);
    })
    $('#li-game').click(function() {
        remove();
        $('#li-game').addClass('active');
        $('.working-analyst-content').text(game.content);
        $('#working-img').attr('src', "./img/home/working/" + game.img);
    })
    $('#li-free').click(function() {
        remove();
        $('#li-free').addClass('active');
        $('.working-analyst-content').text(free.content);
        $('#working-img').attr('src', "./img/home/working/" + free.img);
    })
    if (window.matchMedia('(max-width: 740px)').matches) {
        $('.cando .solution-right .solution-right-games').css('top', 0 + 'px');
        $('.cando .solution-right .solution-right-providers').css('bottom', -480 + 'px');
    } else {
        $(window).scroll(function() {
            var kq = this.scrollY;
            if (kq >= 1266) {
                $('.cando .solution-right .solution-right-games').css('top', -200 - (0.09 * kq) + 'px');
                $('.cando .solution-right .solution-right-providers').css('bottom', -80 + (0.09 * kq) + 'px');
            }
            // } else {
            //     $('.cando .solution-right .solution-right-games').css('top', -200 + (0.08 * kq) + 'px');
            //     $('.cando .solution-right .solution-right-providers').css('bottom', -80 - (0.08 * kq) + 'px');
            // }
        })
    }
})