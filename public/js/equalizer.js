/* 전역변수 */
var i, html, interval;

/* 이벤트 선언 */
$("#btMake").click(maker);
$("#btReset").click(reset);

/* 이벤트 콜백 */
function maker() {
	html 	= '<div class="eq">';
	for(i=0; i<5; i++) html += '<div></div>';
	html += '</div>'; 
	$(".stage-wrap").append(html);
	clearInterval(interval);
	interval = setInterval(eq, 100);
}

function reset() {
	$(".stage-wrap").empty();
}


function eq() {
	for(i=0; i<$(".eq > div").length; i++) {
		var hei = Math.random() * 100;
		$(".eq > div").eq(i).css({"height": hei+"%"});
	}
}

/*
$(".box").click(function(){
	var n = $(this).index();
	alert("저는 " + n + " 번째 박스입니다.");
});
*/