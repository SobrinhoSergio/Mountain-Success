jQuery(document).ready(function($){

    /*$(window).scroll(function(){

        if($(this).scrollTop()>100){
            $('.topo').fadeIn();
        }

        else{
            $('.topo').fadeOut();
        }
    });*/

    $('.topo').click(function(){
        $('body, html').animate({

            scrollTop: 0
        }, 600);

        return false;
    });

});

