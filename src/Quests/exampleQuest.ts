import prompts from "prompts";
import argv from "yargs";

interface player {
  name: string;
  quest: object[];
}

const quest1 = {
  name: "example quest",
  progress: 0,
  story: (progress: Number) => exampleStory(progress),
};
const exampleStory = async (progress: Number) => {
  switch (progress) {
    case 0:
      const response = await prompts([
        {
          type: "select",
          name: "choice",
          message: "do you want this quest?",
          choices: [
            {
              title: "yes",
              value: 0,
            },
            {
              title: "no",
              value: 1,
            },
          ],
        },
      ]);
      console.log(response.choice);
      if (response.choice === 0) {
        pushQuest(player, quest1);
        updateCurrentQuest(quest1);
      } else {
        console.log("come back later");
      }
      break;
    default:
      break;
  }
  //   console.log(player);
};
let player: player = {
  name: "ALEX",
  quest: [],
};
const pushQuest = (player: Object, quest: Object) => {
  let questCopy = {
    ...quest,
    name: { ...quest.name },
    progress: { ...quest.progress },
    story: { ...quest.story },
  };
  let playerCopy = { ...player, quest: [...player.quest] };
  if (player.quest === true) {
    return player;
  } else {
    playerCopy.quest.push(questCopy);
  }
  player = playerCopy;
  quest = questCopy;
  console.log(player);
};

//function that does both functions
const updateCurrentQuest = (quest) => {
  let copyQuest = { ...quest, questProgress: { ...quest.progress } };
  copyQuest.progress += 1;
  quest = copyQuest;
};

const questComplete = (quest) => {
  let questCopy = {
    ...quest,
    name: { ...quest.name },
    progress: { ...quest.progress },
  };
  if (quest.progress > exampleStory.progress) {
    quest.progress += 1;
  } else {
    console.log("quest complete");
  }
  quest = questCopy;
};

// pushQuest();
quest1.story(0);
//update quest,
