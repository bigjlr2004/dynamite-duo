import { getVillians } from "./database.js";

const villians = getVillians();

export const VillianList = () => {
  let villianHTML = "<ul>";
  for (const villian of villians) {
    villianHTML += `<li>${villian.name}</li>`;
  }

  villianHTML += "</ul>";

  return villianHTML;
};
