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
// ------MODAL----

$(".modalClick").on("click", function(event){
	console.log("click")
	event.preventDefault();
	$("#overlay");
		.fadeIn();
		.find("#modal");
		.fadeIn();
});
$(".close").on("click", function(event){
	event.preventDefault();
	$("#overlay");
		.fadeOut();
		.find("#modal");
		.fadeOut();
});

// fading status radio buttons----
$("mystatus").mouseover(function(){
	$(this).fadeTo(100,.3);
});
$(".mystatus").mouseOut(function(){
	$(this).fadeTo(100,1);
});

// -----LOGIN----

$("#signinButton").click(function(){
	var user=$("#user").val();
	var pass=$("#pass").val();
	console.log("this Notifies you if the password is working");
	$.ajax({
		url:"xhr/login.php",
		type:"post",
		dataType:"json",
		data:{
			username:user,
			password:pass
		},
		success:function(response){
			console.log("test user");
			if(response.error){
				alert(response.error);
			}else{
				window.location.assign("account.html");
			};
		}
	});

});






