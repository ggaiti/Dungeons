export const startMenu = {
  message: "Start Menu",
  menu: [
    {
      title: "Inventory",
      value: 0,
      function: () => {
        //   displayOptions(inventoryMenu);
      },
    },
    {
      title: "Journal",
      value: 1,
      function: () => {
        //   displayOptions(journalMenu);
      },
    },
    {
      title: "Map",
      value: 2,
      function: () => {
        //   displayOptions(mapMenu);
      },
    },
    {
      title: "Monster Index",
      value: 3,
      function: () => {
        //   displayOptions(indexMenu);
      },
    },
    {
      title: "Save Game",
      value: 4,
      function: () => {
        //   displayOptions(saveMenu);
      },
    },
    {
      title: "Settings",
      value: 5,
      function: () => {
        //   displayOptions(settingsStartMenu);
      },
    },
    {
      title: "Quit",
      value: 6,
      function: () => {
        //   displayOptions(titleMenu);
      },
    },
  ],
};
export const saveMenu = {
  message: "Choose a file",
  menu: [
    {
      title: "file_1",
      value: 0,
      //   function: ,
    },
    {
      title: "file_2",
      value: 1,
      //   function: ,
    },
    {
      title: "file_3",
      value: 2,
      //   function: ,
    },
    {
      title: "file_4",
      value: 3,
      //   function: ,
    },
    {
      title: "file_5",
      value: 4,
      //   function: ,
    },
    {
      title: "Back",
      value: 5,
      //   function: ,
    },
  ],
};
const journalMenu = {
  message: "To-do List",
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
const mapMenu = {
  message: "Where would you like to travel?",
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
