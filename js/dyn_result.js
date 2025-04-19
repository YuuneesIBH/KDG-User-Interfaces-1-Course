//productenlijst importeren
import productenLijst from "./dyn_data.js";

//functie om productinfo op basis van de URL op te halen
function zoekProURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const productNaam = urlParams.get('product');

    return productNaam;
}

function zoekProduct() {
    //hier moet de productnaam als const worden geschreven
    const productNaam = zoekProURL();

    let product = null;
    let categorie = null;

    //over producten itereren voor eht juiste product te vinden
    for (let category in productenLijst) {
        for (let i = 0; i < productenLijst[category].length; i++) {
            if (productenLijst[category][i].productNaam == productNaam) {
                product = productenLijst[category][i];
                categorie = category;
                break;
            }
        }
        if (product) {
            break;
        }
    }
    //product en categorie returnen
    return { product, categorie };
}


//nadien ga ik een productfiche maken op basis van de eerste verstektte info
function maakProductFicheAan(product, categorie) {
    //nieuwe div maken
    const infofiche = document.createElement('div');
    //class toevoegen voor de div
    infofiche.className = 'product-info';

    //dit is de html code voor het product
    const html = `
    <p>${product.productNaam}</p>
    <img src="${product.productAfbeelding}" alt="${product.altNaam}">
    <p>Prijs: ${product.productPrijs}</p>
    <p>Categorie: ${categorie}</p>
    <p>Beschrijving: ${product.proBeschrijving}</p>
    <p>Specificatie: ${product.proSpecs}</p>`;

    //hierboven gemaakte HTML in de HTML steken
    infofiche.innerHTML = html;

    //nadien kijken of er een link
    //zoja adden, zoniet gewoon verdergaan
    if (product.productPagina) {
        infofiche.innerHTML += `<a class="tekst-animatie" href="${product.productPagina}">Naar Productenpagina</a>`;
    }
    return infofiche;
}

//functie omde fiche te tonen
function toonProduct() {
    //het product opvragen
    const { product, categorie } = zoekProduct();
    //en op basis van het product het infofiche maken
    const infofiche = maakProductFicheAan(product, categorie);

    //de fiche in de main steken
    const main = document.querySelector("main");
    main.appendChild(infofiche);
}

//functie oproepen voor de werking
window.addEventListener('load', toonProduct);
