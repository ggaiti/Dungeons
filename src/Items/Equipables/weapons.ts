const weaponType = {
  sword: 0,
  staff: 1,
  bow: 2,
  dagger: 3,
  dualwield: 4,
};

export const ironSword = {
  class: "",
  Type: weaponType.sword,
  title: "Iron Sword",
  description: "An Iron Sword [Dmg: 14]",
  value: 0,
  function: "",
};

export const staff = {
  class: "",
  type: weaponType.staff,
  title: "Staff",
  description: "A Magic Staff",
  value: 1,
  function: "",
};

export const bow = {
  class: "",
  type: weaponType.bow,
  title: "Bow",
  description: "A Wooden Bow",
  value: 2,
  function: "",
};
export const dagger = {
  class: "",
  type: weaponType.dagger,
  title: "dagger",
  description: "An Iron Dagger",
  value: 3,
  function: "",
};

export const dualDaggers = {
  class: "",
  type: weaponType.dualwield,
  title: "Dual Daggers",
  description: "",
  value: 4,
  function: "",
  dualwield: true,
};
