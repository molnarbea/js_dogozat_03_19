function feltolt(articleElem,adatok={nev,datum,resztvett}) {
    articleElem.innerHTML += `<li>
                    <span>${adatok.nev}</span>
                    <span>${adatok.datum}</span>
                    <span>${adatok.resztvett}</span>
                    </li>`;
    
}
export function megjelenit(LISTA) {
    const articleElem = document.getElementById("article");
    articleElem.innerHTML = "";
    LISTA.forEach(function(esemeny,i){
        feltolt(articleElem,esemeny);
        console.log(articleElem,esemeny);
    });
}