import { database } from "./database.js";

let heroHTML = "<ul>";
export const HeroList = () => {
  for (const hero of database.heroes) {
    heroHTML += <li>hero.name</li>;
  }

  heroHTML += "</ul>";
};
