const buttonList = document.querySelector('.control-panel_items');
const buttons = buttonList.children;

let pressedButton = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        pressedButton = e.target.id; 
        doTaskForButton(); 
    });
}

function zamianaMocy(kW) {
    return kW * 1.34102; // 1 kW = 1.34102 KM
}

function zamianaDlugosci(m) {
    return m * 100; // 1 m = 100 cm
}

function zamianaPowierzchni(m2) {
    return m2 * 10.764; // 1 m² = 10.764 ft²
}

function zamianaObjetnosci(l) {
    return l * 0.264172; // 1 l = 0.264172 gal
}

function zamianaTemperatury(celsius) {
    return (celsius * 9/5) + 32; // Celcjusze na Farenhajty
}

function rownanieKwadratowe(a, b, c) {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        return "Brak rozwiązań rzeczywistych.";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        return `Jedno rozwiązanie: x = ${x.toFixed(2)}`;
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Dwa rozwiązania: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }
}

function najwiekszaRzeczywista() {
    let liczby = prompt("Podaj liczby oddzielone przecinkami:").split(",").map(num => parseFloat(num.trim()));
    let max = Math.max(...liczby); // funkcja z biblioteki matematycznej js'a 
    return `Największa liczba to: ${max}`;
}

function doTaskForButton() {
    console.log(pressedButton);
    switch(pressedButton) {
        case 'moc': 
            let kW = parseFloat(prompt("Podaj wartość mocy w kW:"));
            let wynikMocy = zamianaMocy(kW);
            alert(`${kW} kW to ${wynikMocy.toFixed(2)} KM.`);
            break;
        
        case 'dlugosc': 
            let m = parseFloat(prompt("Podaj wartość długości w metrach:"));
            let wynikDlugosci = zamianaDlugosci(m);
            alert(`${m} metrów to ${wynikDlugosci.toFixed(2)} centymetry.`);
            break;
        
        case 'powierzchnia': 
            let m2 = parseFloat(prompt("Podaj wartość powierzchni w m²:"));
            let wynikPowierzchni = zamianaPowierzchni(m2);
            alert(`${m2} m² to ${wynikPowierzchni.toFixed(2)} ft².`);
            break;
        
        case 'objetosc':
            let l = parseFloat(prompt("Podaj wartość objętości w litrach:"));
            let wynikObjetnosci = zamianaObjetnosci(l);
            alert(`${l} litrów to ${wynikObjetnosci.toFixed(2)} galonów.`);
            break;
        
        case 'temperatura':
            let celsius = parseFloat(prompt("Podaj temperaturę w °C:"));
            let wynikTemperatury = zamianaTemperatury(celsius);
            alert(`${celsius}°C to ${wynikTemperatury.toFixed(2)}°F.`);
            break;

        case 'rownanie': 
            let a = parseFloat(prompt("Podaj współczynnik a:"));
            let b = parseFloat(prompt("Podaj współczynnik b:"));
            let c = parseFloat(prompt("Podaj współczynnik c:"));
            let rozwiazanie = rownanieKwadratowe(a, b, c);
            alert(rozwiazanie);
            break;

        case 'najwieksza': 
            let wynik = najwiekszaRzeczywista();
            alert(wynik);
            break;    
    }
}
