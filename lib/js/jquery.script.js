$(function(){
  $('.select_wrap select').selectric();
  $('.select_wrap').each( function () {
      if( $(this).find('.selectric-wrapper').hasClass('selectric-disabled') ) $(this).addClass('disabled');
  });

  /*mode */
  $('.js_btn_mode').hover(function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
      },
      function(){
        $(this).removeClass('on');
        $(this).parent().find('.current').addClass('on');
      }
  );
  $('.js_btn_mode').on('click', function(){
    $(this).siblings().removeClass('current');
    $(this).addClass('current');
      if ($(this).hasClass('dev')) {
          $('.sidebar_nav').addClass('group');
      } else {
          $('.sidebar_nav').removeClass('group');
      }
  });

  /* tab */
  $('.js_tab > *').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });

  /* input style */
  $( "label input" ).checkboxradio();

    /* sort btn */
  $('.js_btn_sort').on('click',function(){
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  });

  /* detail tagle open/close */
  $('.js_toggle_detail').on('click',function(){
    $(this).parent().parent().parent().parent().find('.tb_detail_wrap').slideToggle(100);
    $(this).parent().parent().parent().parent().toggleClass('close');
  });

    /* top hamburger button */
    $('.js_ham').on('click',function(){
        $(this).toggleClass('on');
    });

    /* grid table msg box */
    $('.js_msgBox').each( function(){
        var tg = $(this).parent().find('.js_hasMsg');
        var top = tg.position().top;
        var left = tg.find('td:eq(2)').position().left;
        var h = tg.height() - 10;
        $(this).css({
            top : top,
            left: left,
            height: h
        });
    });

    /* env info pop */
    $('.js_popmsg_ck').on('click',function(){
        $(this).find('.popmsg_box').fadeToggle(100);
    }).on('mouseleave', function(){
        $(this).find('.popmsg_box').fadeOut(100);
    });

    // search button
    // $('.btn_search').click(function(){
    //     $('.tb_ctrl_search .select_wrap').css({border :'1px solid #313543'}).addClass('on');
    //     $('.selectric-wrapper, .tb_ctrl .tb_ctrl_search .select_wrap input').css({display: 'block'});
    //     $('.tb_ctrl_search .select_wrap > *').css({background: '#f8f9fb'})
    // });

    $('.btn_search').click(function(){
        if ($('.tb_ctrl_search .select_wrap').hasClass('on')) {
            $('.tb_ctrl_search .select_wrap').css({border :'0px solid #313543'}).removeClass('on');
            $('.tb_ctrl .tb_ctrl_search .select_wrap input').hide();
            $('.tb_ctrl_search .select_wrap > *').css({background: '#f5f6f9'})
        } else {
            $('.tb_ctrl_search .select_wrap').css({border :'1px solid #313543'}).addClass('on');
            $('.tb_ctrl .tb_ctrl_search .select_wrap input').show();
            $('.tb_ctrl_search .select_wrap > *').css({background: '#f8f9fb'});
        }
    })

    // $('.select_wrap input').click(function(){
    //     $('.select_wrap input').hide();
    //     $('.tb_ctrl_search .select_wrap').css({border :'0px solid #313543'});
    //     $('.tb_ctrl_search .select_wrap > *').css({background: '#f5f6f9'})
    // })

    // SECLOUD 추가 Jquery
    $(".pop_wrap").draggable();

    $('.selectric-scroll ul li').click(function(){
        $('.tb_pop_toggle tr').show();
    });

    $('#popupAddTask .btn_action, #popupAddTask .btn_pop_close').click(function(){
        $('.tb_pop_toggle tr').hide();
    });
});

/* nav */
function leftNavi() {
  $('.js_nav li').each(function () {
    if ($(this).children('ul').length) $(this).addClass('hasChild');

    if ($(this).hasClass('on')) $(this).parent().parent('li').addClass('on open');
    if ($(this).hasClass('on')) $(this).parent().parent().parent().parent('li').addClass('on open');

    $(this).children('a').on('click', function(){
      $(this).parent().siblings().children('ul').slideUp(150);
      $(this).next('ul').slideDown(150);
      $(this).parent().siblings().removeClass('open');
      $(this).parent('li').addClass('open');
    });
  });
}

