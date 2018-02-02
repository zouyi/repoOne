var answer = Math.round(Math.random()*100);
var score = 100;
var guessValue = document.getElementById("num");
var buttonValue = document.getElementById("guess");
var numDisplay =  document.getElementById("numdisplay");
var scoreBoard = document.getElementById("score");

buttonValue.addEventListener("click", function(){
    //guessValue = document.getElementById("num").value;
    
    var myNum = parseInt(guessValue.value);
    myNum = myNum || 0;
    console.log(myNum);  
    
    if (myNum == answer) {
       
       numDisplay.innerText=("holy cow you are a genius you must have a god dam IQ of 250");
       
   } else {
       
           if(myNum < answer) {
               
               numDisplay.innerText = "too small";
               
           } else  if (myNum > answer) {
               
               numDisplay.innerText = "too big";

           } else {
               
               numDisplay.innerText = "You lose";
               
           }
       
            score = score - 1;
            scoreBoard.innerText = score;
    }
       
});