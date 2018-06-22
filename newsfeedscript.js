var storedData = localStorage.getItem("storageName");
console.log(storedData);

var userButton = document.getElementById("userButton");
userButton.value = (storedData);
document.getElementById("statusbox").placeholder=("What's on your mind " + storedData + "?");
var storyuser = document.getElementById("storyusername").appendChild(document.createTextNode(storedData));





var statusInput = document.getElementById("statusbox");
var imageURL = document.getElementById("imageurl");
var oldbox = document.getElementById("div123");


statusInput.addEventListener("keypress", enterkey);
imageURL.addEventListener("keypress", enterkeyimage);

function enterkey() {
	var keyname = event.key;
	if(keyname === "Enter" && statusInput.value.length > 0 && imageURL.value.length > 0) {
		addStatusImage();
	} else if (keyname === "Enter" && statusInput.value.length > 0) {
		addStatus();
	}
}
function enterkeyimage() {
	var keyname = event.key;
	if(keyname === "Enter" && imageURL.value.length > 0 ) {
		var urlLink = imageURL.value;
		console.log(urlLink);
		addStatusImage();
	}
}
function testbutton(){
	if (statusInput.value.length > 0 && imageURL.value.length > 0) {
		addStatusImage();
	} else if (statusInput.value.length > 0){
		addStatus();
	}
}




function addStatus() {
	var divbox = document.createElement("div");
	divbox.appendChild(document.createElement("div"));
	oldbox.appendChild(divbox);
	divbox.classList.add("newsboxmain");
	
	var divheader = document.createElement("div");
	divheader.appendChild(document.createElement("div"));
	divbox.appendChild(divheader);
	divheader.classList.add("newsboxheader");

	var divrow = document.createElement("div");
	divrow.appendChild(document.createElement("div"));
	divheader.appendChild(divrow);
	divrow.classList.add("row");

	var profilepic = document.createElement("IMG");
	profilepic.appendChild(document.createElement("IMG"));
	divrow.appendChild(profilepic);
	profilepic.classList.add("profilepicture2");
	
	var divnametime = document.createElement("div");
	divnametime.appendChild(document.createElement("div"));
	divrow.appendChild(divnametime);
	divnametime.classList.add("newsboxname");

	var divname = document.createElement("h3");
	divname.appendChild(document.createTextNode(storedData));
	divnametime.appendChild(divname);
	// divname.classList.add("newsboxname");

	var divtime = document.createElement("h6");
	divtime.appendChild(document.createTextNode("1 min"));
	divnametime.appendChild(divtime);
	// divtime.classList.add("newsboxname");

	var newDiv = document.createElement("p");
	newDiv.appendChild(document.createTextNode(statusInput.value));
	divbox.appendChild(newDiv);
	newDiv.classList.add("newsboxtext");



	statusInput.value = "";
	imageURL.value = "";

}
function addStatusImage() {
	var divbox = document.createElement("div");
	divbox.appendChild(document.createElement("div"));
	oldbox.appendChild(divbox);
	divbox.classList.add("newsboxmain");
	
	var divheader = document.createElement("div");
	divheader.appendChild(document.createElement("div"));
	divbox.appendChild(divheader);
	divheader.classList.add("newsboxheader");

	var divrow = document.createElement("div");
	divrow.appendChild(document.createElement("div"));
	divheader.appendChild(divrow);
	divrow.classList.add("row");

	var profilepic = document.createElement("IMG");
	profilepic.appendChild(document.createElement("IMG"));
	divrow.appendChild(profilepic);
	profilepic.classList.add("profilepicture2");
	
	var divnametime = document.createElement("div");
	divnametime.appendChild(document.createElement("div"));
	divrow.appendChild(divnametime);
	divnametime.classList.add("newsboxname");

	var divname = document.createElement("h3");
	divname.appendChild(document.createTextNode(storedData));
	divnametime.appendChild(divname);
	// divname.classList.add("newsboxname");

	var divtime = document.createElement("h6");
	divtime.appendChild(document.createTextNode("1 min"));
	divnametime.appendChild(divtime);
	// divtime.classList.add("newsboxname");

	var newDiv = document.createElement("p");
	newDiv.appendChild(document.createTextNode(statusInput.value));
	divbox.appendChild(newDiv);
	newDiv.classList.add("newsboxtext");



	var urlImage = document.createElement("IMG");
	urlImage.appendChild(document.createElement("IMG"));
	urlImage.src = imageURL.value;
	divbox.appendChild(urlImage);
	urlImage.classList.add("imgwidth");



	statusInput.value = "";
	imageURL.value = "";

}



function Homepage() {
	window.location.href = "index.html";
}



function imgURL() {
	console.log(imageURL.value);
}
























