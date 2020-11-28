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
});

//* create function to identify the clicked button

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);

  animatePress(userChosenColor);

  //* call the answer checking function

  checkAnswer(userClickedPattern.length-1);
});

//* check that the user's answer matches generated pattern

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
 if (userClickedPattern.length === gamePattern.length){
  setTimeout(function () {
    nextSequence();
  }, 1000);
}
} else {
  playSound("wrong");
  $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
}
}
//*trigger game over screen

//*generate random selection, count level number

function nextSequence() {
  //*reset userClickPattern for next level. Level counter was not working, updated.
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

//*eliminated last fadeOut as buttons would disappear on start of game
$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
playSound(randomChosenColor);
}

//*create function to simulate pressing of button

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  }

//*control sound for different variables

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//* reset the game
    function startOver() {
      level = 0;
      gamePattern = [];
      started = false;
    }
