function hideAll(){
    document.getElementById("mainSection").hidden = true;
    document.getElementById("searchSection").hidden = true;
    document.getElementById("infoSection").hidden = true;
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

    let reg = /\sн[а-я]*и(\s|\n)/g;
    let reg3 = new RegExp(someText, "g");
    let reg4 = /\d+(?!\.)/g;
    //let reg5 = /[ ,.:;\-?!\n]+/;

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
