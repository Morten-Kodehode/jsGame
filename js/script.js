import characterData from "./data.js";
import Character from "./character.js";

let monsterArray = ["orc", "demon", "goblin"];
let isWaiting = false;

const attack = () => {
  if (!isWaiting) {
    wizard.getDiceHtml();
    monster.getDiceHtml();
    wizard.takeDamage(monster.currentDiceScore);
    monster.takeDamage(wizard.currentDiceScore);
    render();

    if (wizard.dead) {
      endGame();
    } else if (monster.dead) {
      isWaiting = true;
      if (monsterArray.length > 0) {
        setTimeout(() => {
          monster = getNewMonster();
          render();
          isWaiting = false;
        }, 1000);
      } else {
        endGame();
      }
    }
  }
};

const getNewMonster = () => {
  const nextMonsterData = characterData[monsterArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
};

const endGame = () => {
  isWaiting = true;
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The monster is Victorious";
  setTimeout(() => {
    document.body.innerHTML = `
              <div class="end-game">
              <h2>Game Over</h2>
              <h3>${endMessage}<S/h3>
              </div>
            `;
  }, 1500);
};

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

document.querySelector("#attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
