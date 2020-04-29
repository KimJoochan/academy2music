$(document).ready(function () {
    var ww = $(window).width(); //윈도우 가로길이
    var wh = ww * 0.49; //윈도우 세로길이
    var dw = ww - ww * 0.104; //윈도우에서 Header영역을 뺀값
    //layout은 PC 1920이상일때작용
    $('.entra').click(function () {
        location.href = 'entra.html';
    })
    $('#pc_logo').click(function () {
        location.href = 'index.html';
    })
    $('#nt_logo').click(function () {
        location.href = 'index.html';
    })
    $('#tab_logo').click(function () {
        location.href = 'index.html';
    })
    $('#mb_logo').click(function () {
        location.href = 'index.html';
    });
    $('.intro').click(function (e) {
        e.preventDefault(e)
        location.href = 'intro.html';
    })

    function layout() {
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
        $('#subject_face').css({
            width: dw,
            height: wh
        })
    }
    layout();

    function pc_mv() {

        $('.pc_sub_nav').hide();
        $('#nav>li').mouseenter(function () {
            $(this).addClass('pc_on');
            $(this).find('.pc_sub_nav').stop().slideDown(500);
        }).mouseleave(function () {
            $('#nav>li').removeClass('pc_on');
            $(this).find('.pc_sub_nav').stop().hide(500);
        });
        $('.pc_sub_nav').mouseleave(function () {
            $('.pc_sub_nav').stop().slideUp(500);
        });
        $('.pc_sub_nav>li').mouseenter(function () {
            $(this).addClass('sub_on');
        }).mouseleave(function () {
            $('.pc_sub_nav>li').removeClass('sub_on');
            $('.blank').removeClass('pc_off')
        })
        //차트의 하이라이트,이동
        var cur = 0;
        $('.controler_pc>li').click(function () {
            $('.controler_pc>li').removeClass('pc_oner');
            $(this).addClass('pc_oner');
            var idex = $(this).index();
            $('#pc_entrane_wrap').css({
                left: -dw * idex
            }).fadeIn(500);
            var cpl = $(this).index();
            if (cpl == 0) {
                $('.entrace_title_pc').html('보컬반');
            } else if (cpl == 1) {
                $('.entrace_title_pc').html('작곡반');
            } else if (cpl == 2) {
                $('.entrace_title_pc').html('연주반');
            } else if (cpl == 3) {
                $('.entrace_title_pc').html('싱어송라이팅반');
            } else if (cpl == 4) {
                $('.entrace_title_pc').html('미디반');
            }

        })
    }
    pc_mv();
    //노트영역일때 작용하는 이벤튼
    function nt_act() {
        $('#nt_logo').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
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
        //버튼클릭시 해당하는 과정 소게등장
        $('#nt_select_subject>li').click(function () {
            var nsid = $(this).index();
            if(nsid==0){
 $(this).find('img').attr('src','nt_intro_img/vocalafter.png');
 $('#nt_select_subject>li').eq(1).find('img').attr('src','nt_intro_img/compobefore.png');
 $('#nt_select_subject>li').eq(2).find('img').attr('src','nt_intro_img/songbefore.png');
 $('#nt_select_subject>li').eq(3).find('img').attr('src','nt_intro_img/singbefore.png');
 $('#nt_select_subject>li').eq(4).find('img').attr('src','nt_intro_img/midibefore.png');
            }
            else if(nsid==1){
 $('#nt_select_subject>li').eq(0).find('img').attr('src','nt_intro_img/vocalbefore.png');
 $(this).find('img').attr('src','nt_intro_img/compoafter.png');
 $('#nt_select_subject>li').eq(2).find('img').attr('src','nt_intro_img/songbefore.png');
 $('#nt_select_subject>li').eq(3).find('img').attr('src','nt_intro_img/singbefore.png');
 $('#nt_select_subject>li').eq(4).find('img').attr('src','nt_intro_img/midibefore.png');
            }
            else if(nsid==2){
 $('#nt_select_subject>li').eq(0).find('img').attr('src','nt_intro_img/vocalbefore.png');
 $('#nt_select_subject>li').eq(1).find('img').attr('src','nt_intro_img/compobefore.png');
 $(this).find('img').attr('src','nt_intro_img/songafter.png');
 $('#nt_select_subject>li').eq(3).find('img').attr('src','nt_intro_img/singbefore.png');
 $('#nt_select_subject>li').eq(4).find('img').attr('src','nt_intro_img/midibefore.png');
            }
            else if(nsid==3){
 $('#nt_select_subject>li').eq(0).find('img').attr('src','nt_intro_img/vocalbefore.png');
 $('#nt_select_subject>li').eq(1).find('img').attr('src','nt_intro_img/compobefore.png');
 $('#nt_select_subject>li').eq(2).find('img').attr('src','nt_intro_img/songbefore.png');
 $(this).find('img').attr('src','nt_intro_img/singafter.png');
 $('#nt_select_subject>li').eq(4).find('img').attr('src','nt_intro_img/midibefore.png');
            }
            else if(nsid==4){
 $('#nt_select_subject>li').eq(0).find('img').attr('src','nt_intro_img/vocalbefore.png');
 $('#nt_select_subject>li').eq(1).find('img').attr('src','nt_intro_img/compobefore.png');
 $('#nt_select_subject>li').eq(2).find('img').attr('src','nt_intro_img/songbefore.png');
 $('#nt_select_subject>li').eq(3).find('img').attr('src','nt_intro_img/singbefore.png');
 $(this).find('img').attr('src','nt_intro_img/midiafter.png');
            }
            $('#enra_nt_wrap').animate({
                left: $('#enra_nt_wrap>li').width() * nsid * '-1'
            })
        })
        /* $('.pic_sent_pc').hide();
         //사진마우스hover시 설명추가
         $('.nt_left_line>li').mouseenter(function () {
             $(this).find('.pic_sent_pc').slideDown()
         }).mouseleave(function () {
             $('.pic_sent_pc').hide();
         })*/

        /* $('.nt_right_line>li').mouseenter(function () {
             $(this).find('.pic_sent_pc').slideDown()
         }).mouseleave(function () {
             $('.pic_sent_pc').hide();
         })*/
    }
    nt_act();

    function tab_act() {
        $('#tab_select_ent>li').click(function () {
            var tse = $(this).index();
            if (tse == 0) {
                $(this).find('img').attr('src', 'tab_intro_img/vocalafter.png');
                $('#tab_select_ent>li').eq(1).find('img').attr('src', 'tab_intro_img/singbefore.png')
                $('#tab_select_ent>li').eq(2).find('img').attr('src', 'tab_intro_img/compobefore.png')
                $('#tab_select_ent>li').eq(3).find('img').attr('src', 'tab_intro_img/songbefore.png')
                $('#tab_select_ent>li').eq(4).find('img').attr('src', 'tab_intro_img/midibefore.png');
                $('#tab_title').html('보컬');
            } else if (tse == 1) {
                $(this).find('img').attr('src', 'tab_intro_img/singafter.png');
                $('#tab_select_ent>li').eq(0).find('img').attr('src', 'tab_intro_img/vocalbefore.png')
                $('#tab_select_ent>li').eq(2).find('img').attr('src', 'tab_intro_img/compobefore.png')
                $('#tab_select_ent>li').eq(3).find('img').attr('src', 'tab_intro_img/songbefore.png')
                $('#tab_select_ent>li').eq(4).find('img').attr('src', 'tab_intro_img/midibefore.png')
                $('#tab_title').html('연주');
            } else if (tse == 2) {
                $(this).find('img').attr('src', 'tab_intro_img/compoafter.png');
                $('#tab_select_ent>li').eq(0).find('img').attr('src', 'tab_intro_img/vocalbefore.png')
                $('#tab_select_ent>li').eq(1).find('img').attr('src', 'tab_intro_img/singbefore.png')
                $('#tab_select_ent>li').eq(3).find('img').attr('src', 'tab_intro_img/songbefore.png')
                $('#tab_select_ent>li').eq(4).find('img').attr('src', 'tab_intro_img/midibefore.png');
                $('#tab_title').html('작곡');
            } else if (tse == 3) {
                $(this).find('img').attr('src', 'tab_intro_img/songafter.png');
                $('#tab_select_ent>li').eq(0).find('img').attr('src', 'tab_intro_img/vocalbefore.png')
                $('#tab_select_ent>li').eq(1).find('img').attr('src', 'tab_intro_img/singbefore.png')
                $('#tab_select_ent>li').eq(2).find('img').attr('src', 'tab_intro_img/compobefore.png')
                $('#tab_select_ent>li').eq(4).find('img').attr('src', 'tab_intro_img/midibefore.png')
                $('#tab_title').html('싱어송라이팅');
            } else if (tse == 4) {
                $(this).find('img').attr('src', 'tab_intro_img/midiafter.png');
                $('#tab_select_ent>li').eq(0).find('img').attr('src', 'tab_intro_img/vocalbefore.png')
                $('#tab_select_ent>li').eq(1).find('img').attr('src', 'tab_intro_img/singbefore.png')
                $('#tab_select_ent>li').eq(2).find('img').attr('src', 'tab_intro_img/compobefore.png')
                $('#tab_select_ent>li').eq(3).find('img').attr('src', 'tab_intro_img/songbefore.png')
                $('#tab_title').html('미디');
            }
            $('#tab_img_wrap').animate({
                left: tse * $('#tab_img_wrap>li').width() * '-1'
            })
            $('#tab_menu_hid').click(function(){
                $('#tab_menu').slideToggle(500);
                $('#tab_nav').slideToggle(500);
            })
        })
    }
    tab_act();

    function mb_act() {
        $('#mb_hide_menu').click(function(){
            $('#mb_menu').slideToggle();
        })
     
        //메뉴바 등장
        $('#mb_selet>li').click(function (e) {
            e.preventDefault(e);
            $(this).find('.sub_select').slideToggle(500);
        });
        //메뉴바의 세부 메뉴 클릭시 해당 설명등장
        $('.sub_select.entr>li').click(function () {
            var ssel = $(this).index();
            if (ssel == 0) {
                $('#subject_title').html('보컬반');
            } else if (ssel == 1) {
                $('#subject_title').html('작곡반');
            } else if (ssel == 2) {
                $('#subject_title').html('연주반');
            } else if (ssel == 3) {
                $('#subject_title').html('싱어송라이팅반');
            } else if (ssel == 4) {
                $('#subject_title').html('미디반');
            }
            $('#img_wrap_mb').animate({
                top: $('#img_wrap_mb>li').height() * '-1' * ssel-5
            }, 500).css({
                left: 0
            });
            cli = 0;
        })
        var cli = 0;
        $('.buts.right').click(function () {
            cli++;
            if (cli < 6) {
                $('#img_wrap_mb').animate({
                    left: $('#img_wrap_mb>li').width() / 6 * '-1' * cli
                }, 500)
            } else if (cli => 6) {
                cli = 5;
            }
        })
        $('.buts.left').click(function () {
            cli--;
            if (cli => 0) {
                $('#img_wrap_mb').animate({
                    left: $('#img_wrap_mb>li').width() / 6 * '-1' * cli
                }, 500)
            } else if (cli < 0) {
                cli = 0;
            }
        })

        //extra버튼 클릭시 세부 항목까지 모두 다 나오게 하기
        $('#extra_select').hide();
        $('.sub_extra').hide();
        $('#another').click(function () {
            $('#extra_select').slideToggle(500);
        })
        $('#extra_selection>li').click(function () {
            $(this).find('.sub_extra').slideToggle(500);
        })
    }
    function tab_ac(){
         $('#tab_menu_hid').click(function(){
             $('#tab_menu').slideToggle();
         })
     }
    $('#mb_mask').css({
        height:$('#img_wrap_mb').find('li').height()
    })
     tab_ac();
    mb_act();
})
