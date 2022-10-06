
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);

     console.log(a);
     console.log(b);

     // Add comparison logic

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
   };
 