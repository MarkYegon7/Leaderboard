const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const scores = [];

export async function addScore(name, score) {
  if (!name || Number.isNaN(score)) {
    throw new Error('Invalid input');
  }

  const response = await fetch(`${API_URL}games/:GAME_ID/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });

  if (!response.ok) {
    throw new Error('Failed to add score');
  }

  scores.push({ name, score });
}

export async function displayScores(container) {
  container.innerHTML = '';

  const response = await fetch(`${API_URL}games/:GAME_ID/scores/`);
  if (!response.ok) {
    throw new Error('Failed to fetch scores');
  }

  const data = await response.json();

  data.result.forEach((scoreObj) => {
    const { user, score } = scoreObj;
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `${user}: ${score}`;
    container.appendChild(scoreElement);

    const hr = document.createElement('hr');
    container.appendChild(hr);
  });
}
