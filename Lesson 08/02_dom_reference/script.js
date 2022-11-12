/**
 * GETTERS
 * =================
 * 
 * Vanilla JS gives you a lot of options to get things out the DOM
 * These are commonly used ones but there are tons more
 */

// querySelector
document.querySelector('.my-class-name'); // returns first instance of a class, needs dot before class name
document.querySelector('#id-of-element'); // returns first instance of a class, needs hash before id name
document.querySelector('div.good'); // gets div with class of 'good' - this one targets all the div's in the html with the class good

document.querySelector('.topBar > nav ul > li.featured a');  // If I want to I can be as detailed as I want. I could say this too.  


// querySelectorAll
document.querySelectorAll('a'); // returns an array of all anchor tags in a document - document.querySelector gives you one thing. document.querySelectorAll gives you an array of things, in this case an array of all anchor tags in the html document.

// getElementById
document.getElementById('id-of-element-goes-here'); // returns entire DOM node and whatever is included inside

// getElementByClassName
document.getElementsByClassName('class-name-here'); // returns an array of all dom nodes with that class. document.getElementsByClassName > watch out that it says getElements - plural

document.getElementsByClassName('class-name-here')[0]; // returns the first element with the class name 'class-name-here
// the weird [0] thing says to grab the first thing in the array. Don't worry for now!


/**
 * SETTERS / METHODS
 * =================
 * 
 * Vanilla JS also gives you a lot of options to put things out the DOM
 */

// basic text and style manipulation
const ga = document.getElementById('ga'); // <h1 id="ga"></h1> is in the index.html. We created a variable called ga and defined it with 'ga' id element in our html. See below - then we said I wanna change my text this way ga.textContent = "look at me using JS!"; Since we wrote it in js document and we have id "ga" in our html we added the sentence "look at me using JS!" in our html. You can check with the html link that I added before this codes. 
ga.textContent = "look at me using JS!"; // applies text to an element
ga.style.backgroundColor = "red" // applies a style to the page, must access style property, then CSS property written in camelCase (css de background-color diye yaziyoruz ama JS de backgroundColor diye yaziyoruz yani camelCAse olarak cunku hypen kullanmiyoruz JS de). BURDADA bu komutla background rengini red yaptik. 

// TO EDIT YOUR CLASSLIST YOU HAVE 3 METHODS THAT IS SHOWN BELOW add, remove, and toggle.
ga.classList.add('blue'); // adds the class 'blue' to an element
ga.classList.remove('time-of-day'); // removes the class 'time-of-day' from an element
ga.classList.toggle('class-name'); // toggles a class on and off of an element




const newParagraph = document.createElement("p") // creates an HTML element of the given tag type. This lets you create a whole html element in JS that son't exits. HTML imizde boyle bir <p> yok. brand new ekledik. Mesela yeni bir paragraf ekledik "hi im just a child" diyen html i acarsan gorursun orda.
newParagraph.innerText = "hi im just a child" // change the text of the paragraph. yukarda yarattigimiz newParagraph in text i bu.
document.body.appendChild(newParagraph); // adds a child HTML element to the body of the page. This says add the paragraph(newParagraph we created above) to the body of ther document/of our html.
const greatDiv = document.createElement('div') // creates a div 
greatDiv.style.border = "2px solid gold"; // mesela bunu da html sayfamiza ekledik JS ile. 
greatDiv.innerHTML = '<p>something great goes here</p>'; // sets the inner content of the div. // mesela bunu da html sayfamiza ekledik JS ile. 
document.body.appendChild(greatDiv); // adds the div to the end of the body of the page
const greatChild = document.createElement("p"); // creates a p tag
greatChild.id = "child-element";
greatChild.innerText = "I'm inside the greatest div of all"; // sets the text of the p tag. // mesela bunu da html sayfamiza ekledik JS ile. 
greatDiv.appendChild(greatChild); // adds the p tag to the previously created div




// removeChild()
const getTheKid = document.getElementById('child-element')
// comment this next line in and out to see the element get removed/not removed!
// greatDiv.removeChild(getTheKid);

// Attribute changing
ga.setAttribute('class', 'great-class-name'); // sets an attribute 'great-class-name' on an element. Attribute ne mesela src=. alt=, ya da href= are attributes.
ga.removeAttribute('id', 'what-an-id'); // removes 'what-an-id' id from element

// console
console.log() // outputs a single line of text to console
console.table() // outputs a table of data into the console

/**
 * PROPERTIES
 * =================
 * 
 * Descriptors of various DOM elements you get/set
 */

// .classList returns an array of classes that are on an element
const element = document.getElementById('your-id');
element.classList; 


// tells you all kinds of thing about the URL of a webpage - try it out
window.location