$(document).ready(function(){
    $('#menu').click(function(){
        $('this').toggleclass('fa-times');
        $('Header').toggleclass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeclass('fa-times');
        $('Header').removeclass('toggle');

    });

    //smooth scroling


    $('a[href*=*#*]').on('click',funtion(e){

        e.preventdefault();

        $('html, body') .animate({

            screenTop: $($('this').attr('herf')).offset().top,


        }500,
        'linear'
        )


    });

});

