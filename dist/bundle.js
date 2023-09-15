"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleaderboard"] = self["webpackChunkleaderboard"] || []).push([["bundle"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _leaderboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leaderboard.js */ \"./src/leaderboard.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const nameInput = document.getElementById('nameInput');\n  const scoreInput = document.getElementById('scoreInput');\n  const submitButton = document.getElementById('submitButton');\n  const refreshButton = document.getElementById('button-refresh');\n  const scoresList = document.getElementById('scoresList');\n\n  submitButton.addEventListener('click', async () => {\n    const name = nameInput.value;\n    const score = parseInt(scoreInput.value, 10);\n\n    if (name && !Number.isNaN(score)) {\n      try {\n        await (0,_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__.addScore)(name, score);\n        await (0,_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__.displayScores)(scoresList);\n        nameInput.value = '';\n        scoreInput.value = '';\n      } catch (error) {\n        // console.error(error);\n      }\n    }\n  });\n\n  refreshButton.addEventListener('click', async () => {\n    try {\n      await (0,_leaderboard_js__WEBPACK_IMPORTED_MODULE_0__.displayScores)(scoresList);\n    } catch (error) {\n      // console.error(error);\n    }\n  });\n});\n\n//# sourceURL=webpack://leaderboard/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\n//# sourceURL=webpack://leaderboard/./src/index.js?");

/***/ }),

/***/ "./src/leaderboard.js":
/*!****************************!*\
  !*** ./src/leaderboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addScore: () => (/* binding */ addScore),\n/* harmony export */   displayScores: () => (/* binding */ displayScores)\n/* harmony export */ });\n// const API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\n// const scores = [];\n\n// export async function addScore(name, score) {\n//   try {\n//     if (!name || Number.isNaN(score)) {\n//       throw new Error('Invalid input');\n//     }\n\n//     const response = await fetch(`${API_URL}games/:GAME_ID/scores/`, {\n//       method: 'POST',\n//       headers: {\n//         'Content-Type': 'application/json',\n//       },\n//       body: JSON.stringify({ user: name, score }),\n//     });\n\n//     if (!response.ok) {\n//       throw new Error('Failed to add score');\n//     }\n\n//     scores.push({ name, score });\n//   } catch (error) {\n//     // console.error(error);\n//     throw error;\n//   }\n// }\n\n// export async function displayScores(container) {\n//   try {\n//     container.innerHTML = '';\n\n//     const response = await fetch(`${API_URL}games/:GAME_ID/scores/`);\n//     if (!response.ok) {\n//       throw new Error('Failed to fetch scores');\n//     }\n\n//     const data = await response.json();\n\n//     data.result.forEach((scoreObj) => {\n//       const { user, score } = scoreObj;\n//       const scoreElement = document.createElement('div');\n//       scoreElement.textContent = `${user}: ${score}`;\n//       container.appendChild(scoreElement);\n\n//       const hr = document.createElement('hr');\n//       container.appendChild(hr);\n//     });\n//   } catch (error) {\n//     // console.error(error);\n//     throw error;\n//   }\n// }\n\nconst API_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';\n\nconst scores = [];\n\nasync function addScore(name, score) {\n  if (!name || Number.isNaN(score)) {\n    throw new Error('Invalid input');\n  }\n\n  const response = await fetch(`${API_URL}games/:GAME_ID/scores/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({ user: name, score }),\n  });\n\n  if (!response.ok) {\n    throw new Error('Failed to add score');\n  }\n\n  scores.push({ name, score });\n}\n\nasync function displayScores(container) {\n  container.innerHTML = '';\n\n  const response = await fetch(`${API_URL}games/:GAME_ID/scores/`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch scores');\n  }\n\n  const data = await response.json();\n\n  data.result.forEach((scoreObj) => {\n    const { user, score } = scoreObj;\n    const scoreElement = document.createElement('div');\n    scoreElement.textContent = `${user}: ${score}`;\n    container.appendChild(scoreElement);\n\n    const hr = document.createElement('hr');\n    container.appendChild(hr);\n  });\n}\n\n\n//# sourceURL=webpack://leaderboard/./src/leaderboard.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);