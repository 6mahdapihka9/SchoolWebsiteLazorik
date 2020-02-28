//window.onunload(confirm('Ви дійсно хочете покинути сайт?'));
//window.onload(areYouHere);
function hideAll(){
    document.getElementById("mainSection").hidden = true;
    document.getElementById("menuSection").hidden = true;
    document.getElementById("newsSection").hidden = true;
    document.getElementById("inputSection").hidden = true;
    document.getElementById("outputSection").hidden = true;
    document.getElementById("authorSection").hidden = true;
    document.getElementById("searchSection").hidden = true;
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
function chBGH1() {
    document.getElementById('site_title').style.backgroundColor='red';
    searchWords();
}
function areYouHere() {
    let iAmHere = confirm('Ви ще тут?');
    if (iAmHere)
        setTimeout(areYouHere, 10000);
}
function showError(){
    alert("Приносимо свої вибачення. Ця сторінка ще не допрацьована!");
}
function searchWords(someText){
    hideAll();
    document.getElementById("searchSection").hidden=false;
    let allText = document.getElementsByClassName("left");
    //newArrayOfWords = allText[0].textContent.split(" ");
    let amountOfWords, newArray, finalArray;
    let str = "aaaa bbbbA ddd Baaa";
    let reg2 = /a[a-z]a/g;
    let reg1 = /^н/g;
    let reg3 = /(\bн)(и\b)/g;
    let regForWords = /[.,\/ -]/;
    let regForWords1 = /[ ,.:;-?!]+/;
    newArray = allText[0].textContent.split(regForWords1);
    finalArray = allText[0].textContent.match(reg1);

    console.log( someText );
    let searchBlock = document.getElementById("searchSection");
    searchBlock.removeChild()
    let searchP = document.createElement('p');
    searchP.id="searchParagraph";
    for (let i = 0; i < newArray.length; i++) {
        searchP.innerHTML = "" + newArray[i] + ", ";
    }
    searchBlock.append(searchP);
}


