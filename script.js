//window.onunload(confirm('Ви дійсно хочете покинути сайт?'));
//window.onload(areYouHere);

function chBGH1back() { document.getElementById('site_title').style.backgroundColor='transparent'; }
function chBGH1() {
    document.getElementById('site_title').style.backgroundColor='red';
    searchWords();
}
function areYouHere() {
    let iAmHere = confirm('Ви ще тут?');
    if (iAmHere)
        setTimeout(areYouHere, 10000);
}

function searchWords(){
    let allText = document.getElementsByClassName("left");
    let newArrayOfWords;
    //for (let i = 0; i < allText.length; i++) {
    //newArrayOfWords = allText[0].textContent.split(" ");
    let found;
    let str = "aaaa bbbbA ddd Baaa";
    let reg1 = /^н/g;
    let reg2 = /a[a-z]a/g;
    let reg3 = /(\bн)(и\b)/g;
    //found = str.match(reg2);
    found = allText[0].textContent.match(reg1);
    console.log( found );
}

function hideSection(text){
    if (text === 'main') {
        document.getElementById("mainSection").hidden = false;
        document.getElementById("menuSection").hidden = true;
        document.getElementById("newsSection").hidden = true;
        document.getElementById("inputSection").hidden = true;
        document.getElementById("outputSection").hidden = true;
        document.getElementById("authorSection").hidden = true;
        document.getElementById("searchSection").hidden = true;
        document.title = "Головна";
    } else if (text === 'menu') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=false;
        document.getElementById("newsSection").hidden=true;
        document.getElementById("inputSection").hidden=true;
        document.getElementById("outputSection").hidden=true;
        document.getElementById("authorSection").hidden=true;
        document.getElementById("searchSection").hidden=true;
        document.title = "Меню";
    } else if (text === 'news') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=true;
        document.getElementById("newsSection").hidden=false;
        document.getElementById("inputSection").hidden=true;
        document.getElementById("outputSection").hidden=true;
        document.getElementById("authorSection").hidden=true;
        document.getElementById("searchSection").hidden=true;
        document.title = "Новини";
    } else if (text === 'input') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=true;
        document.getElementById("newsSection").hidden=true;
        document.getElementById("inputSection").hidden=false;
        document.getElementById("outputSection").hidden=true;
        document.getElementById("authorSection").hidden=true;
        document.getElementById("searchSection").hidden=true;
        document.title = "Ввід інформації";
    } else if (text === 'output') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=true;
        document.getElementById("newsSection").hidden=true;
        document.getElementById("inputSection").hidden=true;
        document.getElementById("outputSection").hidden=false;
        document.getElementById("authorSection").hidden=true;
        document.getElementById("searchSection").hidden=true;
        document.title = "Вивід інформації";
    } else if (text === 'author') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=true;
        document.getElementById("newsSection").hidden=true;
        document.getElementById("inputSection").hidden=true;
        document.getElementById("outputSection").hidden=true;
        document.getElementById("authorSection").hidden=false;
        document.getElementById("searchSection").hidden=true;
        document.title = "Про автора";
    } else if (text === 'search') {
        document.getElementById("mainSection").hidden=true;
        document.getElementById("menuSection").hidden=true;
        document.getElementById("newsSection").hidden=true;
        document.getElementById("inputSection").hidden=true;
        document.getElementById("outputSection").hidden=true;
        document.getElementById("authorSection").hidden=true;
        document.getElementById("searchSection").hidden=false;
    }
}
