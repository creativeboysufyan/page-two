$(document).ready(function(){

	$(window).scroll(function(){
		
		if($(this).scrollTop() > 30 ){
			$(".bg").addClass("background").css("transform"," translateY(0px)");
		
		}

		if($(this).scrollTop() < 85 ){
			$(".bg").removeClass("background").css("transform"," translateY(0px)");
		}
		
		var found = $(".bg").find(".background");
		if(found){
			$(this).css("backgorund","red");
		}
		
	})
	
	
});
