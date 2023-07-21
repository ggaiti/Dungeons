import { watchTowerEntrance } from "../../Areas/watchTowerEntrance";

export const firstFloor = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedAreas: () => [watchTowerEntrance],
  connectedRooms: () => [fFR1, fFR2, secondFloor],
  interactables: [],
};
export const fFR1 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [firstFloor],
  interactables: [],
};
export const fFR2 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [firstFloor],
  interactables: [],
};
export const secondFloor = {
  class: "",
  hidden: true,
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [firstFloor, sFR1, sFR2, sFR3, sFR4, thirdFloor],
  interactables: [],
};
export const sFR1 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [secondFloor],
  interactables: [],
};
export const sFR2 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [secondFloor, sFR3],
  interactables: [],
};
export const sFR3 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [secondFloor, sFR2],
  interactables: [],
};
export const sFR4 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [secondFloor],
  interactables: [],
};
export const thirdFloor = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [secondFloor, tFR1, tFR2, tFR3, fourthFloor],
  interactables: [],
};
export const tFR1 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [thirdFloor, tFR2],
  interactables: [],
};
export const tFR2 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [thirdFloor, tFR1, tFR3],
  interactables: [],
};
export const tFR3 = {
  class: "",
  name: "",
  message: "",
  npcs: [],
  connectedRooms: () => [thirdFloor, tFR2],
  interactables: [],
};
export const fourthFloor = {
  class: "",
  name: "",
  message: "",
  // boss: [archMage],
  // npc: [archMage],
  safeZone: false,
  connectedRooms: () => [thirdFloor, balcony],
  interactables: [],
};
export const balcony = {
  class: "",
  name: "",
  message: "",
  safeZone: true,
  connectedRooms: () => [fourthFloor],
  // interactables: [telescope],
  // require: () => {
  //   checkQuest(quest);
  // },
};
