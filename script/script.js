function ellenoriz() {

    var pontszam = 0

    const elso1 = document.getElementById("1-1").checked;
    const masod1 = document.getElementById("1-2").checked;
    const harmad1 = document.getElementById("1-3").checked;

    if (masod1 == true) {
        pontszam = pontszam + 1;
        document.getElementById("jovalasz1").style.color = 'green';
    };
    if (elso1 == true) { document.getElementById("rosszvalasz11").style.color = "red"; };
    if (harmad1 == true) { document.getElementById("rosszvalasz12").style.color = "red"; };

    const elso2 = document.getElementById("2-1").checked;
    const masod2 = document.getElementById("2-2").checked;
    const harmad2 = document.getElementById("2-3").checked;

    if (harmad2 == true) {
        pontszam = pontszam + 1;
        document.getElementById("jovalasz2").style.color = 'green';
    };
    if (elso2 == true) { document.getElementById("rosszvalasz21").style.color = "red"; };
    if (masod2 == true) { document.getElementById("rosszvalasz22").style.color = "red"; };

    const elso3 = document.getElementById("3-1").checked;
    const masod3 = document.getElementById("3-2").checked;
    const harmad3 = document.getElementById("3-3").checked;

    if (harmad3 == true) {
        pontszam = pontszam + 1;
        document.getElementById("jovalasz3").style.color = 'green';
    };
    if (elso3 == true) { document.getElementById("rosszvalasz31").style.color = "red"; };
    if (masod3 == true) { document.getElementById("rosszvalasz32").style.color = "red"; };

    const elso4 = document.getElementById("4-1").checked;
    const masod4 = document.getElementById("4-2").checked;
    const harmad4 = document.getElementById("4-3").checked;

    if (masod4 == true) {
        pontszam = pontszam + 1;
        document.getElementById("jovalasz4").style.color = 'green';
    };
    if (elso4 == true) { document.getElementById("rosszvalasz41").style.color = "red"; };
    if (harmad4 == true) { document.getElementById("rosszvalasz42").style.color = "red"; };

    const elso5 = document.getElementById("5-1").checked;
    const masod5 = document.getElementById("5-2").checked;
    const harmad5 = document.getElementById("5-3").checked;

    if (masod5 == true) {
        pontszam = pontszam + 1;
        document.getElementById("jovalasz5").style.color = 'green';
    };
    if (elso5 == true) { document.getElementById("rosszvalasz51").style.color = "red"; };
    if (harmad5 == true) { document.getElementById("rosszvalasz52").style.color = "red"; };

    document.getElementById("osszpont").innerHTML = "Pontszámod 5/" + pontszam

    if (pontszam == 5) {
        document.getElementById("uzenet").innerHTML = "Gratulálunk! Megnyerted a desszertet. Készíts képernyő fotót az eredményről, mutasd meg kollégánknak, és már hozzuk is desszerted!"
    }
    if (pontszam < 5) {
        document.getElementById("uzenet").innerHTML = "Sajnos ez most nem sikerült! De ne csüggedj, próbáld újra, mi hiszünk benned!"
    }
}

