export const inventoryMenu = {
  message: " Current Inventory",
  menu: [
    {
      title: "Equipment",
      value: 0,
      function: () => {
        //   displayOptions(equipmentMenu);
      },
    },
    {
      title: "Items",
      value: 1,
      function: () => {
        //   displayOptions(itemMenu);
      },
    },
    {
      title: "Quest Items",
      value: 2,
      function: () => {
        //   displayOptions(questItemMenu);
      },
    },
    {
      title: "Back",
      value: 3,
      function: () => {
        //   displayOptions(startMenu);
      },
    },
  ],
};
export const equipmentMenu = {
  message: "Current Equipment",
  menu: [
    {
      title: "Weapons",
      value: 0,
      function: () => {
        //   displayOptions(weaponMenu);
      },
    },
    {
      title: "Armor",
      value: 1,
      function: () => {
        //   displayOptions(armorMenu);
      },
    },
    {
      title: "Accessory",
      value: 2,
      function: () => {
        //   displayOptions(accessoryMenu);
      },
    },
    {
      title: "Back",
      value: 3,
      function: () => {
        //   displayOptions(inventoryMenu);
      },
    },
  ],
};
export const weaponMenu = {
  message: "Current Weapons",
  menu: [
    {
      title: "Back",
      value: 0,
      function: () => {
        //   displayOptions(equipmentMenu);
      },
    },
  ],
};
export const armorMenu = {
  message: "Current Armor",
  menu: [
    {
      title: "Back",
      value: 0,
      function: () => {
        //   displayOptions(equipmentMenu);
      },
    },
  ],
};
export const accessoryMenu = {
  message: "",
  menu: [
    {
      title: "Back",
      value: 0,
      function: () => {
        //   displayOptions(equipmentMenu);
      },
    },
  ],
};
export const questItemMenu = {
  message: "Important Valuables, dont lose these!",
  menu: [
    {
      title: "Back",
      value: 0,
      function: () => {
        //   displayOptions(startMenu);
      },
    },
  ],
};
