

function hideAll(){
    document.getElementById("mainSection").hidden = true;
    document.getElementById("menuSection").hidden = true;
    document.getElementById("newsSection").hidden = true;
    document.getElementById("inputSection").hidden = true;
    document.getElementById("outputSection").hidden = true;
    document.getElementById("authorSection").hidden = true;
    document.getElementById("searchSection").hidden = true;
    document.getElementById("infoSection").hidden = true;
}
function hideSection(text){
    if (text === 'main') {
        hideAll();
        document.getElementById("mainSection").hidden = false;
        document.title = "Головна";
    } else if (text === 'menu') {
        hideAll();
        document.getElementById("menuSection").hidden=false;
        document.title = "Меню";
    } else if (text === 'news') {
        hideAll();
        document.getElementById("newsSection").hidden=false;
        document.title = "Новини";
    } else if (text === 'input') {
        hideAll();
        document.getElementById("inputSection").hidden=false;
        document.title = "Ввід інформації";
    } else if (text === 'output') {
        hideAll();
        document.getElementById("outputSection").hidden=false;
        document.title = "Вивід інформації";
    } else if (text === 'author') {
        hideAll();
        document.getElementById("authorSection").hidden=false;
        document.title = "Про автора";
    } else if (text === 'search') {
        hideAll();
        document.getElementById("searchSection").hidden=false;
        document.title = "Пошук";
    }
}
function chBGH1back() { document.getElementById('site_title').style.backgroundColor='transparent'; }
function chBGH1() { document.getElementById('site_title').style.backgroundColor='blue';}
function showError(){
    alert("Приносимо свої вибачення. Ця сторінка ще не допрацьована!");
}
function searchWords(someText){
    hideAll();
    document.getElementById("searchSection").hidden=false;

    let allText = document.getElementsByClassName("contentT");

    let str = "aaaa.9 bbbbA 5646 ddd Baaa g dfvd78 778";
    let reg = /\sн[а-я]*и(\s|\n)/g;
    var reg3 = new RegExp(someText, "g");
    let reg4 = /\d+(?!\.)/g;
    let reg5 = /[ ,.:;\-?!\n]+/;

    let searchP = document.getElementById("searchParagraph");
    let searchH2 = document.getElementById("searchH2");

    searchP.innerText = "";
    searchP.innerText += allText[0].textContent.match( reg3 ) + ';\n';
    searchP.innerText += allText[0].textContent.match( reg4 ) + ';\n';
    searchP.innerText += allText[0].textContent.match( reg ) + ';\n';
    searchH2.innerText = 'Пошук по слову "' + someText + '"';
}
function runTask() {
    hideAll();
    document.getElementById("infoSection").hidden=false;
    let infoP = document.getElementById("infoParagraph");
    infoP.innerText = navigator.userAgent + "\n";
    let arrayOfDivs = document.getElementsByTagName("div");
    for (let i = 0; i < arrayOfDivs.length; i++)
        infoP.innerText += arrayOfDivs[i].className + ", ";
}


