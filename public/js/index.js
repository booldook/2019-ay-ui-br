/* 
jQuery 자식/자손 선택자
1.   $(".nav-wrap > div") -> 자식
1-1. $(".nav-wrap").children("div") -> 자식
2.   $(".nav-wrap div") -> 자손
2-2. $(".nav-wrap").find("div") -> 자손
*/
$(".nav-wrap").children("div").mouseenter(function(){
	$(".sub-wrap").stop().slideDown(300);
});
$("header").mouseleave(function(){
	$(".sub-wrap").stop().slideUp(300);
});