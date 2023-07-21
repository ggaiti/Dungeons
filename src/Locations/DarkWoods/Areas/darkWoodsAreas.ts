export const darkWoodsEntrance = {
  class: "",
  name: "Dark Woods Entrance",
  message: "",
  npc: [],
  // connectedAreas: [darkWoodsCenter],
  interactables: "",
};
export const darkWoodsCenter = {
  class: "",
  name: "Dark Woods Center",
  message: "",
  npc: [],
  connectedAreas: [
    // darkWoodsEntrance,
    // darkWoodsEast,
    // darkWoodsWest,
    // darkWoodsNorth,
  ],
  interactables: "",
};
export const darkWoodsEast = {
  class: "",
  name: "Dark Woods East",
  message: "",
  npc: [],
  //   connectedAreas: [darkWoodsCenter, darkWoodsRiver],
  interactables: "",
};
export const darkWoodsRiver = {
  class: "",
  name: "Dark Wood River",
  message: "",
  npc: [],
  //   connectedAreas: [darkWoodsEast, deepWoodsLake],
  interactables: "",
};
export const darkWoodsWest = {
  class: "",
  name: "Dark Woods West",
  message: "",
  npc: [],
  //   connectedAreas: [darkWoodsCenter, mushroomGrove],
  interactables: "",
};
export const mushroomGrove = {
  class: "",
  name: "Mushroom Grove",
  message: "",
  npc: [],
  //   connectedAreas: [darkWoodsWest, deepWoodsDeforested],
  interactables: "",
};
export const darkWoodsNorth = {
  class: "",
  name: "Dark Woods North",
  message: "",
  npc: [],
  //   connectedAreas: [darkWoodsCenter, deepWoods, darkWoodsRiver, mushroomGrove],
  interactables: "",
};
export const deepWoods = {
  class: "",
  name: "Deep Woods",
  message: "",
  npc: [],
  //   connectedAreas: [
  // darkWoodsNorth,
  // goblinCamp,
  // deepWoodsLake,
  // deepWoodsDeforested,
  //   ],
  interactables: "",
};
export const goblinCamp = {
  class: "",
  name: "Goblin Camp",
  message: "Seems like this is where the goblins established",
  //   boss: [goblinLeader],
  //   connectedAreas: [deepWoods, deepGrotto],
  interactables: "",
};
export const deepWoodsLake = {
  class: "",
  name: "Deep Woods Lake",
  message: "",
  npc: [],
  //   connectedAreas: [deepWoods, darkWoodsRiver],
  interactables: "",
};
export const deepWoodsDeforested = {
  class: "",
  name: "Deep Woods (Deforested)",
  message: "",
  //   monsters: [darkStumps],
  //   connectedAreas: [deepWoods, mushroomGrove],
  interactables: "",
};

export const deepGrotto = {
  class: "",
  name: "Deep Grotto",
  message: "",
  safeZone: true,
  //   npc: [dryad],
  //   buildings: [hiddenCottage],
  //   connectedAreas: [goblinCamp],
  interactables: "",
  //   requirement: () => {
  // checkQuest(quest); //check quest progress
  //   },
};
