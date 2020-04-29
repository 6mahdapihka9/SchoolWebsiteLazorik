let addProdElems = document.getElementsByClassName('addProducer');
let addMarkElems = document.getElementsByClassName('addMark');
let addDrinkElems = document.getElementsByClassName('addDrink');

for (let key in addProdElems)
    addProdElems[key].disabled = true;
for (let key in addMarkElems)
    addProdElems[key].disabled = true;
for (let key in addDrinkElems)
    addProdElems[key].disabled = true;

function showAddProd() {
    document.getElementById('addProducer').hidden = false;
    document.getElementById('addMark').hidden = true;
    document.getElementById('addDrink').hidden = true;
}
function showAddMark() {
    document.getElementById('addProducer').hidden = true;
    document.getElementById('addMark').hidden = false;
    document.getElementById('addDrink').hidden = true;
}
function showAddDrink() {
    document.getElementById('addProducer').hidden = true;
    document.getElementById('addMark').hidden = true;
    document.getElementById('addDrink').hidden = false;
}
