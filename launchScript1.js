let addProdElems = document.getElementsByClassName('addProducer');
let addMarkElems = document.getElementsByClassName('addMark');
let addDrinkElems = document.getElementsByClassName('addDrink');

for (let key in addProdElems)
    addProdElems[key].disabled = true;
for (let key in addMarkElems)
    addProdElems[key].disabled = true;
for (let key in addDrinkElems)
    addProdElems[key].disabled = true;

function showAdd(text) {
    document.getElementById('addProducer').hidden = true;
    document.getElementById('addMark').hidden = true;
    document.getElementById('addDrink').hidden = true;
    document.getElementById('' + text).hidden = false;
}
function showChange(text) {
    document.getElementById('changeProducer').hidden = true;
    document.getElementById('changeMark').hidden = true;
    document.getElementById('changeDrink').hidden = true;
    document.getElementById('' + text).hidden = false;
}
function showRemove(text) {
    document.getElementById('removeProducer').hidden = true;
    document.getElementById('removeMark').hidden = true;
    document.getElementById('removeDrink').hidden = true;
    document.getElementById('' + text).hidden = false;
}
function show(text) {
    document.getElementById('add').style.display = 'none';
    document.getElementById('change').style.display = 'none';
    document.getElementById('remove').style.display = 'none';
    document.getElementById('' + text).style.display = 'inline-flex';
}
(document.cookie === '')?
    document.getElementById('PHPs_block2').remove() :
    document.getElementById('PHPs_block1').remove();
