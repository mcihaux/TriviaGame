var number = 30;
var intervalid;
var userclick = 100;
var unclicked = 10; 
var wrong, select = 0;
var correct = 0;
var totalcorrect = 0;
var totalincorrect = 0;


function run(){
  intervalid = setInterval(decrement, 1000);
  
}

if(userclick==100){   
        setTimeout(function() {
        var queryString = "?Correct: " + totalcorrect + "& Incorrect: " + totalincorrect+ "& Unanswered:" + unclicked;
        window.location.href = "endpage.html" + queryString;
         }, 25000);
}
$(".form-check-input").on("click", function(){

userclick=($(this).attr('value'));


console.log(userclick);


if (userclick=="ans"){
  correct=1;
  unclicked = unclicked-1;
  totalcorrect = totalcorrect + correct;
  totalincorrect = totalincorrect;
  
 
           
        setTimeout(function() {
        var queryString = "?Correct: " + totalcorrect + "& Incorrect: " + totalincorrect+ "& Unanswered:" + unclicked;
        window.location.href = "endpage.html" + queryString;
         }, 25000);

 
  
}else if(userclick=="done"){

	totalcorrect = totalcorrect;
  	totalincorrect = totalincorrect;      
        setTimeout(function() {
        var queryString = "?Correct: " + totalcorrect + "& Incorrect: " + totalincorrect+ "& Unanswered:" + unclicked;
        window.location.href = "endpage.html" + queryString;
         }, 0);

	
	
	


}




else{
  wrong = 1;
  totalincorrect = totalincorrect + wrong;
  totalcorrect = totalcorrect;
  unclicked = unclicked-1;
        setTimeout(function() {

        var queryString = "?Correct: " + totalcorrect + "& Incorrect: " + totalincorrect + "& Unanswered:" + unclicked;
        window.location.href = "endpage.html" + queryString;
            }, 25000);
        endpage();
  

} 

 
}); 


function endpage()
{   
    
        Window.location("endpage.html");
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

