const scores = [];

export function addScore(name, score) {
  return new Promise((resolve, reject) => {
    if (!name || Number.isNaN(score)) {
      reject(new Error('Invalid input'));
    } else {
      scores.push({ name, score });
      resolve();
    }
  });
}

export function displayScores(container) {
  container.innerHTML = '';

  scores.forEach((scoreObj) => {
    const { name, score } = scoreObj;
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `${name}: ${score}`;
    container.appendChild(scoreElement);

    const hr = document.createElement('hr');
    container.appendChild(hr);
  });
}
