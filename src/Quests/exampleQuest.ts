import prompts from "prompts";
import argv from "yargs";

interface player {
  name: string;
  quest: object[];
}

const quest = {
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
        quest.progress = 1;
        pushQuest();
      } else {
        pushQuest();
        return;
      }

    default:
      break;
  }
};
let player: player = {
  name: "ALEX",
  quest: [],
};
const pushQuest = () => {
  let playerCopy = { ...player };
  playerCopy.quest.push(quest);
  console.log(playerCopy.quest);
};
// pushQuest();
quest.story(0);

//update quest,
