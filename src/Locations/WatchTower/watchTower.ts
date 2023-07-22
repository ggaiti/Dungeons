import { location } from "../../Models/Master";
import { watchTowerEntrance } from "./Areas/watchTowerEntrance";
import { watchTowerBuilding } from "./Buildings/WatchTower/watchTowerBuildings";

//grand mage hide out, outside but close to helm
export const watchTower: location = {
  class: "Location",
  name: "Watch Tower",
  message: "Watch Tower Location",
  // npcs: () => [],
  // npmc: [archMage],
  buildings: () => [],
  areas: () => [watchTowerEntrance],
  // interactables: () => [],
  // preRequisites: () => {
  //   //preRequisites
  //   return true
  // }
};
