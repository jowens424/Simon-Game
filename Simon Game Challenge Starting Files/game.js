var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//* create function to identify the clicked button

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);

  console.log(userClickedPattern);

  playSound(userChosenColor);

  animatePress(userChosenColor);
});

//*generate random selection

function nextSequence() {
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
