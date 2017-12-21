var number = 10;
var intervalid;
var userclick;
var wrong, select = 0;
var correct = 0;
var totalcorrect = 0;
var totalincorrect = 0;

function run(){
	intervalid = setInterval(decrement, 1000);
	
}

$(".form-check-input").on("click", function() {

userclick=($(this).attr('value'));

if (userclick=="ans"){
	correct=1;
	totalcorrect = totalcorrect + correct;
	console.log("this is correct " + correct);
	
	
}else{
	wrong = 1;
	totalincorrect = totalincorrect + wrong;
	console.log("this is incorrect " + wrong);
	

} 




});
function endpage()
{		
		$(document).ready(function() {
		console.log("hello");
        location.replace("endpage.html");
    	
});
	}

function decrement() {

	number--;


$("#shownumber").html(number);
if (number === 0) {
        //  ...run the stop function.
        stop();
        endpage();
        
 }

}
 function stop() {
      clearInterval(intervalid);
      
    }

run();




