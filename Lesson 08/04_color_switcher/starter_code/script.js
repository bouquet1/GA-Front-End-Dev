// 1. When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.

const grayBtn = document.getElementById('grayButton');
grayBtn.addEventListener('click', function(){
    // color scheme to dark mode
    document.body.classList.add('darkMode');
})

// my  notes for the CODE ABOVE 1.- to target gray button and add a event listener to it we create a variable const grayBTN and we target it by saying document.getElementById('grayButton'). Gray button is a list item in HTML with id=grayButton. then we added the event listener > 
// grayBtn.addEventListener('click') says when we click do something.  we add the function inside there. Now we have class called .darkmode in css that we added in our css file right before writing the css code above. Where should we apply that .darkmode css style by using JS? To html, but where in the html, which tag we will target with .darkmode class. which tag in the html we should apply it to. <body> tag.  
// to change color scheme > document.body.classList.add('darkMode'); With this code we are saying, go to the document(html) find the body tag, target the body tag list of classes add a class darkmode.


// 2. The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!

const whiteBtn = document.querySelector('ul #whiteButton');
function setWhiteScheme(){
    document.body.classList.remove('darkMode');
}
    whiteBtn.addEventListener('click',setWhiteScheme);

    // my  notes for the CODE ABOVE 2.- We'll do similar things as code 1. define variable const whiteBtn. what we target with whiteBTN variable? we target the html file and the ul that has a class whiteButton. We can use querySelector = it works like getElementById it gets you the element but you can write a css style selector as the input. It goes to the page and says search for this.  document. For example if we say querySelector('ul#switcher #whiteButton'); that code says go to the html find me the ul with the id switcher find inside of that whiteButton. if we say querySelector('ul #whiteButton'); that code says go to the html find me the ul that has whiteButton inside of it.
    // then we write a function. we created a function called setWhiteScheme and we said whenever I call this function make sure to remove darkMode from the classlist of the body in the documet(html). SO we have the function setWhiteScheme and we have the element whiteBtn but we haven't add them together yet. that's when we need the event listener. whiteBtn.addEventListener('click',setWhiteScheme); Event listener always has two parameter, the action what we do, in this case 'click' and the function. in this case we didn't write the function inline we wrote it separate so we will just add here the name of the function which is setWhiteScheme.                                                       whiteBtn.addEventListener('click',setWhiteScheme);

    