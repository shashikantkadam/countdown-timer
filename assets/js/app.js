var cl = console.log;
var countdown = document.getElementById("countdowntimer");

function countdowntimer(){
	var crrdate = new Date();
	var Birthdate = new Date(2022,11,26);
	var diff = Birthdate.getTime() - crrdate.getTime();
	// cl(diff)
	var days = Math.floor (diff/(1000*60*60*24));
	var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
	var minute =  Math.floor((diff%(1000*60*60))/(1000*60));
	var second =  Math.floor((diff%(1000*60))/(1000));

	if(hours > 12){
		session = "pm";
		hours = hours - 12;
	}
	
	
	debugger
	hours = addZerotoTime(hours);
	minute = addZerotoTime(minute);
	second =addZerotoTime(second);
countdown.innerHTML = `${days} ${hours}:${minute}:${second}`;

}
setInterval(countdowntimer,1000);
countdowntimer();
function addZerotoTime(time){
		if(time<10){
			time = "0" + time;
			return time;
		}else{
			return time
		}
		
		
	}