
// this code says when I click on the id submit  -.onclick = function(e)- make a variable(var) called comparasion -let comparison;- (we don't give it a value yet) make a variable called a  -let a = Number(document.querySelector('#a').value);- and make a variable b  -let b = Number(document.querySelector('#b').value);-. 

// Set them )a,b) equal to= get me id of #a from the document (document=html file input tags in html as   <input id="a" value="8">) -and javaScript command is (document.querySelector('#a').value);- and go get the value of it and put it in variable a. Do the same for #b.)

 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);

     console.log(a);
     console.log(b);

     // Add comparison logic
// setting the value of the string (html de ne yazacak) of comparison
    //   Are they not numbers
if(isNaN(a) || isNaN(b)){
  comparison = 'N/A';

} else if(a > b) {  
  // is a more than b
  comparison = '>';

} else if(a < b) { 
  // is a less than b
  comparison = '<';

} else {  
  // is a equal to b
  comparison = '=';
}

     document.querySelector('#comparison').innerText = comparison;
    //  we're taking the string that variable and show it into the text (as a value between two box says either '> , < , = , N/A)  burda diyoruzki comparison i web de sayfada goster .innerText ile diyoruz.
   };
 




  //  EVENT LISTENER EXAMPLES
  let inputA = document.getElementById("a");
  // now I have this variable called inputA. I'm gonna add a function.
    function hail(){
    console.log("Hail!");
  }
    // console.log("For I have been clicked upon!");
    //   this function says, whenever I click on inputA I want to have the function hail be run.
  
  inputA.addEventListener('click',hail);
  // So this says, Get me my inputA. Define the function called Hail. When I click on the inputA run function hail. Shortly, I am targeting my id 'a' , put in the variable, and then I add a listener to it.

  let inputC = document.getElementById("comparison");
    function hail2(){
    console.log("For I have been clicked upon!");
    }

  inputC.addEventListener('click',hail2);
  // function line let the hail or hail 2 esixts. Creating variable inputA or inputC is creating a variable. The line ' inputA.addEventListener('click',hail);' or ' inputC.addEventListener('click',hail2);' brings them together. 

  let garfield = document.getElementById("b");
   function hail3(){
    console.log("Bro, you've clicked me!");
   }

   garfield.addEventListener('click',hail3);







  //  More examples 
  let comicPets = { // this is an object
    "garfield":{ // garfield is a property of our variable(comicPets)
      "type":"cat", // type is property of garfield. below more properties with values
      "color":"orange",
      "weight":"Fat Beyond All Belief"
    },
    "odie":{
      "type":"dog",
      "color":"white with spot",
      "weight":"healthy"
    },
    "slyvester":{
      "type":"cat"
    }
  };
  
  console.log(comicPets.garfield.weight);
  // console log gives us Fat Beyond All Belief
  