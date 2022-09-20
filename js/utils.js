const getDiceRollArray = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6) + 1);
};

const getDicePlaceholderHtml = (diceCount) => {
  return new Array(diceCount)
    .fill(0)
    .map(() => {
      return `<div class="placeholder-dice"></div>`;
    })
    .join("");
};

const getPrecentage = (remainingHealth, maximumHealth) =>
  (100 * remainingHealth) / maximumHealth;

export { getDiceRollArray, getDicePlaceholderHtml, getPrecentage };
