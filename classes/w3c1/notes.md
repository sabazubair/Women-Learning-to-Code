# Outline
1st hour - Datatypes
2nd hour - Variables + String Concatenation
3rd hour - Conditionals + Console.log

# The 5 W’s on Javascript

- What is JavaScript? A programming language (not Java!) used to help to communicate to a computer. Just like any of our speaking languages. What do you speak?
- Who uses JavaScript? all kinds of developers, front-end, back-end, full-stack
- When do you use Javascript? used widely to create the interactive parts of a website (client-side) but also to help power what data goes on the websites in the first place (server-side). So totally up to you!
- Why do you use JavaScript? Easy to learn, templates + frameworks, community

# Recall: HTML the `<script>` tag 

```html
<!DOCTYPE html>
	<html>
		<head>
			<title>Hi there!</title>
		</head>
	<style>
		p {
			color: blue;
		}
	</style>
	<script>
	</script>
	<body>
		<p>I am just testing</p>
	</body>
</html>
```

# Datatypes

The types that data can be represented by. Why is this important? When you have to manipulate data, you can get some funky things or 'side-effects' happening like:
`'2' + '3' showing up as '23'`

#### Primary (Strings, Numbers, Booleans)
#### Strings
- text, shown by quotations, '' or "", just be consistent
 ```js
 'Hi everyone! Im Maliha'
 'Women Learning to Code'
 '272847387427492'
 ```
Let's practice!

#### Numbers
- any number
```js
3
4.62342
3.14
```
Let's practice!

#### Booleans
- `true` or `false`
- truthiness of a statement or value
- 2 truths and a lie

Let's practice!

EXERCISE: Let's practice identifying & writing simple datatypes!

#### Composite (Objects, Arrays, Functions)

#### Objects
- similar to technical specs for a phone or a dictionary definition
- represented by curly brackets + key-value pairs
```js
{
 name: 'Maliha',
 age: 'young',
 drink: 'bubbletea'
}
```
- value can be any datatype,

Exercise: Let's create a bio about you and turn it into an object!
- name, age, birthday, snack

Let's practice some more!

#### Arrays
- like a grocery list
- represented by square brackets
```js
['apple', 'banana', 'seaweed']
```
- can have any datatypes inside it

Exercise: write a grocery list of 3 ingredients and turn it into an array!

Let's practice some more!

#### Functions
- like a knife, which is a tool
- does one thing and does it well
- how a function looks like: function keyword, name, parentheses for parameters, curly brackets that represent a code block
```js
function sum() {
	return 2 + 3;
}
```
- list a tool

EXERCISE: Let's turn the tool into a function using pseudocode
Side note: What is pseudocode? It's writing code but with a lot more speaking words to help you break down a problem
```js
function sum() {
	add 2 and 3 together;
}
```
Let's practice some more!

Let's practice identifying and writing complex datatypes & then altogether!


# Variables & Why We Need Them

- Variables are like labelled containers - helps us store food or data for later use
- Why do we need variables? It's the same question of why we need containers: to make things more portable. Some containers are more portable than others where you can change what's inside it i.e. glass containers vs paper containers.

#### const
- constant variable: doesn't change
- It's that paper container, once you stain it, you can't do anything about it
```js
const instructorName = 'Maliha';
```

if you try to do this:
```js
const instructorName = 'Maliha';
instructorName = 'Saba';
```
You'll get this: `Uncaught TypeError: Assignment to constant variable.`

### let
- let variable: can be reassigned
- it's that glass container, can reassign a new food inside it
```js
let instructorName = 'Maliha';
instructorName = 'Saba';
```

#### Reassigning =/= Redefining
- once it's been defined (const or let), you can't define it again
- if it's a let variable, you can reassign it

#### Special Datatypes
- undefined: does not even exist i.e. asking for a glass of water - glass doesn't exist in your kitchen
- null: empty i.e. asking for a glass of water which exists in the kitchen but there's no water inside it

#### Console.log
- helps print values so you can see what values are inside variables and other code that you run

Let's practice writing some const and let variables! and use console.log to print them
1. Declare a constant variable
2. Declare a let variable
3. Reassign the let variable
4. Try reassigning the const variable
  

# String concatenation - combining strings + variables

- Variables are great but really why do we need them? It's to help show dynamic or variable data on your webpage/application!
- Instead of just `'Hey its Maliha'`, you can now change it to `'Hey its Nazia'` or `'Hey its Elyas'` based on a `name` variable
- one example is writing dynamic strings
```js
const name = 'Maliha'
console.log('My name is ' + name)
// will print out 'My name is Maliha'
```
Let's practice writing some strings!

# Conditionals

- Statements that are evaluated by the computer and determined to be 'true' or 'false', which outputs `true` or `false` - remember booleans?
- we have many operators (symbols or words that have a special meaning to do something for the computer)
- examples
```
2 > 3
100 <= 1000
45 === 45
```
`===` means equal by type and by value (remember datatypes?)
`!==` means NOT equal by type and by value:
```js
2 === 2 // would come out as true
2 === '2' // would come out as false. why?
2 !== '2' // would come as true. why?
```
But you can also do conditionals like this if you store values inside variables:
`name === 'Maliha'`

Value of conditionals? You can start checking whether values exist inside variables but also if they equal a certain value

Let's practice evaluating some conditionals!

#### What if you have more than one statement to evaluate? Introduce `&&` and `||`

- `&&` tells the computer that statements on both sides have to be true in order to be true
e.g. `name === 'Maliha' && friend === 'Saba'`
- `||` tells the computer that statements on EITHER side have to be true in order to be true
- e.g. `name === 'Maliha' || name === 'Saba'`

Let's practice some more complicated ones! 
  

# How to Problem-Solve - don’t guess! Debug. Display how to use console.log(). Helps to print the result

- Demo practice question

```js
let age = '28';
age = '2' + '9'
const truthAboutAge = age === 29;
console.log(truthAboutAge);

```

# Homework: 3 practice questions for datatypes & conditionals (easy, medium, hard.)