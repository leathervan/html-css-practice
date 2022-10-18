window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab_item");
    tabs.forEach(elem => {
        elem.addEventListener("click", () => {
            if (!elem.classList.contains("tab_item_active")) {
                elem.classList.add("tab_item_active");
            }
            else elem.classList.remove("tab_item_active");
        });
    });

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<div class="slider_arrow slider_prev"><i class="fa-solid fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider_arrow slider_next"><i class="fa-solid fa-chevron-right"></i></div>'   
     });

     $('#buy').on('click',() =>{
        $('.modal').addClass('modal_active');
        $('body').css('overflow','hidden');
     });

     $('.modal_wrap').children('i').on('click',() =>{
        $('.modal').removeClass('modal_active');
        $('body').css('overflow','visible');
     });

     $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top
        }, 600);
        e.preventDefault();
        return false;
      });

      $('#promo_play').on('click',() =>{
        $('#video').get(0).play();
        $('#video').attr('controls','controls');
        $('#promo_play').css('display','none');
     });

     $('#video').on('ended',function(){
        $('#promo_play').css('display','block');
        $('#video')[0].load();
      });
});