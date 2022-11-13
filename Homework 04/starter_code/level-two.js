/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

arenaEl.addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) {
      score += 10;
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else {
        declareWinner();
      }
    }
  })
  
  function declareWinner() {
    document.body.classList.add('game-over');
  }
  

// write function that adds score when any of the balls are clicked

// function balls(){
//     document.getElementsByClassName('js-ball')[0].onclick.arenaEl(score += 10);
//         if ( score < 100 ) {
//                 scoreEl.innerText = score;
//               } else {
//                 declareWinner();
//               }
// }
// arenaEl.addEventListener('click', balls);

//   function declareWinner() {
//     document.body.classList.add('game-over');
//   }

