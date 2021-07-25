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
        $('.card-1').css("opacity","50%");
        $("#card-text-1").show();
       
    }).mouseout(function(){
        $('.card-1').css("opacity","100%");
        $("#card-text-1").hide(200);
    });
    $('.card-2').mouseover(function(){
        $('.card-2').css("opacity","80%");
        $("#card-text-2").show();
       
    }).mouseout(function(){
        $('.card-2').css("opacity","100%");
        $("#card-text-2").hide(200);
    });
    $('.card-3').mouseover(function(){
        $('.card-3').css("opacity","50%");
        $("#card-text-3").show();
       
    }).mouseout(function(){
        $('.card-3').css("opacity","100%");
        $("#card-text-3").hide(200);
    });
    $('.card-4').mouseover(function(){
        $('.card-4').css("opacity","50%");
        $("#card-text-4").show();
       
    }).mouseout(function(){
        $('.card-4').css("opacity","100%");
        $("#card-text-4").hide(200);
    });

});