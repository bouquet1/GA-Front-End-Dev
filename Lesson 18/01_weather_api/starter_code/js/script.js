
// ToDo
// When the user submits the search form, make an API request to open weather api's search endpoint
// https://api.openweathermap.org/data/2.5/weather?q=CITY&APPID=KEY
// Icon URL - refer to docs on how to use
// https://openweathermap.org/img/wn/####@2x.png  - replace #### with icon code
// Display the results in the #weather-results div
// Each new search should erase the previous results

const myApiKey = "QEYMnvJV9i8L8WzQFC9NdVHAHN6fb4cX";
// I need to change this Giphy key to openweathermap.org websitesine kayit olup alacagim key ile degistirmem gerek. Ders esnasinda siteye kayit olup key almayi yapamadim. dolayisiyla QEYMnvJV9i8L8WzQFC9NdVHAHN6fb4cX yanlis bir key.

async function handleWeatherRequest(e) {
  e.preventDefault();

  
  // get user input value from textbox
  let city = document.querySelector('input[name="city"]').value;
  // targeting attribute. In our html file it is written like that: <input type="text" name="city" />
  
  // build the url address with YOUR personal API key and the users input city

  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;

  // const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + myApiKey;
  
  // make an API call using fetch() and capture the response in a variable
  const response = await fetch(apiURL);
 
  // convert the response to a readable json format with .json()
  const convert = await response.json();
  
  // print your data to the console to see its format, dont forget to delete later
  console.log(convert);
  
  // Write a separate function to convert the temps from the default units (Kelvin) to a more readable F or C
const currentTemp = convertKtoF(convert.main.temp);
const feelsLikeTemp = convertKtoF(convert.main.feels_like);
const humidity = convert.main.humidity;
const pressure = convert.main.pressure;
const highTemp = convertKtoF(convert.main.temp_max);
const lowTemp = convertKtoF(convert.main.temp_min);

const weatherResults = `<li>The temperature in ${convert.name} is currently ${currentTemp}&#176;</li>
<li>Feels like: ${feelsLikeTemp}&#176;</li>
<li>Humidity: ${humidity}%;</li>
<li>Pressure: ${pressure}%;</li>
`

  
  // build the icon src
  
  // create icon img tag
  
  // add icon url as src
  
  // clear out previous icon img
  
  // print all results to dom
  document.getElementById('weather-results').innerText = 
  
  // append icon img to dom
  

function convertKtoF(kelvinTemp){
  let tempF = (kelvinTemp - 273) * 1.8 + 32;

  // round the number because it gives us temp like 52.9876568888 so let's round up the number
  tempF = Math.round(tempF);

  return tempF;
}
}


// Attach an event listener to the submit button
document.querySelector('#weather-search').addEventListener('submit' ,handleWeatherRequest);
