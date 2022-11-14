// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// add red color for stop light / what button I will target? target id stopLight and add a css class .stop to it that I added in csss file.
function stopLight(){
    document.querySelector('#stopLight').classList.add('red');
    document.querySelector('#slowLight').classList.remove('yellow');
    document.querySelector('#goLight').classList.remove('green');
}


// add yellow color for slow light / what button I will target? 
function slowLight(){
    document.querySelector('#slowLight').classList.add('yellow');
    document.querySelector('#stopLight').classList.remove('red');
    document.querySelector('#goLight').classList.remove('green');
}


// add green color for go light / what button I will target?
function goLight(){
    document.querySelector('#goLight').classList.add('green');
    document.querySelector('#slowLight').classList.remove('yellow');
    document.querySelector('#stopLight').classList.remove('red');
}

// Event Listener - how do we target the stop button? target with document. The code says find the stop button, listen for a click, if someone clicks on it call the stop function.

document.querySelector('#stopButton').addEventListener('click', stopLight);

// writing the others with querySelector instead of getElementById to see the syntax changes # etc
document.querySelector('#slowButton').addEventListener('click',slowLight);
document.querySelector('#goButton').addEventListener('click',goLight);


// Another way of writing this code 
// function turns off all the lights

// function turnOff(){
//     document.querySelector('#stopLight').classList.remove('red');
//     document.querySelector('#slowLight').classList.remove('yellow');
//     document.querySelector('#goLight').classList.remove('green');
// }

// stoplight function

// function stopLight(){
//     turnOff();
//     document.getElementById('stopLight').classList.add('red');
// }

// slowLight function

// function slowLight(){
//     turnOff();
//     document.getElementById('slowLight').classList.add('yellow');
// }

// goLight function

// function goLight(){
//     turnOff();
//     document.getElementById('goLight').classList.add('green');
// }

// Set up event handlers/ event listeners for each button 

// document.getElementById('stopButton').addEventListener('click', stopLight);
// document.getElementById('slowButton').addEventListener('click', slowLight);
// document.getElementById('goButton').addEventListener('click', goLight);