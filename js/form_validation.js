//init functie geimplementeerd voor GEEN global variables te hebben
function initFormValidation() {
    const formulier = document.getElementById("personaliseer-form");
    const naamVeld = document.getElementById("naam");
    const emailVeld = document.getElementById("email");
    const leveringsDatumVeld = document.getElementById("personaliseer-option3");
    const aantalVeld = document.getElementById("aantal");

    //velden op valid kunnen zetten
    function setValidInput(veld) {
        veld.classList.add("validinput");
    }

    //velden op invalid kunnen zetten
    function resetValidInput(veld) {
        veld.classList.remove("validinput");
    }

    //eventlistener voor aantalveld
    aantalVeld.addEventListener('input', () => {
        valideerAantal();
    });

    //fucntie om te kijken of aantal geldig is
    function isAantalGeldig(aantal) {
        return aantal > 0;
    }

    //functie om aantal te valideren
    function valideerAantal() {
        const aantalError = document.getElementById("ongeldige_aantal");
        if (isAantalGeldig(aantalVeld.value)) {
            // Aantal geldig? GEEN error
            aantalError.textContent = "";
            setValidInput(aantalVeld);
        } else {
            // Aantal ongeldig? ERROR
            aantalError.textContent = "Je moet minstens 1 stuk bestellen!";
            resetValidInput(aantalVeld);
        }
    }

    //eventlistener voor naamveld
    naamVeld.addEventListener('blur', () => {
        valideerNaam();
    });

    //fucntie om te kijken of naam geldig is
    function isNaamGeldig(naam) {
        const trimmedNaam = naam.trim();
        return trimmedNaam === naam;
    }

    //fucntie om naam te valideren
    function valideerNaam() {
        const ongeldigeNaamError = document.getElementById("ongeldigenaam_foutmelding");
        if (isNaamGeldig(naamVeld.value)) {
            //naam geldig? GEEN error
            ongeldigeNaamError.textContent = "";
            setValidInput(naamVeld);
        } else {
            //naam ongeldig? ERROR
            ongeldigeNaamError.textContent = "Naam mag geen spaties vooraan of achteraan bevatten.";
            resetValidInput(naamVeld);
        }
    }
    
    //eventlsitener voor email
    emailVeld.addEventListener('input', () => {
        valideerEmail();
    });

    //functie om te controleren om email geldig is
    function isEmailGeldig(email) {
        const emailRegex = /^[a-z]+\.[a-z]*[a-z0-9]+@(kdg\.be|student\.kdg\.be)$/;
        return emailRegex.test(email);
    }

    //fucntie voor email te valideren
    function valideerEmail(){
        const ongeldigMailadresFoutmelding = document.getElementById("ongeldige_mailadres");
        if (isEmailGeldig(emailVeld.value)) {
            // E-mailadres geldig? GEEN error
            ongeldigMailadresFoutmelding.textContent = "";
            setValidInput(emailVeld);
        } else {
            // E-mailadres ongeldig? ERROR
            ongeldigMailadresFoutmelding.textContent = "E-mailadres moet voldoen aan de KdG-eisen.";
            resetValidInput(emailVeld);
        }
    }

    //eventlistener leveringsdatum
    leveringsDatumVeld.addEventListener('input', () => {
        valideerLeveringsDatum();
    });

    //fucntie om te controlleren of leveringsdatum geldig is
    function isLeveringsDatumGeldig(datum) {
        const huidigeDatum = new Date();
        const ingevoerdeDatum = new Date(datum);
      
        if (ingevoerdeDatum < huidigeDatum) {
            return false;
        }

        const isHuidigeDatum = ingevoerdeDatum.getDate() === huidigeDatum.getDate() && ingevoerdeDatum.getMonth() === huidigeDatum.getMonth() && ingevoerdeDatum.getFullYear() === huidigeDatum.getFullYear();
        if (isHuidigeDatum) {
            return false;
        }

        return true;
    }

    //leveringsdatum valideren
    function valideerLeveringsDatum() {
        const ongeldigeLeveringsDatumError = document.getElementById("ongeldige_leveringsdatum");
        if (isLeveringsDatumGeldig(leveringsDatumVeld.value)) {
            //datum geldig? GEEN error
            ongeldigeLeveringsDatumError.textContent = "";
            setValidInput(leveringsDatumVeld);
        } else {
            //datum ongeldig? ERROR
            ongeldigeLeveringsDatumError.textContent = "Leveringsdatum moet na de huidige datum zijn.";
            resetValidInput(leveringsDatumVeld);
        }
    }

    //verzenden van de form
    formulier.addEventListener("submit", function(event){
        const naamCheck = isNaamGeldig(naamVeld.value);
        const mailCheck = isEmailGeldig(emailVeld.value);
        const leverCheck = isLeveringsDatumGeldig(leveringsDatumVeld.value);
        const aantalCheck = isAantalGeldig(aantalVeld.value);
        const submitFout = document.getElementById("verzend-error");

        if (!naamCheck || !mailCheck || !leverCheck || !aantalCheck){
            submitFout.textContent = "Controleer of je alles correct hebt ingevuld!";
            event.preventDefault();
        } else {
            //opslaan in localStorage --> gebruik in ander JS-bestand
            const product = document.getElementById('product').value;
            const aantal = aantalVeld.value;
            const naam = naamVeld.value;
            const email = emailVeld.value;
            const adres = document.getElementById('adres').value;
            const personaliseerOption1 = document.getElementById('personaliseer-option1').value;
            const kleur = document.getElementById('kleur').value;
            const personaliseerOption3 = leveringsDatumVeld.value;

            localStorage.setItem('product', product);
            localStorage.setItem('aantal', aantal);
            localStorage.setItem('naam', naam);
            localStorage.setItem('email', email);
            localStorage.setItem('adres', adres);
            localStorage.setItem('personaliseerOption1', personaliseerOption1);
            localStorage.setItem('kleur', kleur);
            localStorage.setItem('personaliseerOption3', personaliseerOption3);
        }
    });
}
//validatie initialiseren 
const formValidation = initFormValidation();
