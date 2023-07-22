import { building } from "../../../../Models/Master";
import { firstFloor } from "./rooms";

export const watchTowerBuilding: building = {
  class: "Building",
  name: "watchTowerBuilding",
  message: "watchTowerBuilding",

  // quests:()=> [mainScenario],
  room: () => firstFloor,
};
