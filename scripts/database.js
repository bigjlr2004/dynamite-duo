export const database = {
  heroes: [
    {
      id: 1,
      name: "Dynoguy",
      power: "Fire blasts",
    },
    {
      id: 2,
      name: "Hyperspeed",
      power: "Super speed",
    },
  ],
  villians: [
    {
      id: 1,
      name: "Not Scary",
      power: "Not Scary At All",
    },
    {
      id: 2,
      name: "Hyperslow",
      power: "Sloth speed",
    },
  ],
};

export const getHeroes = () => {
  return database.heroes.map((hero) => ({ ...hero }));
};
export const getVillians = () => {
  return database.villians.map((villian) => ({ ...villian }));
};
