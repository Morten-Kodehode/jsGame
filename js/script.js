import characterData from "./data.js";
import Character from "./character.js";

let monsterArray = ["orc", "demon", "goblin"];

const attack = () => {
  wizard.getDiceHtml();
  monster.getDiceHtml();
  wizard.takeDamage(monster.currentDiceScore);
  monster.takeDamage(wizard.currentDiceScore);
  render();

  if (wizard.dead) {
    endGame();
  } else if (monster.dead) {
    if (monsterArray.length > 0) {
      monster = getNewMonster();
      render();
    } else {
      endGame();
    }
  }
};

const getNewMonster = () => {
  const nextMonsterData = characterData[monsterArray.shift()];
  return nextMonsterData ? new Character(nextMonsterData) : {};
};

const endGame = () => {
  const endMessage =
    wizard.health === 0 && monster.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The monster is Victorious";
  document.body.innerHTML = `
        <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}<S/h3>
        </div>
      `;
};

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = monster.getCharacterHtml();
};

document.querySelector("#attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
let monster = getNewMonster();
render();
