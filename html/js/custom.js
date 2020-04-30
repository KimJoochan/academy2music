$(document).ready(function () {
    var ww = $(window).width(); //윈도우 가로길이
    var wh = ww * 0.49; //윈도우 세로길이
    var dw = ww - ww * 0.104; //윈도우에서 Header영역을 뺀값
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
            height: wh * 0.814
        });
        $('#nav>li').css({
            width: ww * 0.104,
            height: wh * 0.814 / 7,
            lineHeight: wh * 0.814 / 7 + 'px'
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

        //전체크기영역
        $('#pc_section').css({
            left: $('#Header').width(),
            width: dw * 3 - 60 + 'px',
            height: wh
        })
        //pc_section의 자식들 간격띄우기
        for (var i = 0; i < 3; i++) {
            $('#pc_section>li').eq(i).css({
                left: dw * i
            })
        }
        //배너영역
        $('#banner').css({
            width: dw,
            height: wh
        });
        $('#pc_ban_mask').css({
            width: dw,
            height: wh
        });
        $('#pc_ban').css({
            width: dw * 4,
            height: wh
        });
        $('#pc_ban>li').css({
            width: dw,
            height: wh
        });
        //배너의 내용 거리 띄우기
        for (var i = 0; i < 4; i++) {
            $('#pc_ban>li').eq(i).css({
                left: dw * i
            })
        }
        //배너의 점갤러리
        $('#ban_act').css({
            width: ww * 0.1875,
            height: wh * 0.111
        })
        $('#pc_bot_but').css({
            width: ww * 0.155,
            height: wh * 0.111
        });
        $('#pc_bot_but>li').css({
            width: ww * 0.155 / 4,
            height: wh * 0.111
        });

        //두번째 영역레이아웃
        $('#sec_dis').css({
            width: dw,
            height: wh
        });
        //두번째,세번째에 있는 버튼의 크기
        $('.but').css({
            height: wh
        })
        //두번째영역의 내용들어가는 영역
        $('#sec_ful').css({
            width: dw - 120 + 'px',
            height: wh
        });
        $('#sec_wrap').css({
            width: dw - 120,
            height: wh * 0.8
        });
        $('#sec_wrap>li').css({
            width: $('#sec_wrap').width() / 2,
            height: $('#sec_wrap').height() / 2
        });
        //about wrap의 이미지 영역
        $('#pc_team_pic').css({
            width: ww * 0.104,
            height: wh * 0.3
        });
        $('#ab_sen').css({
            width: ww * 0.197,
            marginTop:$('#ab_sen').height()*0.5*'-1'
        });
        $('#about_wrap').css({
            width: $('#sec_wrap>li').width() ,
            height: wh * 0.4 - ww * 0.015625 + 'px',
            marginRight: ww * 0.015625 + 'px',
             marginTop: wh * 0.027
        });
        //뉴스 레이아웃
        $('#new_wrap').css({
            width: $('#sec_wrap>li').width() - ww * 0.03125,
            height: wh * 0.4 - ww * 0.015625 + 'px',
            marginLeft: ww * 0.015625 + 'px',
            marginTop: wh * 0.027
        });
        $('#pc_new_pic').css({
            height: wh * 0.3
        });
        $('#pc_new_pic>li').css({
            width: $('#pc_new_pic').width() * 0.5,
            height: wh * 0.3
        });
        $('.new_sub_sen').css({
            width: $('#pc_new_pic').width() * 0.5,
            height: wh * 0.05
        })
        $('#pc_new_sub>li').css({
            width: $('#pc_new_pic').width() * 0.5 / 2,
            height: wh * 0.3 / 2
        })
        //강사소개레이아웃
        $('#subject_wrap').css({
            width: $('#sec_wrap>li').width() - ww * 0.03125,
            height: wh * 0.4 - ww * 0.015625 + 'px',
            marginLeft: ww * 0.015625 + 'px',
            marginTop: wh * 0.027
        });
        $('#pc_subject_pic').css({
            height: wh * 0.3
        })
        $('#pc_subject_pic>li').css({
            width: $('#pc_subject_pic').width() / 4,
            height: wh * 0.3 / 2
        })
        $('#consult_wrap').css({
            width: $('#sec_wrap>li').width() - ww * 0.03125,
            height: wh * 0.4 - wh * 0.027,
            marginLeft: ww * 0.015625 + 'px',
            marginTop: wh * 0.027
        });
        $('#pc_con_pic').css({
            width: ww * 0.27,
            height: wh * 0.296,
        marginLeft:ww * 0.27*0.5*'-1',
            bottom:7+'px'
        })
        $('#con_but').css({
            width: ww * 0.130,
            height: wh * 0.027,
            marginLeft: ww * 0.130 / 2 * '-1'
        });
        $('#con_but>li').css({
            width: ww * 0.130 / 3 - 10,
            height: wh * 0.027,
            borderRadius: ww * ww * 0.130 / 3 / 2
        })
        //세번째 영역레이아웃
        $('#thr_dis').css({
            width: dw - 60 + 'px',
            height: wh
        });
        $('#thr_half>li').css({
            width: $('#thr_dis').width() * 0.5,
            height: wh
        });
        $('.col').css({
            width: $('#thr_dis').width() * 0.5,
            height: wh / 2
        });
        $('#pas_wrap').css({
            width: $('#thr_dis').width() * 0.5 - ww * 0.0416 * 2,
            height: wh / 2 - wh * 0.0554,
            marginTop: wh * 0.0277,
            marginLeft: ww * 0.0416
        });
        /*세번째영역의 광고영역3등분*/
        $('.adv').css({
            width: dw / 2,
            height: wh / 3
        })
    };
    layout();
    nt_layout()
    var o=0;
    $(window).resize(function () {
        ww = $(window).width(); //윈도우 가로길이
        wh = ww * 0.4846 - 20; //윈도우 세로길이
        dw = ww - ww * 0.104;
        layout();
        o++;
        nt_layout();
        if (ww > 1871) {
            layout();
        } else if (ww < 1870) {
            for (var v = 0; v < 8; v++) {
                clearInterval(autop);
            };
            nt_layout();
        }
    });
    pc_mv();
    nt_act();
    var hp = 0;
    var tp = 0;
    //메뉴의 하이퍼링크
    $('.intro').click(function (e) {
        e.preventDefault(e)
        location.href = 'intro.html';
    })
    $('.entra').click(function (e) {
        e.preventDefault(e)
        location.href = 'entra.html';
    })

    function pc_mv() {
      
        var cl_num = 0;
        $('.left').click(function () {
            cl_num--;
            if (cl_num >= 0) {
                $('html,body').animate({
                    scrollLeft: dw * cl_num
                });
            } else if (cl_num < 0) {
                cl_num = 0;
            }
        }); //화면 좌로 이동
        $('#chan_buts_2').hide();
        $('.right').click(function () {
            cl_num++;
            $('#st_bu_p').hide();
            $('#st_bu_s').show();
            $('#st_bu_s').trigger('click');
            if (cl_num < 2) {
                $('html,body').animate({
                    scrollLeft: dw * cl_num
                }, 500);
            } else if (cl_num == 2) {
                $('#chan_buts_1').hide();
                $('#chan_buts_2').show();
                $('html,body').animate({
                    scrollLeft: dw * cl_num
                }, 500);
            } else if (cl_num >= 3) {
                cl_num = 1;
                $('#chan_buts_1').show();
                $('#chan_buts_2').hide();
                $('html,body').animate({
                    scrollLeft: dw * cl_num
                }, 500);
            }
        }); //화면 우로 이동 
        if ($('html,body').scrollLeft >= $('#Header').width() + dw) {
            $('#st_bu_p').hide();
            $('#st_bu_s').show();
            $('#st_bu_s').trigger('click');
        }
        var f_n = 1;
        $('#footer').css({
            left: -dw
        })
        $('#foot_but>a').click(function (e) {
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
        //배너 점갤러리
        var current = 0;
        $('#pc_bot_but>li').eq(0).find('img').attr('src', 'https://kimjoochan.github.io/academy2musicPcImg/pcImg/pc_img/ban_dot_a.png');
        $('#pc_bot_but>li').click(function () {
            var nu = $(this).index();
            if (nu == current) {
                return
            }
            $('#pc_ban>li').eq(current).css({
                left: 0
            }).animate({
                left: -dw
            }, 500);
            $('#pc_ban>li').eq(nu).css({
                left: dw
            }).animate({
                left: 0
            }, 500);
            $('#pc_bot_but>li').find('img').attr('src', 'https://kimjoochan.github.io/academy2musicPcImg/pcImg/pc_img/ban_dot.png');
            $('#pc_bot_but>li').eq(nu).find('img').attr('src', 'https://kimjoochan.github.io/academy2musicPcImg/pcImg/pc_img/ban_dot_a.png');
            current = nu;

        });
        var j = 0;
        //점갤러리 자동실행
        function bot() {
            autop = setInterval(function () {
                $('#pc_bot_but>li').eq(j).trigger('click');
                j++;
                if (j == 4) {
                    j = 0;
                }
            }, 3000)
        }
        bot();
        var w = 1;
        $('#pc_bot_but').mouseenter(function () {
            if (w == 0) {
                for (var v = 0; v < 8; v++) {
                    clearInterval(autop);
                }
                w = 1;
                $('#st_bu').attr('value', '재생');
            } else if (w == 1) {
                for (var v = 0; v < 8; v++) {
                    clearInterval(autop);
                }
                w = 1;
                $('#st_bu').attr('value', '재생');
            }
        }).mouseleave(function () {
            if (w == 1) {
                bot();
                w = 0;
                $('#st_bu').attr('value', '정지');
            } else if (w == 0) {
                bot();
                w = 0;
                $('#st_bu').attr('value', '정지');
            }
            $('#st_bu_s').show();
            $('#st_bu_p').hide();
        });
        var cl_m = 0;
        $('#st_bu_p').hide();
        $('#st_bu_s').show();
        $('#st_bu_s').click(function () {
            cl_m = 1;
            if (cl_m = 1) {
                for (var v = 0; v < 8; v++) {
                    clearInterval(autop);
                }
            } else if (cl_m != 1) {
                return;
            }
            $('#st_bu_p').show();
            $('#st_bu_s').hide();
        })
        $('#st_bu_p').click(function () {
            cl_m = 2;
            if (cl_m == 2) {
                bot();
            } else if (cl_m != 2) {
                return;
            }
            $('#st_bu_s').show();
            $('#st_bu_p').hide();
        });
        //메뉴바 hover시 속내용 보이게 하기
        $('#pc_subject_pic>li').mouseenter(function () {
            var le = $(this).width();
            $(this).find('.pc_le').animate({
                left: le * '-1'
            })
            $(this).find('.pc_ri').animate({
                left: le
            })
        }).mouseleave(function () {
            $(this).find('img').stop().animate({
                left: 0
            })
        })
        //뉴스 내용보이게 하기
        $('#pc_new_sub>li').mouseenter(function () {
            $(this).find('.new_sub_sen').stop().animate({
                bottom: 0
            }, 500)
        }).mouseleave(function () {
            $('.new_sub_sen').stop().animate({
                bottom: -100
            })
        })
        $('#pc_new_pic>li').mouseenter(function () {
            $(this).children('.new_sub_sen').animate({
                bottom: 0
            }, 500)
        }).mouseleave(function () {
            $('.new_sub_sen').animate({
                bottom: -100
            })
        })

    } //함수이벤트 끝

    //노트의 레이아웃 함수들
    function nt_layout() {
        var kw = 1900;

        //노트의 배너 와프
        $('#nt_ban_mask>.note_wrap').css({
            height: $('#nt_ban_mask').height(),
        });
        /*
        $('#nt_ban_wrap>li').css({
            height: $('#nt_ban_mask').height(),
        });*/
        //nav가 어느정도 내려오면 상위에 고정
        var sc = $('html,body').scrollTop();
        $(window).scroll(function () {
            sc = $('html,body').scrollTop();
            if (sc > 30) {
                $('#nt_header').animate({
                    top: 0
                }, 100);
                $('#nt_nav').animate({
                    marginTop: 0
                }, 100)
                $('#nt_min_foot').hide();
            } else if (sc <= 30) {
                $('#nt_header').animate({
                    top: 30
                }, 100)
                $('#nt_nav').animate({
                    marginTop: 20
                }, 100)
                $('#nt_min_foot').show();
            }
            if (sc > 1400) {
                $('#nt_new').slideDown(500);
            }

        });
        $('#subject_en').css({
            height: $('.subject_mask').height()
        })
        //풋터 주소창
        $('.foot_adr').css({
            marginLeft: $('.foot_adr').width() * 0.5 * '-1'
        })
    }

    //노트의 이벤트 함수
    function nt_act() {
        //로그클릭시 위로 이동
        $('#nt_logo').click(function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
        $('.nt_left').click(function () {
            $('#nt_ban_wrap').css({
                left: 0
            }).animate({
                left: ww * '-1'
            }, 500, function () {
                $('#nt_ban_wrap>li').first().appendTo('#nt_ban_wrap');
                $('#nt_ban_wrap').css({
                    left: 0
                })

            })
        });
        $('.nt_right').click(function () {
            $('#nt_ban_wrap>li').last().prependTo('#nt_ban_wrap');
            $('#nt_ban_wrap').css({
                left: ww * '-1'
            })
            $('#nt_ban_wrap').stop().animate({
                left: 0
            }, 500)
            /*, function() {
                                    $('#nt_ban_wrap>li').last().prependTo('#nt_ban_wrap');
                                    $('#nt_ban_wrap').css({
                                        left: ww * 2 * '-1'
                                    }*/

        })

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

        //커리큘럼에서 클릭시 선택된것만 나오게 하기
        var sm_num;
        var sw;
        $('.subject_mask').hide();
        $('.nt_subject_wrap').hide();
        $('#subject_menu>li').click(function (e) {
            sm_num = $(this).index();
            event.preventDefault(e);
            $('.subject_mask').hide();
            $('.subject_mask').eq(sm_num).show();
            $('.nt_subject_wrap').eq(sm_num).show();
            if (sm_num == 3) {
                $('.subject_but').hide();
            } else if (sm_num != 3) {
                $('.subject_but').show();
            }
            sw = $('.nt_subject_wrap').eq(sm_num);
        });
        //커리큘럼 슬라이드
        $('.subject_but.left').click(function () {
            sw.css({
                left: 0
            }).animate({
                left: 600 * '-1' + 'px',
            }, 500, function () {
                sw.find('li').first().appendTo($('.nt_subject_wrap').eq(sm_num));
                sw.css({
                    left: 0
                });

            });
        });
        wcl = 0;
        $('.subject_but.right').click(function () {
            $('.nt_subject_wrap').eq(sm_num).find('li').last().prependTo($('.nt_subject_wrap').eq(sm_num));
            $('.nt_subject_wrap').eq(sm_num).css({
                left: '-1' * 600 + 'px'
            });
            $('.nt_subject_wrap').eq(sm_num).animate({
                left: 0,
            }, 500);




        });

        //시설소개 점갤러리
        var nt_cu = 0;
        var cli_f;
        $('#nt_fai_buts>li').click(function () {
            cli_f = $(this).index();
            $('#nt_fail_wrap').animate({
                left: -$('#nt_fai_mask').width() * cli_f
            }, 500);
            /* $('#nt_fail_wrap>li').eq(cli_f).css({
                 left: ww
             }).animate({
                 left: 0
             }, 500);
             nt_cu = cli_f;*/

        });
        //공지사항,뉴스의 닫기 버튼
        var n_c_n = 0;
        $('.new_close').click(function () {
            n_c_n++;
            $(this).parent('.new_sent').parent('.nt_sent').hide(250);
            if (n_c_n == 3) {
                $('#nt_new').hide();
            }
        });
        //블로그 마우스댈때 이벤트
        $('.new_blog>li').mouseenter(function () {
            $('.new_blog>li').removeClass('on_blog')
            $(this).addClass('on_blog');
        }).mouseleave(function () {
            $('.new_blog>li').removeClass('on_blog')
        })
    }
    //테블릿 이벤트 함수
    //커리큘럼에서 해당 과목클릭시 나오는 세부과목
    function tab_layout() {
        $('.tab_cur_mask').hide();
        $('.tab_cur_mask').eq(0).show();
        $('#tab_cur_chart>li').click(function (e) {
            event.preventDefault(e);
            $('#tab_cur_chart>li').removeClass('tab_on');
            $(this).addClass('tab_on');
            var opn = $(this).index();
            $('.tab_cur_mask').hide();
            $('.tab_cur_mask').eq(opn).show();
            var sce = $('.swiper-curriculem_1').eq(opn);
            var spe = $('.swiper-paginational').eq(opn);
            var swiper = new Swiper(sce, {
                pagination: {
                    el: spe,
                }
            });
        });
        $('#tab_menu').css({
            top: $('#tab_header').height()
        });
        $('#tab_menu').hide();
        $('#tab_menu_hid').click(function () {
            $('#tab_menu').slideToggle(500);
        })
    };
    tab_layout();
    //모바일 제이쿼리
    $('#mb_cur_chart>li').eq(2).click(function(){
        location.href='entra.html'
    });
    $('#mb_satis>h3').css({
        lineHeight:$('#mb_satis').height()+'px'
    })
});
