# Outline
1st hour - Review, For & While loops
2nd hour - Arrays, Loops + Arrays
3rd hour - Examples

# Reviewing W3C2: Functions, Scope, If/Else statements
How did homework go? Let's go over them.

- defining and calling functions - with or without parameters
- global vs local scope
- if/else statements

# Loops

Defining and calling a function is great. But what happens when you need to call it 100 times?
```js
function callMeMaybe() {
	console.log('But heres my number, so call me maybe');
}
callMeMaybe();
callMeMaybe();
callMeMaybe();
callMeMaybe();
...

```
#### Calling it 100 times is way too tedious. Introducing for loops:

```js
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', i);
}
```
Syntax includes: for keyword (remember keywords?), a let variable (remember variables?), a conditional (remember conditionals), a new operator called the increment operator (remember operators?) and curly brackets for a code block.

Let variable is important because this variable is changing every loop. A conditional is important because it will stop the looping at some point. The increment operator is important because this prevents an infinite loop happening (condition is always true) and will allow the condition to become false.

What it does is it will run the code inside the curly brackets a defined number of times. In this case, how many times will it run?
```js
/* loop 1
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', 0);
}*/
/* loop 2
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', 1);
}*/
/* loop 3
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', 2);
}*/
/* loop 4
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', 3);
}*/
/* loop 5
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', 4);
}*/
```
It doesn't matter what value you put for the let variable, as long as you decide how many loops you want to do.
```js
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', i);
}
// same number of loops as
for (let i = 1; i < 6; i++) {
	console.log('Call me maybe?', i);
}
```
Let's practice writing them!

#### But what happens when you have an unpredictable number of loops? While loops!
When you want code to run continuously as long as a condition is met, while loops are great to use!

A good example is how our computer constantly stays on while you are actively using it. Let's pseudocode it
```js
while (userUsingComputer is true) {
	stayOn();
}
```
As long as we have a condition that can change, while loop will continue to run until the conditional is false.

We can also rewrite our for loop as a while loop:
```js
for (let i = 0; i < 5; i++) {
	console.log('Call me maybe?', i);
}
```
Let's practice writing while loops!

# Arrays

Arrays was one of the composite datatypes, represented by square brackets. Each value is separated by commas and each value is called an element.
`['apple', 'bananas', 'grapes']`

You can store anything in an array. The analogy was a cooking list. Let's refresh our memory on writing arrays!

#### Value of arrays
The great thing about arrays is that you can access the values or elements, so arrays become a great way of storing lots of related data, like a huge grocery list. It's better than storing a whole bunch of variables instead.
```js
const foods = ['apples', 'bananas', 'grapes'];
// VS
const firstGroceryItem = 'apples'
const secondGroceryItem = 'bananas'
const thirdGroceryItem = 'grapes'
```
How to access them is by using square brackets and writing the 'index' of the value you are looking for in-between. Similar to when you go to the library and you have to give them the dewey decimal. The first element's index is always 0 so remember it as 'if you know that the value you're looking for is the first element, subtract 1 and you'll get the index which is 0'
```js
const foods = ['apples', 'bananas', 'grapes'];
console.log(foods[0]) // 'apples'
console.log(foods[1]) // 'bananas'
console.log(foods[2]) // 'grapes'
```
Let's practice writing arrays and getting the values!

#### The `.length` property
If you want to know how long an array is, you can find out by using the `.length` property. 
```js
const summerMonths = ['june', 'july', 'august'];
console.log(summerMonths.length); // 3
```
When there is no elements inside an array, what would the `.length` equal to?

One of the values of this property is that now you can loop through an array and run code on each element.

# Loops + Arrays

The great thing about arrays is that they allow you to do iterative things or loop through them. Imagine a list of people who are expected to receive something. You can do this using a for loop.
```js
const mondayLineup = ['Maliha', 'Nazia', 'Saba'];

for (let i = 0; i < mondayLineup.length; i++) {
	console.log(mondayLineup[i] + ' got feedback!');
}
/*
'Maliha got feedback!'
'Nazia got feedback!'
'Saba got feedback!'
*/
```
Let's break this down:
- an array of 3 elements
- defined a let variable to be 0 - in this case, because we want to start at the first element
- condition where i < 3 (length of the array) - Why?
- increment operator

Let's practice writing them!

# Examples

Great! Now that I have some foundation, how do I apply this? Here are 2 examples on how JS turns your static website into something interactive. Don't mind some of the lines as you'll learn more about them next class when we talk about jquery. 

Pseudocode first for any task!

Showing an input on page
```html
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
</head>
<body>
  <input type="text" name="text" placeholder='Type here' />
  <button>Click Me</button>
  <p>I am currently static and do not change</p>
  <script>
  	$(document).ready(function() {
      function changeContent() {
        const currentContent = $('input').val();
        
        if (currentContent === '') {
          $('p').html('Welcome Guest!');
        } else {
          $('p').html('Welcome ' + currentContent + '!');
        }
		/*
		if (currentContent === '') {
			$('p').html('Welcome Guest!');
		} else {
			$('p').html('Welcome ' + currentContent + '!');
		}
		*/
      }
      
    	$('button').click(changeContent);
    });
  </script>
</body>
```

Evaluating an answer to a question
```html
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js">
</script>
</head>
<body>
  <h5>What is Today's class about?</h5>
  <input type="text" name="text" placeholder='Type here' />
  <button>Evaluate</button>
  <p>Question has not been evaluated</p>
  <script>
  	$(document).ready(function() {
      function evaluateAnswer() {
        const answer = $('input').val();
        const topics = ['loops', 'arrays', 'examples'];
        
        for (let i = 0; i < topics.length; i++) {
        	if (answer === topics[i]) {
            $('p').html('Answer is correct!');
            break;
          } else {
            $('p').html('Answer is wrong!');
          }
        }
      }
      
    	$('button').click(evaluateAnswer);
    });
  </script>
</body>
``` 

# Homework