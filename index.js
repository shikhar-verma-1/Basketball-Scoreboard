// DISPLAY DECLARATION FOR HOME(1) AND GUEST(2)
let scoreDisplay1 = document.querySelector("#scorecard-1");
let scoreDisplay2 = document.querySelector("#scorecard-2");

//INITIALIZING SCORE 1 & 2 TO ZERO
let score1 = 0 ;
let score2 = 0 ;

//HOME BUTTONS
let score_11 = document.querySelector("#score1-1");
let score_21 = document.querySelector("#score2-1");
let score_31 = document.querySelector("#score3-1");

//GUEST BUTTONS
let score_12 = document.querySelector("#score1-2");
let score_22 = document.querySelector("#score2-2");
let score_32 = document.querySelector("#score3-2");

//HOME BUTTON FUNCTIONS
score_11.addEventListener("click",function(){
    score1 += 1;
    scoreDisplay1.textContent = score1;
    
});

score_21.addEventListener("click",function(){
    score1 += 2;
    scoreDisplay1.textContent = score1;
});

score_31.addEventListener("click",function(){
    score1 += 3;
    scoreDisplay1.textContent = score1;
});


//GUEST BUTTON FUNCTIONS
score_12.addEventListener("click",function(){
    score2 += 1;
    scoreDisplay2.textContent = score2;
});

score_22.addEventListener("click",function(){
    score2 += 2;
    scoreDisplay2.textContent = score2;
});

score_32.addEventListener("click",function(){
    score2 += 3;
    scoreDisplay2.textContent = score2;
});

//NEW GAME DECLARATOIN AND FUNCTION
let newGame = document.querySelector("#ng-btn");

newGame.addEventListener("click",function(){
    scoreDisplay1.textContent = 0 ; 
    scoreDisplay2.textContent = 0 ; 
    score1 = 0 ;
    score2 = 0 ; 
})

