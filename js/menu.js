$(function(){
    $('.menu').click(function(){
        $('.menu').toggleClass("active")
        
        if($('.menu').hasClass("active")){
            $('.menu2').show()
            $('.menu img').attr('src','img/Layer 9 copy 2.png')
        }else{
            $('.menu2').hide()
            $('.menu img').attr('src','img/Layer 10.png')
        }
    });

});