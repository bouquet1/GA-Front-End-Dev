// 1- Click input button, turn city border red using pure JS getElementByClassName selector
document.getElementsByClassName('js02class')[0].addEventListener('click', function() {
  document.getElementsByClassName('stronghold')[0].classList.toggle('red');
});

// 2- Using a proper function and local variable declarations with getElementByClassName
function petworth( ButtonID, SelectorID ) {
  const petworthButton = document.getElementsByClassName(ButtonID)[0];
  const petworthSelector = document.getElementsByClassName(SelectorID)[0];  
  petworthButton.addEventListener("click", function(){
    petworthSelector.classList.toggle("red");
  });
}
petworth( "js03class" , "petworth" );

// 3- Using querySelector instead of getElementByClassName
function dupont( ButtonID, SelectorID ) {
  const dupontButton = document.querySelector(ButtonID);
  const dupontSelector = document.querySelector(SelectorID);  
  dupontButton.addEventListener("click", function(){
    dupontSelector.classList.toggle("red");
  });
}
dupont( ".js04class" , ".dupont" );

// NOTE
// function petworth and function dupont at the above describes the function. We call the fucntion by saying this > petworth( "js03class" , "petworth" ); or this > dupont( ".js04class" , ".dupont" ); .If we write functions first petworth and then dupont and we call dupont at first line and call the function petworth at second line; function dupont will execute first even though the definition of function dupont is written as a second definition. Example below:

// we write the functions but they don't do anything until we call the functions at line 46 and line 47
// function petworth( ButtonID, SelectorID ) {
//   const petworthButton = document.getElementsByClassName(ButtonID)[0];
//   const petworthSelector = document.getElementsByClassName(SelectorID)[0];  
//   petworthButton.addEventListener("click", function(){
//     petworthSelector.classList.toggle("red");
//   });
// }

// function dupont( ButtonID, SelectorID ) {
//   const dupontButton = document.querySelector(ButtonID);
//   const dupontSelector = document.querySelector(SelectorID);  
//   dupontButton.addEventListener("click", function(){
//     dupontSelector.classList.toggle("red");
//   });
// }

// dupont( ".js04class" , ".dupont" );
// petworth( "js03class" , "petworth" );

