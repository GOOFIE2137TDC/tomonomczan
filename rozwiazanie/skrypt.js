function reset() {
    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("email").value = "";
    document.getElementById("zgloszenie").value = "";
}

function przeslij() {
    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let zgloszenie = document.getElementById("zgloszenie").value;
    const checkbox = document.getElementById('zgody');
    let wynik = document.getElementById("wynik");

    if (checkbox.checked) {
        wynik.innerHTML = "<span style='color: Navy;'>" + imie + " " + nazwisko + " Treść Twojej sprawy " + zgloszenie;
    }
    else {
        wynik.innerHTML = "<span style='color: red;'>Musisz zapoznać się z regulaminem</span>";
    }
}