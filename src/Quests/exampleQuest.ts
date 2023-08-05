import prompts from "prompts";
import argv from "yargs";

interface player {
  name: string;
  quest: quest[];
}
interface quest {
  id: number;
  name: string;
  progress: number;
  completed: boolean;
  story: Function;
}
interface choice {
  title: string; //choice text
  value: number;
}

const generatePrompt = async (choices: choice[], message: string) => {
  console.log(choices);
  const response = await prompts([
    {
      type: "select",
      name: "choice",
      message: message,
      choices: choices,
    },
  ]);
  console.log("CHOICE");
  console.log(response.choice);
  return response.choice;
};

const quest1 = {
  id: 1,
  name: "example quest",
  progress: 0,
  completed: false,
  story: async (progress: Number) => await exampleStory(progress),
};
const exampleStory = async (progress: Number) => {
  let choices: choice[];
  let response;

  switch (progress) {
    case 0:
      choices = [
        {
          title: "yes",
          value: 0,
        },
        {
          title: "no",
          value: 1,
        },
      ];
      response = await generatePrompt(choices, "do you want this quest?");
      if (response === 0) {
        pushQuest(quest1);
        updateCurrentQuest(quest1);
        // questComplete(quest1);
        console.log(player);
      } else {
        console.log("come back later");
      }
      break;
    case 1:
      choices = [
        {
          title: "yes",
          value: 0,
        },
        {
          title: "no",
          value: 1,
        },
      ];
      response = await generatePrompt(
        choices,
        "do you want to continue the quest"
      );
      console.log(response);
      if (response === 0) {
        updateCurrentQuest(quest1);
        // questComplete(quest1);
        console.log(player);
      } else {
        console.log("come back later");
      }
      break;
    case 2:
      choices = [
        {
          title: "yes",
          value: 0,
        },
        {
          title: "no",
          value: 1,
        },
      ];
      response = await generatePrompt(
        choices,
        "do you want to finish the quest?"
      );
      console.log(response);
      if (response === 0) {
        updateCurrentQuest(quest1);
        questComplete(quest1);
        console.log(player);
      } else {
        console.log("come back later");
      }
      break;
  }
};
let player: player = {
  name: "ALEX",
  quest: [quest1],
};

const pushQuest = (quest: quest) => {
  let questCopy = {
    ...quest,
  };
  let playerCopy = { ...player, quest: [...player.quest] };
  if (playerCopy.quest.length === 0) {
    playerCopy.quest.push(questCopy);
  } else {
    for (let i = 0; i < playerCopy.quest.length; i++) {
      if (playerCopy.quest[i].id === questCopy.id) {
        return player;
      } else {
        playerCopy.quest.push(questCopy);
      }
    }
  }
  player = playerCopy;
  // console.log(player);
};
const updateCurrentQuest = (quest: quest) => {
  let playerCopy = { ...player, quest: [...player.quest] };
  for (let i = 0; i < playerCopy.quest.length; i++) {
    if (playerCopy.quest[i].id === quest.id) {
      let questCopy = { ...playerCopy.quest[i] };
      questCopy.progress += 1;
      playerCopy.quest[i] = questCopy;
      return (player = playerCopy);
    }
  }
};

const questComplete = (quest: quest) => {
  let playerCopy = { ...player, quest: [...player.quest] };
  for (let i = 0; i < playerCopy.quest.length; i++) {
    if (playerCopy.quest[i].id === quest.id) {
      let questCopy = { ...playerCopy.quest[i] };
      questCopy.completed = true;
      playerCopy.quest[i] = questCopy;
      return (player = playerCopy);
    }
  }
};
const getQuest = (quest: quest) => {
  for (let i = 0; i < player.quest.length; i++) {
    if (player.quest[i].id === quest.id) {
      return player.quest[i];
    }
  }
};
const test = async () => {
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      await quest1.story(0);
    }
    if (i !== 0) {
      const playerQuest = getQuest(quest1);
      await playerQuest?.story(playerQuest.progress);
    }
  }
};
test();
