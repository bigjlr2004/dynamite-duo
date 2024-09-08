import { HeroList } from "./heroes.js";
import { VillianList } from "./villians.js";

const heroListHTML = HeroList();
const villianListHTML = VillianList();

const theWholeEnchilada = `
    <h1>Heroes</h1>
    ${heroListHTML}


    <h1>Villians</h1>
    ${villianListHTML}
`;

const theExistingMainElement = document.querySelector("#container");

theExistingMainElement.innerHTML = theWholeEnchilada;
