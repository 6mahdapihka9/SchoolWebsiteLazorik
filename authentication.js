document.getElementById('logInButton').hidden = !(document.cookie === "");
document.getElementById('logOutButton').hidden = (document.cookie === "");
