$(function(){
	navbarSelect();
	searchboxToggle();
	countDownTimer()
	doSetInterval();
});
function navbarSelect(){
	$(".store").click(function() {
		$(".splitLine>div").not($("#storeSel")).hide();
		$("#storeSel").toggle();
	});
	$(".service").click(function() {
		$(".splitLine>div").not($("#serviceSel")).hide();
		$("#serviceSel").toggle();
	});
}
function searchboxToggle(){
	$(".searchbox>div:first").mouseover(function(){//
		$("#searchSel").show();
	}).mouseout(function(){//
		$("#searchSel").hide();
	}).css("cursor","pointer");
	$("#searchSel span").click(function(){
		$("#searchSel").hide();
		if($(this).index()==0){
			$(".searchbox>div>span:first").show();
			$(".searchbox>div>span:last").hide();
		}
		else{
			$(".searchbox>div>span:first").hide();
			$(".searchbox>div>span:last").show();
		}
	});
	$(".searchbox>div>span:last").hide();
	$("#searchSel").hide().css("cursor","pointer");
}

function doSetInterval(){
	timer=setInterval(countDownTimer,1000);
}
function countDownTimer(){
	var showHour=$("#hour");
	var showMinute=$("#minute");
	var showSecond=$("#second");
	//
	var dateSys=new Date();
	var temp=dateSys.getTime();
	//console.debug(temp);
	temp=(1000*60*60*16+1463532201463)-temp;
	var date=new Date(temp);
	//console.debug(date);
	var hour=date.getHours();
	var minute=date.getMinutes();
	var second=date.getSeconds();
	// console.debug(hour);
	// console.debug(minute);
	// console.debug(second);

	showHour.html(hour);
	showMinute.html(minute);
	showSecond.html(second);
	if(hour==0 && minute==0 && second==0){
		clearInterval(timer);
	}
	
}