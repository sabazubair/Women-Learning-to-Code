# Outline
1st hour  - Review, Functions and how to write them, Return keyword
2nd hour - Argument vs Parameter, Scope, Built-in functions
3rd hour - If/Else statements with conditionals

# Reviewing W3D1: Data types, Variables, Conditionals

How did homework go? Let's go over them.
- simple datatypes (strings, numbers, booleans)
- complex datatypes (objects, arrays, functions)
- conditionals

Review variables & string concatenation
- let vs const
- dynamic strings using string concatenation

# 5 W’s on Functions

- What are functions? Think of them as tools.
- Who uses functions? We all do!
- When do you use functions? Lessen repetitive code
- Where? Everywhere!
- Why? Want to write less code. Imagine this scenario and you needed to change the 4 to a 6:
```js
const aRandomNumber = 3;
aRandomNumber + 4;
...
aRandomNumber + 4;
...
aRandomNumber + 4;
```
 Big pain in the butt!

# Terminology: Definition & Calling a function


Define a function: note the syntax and code indentation: function keyword (what is a keyword?), name, parentheses and curly brackets for a code block

```js
function screwdriver(){
	3 + 4;
}

```
Once you define a function, you have to call it for it to work.
```js
function hiThere() {
	2 + 2;
}

hiThere();
```
Let's practice defining and calling functions!

#### but once you hit run, you got nothing? what happened? The return keyword
Return keyword is telling the computer to actually send you the result back. It does the work but it doesn't know that you actually want to have it back. Point of returning the value is so you can do something with the value
```js
function hiThere() {
	return 2 + 3;
}

hiThere(); // 2 + 3
hiThere(); // 2 + 3
hiThere(); // 2 + 3

```
#### But hey, what about console.log? Doesn't that give you the value back? 
Not really, it just prints but inside the function, it doesn't actually provide the value back- like a screenshot.
    
#### But seriously what's the point of running these functions? 
It allows you to do 2 things:
- get repetitive stuff done without copying and pasting
- get a final result and save it inside a variable!
```js
	const result = hiThere();
	console.log(result);
```
Let's practice returning values and seeing it with the console.log!

# Parameters vs Arguments
It gets a bit boring and tedious with these simple functions, especially if the structure is the same in many functions.
```js
function numberOne() {
	return 2 + 3;
}

function numberTwo() {
	return 3 + 3;
}

function nuumberThree() {
	return 4 + 3;
}
```

You want to be able to do different equations (not just 2 + 3 but also 3+3) with the same function, this is where <b>parameters</b> come in:

```js
function aRandomName(number){
	return number + 4;
}
```

A parameter is essentially a variable you use inside the function. When calling the function, this is how it looks:

```js
aRandomName(3);
/* function aRandomName(3){
	return 3 + 4
}*/

```

When passing in the 3, that is called an <b>argument</b> - the value you set for the variable. You are essentially saying -make the variable 'number' be 3-

Let's practice writing functions with parameters!
    
# Scope with variables

Scope is like the difference between library books vs books at home

Scope inside inside function vs outside of function (determined by curly brackets)
    
```js
const number = 3;
function anotherFn(message) {
	return message + number;
}

function anotherDarnFn(message) {
	const anotherNumber = 4;
	return message + number + anotherNumber;
}

```
    
So from another function, you can't get access to values only found inside curly brackets of another function.

# Built-in Functions
You don't have to define all functions; Javascript comes with its own functions built in. There are many so here are 2 common ones:
- console.log() - helps print values
- Number() - converts strings to Numbers

  

# If/Else statements

If/Else statements help control what code will run, based on a conditional (Remember those?)

Let's start with an analogy like an occasion we celebrate. What's one?
```
if it is Eid
you eat lots of food and see friends
else
eat regular bunch of food and don't see people
```

Let's pseudocode this, with some syntax. Notice curly brackets representing a code block, parentheses for conditional and indentation:
```
if (it is Eid) {
	you eat lots of food and see friends;
} else {
	eat regular bunch of food and don't see people;
}
```
In code, it could look like this 
```js
const holiday = 'Eid'
if (holiday === 'Eid') {
	console.log('you eat lots of food and see friends!');
} else {
	console.log('eat regular bunch of food and don't see people');
}
```
Let's practice writing them!

# Homework: Practice makes perfect.