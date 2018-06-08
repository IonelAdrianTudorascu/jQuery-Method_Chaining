$(document).ready(function() {
 	//revoves claas makeRed, adds class makeBorder on mouseenter
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");

 	});
 	//reverses above on mouseleave
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");

 	});
 	
 	//toggles paragraphs when either button is clicked
 	$("button").click(function(){
 	 $("p").slideToggle(2000);
 	});
});