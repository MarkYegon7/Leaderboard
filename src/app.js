import { addScore, displayScores } from './leaderboard.js';

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const scoreInput = document.getElementById('scoreInput');
  const submitButton = document.getElementById('submitButton');
  const refreshButton = document.getElementById('button-refresh');
  const scoresList = document.getElementById('scoresList');

  submitButton.addEventListener('click', async () => {
    const name = nameInput.value;
    const score = parseInt(scoreInput.value, 10);

    if (name && !Number.isNaN(score)) {
      try {
        await addScore(name, score);
        await displayScores(scoresList);
        nameInput.value = '';
        scoreInput.value = '';
      } catch (error) {
        // console.error(error);
      }
    }
  });

  refreshButton.addEventListener('click', async () => {
    try {
      await displayScores(scoresList);
    } catch (error) {
      // console.error(error);
    }
  });
});