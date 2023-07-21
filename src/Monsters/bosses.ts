export const goblinLeader = {
  name: "Goblin Leader",
  status: null,
  stats: {
    HP: 120,
    STR: 5,
    DEX: 15,
    INT: 2,
    DEF: 5,
    LCK: 12,
    ELE: null,
  },
  attacks: [
    {
      name: "Slash",
      dmg: 4,
    },
    {
      name: "Double tap",
      dmg: 4, //does attacks twice, rolls with luck so can do it up to 3 times if math results match.
    },
  ],
  magic: [
    {
      name: "Bomb Throw",
      dmg: 10,
    },
    {
      name: "Throwing Knife",
      dmg: 5,
    },

    {
      name: "Steal Item",
      // he steals a potion from you if you have one and uses it on himself
    },
  ],
  area: "", //Goblin Camp
};
