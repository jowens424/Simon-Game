var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//* add start variables
var started = false;
var level = 0;

//* start the game

$(document).keypress(function(){
  if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
  }
  })

//* create function to identify the clicked button

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  //* call the answer checking function

  checkAnswer(userClickedPattern.length-1);
});

//* check that the user's answer matches generated pattern

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  console.log("success");
} if (userClickedPattern.length === gamePattern.length){
  console.log("success");
} else {
  console.log("Game Over");
}
}
//*generate random selection, count level number

function nextSequence() {
  level ++;
  $("level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomChosenColor);
}



//*control sound for different variables

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//*create function to simulate pressing of button

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  }
