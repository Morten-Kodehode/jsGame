const getDiceRollArray = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
};

const getDiceHtml = (diceCount) => {
  return getDiceRollArray(diceCount)
    .map((num) => `<div class="dice">${num}</div>`)
    .join("");
};

const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "assets/wizard.png",
  halth: 60,
  diceRoll: [3, 1, 4],
  diceCount: 3,
};

const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "assets/orc.png",
  health: 10,
  diceRoll: [2],
  diceCount: 1,
};

const renderCharacter = (data) => {
  const { elementId, name, avatar, health, diceRoll, diceCount } = data;
  const diceHtml = getDiceHtml(diceCount);

  document.getElementById(elementId).innerHTML = `
  <div class="character-card">
    <h4 class="name">${name}</h4>
    <img class="avatar" src="${avatar}" />
    <p class="health">health: <b> ${health} </b></p>
    <div class="dice-container">
      ${diceHtml}
      </div>
  </div>
  `;
};

renderCharacter(hero);
renderCharacter(monster);
