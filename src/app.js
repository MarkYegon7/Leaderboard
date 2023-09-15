import { addScore, displayScores } from './leaderboard.js';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('nameInput');
  const scoreInput = document.getElementById('scoreInput');
  const submitButton = document.getElementById('submitButton');
  const scoresList = document.getElementById('scoresList');

  submitButton.addEventListener('click', () => {
    const name = nameInput.value;
    const score = parseInt(scoreInput.value, 10);

    if (name && !Number.isNaN(score)) {
      addScore(name, score)
        .then(() => {
          displayScores(scoresList);
          nameInput.value = '';
          scoreInput.value = '';
        })
        .catch(() => {
          // console.error(error);
        });
    }
  });
});
