window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
	let greenButton = document.getElementById("theGreen");
	greenButton.addEventListener("click", handleGreenButtonClick, true);

	
};

//the listener function here
function handleGreenButtonClick()
{
	alert("woohoo!");
}
