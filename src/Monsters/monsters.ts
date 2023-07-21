const elements = {
  earth: 0,
  fire: 1,
};

const areas = {
  forrest: 1,
  caves: 2,
};

export const monsters = [
  {
    Name: "Slime",
    status: null,
    stats: {
      HP: 10,
      STR: 3,
      DEX: 11,
      INT: 1,
      DEF: 1,
      LCK: 1,
      ELE: null,
    },
    attacks: [
      {
        Name: "ram",
        dmg: 1,
      },
      {
        Name: "lick",
        dmg: 1.2,
      },
    ],
    magic: [
      {
        Name: "spit",
        dmg: 2,
      },
    ],
    area: areas.forrest,
  },
  {
    Name: "Goblin",
    status: null,
    stats: {
      HP: 20,
      STR: 4,
      DEX: 2,
      INT: 1,
      DEF: 2,
      LCK: 1,
      ELE: elements.earth,
    },
    attacks: [
      {
        Name: "ram",
        dmg: 1,
      },
      {
        Name: "lick",
        dmg: 1.2,
      },
    ],
    magic: null,
    area: areas.caves,
  },
];
