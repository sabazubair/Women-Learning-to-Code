## Outline

### 6:00-6:20

- 5:45 Login
- NTS: record meeting + breakout room policy
- 6:00-6:05: Brainstorm - What do you remember learning last class?
- reminder: take notes in VS Code with .md file extensions!
- 6:05 10 min review
- file: 10MinReview.html

### 6:20-6:50 - Intro to CSS

- What is CSS? It stands for Cascading Style Sheets
- recall in the browser: view > page style > no-style
- one of the core technologies for design and building websites & apps
- what can we accomplish with CSS?
  - colors, fonts, shadows, borders, layout
  - animations
  - illustrations
- codepen
  - typewriter effect: https://codepen.io/dianalis/pen/jOWaOqZ
  - illustration: https://codepen.io/tiffachoo/pen/abdLKaP
  - illustration: https://codepen.io/Launghe/pen/ZEGPxEr
- Let's begin using CSS
  - 3 ways we can write CSS:
    - 1. internal: within <style></style> tags in the <head></head> of our html document
      - example: body {background-color: powderblue;}
    - 2. internal: inline syntax
      - example: <h1 style="color: green;">
    - 3. external: we link our HTML doc to our CSS stylesheet
      - within our .css file, we would write body { background-color: green; }
- ## CSS syntax + selectors
  - general: HTML element { CSS-property: value; }
  - inline style (style becomes an attribute!)
    - <h1 style="CSS-property: value;">
  - observe: targetting of HTML elements, use of curly braces, colon and ending every line with semi-colon.
  - Selectors: elements, class, id
  - file: css-demo.html

### 7:00-7:50 - Box Model, Inspector, Specificity

- Box Model + Inspector
- SPECIFICITY
- "cascading" can be anecdotally thought of as "fighting" style sheets. For example: if you had 2 stylesheets targetting the same element, they would fight one another. Which rule would apply?
  - the fact they are in conflict is not a problem, it's just how the language was designed.
  - there is an order of precedence in CSS.
  - Order: in-line style, id, class type/html element
- !important = bad practice; acts as an override
- if we use rules of specificity, we won't need to use !important
- recall: we can create a website with html, css and javascript. For the last two classes, we've been creating index.html files and telling you, you can add styles in style tags and javascript in script tags. Does this happen in real life? No.
  - why are we teaching it then? We never learned and were confused reading old code where inline styles are common.
- link CSS to blog-demo.html
- test it works!

### 8:00-8:50 - Using external stylesheet + blog demo

- browser extensions: pesticide, colorpicker, what font
- blog-demo
- note about the real world
  - SASS (nesting)
  - design system
  - frontend engineer works with design team
