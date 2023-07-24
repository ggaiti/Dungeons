let progress = 0

switch (progress) {

    case 0:

     You are a Traveler from a far distant land. You have been traveling for quite some time in search for a stone that has been said to withhold infinite power. This stone can be the potential solution for your kind back home that are dying from famine and starvation, if you are succesfull you will be seen as a savior of your village and stories will be written about your jorney. The stone works from the creative mind of the beholder, anything you can think of can be made possible as long as you hold this stone and are strong enough to withstand its power. While on your Quest, you stumble upon a small town. Tired from your treck, you decided to pay the town a visit. A familiar aura fills this town, welcoming you with warmth. But not all seems right as you start to ask questions. You hope someone in this town has more information on where to find the stone and hopefully lead you to the right direction.

     go to town, talk to tavern inhabitants, they will speak about a recent goblin problem they have been dealing with, no one has info on the stone but maybe the mystical creature of the forest might have some information, however she lives deep within the forest, the same forest that has been invaded by a recent goblin clan that moved in.

talk to alex, he is one of the npcs in the tavern, he will tell you the town is in trouble becaues a nearby goblin camp was established in the forest, you have the option to help out. if you do you progress the story. he gives you your main quest

console.log("_Take care of the goblin Problem_")

Kill the goblin leader in the dark woods to continue the story
return progress === 1

        break;

    case 1:

go into the hidden grove where the hidden cottage is and you have to talk to the dryad to continue the story

     after you talk to the dryad, she only knows little information about the stone but tells you her friend might know more. Her friend has been missing for a few days however and doesnt known where he left off to, all he told her was that he needed to take care of something but has not returned. Ever since he dissapeared a ferocious beast inhabited the nearby caves where her friend used to live and shortly after the goblins invaded the forest and started cutting down a section of it, maybe he is in danger, she wants you to go check if he is safe.

she will give you the next quest to progress the story.

_go to the caves and figure out what is lurking about_

fight the curse druid and defeat him to continue your quest, he will give you the third quest to progress the story.

         break;

    case 2:
    you defeat the cursed druid, he tells you a great wizard cursed him and needs you to convince him to revert his curse, he was asked by a group of men in armor to retrieve a book from his tower but wasnt given any details as to why they needed the book, however they promised him that his bounty will be forgiven if he suceeds. He wont bother the wizard if he gets turned back to normal and says he just wants to live peaceful life in the wilderner. He knows about someone that potentially can lead you to the stone if you decide to help him out.

    The druid tells you the only way to open the Watch Tower is by casting a break spell called "Open Sesame"

_go to the watchtower to "talk" to the ArchMage_

you have to fight your way up the tower to get to the mage and at the top you have to defeat the mage for him to talk to you.

        break;

    case 3:

    the Archmage tells you the druid was trying to steal his book of forbidden magic. He gives you a bit more information of the stones capabilities but only has one possible outcome of who can potentially be withholding the stone and if it is who he thinks it is the lives of the inhabitants of the land might be in danger. he Gives you a potion for the druid and tells you of a nearby city but to be careful of the people running it and that he used to be the grand wizard of the academy but left shortly after and moved into the watchtower for good reasons.

the wizard gives you the potion, you have to go back to the druid and give it to him so he can tell you where to go next and continue the story.

    After giving the druid the potion he is able to turn back into normal and tells you that the men in armor were from the royal family of the nearby city of Archania. he was wrongfully accused of a murder of a high profile women and it is the reason he lives out here in the caves away from civilization, thats when he stumbled upon the dryad and became friends with her. All he knows about the stone is that it can create anything from the mind of the beholder and that in the wrong hands it can be very devastating. but if you wants more information maybe go confront the royal knights and their leader that is a mighty paladin. He thinks something about the book they wanted could be connected to the stone.

from this point the druid adds the new city to your map and it becomes a new location, you have to go to the city to continue your quest, this is the end of Act I

    break;


    default:
        break;

}
