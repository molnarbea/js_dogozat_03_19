function feltolt(ulElem,adatok={nev,datum,resztvett}, szoveg) {
    ulElem.innerHTML += `<li>
                    <span>${adatok.nev}</span>
                    <span>${adatok.datum}</span>
                    <span>${adatok.resztvett}</span>
                    <span>${szoveg}</span>
                    </li>`;
    
}

export function statusz(datum,resztvett){
    const maiDatum = new Date("2026-03-19");
    datum = new Date(datum);
    let kulonbseg = (datum-maiDatum)/86400000;
    let szoveg = "";

    if (resztvett == true) {
        szoveg = "lezárt";
    }else if (kulonbseg < 0) {
        szoveg = "nem ment el";
    }else if (kulonbseg <= 3) {
        szoveg = "közelgő";
    }else if (kulonbseg <= 7) {
        szoveg = "hamarosan";
    }else{
        szoveg = "ráér";
    }
    return szoveg;
}



export function megjelenit(LISTA) {
    const ulElem = document.querySelector("ul");
    ulElem.innerHTML = "";
    LISTA.forEach(function(esemeny,i){
        let szoveg = statusz(esemeny.datum,esemeny.resztvett);
        feltolt(ulElem,esemeny,szoveg);
    });
}