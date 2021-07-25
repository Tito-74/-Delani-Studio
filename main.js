$(document).ready(function(){
    $('#design').click(function(){
        $('#design').hide();
        $('.info1').show();
    });
    $('#develop').click(function(){
        $('#develop').hide();
        $('.info2').show();
    });
    $('#products').click(function(){
        $('#products').hide();
        $('.info3').show();
    });
    $('.card-1').mouseover(function(){
        $('.card-1').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-1").show();
       
    }).mouseout(function(){
        $('.card-1').css("opacity","100%");
        $("#card-text-1").hide(200);
    });
    $('.card-2').mouseover(function(){
        $('#card-text-2').css({"background":"#3a3d4a"});
        $('.card-2').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-2").show();
       
    }).mouseout(function(){
        $('.card-2').css("opacity","100%");
        $("#card-text-2").hide(200);
    });
    $('.card-3').mouseover(function(){
        $('.card-3').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-3").show();
       
    }).mouseout(function(){
        $('.card-3').css("opacity","100%");
        $("#card-text-3").hide(200);
    });
    $('.card-4').mouseover(function(){
        $('.card-4').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-4").show();
       
    }).mouseout(function(){
        $('.card-4').css("opacity","100%");
        $("#card-text-4").hide(200);
    });
    $('.card-5').mouseover(function(){
        $('#card-text-5').css({"background":"#fff", "color":"black"});
        $('.card-5').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-5").show();
       
    }).mouseout(function(){
        $('.card-5').css("opacity","100%");
        $("#card-text-5").hide(200);
    });
    $('.card-6').mouseover(function(){
        $('#card-text-6').css({"background":"#fff", "color":"black"});
        $('.card-6').css({"font-size": "180%","opacity": "50%"});
        $("#card-text-6").show();
       
    }).mouseout(function(){
        $('.card-6').css("opacity","100%");
        $("#card-text-6").hide(200);
    });
    $('.card-7').mouseover(function(){
        $('.card-7').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-7").show();
       
    }).mouseout(function(){
        $('.card-7').css("opacity","100%");
        $("#card-text-7").hide(200);
    });
    $('.card-8').mouseover(function(){
        $('.card-8').css({"font-size": "200%","opacity": "50%"});
        $("#card-text-8").show();
       
    }).mouseout(function(){
        $('.card-8').css({"opacity": "100%"});
        $("#card-text-8").hide(200);
    });

});