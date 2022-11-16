let bars = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

// how to add and remove class

// define function
bars.addEventListener('click', function(ompaa){
    // stop the link
    ompaa.preventDefault();
    // get all the items in the nav
    const itemArr = document.getElementsByClassName('item');

    // loof through all of them
    for (let i = 0; i < itemArr.length; i++) {
        // console.log(i + ". " + itemArr[i]);
          // toggle the class mobileHide
        itemArr[i].classList.toggle('mobileHide');
      }

    // get all the item.buttons
    const itemArrButton = document.querySelectorAll('.item.button');
    for (let i = 0; i < itemArrButton.length; i++) {
        // loop through all of them
        // toggle the mobileHideSM
        itemArrButton[i].classList.toggle('mobileHideSM');
        // remove the mobileHide
        itemArrButton[i].classList.remove('mobileHide');
    }
    
})