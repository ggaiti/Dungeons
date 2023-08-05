import prompts from "prompts";
import argv from "yargs";

//fight menu, one option --> attack, this is the players turn
//handle damage function, handles damage for monster and player
//handle monsters turn function, attacks player

interface monster {
  name: string;
  hp: number;
  attacks: attack[];
}
interface attack {
  name: string;
  dmg: number;
}
interface player {
  name: string;
  hp: number;
  attacks: attack[];
}
interface choice {
  title: string; //choice text
  value: number;
}
const player: player = {
  name: "Gian",
  hp: 100,
  attacks: [
    {
      name: "slash",
      dmg: 5,
    },
    {
      name: "kick",
      dmg: 2,
    },
    {
      name: "fireball",
      dmg: 10,
    },
  ],
};
const slime: monster = {
  name: "slime",
  hp: 20,
  attacks: [
    {
      name: "tackle",
      dmg: 4,
    },
    {
      name: "lick",
      dmg: 3,
    },
    {
      name: "spit",
      dmg: 7,
    },
  ],
};
export const fightMenu = {
  message: "What is your choice?",
  menu: [
    {
      title: "Attack",
      value: 0,
      //   function: ,
    },
    //   {
    //     title: "Magic",
    //     value: 1,
    //     //   function: ,
    //   },
    //   {
    //     title: "Items",
    //     value: 2,
    //     //   function: ,
    //   },
    //   {
    //     title: "Back",
    //     value: 1,
    //     //   function: ,
    //   },
  ],
};
const generatePrompt = async (choices: choice[], message: string) => {
  //   console.log(choices);
  const response = await prompts([
    {
      type: "select",
      name: "choice",
      message: message,
      choices: choices,
    },
  ]);
  //   console.log("CHOICE");
  //   console.log(response.choice);
  return response.choice;
};
const handleDamage = (unit: any, damage: number) => {
  //make copy of object and do fancy stuff and change the damage and update
  let unitCopy = { ...unit };
  unitCopy.hp = unitCopy.hp - damage;

  return unitCopy;
};
const handlePlayerTurn = async (monster: monster) => {
  let response = await generatePrompt(fightMenu.menu, fightMenu.message);
  if (response === 0) {
    const attackChoices = player.attacks.map((attack) => {
      return {
        title: attack.name,
        value: attack.dmg,
      };
    });
    response = await generatePrompt(attackChoices, "choose");
    return handleDamage(monster, response);
    // console.log(response);
    // console.log(monster);
  }
};
const handleMonsterTurn = (monster: monster, player: player) => {
  const monsterAttack =
    monster.attacks[Math.floor(Math.random() * monster.attacks.length)];
  return handleDamage(player, monsterAttack.dmg);
};
const handleBattle = async (monster: any) => {
  let monsterCopy = { ...monster };
  let playerCopy = { ...player };
  let playerTurn = true;
  while (monsterCopy.hp > 0 && playerCopy.hp > 0) {
    if (playerTurn) {
      const obj = await handlePlayerTurn(monsterCopy);
      monsterCopy = obj;
      console.log(monsterCopy);
    } else {
      const obj = await handleMonsterTurn(monsterCopy, playerCopy);
      playerCopy = obj;
      console.log(playerCopy);
    }
    playerTurn = !playerTurn;
  }
};
handleBattle(slime);
