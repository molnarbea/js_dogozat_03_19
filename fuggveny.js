import { megjelenit } from "./megjelenit.js";

export function szures(lista) {
    const gombElemek = document.querySelectorAll("#szures button")
    gombElemek.forEach(function(button){
        button.addEventListener("click",function(event){
            let szurt = event.target.innerText;
            const szurtLista = lista.filter(function(a){
                return a.nev === szurt;
            })
            megjelenit(szurtLista);
        })
    })
}

export function statusz(datum, resztvett){
    const maiDatum = new Date("2026-03-19");
    if (resztvett == true) {
        console.log("lezárt");
    }else if (datum-maiDatum <= 3) {
        console.log("közelgő");
    }else if (datum-maiDatum <= 7) {
        console.log("hamarosan");
    }else{
        console.log("ráér");
    }
}