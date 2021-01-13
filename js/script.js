$(function () {

    $('.slider').slick({
        arrows: true,
        autoplay: true,
        /* ポイントここから～ */
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 5000,
        /* ～ここまで */
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibilitydots: true,
    });


    var nav = jQuery('.nav'), //変数の宣言（ヘッダーナビ）
        offset = nav.offset().top; // ドキュメントのトップを起点としたヘッダーナビの位置（Y座標）を取得
    jQuery(window).scroll(function () { //スクロール時に引数のfunctionを実行
        var scroll = $(this).scrollTop(); //要素のスクロール位置（Y座標）を取得
        if (scroll >= offset) { //スクロール位置の値がヘッダーナビの位置の値以上になった時に
            nav.addClass('fixed'); //ヘッダーナビにClass(fixed)を追加
        } else { //それ以外（スクロール位置の値がヘッダーナビの位置の値未満）は
            nav.removeClass('fixed'); //ヘッダーナビからClass(fixed)を削除
        }
    });

})