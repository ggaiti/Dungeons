import { area } from "../../../Models/Master";

export const caveEntrance: area = {
  class: "Area",
  name: "caveEntrance",
  message: "caveEntrance",
  // npcs: [],
  // safeZone: true,
  connectedAreas: () => [innerCave],
  buildings: () => []
  // interactables: [campFire],
};
export const innerCave: area = {
  class: "Area",
  name: "innerCave",
  message: "innerCave",
  connectedAreas: () => [deepCave, innerCaveWest1],
  buildings: () => []
  // interactables: [],
};
export const innerCaveWest1: area = {
  class: "",
  name: "innerCaveWest1",
  message: "innerCaveWest1",
  connectedAreas: () =>[innerCave, innerCaveWest2],
  buildings: () => []
  // interactables: [],
};
export const innerCaveWest2 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [innerCaveWest1, innerCaveWest3],
  interactables: [],
};
export const innerCaveWest3 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [innerCaveWest2],
  interactables: [],
};
export const deepCave = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [innerCave, deepcaveEast1, deepCaveNorthWest1],
  interactables: [],
};
export const deepcaveEast1 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [deepCave, deepcaveEast2],
  interactables: [],
};
export const deepcaveEast2 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [deepcaveEast1, deepcaveNorthEast1],
  interactables: [],
};
export const deepcaveNorthEast1 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [deepcaveEast2, deepCaveHiddenPassage],
  interactables: [],
};
export const deepCaveHiddenPassage = {
  class: "",
  name: "",
  message: "",
  // boss: [cursedDruid],
  // npc: [Druid],
  // connectedAreas: [deepcaveNorthEast1],
  interactables: [],
};
export const deepCaveNorthWest1 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [deepCave, deepCaveNorthWest2],
  interactables: [],
};
export const deepCaveNorthWest2 = {
  class: "",
  name: "",
  message: "",
  // connectedAreas: [deepCaveNorthWest1],
  interactables: [],
};
