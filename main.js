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

});