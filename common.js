// 모바일버전 기능구현
if(matchMedia("(max-width: 950px)")){
    // ham버튼
    $('.ham').click(function () {
        $(this).toggleClass('on')
        $('nav').toggleClass('on')
    })

    $('.gnb>li>a').click(function (e) {
        e.preventDefault()
        // a태그 이벤트(페이지전환) 않한다.
    })
    $('.gnb>li').click(function () {
        if ($(this).attr('class') != ('on')) {
            $('.sub').slideUp()
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
            $(this).addClass('on')
        } else {
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
        }
    })
}

$(function () {
    // sub 가상배경
    $('.gnb>li').mouseover(function () {
        $('.hd>.inner').prepend('<div class="sub_bg"></div>')
    })
    $('.gnb>li').mouseout(function () {
        $('.sub_bg').remove()
    })

    // sec2 텝 기능
    $('.tap_menu span').click(function () {
        $('.tap_menu span, .sec2 ul').removeClass('on')
        $(this).addClass('on')

        let nth = $(this).index()
        console.log(nth)
        $('.sec2 ul').eq(nth).addClass('on')
    })

    // sec4 슬라이드
    let w = $('.slide li').width()
    $(window).on('resize', function () {
        w = $('.slide li').width()
        console.log(w)
    })

    setInterval(function () {
        slideAni()
    }, 5000)

    function slideAni() {
        $('.slide').not('animated').animate({
            marginLeft: -w
        }, 700, function () {
            let num = $('.slide li').length
            console.log(num)
            $('.slide li').eq(0).appendTo('.slide')
            $('.slide').css({
                marginLeft: 0
            })
            $('.edu_dot span').eq(-1).prependTo('.edu_dot')

        })
    }
    // for(x=0; x<=num; x++){
    //     $('.edu_dot span').eq(0).appendTo('.edu.dot')
    // }

    // 도트를 클릭했을 때 자동 애니 효과가 멈추고
    // 도트와 같은 숫자의 슬라이드 이미지가 맨 앞으로 오고
    // 도트 스타일이 바뀐다.(클래스 붙이기?)
    $('.edu_dot span').click(function () {
        let nth = $(this).index()
        let intv = setInterval(function () {
            slideAni()
        }, 5000)
        console.log(nth)
        clearInterval(intv)
        dotAni(nth)
    })

    function dotAni(nth) {
        for (x = 0; x <= nth; x++) {
            $('.slide li').eq(0).appendTo('.slide')
            $('.edu_dot span').eq(0).appendTo('.edu_dot')
        }
    }

    // sec5 슬라이드
    // 자동 애니메이션 없이, 텝기능, 도트기능
    let w2 = $('.slide_noti li').width()
    $(window).on('resize', function () {
        w2 = $('.slide_noti li').width()
    })

    $('.noti_dot span').click(function () {
        $('.noti_dot span').removeClass('on')
        $(this).addClass('on')
        let nth = $(this).index()
        let nth2 = $('.slide_noti li').index()
        console.log(nth, nth2)

        

        for(x=0; x<nth; x++){
            // nth == nth2
            $('.slide_noti li').eq(0).appendTo('.slide_noti')
            // $('.slide_noti').animate({marginLeft: -w2}, 700, function () {
            // $('.slide_noti li').eq(nth).appendTo('.slide_noti')
            // $('.slide_noti').css({marginLeft: 0})
        }
    })
})
