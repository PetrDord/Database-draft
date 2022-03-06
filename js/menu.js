/* Ukládání class links do konstanty @menu */ 
const menu= document.querySelector(".links");
/* Ukládání class ham do konstanty @button */ 
const button= document.querySelector(".ham");
/* Funkce, když se klikne na tlačíto toggel */
button.addEventListener("click", () => {
    /* Ukádání atributu stav do konstanty @vis */
    const vis = menu.getAttribute("stav");
    /* Podmínka jestli bude vis rovno tak ji zněmí na true */
    if(vis === "false"){
        menu.setAttribute("stav", true);
        button.setAttribute("expanded", true);
    }
})