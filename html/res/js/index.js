// JavaScript Document
$(function(){  
	$(".nav .left li").bind({
		"hover":function(){$(this).find("ul").toggle();},
		"mousemove":function(){$(this).find("ul").prev().addClass("cur");},
		"mouseout":function(){$(this).find("ul").prev().removeClass("cur");}
	});
});
function init(){
	$(".section_body").height($(window).height()-160);	
}