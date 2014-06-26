$(document).ready(function(){
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
// // ------ ADD PROJECT MODAL----

$(".modalClick").on("click", function(event){
	console.log("click")
	event.preventDefault();
	$("#overlay")
		.fadeIn()
		.find("#modal")
		.fadeIn();
});
$(".close").on("click", function(event){
	event.preventDefault();
	$("#overlay")
		.fadeOut()
		.find("#modal")
		.fadeOut();
});

// fading status radio buttons
// $("mystatus").mouseover(function(){
// 	$(this).fadeTo(100,.3);
// });
// $(".mystatus").mouseOut(function(){
// 	$(this).fadeTo(100,1);
// });

// // -----LOGIN----

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

$.getJSON("xhr/check_login.php", function(data){
	console.log(data);
	$.each(data, function(key, val){
		console.log(val.first_name);
		$(".userid").html("Welcome User: " + val.first_name);
	})
});


// ----------LOGOUT----------
$("#logOut").click(function(e){
	e.preventDefault;
	$.get("xhr/logout.php", function(){
		window.location.assign("index.html")
	})
});



// ----------REGISTER--------------------

$("#register").on("click", function(){
	var firstname= $("#first").val(),
		lastname= $("#last").val(),
		username=$("#userName").val(),
		email=$("#email").val(),
		password = $("#password").val();
		console.log(firstname+" "+lastname+" "+userName+" "+password);
	$.ajax({
		url:"xhr/register.php",
		type:"post",
		dataType:"json",
		data:{
			firstname:firstname,
			lastname:lastname,
			username:username,
			email:email,
			password:password
		},
		success:function(response){
			if(response.error){
				alert(response.error);
			}else{
				window.location.assign("account.html");
			}
		}
	});
});

// -----------------ADD PROJECT------------ \\

$("#addButton").on("click",function(e){
	e.preventDefault();
	var projName=$("#projectName").val(),
		projDesc = $("#projectDescription").val(),
		projDue = $("#projectDueDate").val(),
		status = $("input[name='projectStatus']:checked").prop("id");

		$.ajax({
			url:"xhr/new_project.php",
			type:"post",
			dataType:"json",
			data:{
				projectName: projName,
				projectDescription: projDesc,
				dueDate:projDue,
				status:status
			},
			success:function(response){
				console.log("testing for success");
				if(response.error){
					alert(response.error);
				}else{
					window.location.assign("account.html");
				};
			}
		});
});
// ------ADDING PROJECT----------
var projects = function (){
	$.ajax({
		url:"xhr/get_projects.php",
		type:"get",
		dataType:"json",
		success:function(response){
			if(response.error){
				console.log(response.error)
			}else{
				for(var i=0, j=response.projects.length; i < j; i++){
					var result = response.projects[i];
					$(".projects").append(
						'<div id="sortable" class="ui-state-default">'
						+"<input class='projectid' type='hidden' value='"+result.id + "'>" +"project Name:" + result.projectName+"<br>"+ "project Description: "+result.projectDescription + "<br>" + "project Statut:"+result.status+"<br>"+'<button class="deletebtn">Delete</button'+'</div> <br>'
						);
				};
				$(".deletebtn").on("click",function(e){
					var pid = $(this).parent().find(".projectid").val();
					console.log("test delete");
					$.ajax({
						url:"xhr/delete_project.php",
						data:{
							projectID:pid
						},
						type:"POST",
						dataType:"json",
						success:function(response){
							console.log("Testing for success");
							if(response.error){
								alert(response.error);
							}else{
								window.location.assign("account.html");
							}
						}
					});
				});//end delete
			}
		}
	});
}
projects();


// DRAG AND DROP
    $( "#sortable" ).sortable();//calling the sortable function 
    $( "#sortable" ).disableSelection();
    $(".mydatepicker").datepicker();

    $( document ).click(function() {
  	$( "#toggle" ).toggle( "puff" ); //toggle poof div
});









	


