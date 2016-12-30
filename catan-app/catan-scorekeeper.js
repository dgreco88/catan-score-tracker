console.log("CONNECTED");

// Add and remove points

var addp1 = document.getElementById('p1Add');
var removep1 = document.getElementById('p1Remove');
var addp2 = document.getElementById('p2Add');
var removep2 = document.getElementById('p2Remove');
var addp3 = document.getElementById('p3Add');
var removep3 = document.getElementById('p3Remove');
var addp4 = document.getElementById('p4Add');
var removep4 = document.getElementById('p4Remove');
var addp5 = document.getElementById('p5Add');
var removep5 = document.getElementById('p5Remove');
var addp6 = document.getElementById('p6Add');
var removep6 = document.getElementById('p6Remove');

var logScoresButton = document.getElementById('logScores');

// Player scores

var p1Display = document.getElementById('p1Display');
var p2Display = document.getElementById('p2Display');
var p3Display = document.getElementById('p3Display');
var p4Display = document.getElementById('p4Display');
var p5Display = document.getElementById('p5Display');
var p6Display = document.getElementById('p6Display');

// Player names

var p1Name = $(".p1Name").text();
var p2Name = $(".p2Name").text();
var p3Name = $(".p3Name").text();
var p4Name = $(".p4Name").text();
var p5Name = $(".p5Name").text();
var p6Name = $(".p6Name").text();

// Player starting scores

var p1Score = 2;
var p2Score = 2;
var p3Score = 2;
var p4Score = 2;
var p5Score = 2;
var p6Score = 2;
var gameOver = false;


// game score and number of players

var gameScore = 10;
var numberOfPlayers = 4;


// changes score upon selection

$("select#sel1.form-control.winningScore").change(function() {
    var scoreChange = {
        10: 10,
        12: 12,
        14: 14
    }
    gameScore = scoreChange[$(this).val()];
});

// jQuery to change Game text

$("#game")
  .change(function () {
    var gameDropdown = "";
    $( "select#game option:selected" ).each(function() {
      gameDropdown += $( this ).text() + ": ";
    });
    $("#gameSelected").text(gameDropdown);
  })
  .change();

// jQuery to change Map Version text

$("input.form-control.map").keyup(function() {
    var mapValue = $( this ).val();
    $( "span#mapVersion" ).text(mapValue);
  })
  .keyup();

// jQuery to change what score we're playing to

$( ".form-control.winningScore" ).change(function () {
    var scoreDropdown = "";
    $( "select.form-control.winningScore option:selected" ).each(function() {
      scoreDropdown += $( this ).text() + " ";
    });
    $("#gameScore").text(scoreDropdown);
  })
  .change();
  

// Stop name edit on Enter
$(".p1Name, .p2Name, .p3Name, .p4Name, .p5Name, .p6Name").on("keydown", function(e) {  
    if(e.keyCode === 13) {
        e.preventDefault();
    }
});


// hidden elements: p5 and p6, log score button
$(".p5Div, .p6Div").hide();
$("#logScores").hide();

function showButton(){
	$("#logScores").show();
}

// number of players
$("select#sel1.form-control.numberOfPlayers").change(function() {
 	var playerChange = {
        4: 4,
        5: 5,
        6: 6
    }
    numberOfPlayers = playerChange[$(this).val()];
});


// display players on form change

$("select#sel1.form-control.numberOfPlayers").change(function() {
	if(this.value === "5")
	{ 
	$(".p5Div").show(300);
	$(".p6Div").hide(300);
	}
	if(this.value === "6")
	{ 
	$(".p5Div, .p6Div").show(300);
	}
	if(this.value === "4")
	{ 
	$(".p5Div, .p6Div").hide(300);
	}
});


// p1 score

addp1.addEventListener("click", function() {
	if(!gameOver){
		p1Score = p1Score + 1;	
		if(p1Score === gameScore) {
			var p1Name2 = $(".p1Name").html();
			document.getElementById("winnerMessage").innerHTML = p1Name2 + " wins!";
			showButton();
			gameOver = true;
	}
		p1Display.textContent = p1Score;
	}
});


