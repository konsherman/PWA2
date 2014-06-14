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
	$(".masterTooltip").hover(function(){
	var title=$(this).attr("title");
	$(this).data("tipText",title).removeAttr("title");
	$('<p class="tooltip"</p>')
	.text(title)
	.appendTo("body")
	.fadeIn("slow");
}, function(){
	$(this).attr("title",$(this).data("tipText"));
	$(".tooltip").remove();
}).mousemove(function(e){
	var mousex=e.pageX+20;
	var mousey=e.pageY+10;
	$(".tooltip")
	.css({top:mousey,left:mousex});
});