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
    let allText = document.getElementsByClassName("contentT");

    document.getElementById("searchSection").hidden = false;

    let reg = /\sн[а-я]*и(\s|\n)/g;
    let reg3 = new RegExp(someText, "g");
    let reg4 = /\d+(?!\.)/g;
    //let reg5 = /[ ,.:;\-?!\n]+/;

    let searchP = document.getElementById("searchParagraph");
    let searchH2 = document.getElementById("searchH2");
    if (allText[0] !== undefined && allText[0].textContent.match(reg3) !== null) {
        searchP.innerText = "";
        searchP.innerText += allText[0].textContent.match(reg3) + ';\n';
        searchP.innerText += allText[0].textContent.match(reg4) + ';\n';
        searchP.innerText += allText[0].textContent.match(reg) + ';\n';
        searchH2.innerText = 'Пошук по слову "' + someText + '" :';
    } else {
        searchH2.innerText = 'Пошук не дав результату :(';
        searchP.innerText = "\n\n\n\n\nЦя сторінка не містить тексту для пошуку. Для пошуку перейдіть на головну сторінку!";
    }
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
function showAuthForm() {
    document.getElementById('AuthFormID').hidden = false;
    document.getElementById('RegFormID').hidden = true;
}
function showRegForm() {
    document.getElementById('AuthFormID').hidden = true;
    document.getElementById('RegFormID').hidden = false;
}
