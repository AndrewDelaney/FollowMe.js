// JavaScript Document

function followMe(){
	'use strict';
	
	//Variables regarding the DOM
	var followItem = document.getElementsByClassName('Sheep');
	var sheepCount = followItem.length;
	var iSheep = 0;
	var badSheep = 1;
	
	//Getting the coordinates
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	var windowX = window.innerWidth;
	var windowY = window.innerHeight;
	
	//Inverting the mouse coordinates
	var invertMouseX = windowX-mouseX;
	var invertMouseY = windowY-mouseY;
	
	//Determining which percentage of the screen the mouse is in
	var xPercent = Math.floor(mouseX/windowX*100);
	var yPercent = Math.floor(mouseY/windowY*100) + 6;
	
	//Just storing the value that is half the screen height and width
	var halfScreenx = windowX/2;
	var halfScreeny = windowY/2;
	
	//Declaring the side and orientation values to be used later
	//They will get used to determin which corner of the screen the mouse is in
	var side, orientation;
	
	
	//Mouse in top left corner?
	if ((xPercent <= 50)&&(yPercent <= 50)) {
		side = "Left";
		orientation = "Top";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(-" + ((invertMouseX-halfScreenx)/badSheep) + "px,-" + ((invertMouseY-halfScreeny)/badSheep) + "px)";
		}
	}
	
	
	//Mouse in bottom left corner?
	if ((xPercent <= 50)&&(yPercent > 50)) {
		side = "Left";
		orientation = "Bottom";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(-" + ((invertMouseX-halfScreenx)/badSheep) + "px," + ((mouseY-halfScreeny)/badSheep) + "px)";
		}
	}
	
	
	//Mouse in top right corner?
	if ((xPercent > 50)&&(yPercent <= 50)) {
		side = "Right";
		orientation = "Top";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(" + ((mouseX-halfScreenx)/badSheep) + "px,-" + ((invertMouseY-halfScreeny)/badSheep) + "px)";
		}
	}

	
	//Mouse in bottom right corner?
	if ((xPercent > 50)&&(yPercent > 50)) {
		side = "Right";
		orientation = "Bottom";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(" + ((mouseX-halfScreenx)/badSheep) + "px," + ((mouseY-halfScreeny)/badSheep) + "px)";
		}
	}
}

//Make sure it runs all this code every time the mouse moves...its tracking you ;)
document.onmousemove = followMe;