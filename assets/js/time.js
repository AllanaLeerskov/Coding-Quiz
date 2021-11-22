/**set the time to zero*/
var timer = 76;
var timeCount;
/*start counting when quiz starts*/
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time:" + " " + timer;
       timer = timer;
        if (timer <= 0) {         
            clearInterval(timeCount);
              
            timeElement.textContent = timeReset;
             
        }
    }, 1000)
}
 
/*  start the timer and hide the quiz button*/
document.addEventListener("click", function (event) {
    if (event.target === btnElement) {
        wrapperElement.style.display = "none";
        setupTimer()
        displayQuestions();
    }

})

 
/**declare the index variable for the onclickHandler function**/
var i = 0;

/*display questions*/
function onclickHandler(event) {
     
    if(timer<=0){
        clearInterval(timeCount);
        divContEL.style.display="none";
        displayResult();
    }
    var answerText = event.target.textContent 
    if (answerText === questions[i].answer) {
        timer = timer;
        responseDiv.setAttribute("style", "color: green")
        responseDiv.textContent = "Correct";
    } else {

        responseDiv.setAttribute("style", "color: red")
        responseDiv.textContent = "Wrong";
        timer = timer - 15;
     }
    
      
     
    if (i < questions.length-1) {

      i++;

      setTimeout(function () {
      displayQuestions();
      responseDiv.textContent = "";
    }, 1000)
    }else {
        setTimeout(function () {
            responseDiv.textContent = "";
            displayResult();
            clearInterval(timeCount);
          
        }, 500)
    

        divContEL.innerHTML = '';
     }
     
    /* users final score */
    function displayResult() {
        finishDiv.style.visibility = "visible";
        timeElement.textContent = "Time:" + " " + timer;
        var HighScores = timer;
        localStorage.getItem(HighScores)
        finalScore.textContent = "Your finally score is: " + HighScores;
         localStorage.setItem("HighScores", HighScores)
 
    }
}
/* last page  */
function renderLastItem() {
    var yourScore = localStorage.getItem("HighScores");
     var yourInitial = localStorage.getItem("Initial");
     if (yourScore && yourInitial === "") {
        return
    }
    finishDiv.textContent = "";
    var finaPageEl = document.querySelector(".final-page");
    finaPageEl.style.visibility = "visible";
    var initialAndScore = document.querySelector("#initials");
    initialAndScore.value = yourInitial + ":" + " " + yourScore;

}
 
//* save scores */
document.addEventListener("submit", function (event) {
    event.preventDefault();
    var initialInput = document.querySelector("#enterInitial").value;
    if (initialInput === "") {
        errMsg.setAttribute("style", "color: red")
        errMsg.textContent = "Initial input field cannot be empty"
    } else {
        errMsg.textContent = "";
        localStorage.getItem(initialInput)
        localStorage.setItem("Initial", initialInput)
         renderLastItem()
    }

})
/* begining page when go back button is clicked */
function init() {
     location.reload();
 
}
/* reset */
function clearScore() {
    initialAndScore.value = "";
}

 