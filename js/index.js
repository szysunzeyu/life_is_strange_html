window.onload = function () {
    // $(window).scroll(function () {
    //     console.log($(document).scrollTop())
    // })
    $('.carousel').carousel({
        interval: 2000
    })

    var head_a = $('.navbar-nav>.nav-item>a')
    head_a[0].addEventListener('click',function () {
        console.log('test')
    })
    head_a[1].addEventListener('click',function () {
        $('html,body').animate({scrollTop: 728}, 'slow');
    })
    head_a[2].addEventListener('click',function () {
        $('html,body').animate({scrollTop: 1300}, 'slow');
    })
    head_a[3].addEventListener('click',function () {
        $('html,body').animate({scrollTop: 1747}, 'slow');
    })
    head_a[4].addEventListener('click',function () {
        $('html,body').animate({scrollTop: 2416}, 'slow');
    })

    $('.logo_img').mouseenter(function () {
        $('.logo_p').show()
        console.log('asd')
    })

}
