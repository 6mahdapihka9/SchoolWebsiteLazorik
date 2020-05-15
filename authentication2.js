/*
let arrOfCookies = document.cookie.split('; ');
for (let index1 = 0; index1 < arrOfCookies.length; index1++){
    let words = arrOfCookies[index1].split('=');
    if (words[0] === 'logged')
        if (words[1] === ''){
            document.getElementById('logInButton').hidden = false;
            document.getElementById('logOutButton').hidden = true;
            break;
        } else {
            document.getElementById('logInButton').hidden = true;
            document.getElementById('logOutButton').hidden = false;
            break;
        }
}
*/
document.getElementById('logInButton').hidden = !(document.cookie === '');
document.getElementById('logOutButton').hidden = (document.cookie === '');
