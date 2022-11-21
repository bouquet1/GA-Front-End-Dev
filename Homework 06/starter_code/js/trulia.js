

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function(event) {

// Toggle the navigation

document.querySelector('trulia-nav-toggle').addEventListener('click', function(e){
  e.preventDefault();
  let NavList = documet.querySelectorAll('.trulia-nav > nav ul');

  for(let n=0;n<navSet.length;n++){
    NavList[n].classList.toggle('trulia-nav-mobilehide');
  } 

  });


// Loop through all the cards
for (var i = 0; i < truliaCards.length; i++){
  truliaCards[i].addEventListener('click',function(){
    
  // Add a click listener on each card
      
      // Remove the featured class

      for (var q = 0; q < truliaCards.length; q++){
        truliaCards[q].classList.remove('trulia-featured-grid-item');
    } 

      // Add the featured class on the one clicked on
      this.classList.add('trulia-featured-grid-item');
  });
}

  });  



