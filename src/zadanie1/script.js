//uzywam tu toFixed zeby zakraglic i poprawic liczby po przecinku

function rozpocznij() {
    const typKwoty = document.getElementById("typKwoty").value;
    const kwota = parseFloat(document.getElementById("kwota").value);
    const podatek = parseFloat(document.getElementById("podatek").value);

    if (isNaN(kwota) || isNaN(podatek)) {
        alert("Proszę podać prawidłowe liczby.");
        return;
    }

    let wynikHTML = '';

    if (typKwoty === 'netto') {
        let kwotaBrutto = kwota * (1 + podatek / 100);
        let kwotaVAT = kwotaBrutto - kwota;
        let sumaKontrolna = kwota + kwotaVAT;

        wynikHTML += `
            <p><strong>Obliczenie z netto:</strong></p>
            <p>Kwota netto: ${kwota.toFixed(2)} PLN</p>
            <p>Procent VAT: ${podatek}%</p>
            <p>Kwota VAT: ${kwotaVAT.toFixed(2)} PLN</p>
            <p>Kwota brutto: ${kwotaBrutto.toFixed(2)} PLN</p>
            <p>Suma kontrolna (netto + VAT): ${sumaKontrolna.toFixed(2)} PLN</p>
            <hr>
        `;
    } else if (typKwoty === 'brutto') {
        let kwotaNetto = kwota / (1 + podatek / 100);
        let kwotaVAT = kwota - kwotaNetto;
        let sumaKontrolna = kwotaNetto + kwotaVAT;

        wynikHTML += `
            <p><strong>Obliczenie z brutto:</strong></p>
            <p>Kwota brutto: ${kwota.toFixed(2)} PLN</p>
            <p>Procent VAT: ${podatek}%</p>
            <p>Kwota VAT: ${kwotaVAT.toFixed(2)} PLN</p>
            <p>Kwota netto: ${kwotaNetto.toFixed(2)} PLN</p>
            <p>Suma kontrolna (netto + VAT): ${sumaKontrolna.toFixed(2)} PLN</p>
            <hr>
        `;
    }

    document.getElementById("wynikText").innerHTML = wynikHTML;
}
