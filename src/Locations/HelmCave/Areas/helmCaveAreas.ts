import { area } from "../../../Models/Master";

export const caveEntrance: area = {
  class: "Area",
  name: "cave Entrance",
  message: "caveEntrance",
  // npcs: [],
  // safeZone: true,
  connectedAreas: () => [innerCave],
  buildings: () => [],
  // interactables: [campFire],
};
export const innerCave: area = {
  class: "Area",
  name: "inner Cave",
  message: "innerCave",
  connectedAreas: () => [caveEntrance, deepCave, innerCaveWest1],
  buildings: () => [],
  // interactables: [],
};
export const innerCaveWest1: area = {
  class: "Area",
  name: "inner CaveWest1",
  message: "innerCaveWest1",
  connectedAreas: () => [innerCave, innerCaveWest2],
  buildings: () => [],
  // interactables: [],
};
export const innerCaveWest2: area = {
  class: "Area",
  name: "inner CaveWest2",
  message: "innerCaveWest2",
  connectedAreas: () => [innerCaveWest1, innerCaveWest3],
  buildings: () => [],
  //   interactables: [],
};
export const innerCaveWest3: area = {
  class: "Area",
  name: "inner CaveWest3",
  message: "innerCaveWest3",
  connectedAreas: () => [innerCaveWest2],
  buildings: () => [],
  //   interactables: [],
};
export const deepCave: area = {
  class: "Area",
  name: "deep Cave",
  message: "deepCave",
  connectedAreas: () => [innerCave, deepcaveEast1, deepCaveNorthWest1],
  buildings: () => [],
  //   interactables: [],
};
export const deepcaveEast1: area = {
  class: "Area",
  name: "deep caveEast1",
  message: "deepcaveEast1",
  connectedAreas: () => [deepCave, deepcaveEast2],
  buildings: () => [],
  //   interactables: [],
};
export const deepcaveEast2: area = {
  class: "Area",
  name: "deep caveEast2",
  message: "deepcaveEast2",
  connectedAreas: () => [deepcaveEast1, deepcaveNorthEast1],
  buildings: () => [],
  //   interactables: [],
};
export const deepcaveNorthEast1: area = {
  class: "Area",
  name: "deep caveNorthEast1",
  message: "deepcaveNorthEast1",
  connectedAreas: () => [deepcaveEast2, deepCaveHiddenPassage],
  buildings: () => [],
  //   interactables: [],
};
export const deepCaveHiddenPassage: area = {
  class: "Area",
  name: "deep CaveHiddenPassage",
  message: "deepCaveHiddenPassage",
  // boss: [cursedDruid],
  // npc: [Druid],
  connectedAreas: () => [deepcaveNorthEast1],
  buildings: () => [],
  //   interactables: [],
};
export const deepCaveNorthWest1: area = {
  class: "Area",
  name: "deep CaveNorthWest1",
  message: "deepCaveNorthWest1",
  connectedAreas: () => [deepCave, deepCaveNorthWest2],
  buildings: () => [],
  //   interactables: [],
};
export const deepCaveNorthWest2: area = {
  class: "Area",
  name: "deep CaveNorthWest2",
  message: "deepCaveNorthWest2",
  connectedAreas: () => [deepCaveNorthWest1],
  buildings: () => [],
  //   interactables: [],
};
