$(document).ready(function(){
    alert("Hwelsadfj");
    $('.tabs .tabs-nav a').click(function(e) {  
    $('.tabs .tabs-nav a.current').removeClass('current');  
    $(this).addClass('current');  
    $('.tabs div:not(:hidden)').hide();  
    $(this.hash).show();  
    e.preventDefault;  
 });  
});
