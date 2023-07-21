import { watchTowerEntrance } from "./Areas/watchTowerEntrance";
import { watchTowerBuilding } from "./Buildings/WatchTower/watchTowerBuildings";

//grand mage hide out, outside but close to helm
export const watchTower = {
  class: "",
  name: "Watch Tower",
  npcs: () => [],
  // npmc: [archMage],
  buildings: () => [],
  areas: () => [watchTowerEntrance],
  interactables: () => [],
};
