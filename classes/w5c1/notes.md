
# Outline
1st hour - Review for Objects & Jquery, Code along with .on and .append
2nd hour - Requests, APIs, API Keys
3rd hour - `$.ajax` & Code along - finish project!

# Reviewing W4C2: Objects, Jquery
#### Objects
Objects group a set of variables - variables that may contain any of the datatypes. This is done through key-value pairs - key being the variable and value being what's in the variable. 

Keys that contain functions are called methods and keys that contain anything else is called a property.
```js
const mondayClass = {
	class: 'W5C1',
	course: 'Women Learning to Code',
	staff: ['Maliha', 'Saba']
	classNumber: 9,
	checkClassesLeft: function() {
		return 10 - this.classNumber;
	}
```
Quick tip about defining functions: we usually defined functions like this:
```js
function addMe() {
	return 1 + 2;
}
addMe();
```
However, you can also define functions by storing them in a variable. This is what's happening when you have a function defined inside an object.
```js
const addMe = function() {
	return 1 + 2;
}
addMe();
```

You can reassign the values stored inside keys.
```js
mondayClass.class = 'W5C2'
console.log(mondayClass.class) // 'W5C2'
```

#### Jquery

Jquery is a JavaScript library, meaning a group of pre-made Javascript code ready for use - in our case, Jquery helps lessen code that you would have had to write in order to modify HTML elements on a page.

Steps to use Jquery
1. Include CDN within script tag
2. Inside `<script>`, write code inside `document.ready(function() { <code> })`

Syntax is:
```js
$(selector).action() // $ sign to define/access jQuery
```
where the value in the selector is the HTML attributes like element, class, id, *. and action is the method or function you can call.

# `.on` and `.append`

`.on` and `.append`

Let's practice with 2 methods before we dive into our weather project: `.on` and `.append` (have getWeather and displayWeather (for each line, display the input)

```html
$(document).ready(function () {
	const getWeather = function(search) {
		console.log(search);
		displayWeatherCard(search);
	};

const displayWeatherCard = (results) => {
	$("#results").append(
		`
		<div class="card-deck">
			<div class="card-body">
				<img src="${iconURL}"/>
				<h4 class="card-title">City: ${results}</h4>
				<p class="card-text">Temp: ${results}°C</p>
				<p class="card-text">Feels like: ${results}°C</p>
				<p class="card-text">Description: ${results}</p>
			</div>
		</div>
		`
	);
};

$("form").on("submit", function (event) {
	// Recall: Form's submit. They do not listen to clicks.
	// Always remember to call preventDefault to stop page from refreshing.
	event.preventDefault();
	// Create variable userSearch and assign it to jQuery selector, retrieving it's value.
	let userSearch = $("input[type=text]").val();
	// Call on getWeather function, feeding it in argument userSearch
	getWeather(userSearch);
	// Clear input field upon submission.
	$("input[type=text]").val(" ");
	});
});
```

Now we'll revisit our weather project and use a few methods to display the input. This will help set up our project for the final piece which is to get information from a third party.

# How a Request is Made feat. APIs

When you type in google.com, a webpage shows up. What is happening behind the scenes is a series of events between two parties: client and the server. A great analogy is how a fast-food restaurant works - inspired by an analogy I came across on codeanalogies.com.

You are a hungry person at home wanting to eat something. A&W is a fast-food restaurant nearby with a menu of food items which they offer to hungry people like you, including their amazing BeyondMeat burger. You decide you want a BeyondMeat burger from A&W delivered so you call A&W and make an order over the phone for the BeyondMeat burger. A&W prepares the needed materials for the burger, makes it for you and delivers it to your doorstep. You get the burger and enjoy it.

![Instead of beer, think of burgers](https://i2.wp.com/blog.codeanalogies.com/wp-content/uploads/2018/04/reqres1.png?resize=730,380&ssl=1)

This example is no different from how it works on the internet. In our food example, the hungry person ordering the burger is called the Client, which is our browsers (Chrome, Firefox, Safari) and the food order is a Request (in the form of an object). A&W is the Server waiting for requests to be made for its resources or data a.k.a the food items on the menu. The burger + receipt sent to the Client is the Response (in the form of the object with data).

In our case, google.com will return a response that includes an HTML document. But not all servers send back HTML documents; they can also just send raw data so you can choose how to use and display the data. This is an API (Application Programming Interface). 

We will be using an API to get raw weather data and we will decide how to display the data.

# Intro to OpenWeatherMap API and API Keys

For our weather project, we will be using the OpenWeatherMap API to get weather data based on a city value we provide. In order to use it, we have to get an API key.

An API Key is a code that allows the server or API to identify what project or application is making the request. It also allows the server to keep track of how many requests an application or project has made. For example, when you renew a library book, your library ID identifies you and the system keeps track of how many times you've renewed the same library book. Not all APIs require an API key for access to their data but many do. Let's get our API key for OpenWeatherMap!

1. Create an account on openweathermap.org
2. Go to API Keys.
3. Type in an API Key name called 'Women Learning to Code' and hit Generate.
4. Copy the value.

# `$.ajax`

`.ajax` is a Jquery method that allows you to make a request with ease without worrying about  the complicated nature of sending a request.
```js
$.ajax({
	url: `https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=APIKEY`,
	method: "GET",
	dataType: "json",
}).done(function (results) {
	console.log(results);
});
```

There are a few methods you can specify to an API. Common ones include 'GET' which is literally 'getting' a resource but there is also 'POST' which is 'posting' to a resource, similar to when you post to Instagram.

Datatype here is referring to how you are expecting to see the server response. In our case, it will be JSON which refers to Javascript Object Notation - essentially we are expecting an object as the response when using the Openweathermap API

`.done` is the next function that will be called once we have gotten a response from the server. This is where you can decide what you want to do with the data we've gotten from the server. In our case, we decided to `console.log` the results.

Let's see this example in action!

Now we'll fix our 2 functions to include the data we received from Openweathermap and then we're done!

```html
$(document).ready(function () {
	const getWeather = function(search) {
		console.log(search);
		$.ajax({
			url: `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=APIKEY`,
			method: "GET",
			dataType: "json",
		}).done(function (results) {
			displayWeatherCard(results);
		});
	};

const displayWeatherCard = function (results) {
	let icon = results.weather[0].icon;
	let iconURL = `http://openweathermap.org/img/wn/${icon}.png`;
	$("#results").append(
		`
		<div class="card-deck">
			<div class="card-body">
				<img src="${iconURL}"/>
				<h4 class="card-title">City: ${results.name}</h4>
				<p class="card-text">Temp: ${results.main.temp}°C</p>
				<p class="card-text">Feels like: ${results.main.feels_like}°C</p>
				<p class="card-text">Description: ${results.weather[0].description}</p>
			</div>
		</div>
		`
	);
};

$("form").on("submit", function (event) {
	// Recall: Form's submit. They do not listen to clicks.
	// Always remember to call preventDefault to stop page from refreshing.
	event.preventDefault();
	// Create variable userSearch and assign it to jQuery selector, retrieving it's value.
	let userSearch = $("input[type=text]").val();
	// Call on getWeather function, feeding it in argument userSearch
	getWeather(userSearch);
	// Clear input field upon submission.
	$("input[type=text]").val(" ");
	});
});
```


> Written with [StackEdit](https://stackedit.io/).