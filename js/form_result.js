//wanneer het load event is geactiveerd de rest uitvoeren
window.addEventListener('load', function(){
    const naamSpan = document.getElementById('span-naam');
    const naamOphaling = localStorage.getItem('naam');
    //span vullen met value van ophaling
    naamSpan.textContent = naamOphaling;

    //product
    const productSpan = document.getElementById('product-span');
    const productOphaling = localStorage.getItem('product');
    productSpan.textContent = productOphaling;

    //aantal
    const aantalSpan = document.getElementById('aantal-span');
    const aantalReq = localStorage.getItem('aantal');
    aantalSpan.textContent = aantalReq;

    //email
    const emailSpan = document.getElementById('email-span');
    const emailReq = localStorage.getItem('email');
    emailSpan.textContent = emailReq;

    //adres
    const adresSpan = document.getElementById('adres-span');
    const adresReq = localStorage.getItem('adres');
    adresSpan.textContent = adresReq;

    //naamBedrukking
    const bedrukkingSpan = document.getElementById('personaliseer-option1');
    const bedrukkingReq = localStorage.getItem('personaliseerOption1');
    bedrukkingSpan.textContent = bedrukkingReq;

    //verpakkingKleur
    const kleurSpan = document.getElementById('kleur-span');
    const kleurReq = localStorage.getItem('kleur');
    kleurSpan.textContent = kleurReq;

    //leveringsdatum
    const leverSpan = document.getElementById('lever-span');
    const leverReq = localStorage.getItem('personaliseerOption3');
    leverSpan.textContent = leverReq;

    const button = document.getElementById("bringMijBack");
    button.addEventListener("click", function() {
        window.location.href = '../index.html';
    });
});