var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//* create function to identify the clicked button

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  console.log(userChosenColor);
});

//*animate button and generate random selection

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
var randomChosenColor = buttonColors[randomNumber];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();
}