/* env sortable */
function sortInit(){
    $(".tb_env tbody").sortable({
        cursor: 'move',
        axis: 'y',
        handle: '.js_btn_sortable'
    }).disableSelection();

    $('.js_btn_sortable').on('mousedown', function(){
        $(this).addClass('on');
    }).on('mouseleave', function(){
        $(this).removeClass('on');
    });
}

/* dropdown */
$.fn.dropDownBox = function(options) {
    return this.each(function() {
        var $obj = $(this),
            $btn = $obj.find(".js_dropdown_btn"),
            $list = $obj.find(".js_dropdown_list");
        // 상태초기화
        function reset() {
            $(".js_dropdown").each(function () {
                $(this).removeClass('active');
                $(this).find('.js_dropdown_list').slideUp(50);
            });
        }

        $btn.on("click", function(e) {
            if (!$obj.hasClass("active")) {
                reset();
                $obj.addClass("active");
                $list.slideDown(50);
            } else { reset(); }

            $(document).on("click", function () {
                reset();
                $(document).unbind("click");
            });

            // 이벤트 방지
            e.stopPropagation();
        });

    });
};

function num(){
    $('.num0').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '    <path d="M33.4,34.7c0,4.8-1.6,8.7-4.8,11.5c-2.9,2.6-6.6,3.9-11,3.9c-4.4,0-8-1.3-11-3.9c-3.2-2.8-4.8-6.6-4.8-11.5V15.3c0-4.8,1.6-8.7,4.8-11.5C9.5,1.3,13.2,0,17.5,0c4.4,0,8,1.3,11,3.9c3.2,2.8,4.8,6.6,4.8,11.5V34.7z M22,34.7V15.3c0-1.7-0.4-2.9-1.2-3.8c-0.8-0.9-1.9-1.3-3.2-1.3c-1.3,0-2.4,0.4-3.2,1.3c-0.9,0.9-1.3,2.1-1.3,3.8v19.4c0,1.7,0.4,2.9,1.3,3.8c0.9,0.9,1.9,1.3,3.2,1.3c1.3,0,2.4-0.4,3.2-1.2C21.6,37.7,22,36.4,22,34.7z"/>\n' +
        '</svg>'
    );
    $('.num1').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M25.9,49.6H14.5V12.5L4,21.6V9.5l10.5-9.1h11.3V49.6z"/>\n' +
        '</svg>'
    );
    $('.num2').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M33.4,49.6H1.8V39.4L19.6,20c1.7-1.8,2.5-3.5,2.5-5.2c0-3-1.5-4.6-4.4-4.6c-1.3,0-2.3,0.3-3,0.9c-1,0.8-1.5,2.1-1.5,3.9H1.8c0-4.7,1.6-8.4,4.7-11.1C9.4,1.3,13.2,0,17.7,0c4.6,0,8.4,1.3,11.4,4c2.9,2.7,4.4,6.3,4.4,10.8c0,2.4-0.5,4.6-1.5,6.4c-0.8,1.4-2.3,3.3-4.6,5.7L15.6,39.4h17.8V49.6z"/>\n' +
        '</svg>'
    );
    $('.num3').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M34.1,34.9c0,4.9-1.6,8.7-4.9,11.4c-3,2.5-6.8,3.7-11.5,3.7c-4.6,0-8.3-1.2-11.3-3.5c-3.4-2.7-5.1-6.7-5.1-11.9h11.3c0,1.7,0.5,2.9,1.4,3.8c0.9,0.9,2.2,1.3,3.6,1.3c1.6,0,2.8-0.4,3.7-1.3c0.9-0.9,1.3-2.2,1.3-4c0-1.5-0.5-2.8-1.5-3.7c-1-1-2.2-1.5-3.8-1.5h-1.6v-9.8h1.6c1.6,0,2.7-0.5,3.5-1.4c0.8-0.9,1.2-2,1.2-3.2c0-1.5-0.4-2.7-1.3-3.5c-0.9-0.8-1.9-1.2-3.2-1.2c-1.2,0-2.3,0.4-3.2,1.2c-0.9,0.8-1.3,2-1.3,3.4H1.9c0-4.5,1.5-8.1,4.5-10.8c3-2.7,6.8-4,11.3-4c4.6,0,8.3,1.4,11.3,4.1c3,2.7,4.5,6.2,4.5,10.5c0,2.5-0.5,4.6-1.6,6.2c-0.8,1.3-2,2.4-3.5,3.4c1.7,1.2,3,2.5,3.9,3.8C33.5,29.9,34.1,32.2,34.1,34.9z"/>\n' +
        '</svg>'
    );
    $('.num4').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M35,43.1h-3.7v6.5H20.5v-6.5H0.1V32.3L16.4,0.4h12.4L12.6,32.3h7.9v-6.5h10.8v6.5H35V43.1z"/>\n' +
        '</svg>'
    );
    $('.num5').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M33.4,32.8c0,3.1-0.3,5.6-0.9,7.5c-0.6,1.9-1.8,3.7-3.6,5.5c-1.2,1.2-2.8,2.2-4.7,3c-1.9,0.8-4.2,1.2-6.7,1.2c-2.6,0-4.9-0.4-6.9-1.2c-2-0.8-3.6-1.8-4.8-3.1c-1.6-1.6-2.7-3.3-3.3-5.2c-0.6-1.9-0.9-3.8-0.9-5.9h11.3c0.2,1.7,0.6,3,1.4,3.9c0.7,0.9,1.8,1.3,3.2,1.3c1.3,0,2.4-0.4,3.3-1.3c0.9-0.9,1.3-2.8,1.3-5.6c0-2.6-0.4-4.4-1.2-5.4c-0.8-1-2-1.6-3.5-1.6c-1.5,0-2.6,0.4-3.4,1.2c-0.5,0.5-0.9,1.2-1.3,2.3H2.4V0.4h30v10.2H12.7v7.6c0.6-0.5,1.5-0.9,2.7-1.3c1.2-0.4,2.5-0.6,3.9-0.6c2,0,3.9,0.3,5.5,0.9c1.6,0.6,3,1.5,4,2.5c1.8,1.8,3.1,3.9,3.8,6.3C33.2,27.7,33.4,30,33.4,32.8z"/>\n' +
        '</svg>'
    );
    $('.num6').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M33.9,34.2c0,5-1.6,9-4.8,11.8c-3,2.7-6.8,4-11.5,4c-4.6,0-8.4-1.3-11.5-4c-3.3-2.9-4.9-6.8-4.9-11.8c0-2.3,0.5-4.7,1.5-7.3c0.4-1.1,1.5-3.4,3.2-7l9.5-19.5h12.4L18,19.7c0.4-0.1,0.8-0.2,1.4-0.3c0.6,0,1-0.1,1.4-0.1c3.4,0,6.3,1.2,8.8,3.7C32.5,25.9,33.9,29.6,33.9,34.2z M22.6,34.2c0-1.7-0.5-3.1-1.4-4.1c-0.9-1-2.2-1.5-3.6-1.5c-1.4,0-2.6,0.5-3.6,1.5c-1,1-1.5,2.4-1.5,4.1c0,1.8,0.5,3.1,1.4,4.1c0.9,1,2.2,1.5,3.6,1.5c1.4,0,2.6-0.5,3.6-1.5C22.1,37.3,22.6,35.9,22.6,34.2z"/>\n' +
        '</svg>'
    );
    $('.num7').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M34.5,10.6l-15.3,39H6.7l15.3-39H11.6v7.7H0.8v-18h33.7V10.6z"/>\n' +
        '</svg>'
    );
    $('.num8').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M34.1,34.9c0,4.9-1.6,8.7-4.8,11.4c-2.9,2.5-6.8,3.7-11.7,3.7c-4.8,0-8.7-1.2-11.7-3.7c-3.2-2.7-4.8-6.5-4.8-11.4c0-2.6,0.7-4.9,2.1-7c0.8-1.1,1.9-2.3,3.5-3.6C5.2,23.2,4.1,22,3.4,21c-1.2-1.9-1.9-4-1.9-6.4c0-4.5,1.6-8.1,4.8-10.8C9.4,1.3,13.1,0,17.6,0c4.4,0,8.1,1.3,11.2,3.8c3.2,2.7,4.8,6.3,4.8,10.8c0,2.3-0.6,4.4-1.9,6.3c-0.8,1.2-1.8,2.3-3.2,3.5c1.6,1.3,2.7,2.5,3.5,3.5C33.4,29.9,34.1,32.2,34.1,34.9z M22.8,34.6c0-1.4-0.5-2.6-1.5-3.6c-1-1-2.2-1.5-3.7-1.5c-1.4,0-2.6,0.5-3.7,1.5c-1,1-1.5,2.2-1.5,3.6c0,1.4,0.5,2.6,1.5,3.6c1,1,2.2,1.5,3.7,1.5c1.4,0,2.6-0.5,3.7-1.5C22.3,37.3,22.8,36.1,22.8,34.6z M22.3,15c0-1.3-0.4-2.5-1.3-3.4c-0.9-0.9-2-1.4-3.3-1.4c-1.3,0-2.5,0.5-3.4,1.4c-0.9,0.9-1.3,2-1.3,3.4c0,1.3,0.4,2.5,1.3,3.4c0.9,0.9,2,1.4,3.4,1.4c1.3,0,2.5-0.5,3.3-1.4C21.8,17.4,22.3,16.3,22.3,15z"/>\n' +
        '</svg>'
    );
    $('.num9').html(
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 50" style="enable-background:new 0 0 35 50;" xml:space="preserve">\n' +
        '<path d="M34.1,15.8c0,2.3-0.5,4.7-1.5,7.3c-0.4,1.1-1.5,3.4-3.2,7l-9.5,19.5H7.5l9.7-19.3c-0.4,0.1-0.8,0.2-1.4,0.3c-0.6,0-1,0.1-1.4,0.1c-3.4,0-6.3-1.2-8.8-3.7c-2.9-2.8-4.3-6.5-4.3-11.1c0-5,1.6-9,4.8-11.8c3-2.7,6.8-4,11.5-4c4.6,0,8.4,1.3,11.5,4C32.5,6.9,34.1,10.8,34.1,15.8z M22.8,15.8c0-1.7-0.5-3.1-1.4-4.1c-0.9-1-2.2-1.5-3.6-1.5c-1.4,0-2.6,0.5-3.6,1.5s-1.5,2.4-1.5,4.1c0,1.8,0.5,3.1,1.4,4.1c0.9,1,2.2,1.5,3.6,1.5c1.4,0,2.6-0.5,3.6-1.5C22.3,18.9,22.8,17.6,22.8,15.8z"/>\n' +
        '</svg>'
    );
    $('.numComma').html(
        '<svg class="comma" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 62" style="enable-background:new 0 0 20 62;" xml:space="preserve">\n' +
        '<path d="M16.3,49.8H3.9V37.3h12.5V49.8z"/>\n' +
        '</svg>'
    );
    $('.numSlash').html(
        '<svg class="slash" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 62" style="enable-background:new 0 0 20 62;" xml:space="preserve">\n' +
        '<path d="M21.2,1.8L3.1,49.6H1.5L19.4,1.8H21.2z"/>\n' +
        '</svg>'
    );
}


$(function() {
    $(".js_dropdown").dropDownBox();
    sortInit();
    leftNavi();
    num();
});