removep1.addEventListener("click", function(){
	if(!gameOver){
		p1Score = p1Score - 1;	
		if(p1Score === gameScore) {
			gameOver = true;
	}
		p1Display.textContent = p1Score;
	}
});

// p2 score

addp2.addEventListener("click", function(){
	if(!gameOver){
		p2Score = p2Score + 1;	
		if(p2Score === gameScore) {
			var p2Name2 = $(".p2Name").html();
			document.getElementById("winnerMessage").innerHTML = p2Name2 + " wins!";
			gameOver = true;
	}
		p2Display.textContent = p2Score;
	}
});

removep2.addEventListener("click", function(){
	if(!gameOver){
		p2Score = p2Score - 1;	
		if(p2Score === gameScore) {
			gameOver = true;
	}
		p2Display.textContent = p2Score;
	}
});

// p3 score

addp3.addEventListener("click", function(){
	if(!gameOver){
		p3Score = p3Score + 1;	
		if(p3Score === gameScore) {
			var p3Name2 = $(".p3Name").html();
			document.getElementById("winnerMessage").innerHTML = p3Name2 + " wins!";
			gameOver = true;
	}
		p3Display.textContent = p3Score;
	}
});

removep3.addEventListener("click", function(){
	if(!gameOver){
		p3Score = p3Score - 1;	
		if(p3Score === gameScore) {
			gameOver = true;
	}
		p3Display.textContent = p3Score;
	}
});

// p4 score

addp4.addEventListener("click", function(){
	if(!gameOver){
		p4Score = p4Score + 1;		
		if(p4Score === gameScore) {
			var p4Name2 = $(".p4Name").html();
			document.getElementById("winnerMessage").innerHTML = p4Name2 + " wins!";
			gameOver = true;
	}
		p4Display.textContent = p4Score;
	}
});

removep4.addEventListener("click", function(){
	if(!gameOver){
		p4Score = p4Score - 1;	
		if(p4Score === gameScore) {
			gameOver = true;
	}
		p4Display.textContent = p4Score;
	}
});

// p5 score

addp5.addEventListener("click", function(){
	if(!gameOver){
		p5Score = p5Score + 1;	
		if(p5Score === gameScore) {
			var p5Name2 = $(".p5Name").html();
			document.getElementById("winnerMessage").innerHTML = p5Name2 + " wins!";			
			gameOver = true;
	}
		p5Display.textContent = p5Score;
	}
});

removep5.addEventListener("click", function(){
	if(!gameOver){
		p5Score = p5Score - 1;	
		if(p5Score === gameScore) {
			gameOver = true;
	}
		p5Display.textContent = p5Score;
	}
});

// p6 score

addp6.addEventListener("click", function(){
	if(!gameOver){
		p6Score = p6Score + 1;	
		if(p6Score === gameScore) {
			var p6Name2 = $(".p6Name").html();
			document.getElementById("winnerMessage").innerHTML = p6Name2 + " wins!";
			gameOver = true;
	}
		p6Display.textContent = p6Score;
	}
});

removep6.addEventListener("click", function(){
	if(!gameOver){
		p6Score = p6Score - 1;	
		if(p6Score === gameScore) {
			gameOver = true;
	}
		p6Display.textContent = p6Score;
	}
});

// test winning function to display message - Player 6

// function winningPlayer() {
// 	if(p6Score === gameScore) {
// 		var winnerSpan = document.createElement("span"); 
//   		var newWinnerSpan = document.createTextNode("Hi there and greetings!"); 
//   		winnerSpan.appendChild(newWinnerSpan);

//   		var winnerMessage = document.getElementById("winnerMessage"); 
//   		document.body.insertAfter(winnerSpan, winnerMessage); 
// 		}
// 	};



// reset scores

// resetButton.addEventListener("click", function(){
// 	p1Score = 2;
// 	p2Score = 2;
// 	p3Score = 2;
// 	p4Score = 2;
// 	p5Score = 2;
// 	p6Score = 2;
// 	p1Display.textContent = 2;
// 	p2Display.textContent = 2;
// 	p3Display.textContent = 2;
// 	p4Display.textContent = 2;
// 	p5Display.textContent = 2;
// 	p6Display.textContent = 2;
// 	gameOver = false;
// });




  

