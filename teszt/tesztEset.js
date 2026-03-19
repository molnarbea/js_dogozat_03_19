import { statusz } from "../megjelenit.js";
export function tesztek(){
    const tesztEsetek=[
        {
            datum: "2026-03-21",
            resztvett: false,
            vart: "közelgő"
        },
        {
            datum: "2026-01-21",
            resztvett: true,
            vart: "lezárt"
        },
        {
            datum: "2026-05-21",
            resztvett: false,
            vart: "ráér"
        },
        {
            datum: "2026-03-23",
            resztvett: false,
            vart: "hamarosan"
        },
        {
            datum: "2026-03-14",
            resztvett: false,
            vart: "nem ment el"
        }
    ]
    for (let i = 0; i < tesztEsetek.length; i++) {
        let eredmeny = statusz(tesztEsetek[i].datum, tesztEsetek[i].resztvett);

        console.log(tesztEsetek[i].datum+" "+tesztEsetek[i].resztvett+" várt: "+tesztEsetek[i].vart+" kapott: "+eredmeny)
        
        console.assert(eredmeny === tesztEsetek[i].vart,`${tesztEsetek[i].datum}, ${tesztEsetek[i].resztvett}, várt: ${tesztEsetek[i].vart}, kapott: ${eredmeny}`);

        
    }
    console.log("Minden teszt lefutott")
}