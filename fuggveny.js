import { megjelenit } from "./megjelenit.js";

export function szures(lista) {
    const gombElemek = document.querySelectorAll("button")
    gombElemek.forEach(function(button){
        button.addEventListener("click",function(event){
            let szurt = event.target.innerText;
            const szurtLista = lista.filter(function(a){
                if (szurt === "Részt vettem") {
                    return a.resztvett === true;
                }else if (szurt === "Nem vettem részt") {
                    return a.resztvett === false;
                }else{
                    return a;
                } 
            })
            megjelenit(szurtLista);
        })
    })
}

