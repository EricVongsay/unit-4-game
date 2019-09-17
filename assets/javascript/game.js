//variables
var targetNumber;
var wins=0;
var losses=0;
var score=0;

//giving value to crystals with an array of arrays
var crystals={crystal1: {value:0}, crystal2: {value:0}, crystal3: {value:0}, crystal4: {value:0}};




//functions

//random number between two numbers
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//initializing game
function startGame(){

    //setting target number between 19-120 everytime startGame() function is called
    targetNumber = randomNumber(19,120);

        console.log(targetNumber);

    //setting crystal values for each crystal randomly between 1-12
    crystals.crystal1.value=randomNumber(1,12);
    crystals.crystal2.value=randomNumber(1,12);
    crystals.crystal3.value=randomNumber(1,12);
    crystals.crystal4.value=randomNumber(1,12);

        console.log(crystals.crystal1.value);
        console.log(crystals.crystal2.value);
        console.log(crystals.crystal3.value);
        console.log(crystals.crystal4.value);

    //resetting score
    score=0;
    $(".targetScore").text(targetNumber);
    $(".liveScore").text(score);
    
    
}

//clicking the crystal function
function clicked(clickedCrystal){

    score+=clickedCrystal.value;

    $(".liveScore").text(score);

    //checking score conditions to change wins and losses
    if(score===targetNumber){
        wins++;
        $("#statusAlert").html("You win!");
        $("#winScore").text(wins);
        startGame();

    }else if(score > targetNumber){
        losses++;
        $("#statusAlert").html("You lose!");
        $("#lossScore").text(losses);
        startGame();
    }

    

}




startGame();
//calling the clicked crystal function with jQuery click
$("#crystal1").click(function(){
    clicked(crystals.crystal1);
})
$("#crystal2").click(function(){
    clicked(crystals.crystal2);
})
$("#crystal3").click(function(){
    clicked(crystals.crystal3);
})
$("#crystal4").click(function(){
    clicked(crystals.crystal4);
})


