var initalGridValue = 16;


$(document).ready(function() {
	initializeGrid();
});



/*************  function definitions  *************/

// changes the color of a grid square when mouse enters it
function changeColor() {
	$(".gridSquare").mouseenter(function() {
		$(this).css({"background-color" : "black"});
	});
}


// initializes a 16x16 grid
function initializeGrid() {
	var numSquares = initalGridValue * initalGridValue;     // number of grid squares to be made

	$(".gridSquare").remove();     // remove the previous grid squares

	for (var i=0; i < numSquares; i++)
	{
	$(".sketchpad").append("<div class='gridSquare'></div>");
	}

	$('.gridSquare').height(700 / initalGridValue);
	$('.gridSquare').width(700 / initalGridValue);
	$('.gridSquare').css({"background-color" : "#eee", 
						  "display" : "inline-block",
						  "border" : "0px",
						  "margin" : "0px",
						  "vertical-align" : "top"});

	changeColor();
}


// creates a new grid of user-specified size
function newGrid() {
	var gridSize = prompt("Enter the new grid size:");    // get size from user

	$(".gridSquare").remove();     // remove the previous grid squares

	var numSquares = gridSize * gridSize;     // number of grid squares to be made

	for (var i=0; i < numSquares; i++)
	{
	$(".sketchpad").append("<div class='gridSquare'></div>");
	}

	$('.gridSquare').height(700 / gridSize);
	$('.gridSquare').width(700 / gridSize);
	$('.gridSquare').css({"background-color" : "#eee", 
						  "display" : "inline-block",
						  "border" : "0px",
						  "margin" : "0px",
						  "vertical-align" : "top"});

	changeColor();
}