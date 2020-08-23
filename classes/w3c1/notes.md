# The 5 W’s on Javascript
- Who uses JavaScript - all kinds of devs, front-end, back-end, dev ops, full-stack
- What is JavaScript - a programming language, not JAVA used to help to communicate to a computer. Just like any of our languages? What do you speak? Once you learn one language, the structures can be transferable. Proof is I just learned python a month ago for a project and I'm still learning! But it's cause I learned some parts of it from my JS knowledge
- When/Where do you use Javascript - used widely to create the interactive parts of a website (client-side) but also to help power what data goes on the websites in the first place (server-side). So totally up to you!
- Why do you use JavaScript - it can be easy to learn code through JavaScript, but also there are a lot of templates or 'frameworks' that help make coding easier and there's a huge community behind it. This helps when you get stuck!

# Recall: HTML <script> tag
 ```
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
# Datatypes (part of 1st hour)
- How data is made up of these datatypes - when is this important? when manipulating data
- Primary (Strings, Numbers, Booleans)
    - Strings - text, shown by quotations, '' or "", just be consistent
        - examples "Hi everyone! I'm Maliha"
        - "Women Learning to code"
        - "C"
        - get people to write in syncfiddle.net
    - Numbers - numbers
        - examples 3, 4.6222, 676438292, 3.14
        - get people to write in syncfiddle.net
    - Booleans - True or False
        - true / false
        - justifying whether a statement is true
        - get people to write in syncfiddle.net
    - Testtime: get students to identify datatypes, then write different datatypes
- Composite (Objects, Arrays, Functions)
    - Objects - like specs for a phone or a dictionary definition
        - represented by curly brackets + key-value pairs
        - show what an object looks like
        - value can be any datatype, let's do strings
        - example: write about yourself
            - name, age, birthday, snack
        - turn into an object
        - { name : Maliha, age: 238388383, }
        - get girls to write more objects
    - Arrays - like a grocery list
        - represented by square brackets
        - can have any datatypes inside it
        - example: write a grocery list of 3 ingredients
        - convert to an array
        - get girls to write more arrays
    - Functions - like a knife
        - does one thing and does it well
        - how a function looks like
        - list a tool
        - turn into a function using pseudocode
        - get girls to write a function
    - testtime: get students to identify datatypes, then write them themselves
    - Special (undefined, null)

# Variables & Why We Need Them (2nd hour)
- camelCase
- Variables are like labelled containers - helps us store data for later use - kind of like when you store food as leftovers for later eating
- Why do we need variables? It's the same question of why we need containers: to make things more portable. Some containers are more portable than others where you can change what's inside it i.e. glass containers vs paper containers.
- const — > constant: doesn't change. it's that paper container, once you stain it, you can't do anything about it
- let —> let statement: can change, it's that glass container, can reassign
- introduce null and undefined (special datatypes)
- null - it's like asking for a glass of water but you get an empty glass
- undefined - it's like asking for a glass of water and the glass doesn't exist in the kitchen
- introduce console.log (to help print values)
- Examples: const vs let
    - get girls to declare a constant variable, then write a let variable
    - reassign the let variable
    - try re-assigning a constant variable -- see errors - introduce error

# String concatenation - combining strings + variables (3rd hour)
    - Variables are great but really why do we need them?
    - Well now, instead of saying "Hey I'm Maliha", now you can change it to "Hey I'm Lisa" or Hey I'm Anisa based on whats in a variable.
    - examples

# Conditionals
    - greater than, less than, equal === equal True or False (don't go into truthy and falsy)
    - strictly equal value and type
    - use variables
    - examples - include examples with false on both sides, also examples with one side 'false' and other side more complicated

# How to Problem-Solve - don’t guess! Debug. Display how to use console.log(). Helps to print the result
- Demo practice question
```
const name = 'Maliha is ';
let age = '28';
age  = '2' + '9'

const truthAboutAge = age === 29;
console.log(truthAboutAge);
```
# Homework: 3 practice questions (easy, medium, hard.)