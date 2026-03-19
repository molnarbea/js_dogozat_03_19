function feltolt(articleElem,adatok={nev,datum,resztvett}) {
    articleElem.innerHTML += `<li>
                    <span>${adatok.nev}</span>
                    <span>${adatok.datum}</span>
                    <span>${adatok.resztvett}</span>
                    </li>`;
    
}

function statusz(articleElem,adatok={nev,datum,resztvett}){
    const maiDatum = new Date("2026-03-19");
    let datum = new Date(adatok.datum);
    if (adatok.resztvett == true) {
        articleElem.innerHTML += `<span>lezárt</span>`;
    }else if (datum-maiDatum <= 3) {
        articleElem.innerHTML += `<span>közelgő</span>`;
    }else if (datum-maiDatum <= 7) {
        articleElem.innerHTML += `<span>hamarosan</span>`;
    }else{
        articleElem.innerHTML += `<span>ráér</span>`;
    }
    console.log(datum)
}


export function megjelenit(LISTA) {
    const articleElem = document.querySelector("article");
    articleElem.innerHTML = "";
    LISTA.forEach(function(esemeny,i){
        feltolt(articleElem,esemeny);
        statusz(articleElem,esemeny);
    });
}