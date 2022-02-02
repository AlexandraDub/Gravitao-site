$(document).ready(function() { 
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:1200,
        easing:'_linear_',
        infinite: true,
        initialSlide: 1,
        autoplay: true,
        touchMove: false,
        centerMode: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    autoplay: false,
                    variableWidth: false,
                    easing: 'ease',
                    respondTo: 'min',
                }
            }
        ]
    });
   // $('.slider').slick('unslick');


   //Nav  Toggle//
   let nav = $("#nav");
   let navToggle = $("#navToggle");
   navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show")
   });
});