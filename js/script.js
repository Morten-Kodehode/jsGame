import characterData from "./data.js";
import Character from "./character.js";

const attack = () => {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  if (wizard.dead || orc.dead) {
    endGame();
  }
  render();
};

const endGame = () => {
  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? "No victors - all creatures are dead"
      : wizard.health > 0
      ? "The Wizard Wins"
      : "The Orc is Victorious";
  document.body.innerHTML = `
        <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}<S/h3>
        </div>
      `;
};

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
};

document.querySelector("#attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
