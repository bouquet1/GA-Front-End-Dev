
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
 