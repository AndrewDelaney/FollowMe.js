//FollowMe Plugin
//Written by Andrew Delaney

//Instructions

/*
Give any element that you wish to add the Follow Mouse effect to
a class of "Sheep"...because, you know...sheep follow things.

After you have given the elements their "Sheep" classes, add a
"data-resistance" attribute to the element.

"data-resistance" is a special attribute that I have defined, so
don't freak out if you've never seen it before and don't know what
it does. Basically, it adds resistance to the object that you add 
the attribute to, so that the object follows your mouse at a slower 
speed (or moves away from your mouse).

The way you write the attribute into your code, if you can't work 
that out, is exactly as I have quoted it previously. Simply type
--> data-resistance = "" <-- just as you would any other html 
attribute, such as class = "", id = "", width = "", etc. In this
case, the input requires an integer value (positive or negative),
but cannot be zero due to the fact that the maths divides by the
number you input. If you input zero a black hole will form...then 
we're all screwed.

So basically, if you give it a value of 1, the objects will follow
your mouse at it's exact speed. If you give it a 2, it will half
that speed, and so on. And if you want it to move opposite to your
mouse, you give it a negative value. If you're looking for a very
subtle shift of your elements, I'd recommend giving it a value of 
around 200.

Hopefully that gave you an idea of the range of numbers you'll
want to use.

Have fun using this plugin! It isn't a difficult one to understand.
*/

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
	var xPercent = (mouseX/windowX*100);
	var yPercent = (mouseY/windowY*100);
	
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
			followItem[iSheep].style.transform = "translate(" + ((invertMouseX-halfScreenx)/badSheep*(-1)) + "px," + ((invertMouseY-halfScreeny)/badSheep*(-1)) + "px)";
		}
	}
	
	
	//Mouse in bottom left corner?
	if ((xPercent <= 50)&&(yPercent > 50)) {
		side = "Left";
		orientation = "Bottom";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(" + ((invertMouseX-halfScreenx)/badSheep*(-1)) + "px," + ((mouseY-halfScreeny)/badSheep) + "px)";
		}
	}
	
	
	//Mouse in top right corner?
	if ((xPercent > 50)&&(yPercent <= 50)) {
		side = "Right";
		orientation = "Top";
		
		for (iSheep = 0; iSheep < sheepCount; iSheep++){
			badSheep = followItem[iSheep].dataset.resistance;
			followItem[iSheep].style.transform = "translate(" + ((mouseX-halfScreenx)/badSheep) + "px," + ((invertMouseY-halfScreeny)/badSheep*(-1)) + "px)";
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
