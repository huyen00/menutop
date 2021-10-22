/* xử lý sự kiện bật tắt volume */
$(document).ready(function(){
    $('.fa-volume-up').click(function(event){
        $('.fa-volume-up').hide();
        $('.fa-volume-mute').show();
    });
    $('.fa-volume-mute').click(function(event){
        $('.fa-volume-up').show();
        $('.fa-volume-mute').hide();
    });
});

/* xử lý sự kiện bật tắt xoay */
$(document).ready(function(){
    $('.rotate').click(function(event){
        $('.rotate').hide();
        $('.lock').show();
    });
    $('.lock').click(function(event){
        $('.rotate').show();
        $('.lock').hide();
    });
});

/* xử lý sự kiện show/hide menu login */
$(document).ready(function(){
    $('#menu-login .sub-item').hide();
    $('.menu-login-right').click(function(event){
        $('#menu-login .sub-item').toggle();
        
    });
   
});

/*Xử lý sự kiện nút share */
$(document).ready(function(){
    $('#share').click(function(event){
        $('.form-share').show();
        $('#menu-login .sub-item').hide();
        
    });
    $('.nen').click(function(event){
        $('.form-share').hide();
        
    });
});

