//script for import start!! 다른 html 문서를 가져오기 위한 스크립트 시작
window.addEventListener('load', function () {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function (el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});
$(function(){
    // category 아코디언 
    $('.category-accordion .detail').eq(0).show()
    $('.category-accordion .title').click(function(){
        $(this).next().stop().slideToggle()
        $(this).siblings('.category-accordion .title').next().stop().slideUp()
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');  
    })

    // Recent Search result

    $('.search-recent .btn-clear').click(function(){
        $(this).parent().hide();
        // $(this).parent().slideUp(150);
        // $(this).parent().fadeOut(150);
    })
    $('.search-recent .btn-all-clear').click(function(){
        $('.search-recent .item').hide();
    })
    // Cart Items
    $('.cart-content .btn-all-clear').click(function(){
        $('.cart-item').hide();
    })
    $('.cart-content .btn-clear').click(function(){
        $(this).parent().parent().hide();
    })

    $('.category-navigation a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })


    // front slider
    $('.front-slider').slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000
    });

    // wish
    $('.wish').click(function(){
        $(this).toggleClass('on');
    })

    // main tab 
    $('.tab-btn div').click(function(){
        let idx = $(this).index();
        $('.tab-btn div').removeClass('active');
        $('.tab-btn div').eq(idx).addClass('active');
        $('.tab-content > div').hide();
        $('.tab-content > div').eq(idx).show();


    })
    
})


