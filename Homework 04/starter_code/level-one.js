/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');


function declareWinner() {
  document.body.classList.add('game-over');
}