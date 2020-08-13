## Outline

### 6:00-6:50

- 5:45 Login
- 6:00-6:05: Brainstorm
- pro-tip: You can take notes in VS code w/ a .md (markdown) file
- 6:05 10 min review + Q&A
- file: 10MReview.html

- 6:15: HTML boilerplate shortcut, VSCode extension Prettier install

  - ![TAB] for HTML Boilerplate
  - note about: indentation, readability
  - install prettier

- ## 6:20-6:50: HTML5
  - file: intro-HTML5.html
  - demo common HTML elements in scrap.html
  - ## observe: HTML default styles
    - the world's first website: http://info.cern.ch/hypertext/WWW/TheProject.html
    - create file: scrap.html
    - text: p, span, h1-h6
    - lists: <ol></ol>, <ul><ul>
    - links (href, target)
    - images (src, align, height, width)
    - form
      - input element
        - type = text, password, radio, checkbox, select, submit
        - label
        - text, password: name, maxlength
        - radio: name, value, checked
        - checkbox: name, value, checked
        - select: <select><option></option></select>
        - submit: name, value (default: "Submit query")

### 7:00-7:50 #A11Y

- VIDEO: https://www.youtube.com/watch?v=3f31oufqFSM (7:21 mins)
- When you're creating a website, you begin with HTML.
- semantic HTML or HTML5 gives us context. It's human + machine readable (screenreaders).
- recall: creating a website with div's vs html5.
- two meaningless tags: div's, span's
- a + 11 letters, y spells: accessibility: if you design or code for accessibility, you are an a11y
- Why we care:
  - "The Web is fundamentally designed to work for all people, whatever their hardware, software, language, location, or ability." - Tim Berners Lee, inventor of the World Wide Web.
- It's also the law.

* Beyonce was sued last year because her website did not provide accomodation for people with significant vision impairments.

  - "The lawsuit—filed today by New York woman Mary Conner, who is blind—argues that the website violates the Americans with Disabilities Act by being “an exclusively visual interface” without any coded alt-text behind the images."
  - The lawsuit also cites a lack of accessible drop-down menus and the inability to use a keyboard instead of a mouse."
  - 2 million people were unable to access Beyonce.com.

- What we learn: accessibility is the difference between someone being able to participate or being completely excluded.

  - In the field:

    - accessibility is an afterthought.
    - why: lack of education, general disregard.

  - How can we improve accessibility?
  - BASICS: awareness, use HTML5 (accessibility built in)
    - in the context of HTML, a legitimate reason why someone would not want to use HTML is because html default styling can be hard to override.
    - file: a11y.html for button example
  - GOOD: use role, alt-text attributes
  - GREAT: ARIA labels + testing your website
  - "For many people, technology makes things easier. For people with disabilities, technology makes things possible." -- MDN

### 8:00-8:50 Weatherapp Code-along

- create weather-project folder
- ![TAB] for HTML boilerplate
- <head>, <body>, <main>, <form>, <footer>, <script>
