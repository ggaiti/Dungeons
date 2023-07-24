import { area } from "../../../Models/Master";
import { hiddenCottage } from "../Buildings/HiddenCottage/hiddenCottage";

export const darkWoodsEntrance: area = {
  class: "Area",
  name: "Dark Woods Entrance",
  message: "Dark Woods Entrance",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [darkWoodsCenter],
  //   interactables: "",
};
export const darkWoodsCenter: area = {
  class: "Area",
  name: "Dark Woods Center",
  message: "Dark Woods Center",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [
    darkWoodsEntrance,
    darkWoodsEast,
    darkWoodsWest,
    darkWoodsNorth,
  ],
  //   interactables: "",
};
export const darkWoodsEast: area = {
  class: "Area",
  name: "Dark Woods East",
  message: "Dark Woods East",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [darkWoodsCenter, darkWoodsRiver],
  //   interactables: "",
};
export const darkWoodsRiver: area = {
  class: "Area",
  name: "Dark Wood River",
  message: "Dark Wood River",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [darkWoodsEast, deepWoodsLake],
  //   interactables: "",
};
export const darkWoodsWest: area = {
  class: "Area",
  name: "Dark Woods West",
  message: "Dark Woods West",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [darkWoodsCenter, mushroomGrove],
  //   interactables: "",
};
export const mushroomGrove: area = {
  class: "Area",
  name: "Mushroom Grove",
  message: "Mushroom Grove",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [darkWoodsWest, deepWoodsDeforested],
  //   interactables: "",
};
export const darkWoodsNorth: area = {
  class: "Area",
  name: "Dark Woods North",
  message: "Dark Woods North",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [
    darkWoodsCenter,
    deepWoods,
    darkWoodsRiver,
    mushroomGrove,
  ],
  //   interactables: "",
};
export const deepWoods: area = {
  class: "Area",
  name: "Deep Woods",
  message: "Deep Woods",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [
    darkWoodsNorth,
    goblinCamp,
    deepWoodsLake,
    deepWoodsDeforested,
  ],
  //   interactables: "",
};
export const goblinCamp: area = {
  class: "Area",
  name: "Goblin Camp",
  message: "Seems like this is where the goblins established",
  //   boss: [goblinLeader],
  buildings: () => [],
  connectedAreas: () => [deepWoods, deepGrotto],
  //   interactables: "",
};
export const deepWoodsLake: area = {
  class: "Area",
  name: "Deep Woods Lake",
  message: "Deep Woods Lake",
  //   npc: [],
  buildings: () => [],
  connectedAreas: () => [deepWoods, darkWoodsRiver],
  //   interactables: "",
};
export const deepWoodsDeforested: area = {
  class: "Area",
  name: "Deep Woods (Deforested)",
  message: "Deep Woods (Deforested)",
  //   monsters: [darkStumps],
  buildings: () => [],
  connectedAreas: () => [deepWoods, mushroomGrove],
  //   interactables: "",
};

export const deepGrotto: area = {
  class: "Area",
  name: "Deep Grotto",
  message: "Deep Grotto",
  //   safeZone: true,
  //   npc: [dryad],
  buildings: () => [hiddenCottage],
  connectedAreas: () => [goblinCamp],
  //   interactables: "",
  //   requirement: () => {
  // checkQuest(quest); //check quest progress
  //   },
};
