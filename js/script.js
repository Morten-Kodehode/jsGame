import characterData from "./data.js";
import Character from "./character.js";

const attack = () => {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  render();
};

const render = () => {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
};

document.querySelector("#attack-button").addEventListener("click", attack);
const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();
