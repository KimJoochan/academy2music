 $(document).ready(function() {
            var ww = $(window).width(); //윈도우 가로길이
            var wh = ww * 0.49; //윈도우 세로길이
            var dw = ww - ww * 0.104; //윈도우에서 Header영역을 뺀값
            pc_layout();
        $('.entra').click(function(){
            location.href='entra.html'
        })
            function pc_layout() {
                //헤더 영역 레이아웃
                $('#Header').css({
                    width: ww * 0.104,
                    height: wh
                });
                //로고 크기
                $('#pc_logo').css({
                    width: ww * 0.104,
                    height: wh * 0.111,
                    lineHeight: wh * 0.111 + 'px'
                });
                //메뉴바
                $('#pc_nav').css({
                    width: ww * 0.104,
                    height: wh * 0.388
                });
                $('#nav>li').css({
                    width: ww * 0.104,
                    height: wh * 0.388 / 7,
                    lineHeight: wh * 0.388 / 7 + 'px'
                });
                //서브메뉴
                /*$('.pc_sub_nav').css({
                  height:$('#nav').height()
                });*/
                $('.pc_sub_nav>li').css({
                    height: $('#nav a').height(),
                    lineHeight: $('#nav>li').height() + 'px'
                });
                for (var i = 0; i <= 6; i++) {
                    $('.pc_sub_nav').eq(i).css({
                        top: $('#nav>li').height() * i * '-1' + 'px'
                    })
                }
                //네비밑에있는 합격생이미지 버튼
                $('#but_nav').css({
                    width: ww * 0.104,
                    height: wh * 0.444,
                });
                $('#but_nav>li').css({
                    width: ww * 0.104,
                    height: wh * 0.444 / 4,
                });
                $('#foot_but').css({
                    width: ww * 0.104,
                    height: wh * 0.057,
                    lineHeight: wh * 0.057 + 'px'
                });
                $('#foot_mask').css({
                    width: dw,
                    height: wh * 0.057,
                    left: $('#foot_but').width()
                });
                $('#footer').css({
                    width: dw,
                    height: wh * 0.057
                })

                $('#pc_section').css({
                    width: dw,
                    height: wh,
                    marginLeft: $('#Header').width()
                })
                $('#pc_section>li').css({
                    width: dw,
                    height: wh,

                })
                $('#pc_profile').css({
                    width: dw,
                    height: wh,
                })
            }
            pc_ac();

            function pc_ac() {
                $('#pc_logo').click(function(){
                    location.href='index.html';
                })
                var f_n = 1;
                $('#footer').css({
                    left: -dw
                })
                $('#foot_but>a').click(function(e) {
                    event.preventDefault(e);
                    if (f_n == 0) {
                        $('#footer').animate({
                            left: -dw
                        }, 500)
                        $(this).text('기타사항→');
                        f_n = 1;
                    } else if (f_n == 1) {
                        $('#footer').animate({
                            left: 0
                        }, 500);
                        $(this).text('기타사항←');
                        f_n = 0;
                    }
                });
                //서브메뉴나타게하기
                $('.pc_sub_nav').hide();
                $('#nav>li').mouseenter(function() {
                    $(this).addClass('pc_on');
                    $(this).find('.pc_sub_nav').stop().slideDown(500);
                }).mouseleave(function() {
                    $('#nav>li').removeClass('pc_on');
                    $(this).find('.pc_sub_nav').stop().hide(500);
                });
                $('.pc_sub_nav').mouseleave(function() {
                    $('.pc_sub_nav').stop().slideUp(500);
                });
                $('.pc_sub_nav>li').mouseenter(function() {
                    $(this).addClass('sub_on');
                }).mouseleave(function() {
                    $('.pc_sub_nav>li').removeClass('sub_on');
                    $('.blank').removeClass('pc_off')
                })
            }
     function nt_act() {
        //로그클릭시 위로 이동
        $('#nt_logo').click(function () {
            location.href='index.html'
        });
         /*nav의 서브 메뉴 보이게 하기*/
        $('.nt_sub_nav').hide();
        $('.nt_line').hide();
        $('#nt_nav>li').mouseenter(function () {
            $(this).find('.nt_sub_nav').slideDown(500);
            $('#nt_nav>li').removeClass('nt_on');
            $(this).addClass('nt_on');
            var th_li = $(this).find('.nt_line');
            th_li.show().css({
                left: 0
            }).stop().animate({
                left: th_li.width() / 2
            }, 500)
        }).mouseleave(function () {
            $('.nt_sub_nav').slideUp(500);
            $('#nt_nav>li').removeClass('nt_on');
            $('.nt_line').animate({
                left: 0
            }, 500).hide();
        });
        $('.nt_sub_nav').mouseleave(function () {
            $('.nt_sub_nav').slideUp(500);
        });
        $('.nt_sub_nav>li').mouseenter(function () {
            $('.nt_sub_nav>li').removeClass('nt_on');
            $(this).addClass('nt_on');
        }).mouseleave(function () {
            $('.nt_sub_nav>li').removeClass('nt_on');
        })
     };
     nt_act();
     function tab_ac(){
         $('#tab_menu_hid').click(function(){
             $('#tab_menu').slideToggle();
         })
     }
     tab_ac();
$('#tab_logo').click(function(){
    location.href='index.html';
})
$('#mb_logo').click(function(){
    location.href='index.html';
})


        })