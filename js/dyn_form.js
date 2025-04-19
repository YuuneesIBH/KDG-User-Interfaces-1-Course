//productenlijst importeren
import productenLijst from "./dyn_data.js";

//functie die de keuzelijst opbouwt
function bouwKeuzeLijstOp() {
    //keuzelijst ophalen
    const keuzeLijstElement = document.getElementById('product');

    // de lijst waar ik de waarden zelf in heb gezet in de HTML
    //leegmaken voor hem te vullen met de waarden van de dyn_data.js
    keuzeLijstElement.innerHTML = '';

    for (const categorie in productenLijst) {
        const optGroep = document.createElement('optgroup');
        optGroep.label = categorie;

        productenLijst[categorie].forEach((product) => {
            const optie = document.createElement('option');
            optie.value = product.productNaam;
            optie.textContent = product.productNaam;
            //elke option toevoegen aan de bijhorende optgroup
            optGroep.appendChild(optie);
        });
        keuzeLijstElement.appendChild(optGroep);
    }
}
//functie oproepen als de webpage geladen is
window.addEventListener('load', bouwKeuzeLijstOp);