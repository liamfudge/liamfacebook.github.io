var database = [
	{
		username: "Liam",
		password: "secret"
	},
	{
		username: "Tajre James",
		password: "liamswife"
	},
	{
		username: "Tim",
		password: "secret3"
	}
];

var usernameInputField = document.getElementById("inputusername");
var passwordInputField = document.getElementById("inputpassword");

passwordInputField.addEventListener("keypress", addToListKeypress);
function addToListKeypress() {
	var keyName = event.key;
	if (keyName === "Enter" && passwordInputField.value.length > 0) {
			popUps();
	}
}

function popUps() {
	isUserValid();
}
function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if (database[i].username === usernameInputField.value &&
			database[i].password === passwordInputField.value) {
		var successfulUser = database[i].username;
		usernameInputField.value = "";
		passwordInputField.value = "";
		alert("welcome to facebook " + database[i].username);
		var getInput = database[i].username;
		localStorage.setItem("storageName",getInput);
		var outputName = database[i].username;
		window.location.href = "newsfeed.html";
		return true;
		} 
	}
	usernameInputField.value = "";
	passwordInputField.value = "";
	alert("Wrong username or password")
	return false;
}










var firstName = document.getElementById("newFirstName");
var surname = document.getElementById("newSurname");
var newPassword = document.getElementById("newpassword");

firstName.addEventListener("keypress", surnameEnter);
surname.addEventListener("keypress", surnameEnter);
newPassword.addEventListener("keypress", surnameEnter);


function surnameEnter() {
	var keyName2 = event.key;
	if (keyName2 === "Enter" && surname.value.length > 0 && firstName.value.length > 0 && newPassword.value.length > 0) {
			signUp();
	}
	else if (keyName2 === "Enter" && surname.value.length === 0 && firstName.value.length > 0 && newPassword.value.length > 0){
		alert("Please enter first name, surname and password");
	}
	else if (keyName2 === "Enter" && surname.value.length > 0 && firstName.value.length === 0 && newPassword.value.length > 0){
		alert("Please enter first name, surname and password");
	}
	else if (keyName2 === "Enter" && surname.value.length > 0 && firstName.value.length > 0 && newPassword.value.length === 0){
		alert("Please enter first name, surname and password");
	}
}


function signUp() {
	if (surname.value.length > 0 && firstName.value.length > 0 && newPassword.value.length > 0) {
			console.log(firstName.value, surname.value, newPassword.value);
	} else {
		alert("Please enter first name, surname and password");
	}

	var newUserData = {
			username: firstName.value,
			password: newPassword.value,
	}
	database.push(newUserData);

	alert("Now log in");

	firstName.value = "";
	surname.value = "";
	newPassword.value = "";
}







