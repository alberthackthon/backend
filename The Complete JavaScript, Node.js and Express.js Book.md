# The Complete JavaScript, Node.js and Express.js Book

Nov 22, 2026 · @Albert Hackthon

## Preface: Read This First

This book takes you from zero to building and publishing a complete, professional website with JavaScript, Node.js and Express.js. You do not need any programming experience. Every idea is explained in simple words, then shown with code, then practised with exercises.

### Who this book is for

- Complete beginners who have never written code.
- Students who know a little HTML or Python and want to build real websites.
- Self-taught developers who have gaps and want everything in one place, in the right order.

### What you will be able to do at the end

- Write JavaScript confidently, the way it is written in real jobs today (modern ES6+ style).
- Make web pages interactive: menus, forms, live search, to-do lists, fetching data from the internet.
- Build a server with Node.js and Express.js: pages, REST APIs, user login, file uploads, email.
- Store data in a database (MongoDB and a short introduction to SQL).
- Protect your website from common attacks and test it.
- Put your website online on the internet with a real domain and HTTPS.

### How the book is organised

| Part | Chapters | What you can do after it |
| --- | --- | --- |
| 1. Foundations | 1 to 2 | Understand how the web works and write a basic styled web page |
| 2. JavaScript language | 3 to 7 | Write programs with variables, decisions, loops, functions, arrays and objects |
| 3. JavaScript in the browser | 8 to 13 | Build interactive pages, call APIs, finish a mini project |
| 4. Node.js | 14 to 16 | Run JavaScript outside the browser and build a server by hand |
| 5. Express.js and the backend | 17 to 25 | Build full websites and APIs with a database, login, security and tests |
| 6. Capstone and launch | 26 to 28 | Build a complete project, deploy it, and know what to learn next |

### How to study (this matters more than the book itself)

1. **Type every example yourself.** Do not copy and paste. Typing teaches your fingers and your eyes to notice details like brackets and commas.
2. **Break things on purpose.** After an example works, change a value, delete a line, make a typo. Read the error message. Errors are your teacher.
3. **Do the exercises before looking at the answers.** Struggling for 15 minutes is where learning happens.
4. **Study a little every day.** One or two hours a day beats ten hours once a week. Your brain builds skill while you sleep.
5. **Build small things beyond the book.** After each Part, make something of your own, even if it is ugly.
6. **Learn to search.** Professional developers search constantly. The best sources are MDN Web Docs (developer.mozilla.org), the official Node.js and Express documentation, and Stack Overflow.

### How code appears in this book

- Code is shown in grey blocks. Lines that start with `//` are comments for you; the computer ignores them.
- A line that starts with `$` is typed in the terminal (command line). Do not type the `$` itself.
- Where the output of a program is shown, it is introduced with the words *Output:*.
- For consistency, the examples use single quotes for strings, two spaces for indentation, and semicolons at the end of statements.

### A realistic timeline

If you study about two hours a day, expect roughly this: Parts 1 to 3 in about 5 to 6 weeks, Part 4 in about 1 week, Part 5 in about 4 to 5 weeks, and the capstone in 1 to 2 weeks. That is about 3 months to go from nothing to a deployed full-stack website. Faster is possible if you already know some programming, slower is perfectly fine. What matters is that you keep going.

## Chapter 1: How the Web Works and Setting Up Your Tools

Before writing code, you need a clear picture of what a website really is and where your code will run. This chapter gives you that picture and then sets up your computer so every later chapter just works.

### 1.1 What happens when you open a website

Imagine you walk into a restaurant. You (the **client**) look at the menu and tell the waiter what you want. The waiter goes to the kitchen (the **server**), the kitchen prepares your food, and the waiter brings it back. The web works the same way:

1. You type `https://example.com` in your browser and press Enter. Your browser is the **client**.
2. The browser asks a service called **DNS** (the phone book of the internet) which number address (called an **IP address**) belongs to `example.com`.
3. The browser sends an **HTTP request** to that address: 'Please give me the home page.'
4. The **server**, a computer that is always switched on and connected to the internet, receives the request, runs some code, maybe reads data from a **database**, and builds an answer.
5. The server sends back an **HTTP response**. It usually contains HTML, CSS and JavaScript files.
6. The browser reads these files and draws the page on your screen.

Three kinds of files are sent to the browser, and each has one job:

| Technology | Job | Simple example |
| --- | --- | --- |
| HTML | The structure and content of the page | A heading, a paragraph, a button |
| CSS | How the page looks | Colours, fonts, spacing, layout |
| JavaScript | How the page behaves | Open a menu when the button is clicked |

### 1.2 Front end, back end and full stack

- **Front end** is everything that runs in the user's browser: HTML, CSS and browser JavaScript. Users see and touch it.
- **Back end** is everything that runs on the server: receiving requests, checking passwords, talking to the database, sending the response. Users never see this code.
- **Full stack** means you can build both sides. That is the goal of this book.

The great thing about JavaScript is that it is the only language that runs in every browser, and with **Node.js** it can also run on the server. So you learn one language and use it for the whole website.

### 1.3 What are JavaScript, Node.js and Express.js?

- **JavaScript** is a programming language. Created in 1995 to make web pages interactive, it is now one of the most used languages in the world.
- **Node.js** is a program that lets you run JavaScript outside the browser, for example on a server or on your own computer. It is not a language; it is a *place to run* JavaScript.
- **Express.js** is a small library written in JavaScript for Node.js. It makes building web servers much easier. Without it you would write a lot of repetitive code by hand.

A helpful comparison: JavaScript is the language you speak, Node.js is the country where you can speak it outside the browser, and Express.js is a handy guidebook that helps you get things done quickly in that country.

### 1.4 HTTP in simple words

HTTP is the set of rules browsers and servers use to talk. Every request has:

- A **method**, which says what you want to do. The four most important are `GET` (read something), `POST` (create something), `PUT` or `PATCH` (change something) and `DELETE` (remove something).
- A **URL** (path), for example `/products/42`.
- **Headers**: extra information such as the browser type or a login token.
- Sometimes a **body**: data you send, such as the text of a form.

Every response has:

- A **status code**, a number that tells how it went. `200` means OK, `201` created, `301` moved, `400` bad request, `401` not logged in, `403` not allowed, `404` not found, `500` server error.
- **Headers** and a **body** (the HTML or data).

You will use these ideas in every chapter from Chapter 16 onwards, so do not worry if they feel new. You will see them in action soon.

### 1.5 Installing your tools

You need five things. All are free.

**1. A code editor: Visual Studio Code (VS Code).** Download it from code.visualstudio.com and install it. After installing, open the Extensions panel (the square icon on the left) and install:

- **Prettier** (formats your code neatly)
- **ESLint** (warns about mistakes)
- **Live Server** (opens your HTML file in the browser and refreshes it when you save)
- **Thunder Client** (lets you test APIs inside VS Code, used from Chapter 20)

**2. A modern browser.** Use Google Chrome, Microsoft Edge or Firefox. All have **Developer Tools**, which you open by pressing F12 (or Ctrl+Shift+I on Windows and Linux, Cmd+Option+I on Mac).

**3. Node.js.** Go to nodejs.org and download the **LTS** version (LTS means Long Term Support: the stable choice). Install it with the default options. Then open a terminal and check it worked:

```bash
$ node --version
$ npm --version
```

Each command should print a version number. `npm` (Node Package Manager) comes with Node and downloads libraries for you.

**4. Git.** Git is a tool that saves the history of your code. Install it from git-scm.com, then tell it who you are:

```bash
$ git --version
$ git config --global user.name 'Your Name'
$ git config --global user.email 'you@example.com'
```

**5. A GitHub account** (github.com). This is where you will store your projects online and, later, deploy them.

### 1.6 The terminal in 10 minutes

The terminal (also called command line, shell or console) lets you control the computer by typing commands instead of clicking. Developers use it all the time. In VS Code, open it with Ctrl+\` (backtick). The commands below work on Mac, Linux and in Git Bash or PowerShell on Windows (a few differ and are noted).

| Command | What it does |
| --- | --- |
| `pwd` | Shows the folder you are in (Windows PowerShell: `pwd` also works) |
| `ls` | Lists files in the current folder (`dir` on Windows Command Prompt) |
| `cd foldername` | Goes into a folder |
| `cd ..` | Goes up one folder |
| `mkdir myfolder` | Creates a new folder |
| `touch file.js` | Creates an empty file (PowerShell: `ni file.js`) |
| `node file.js` | Runs a JavaScript file with Node |
| `clear` | Cleans the screen |

Tip: press the Up arrow to bring back your previous command, and press Tab to auto-complete file names.

### 1.7 Your first project folder

Create one folder where you will keep all work from this book:

```bash
$ mkdir js-book
$ cd js-book
$ mkdir part1
$ cd part1
$ code .
```

The last command (`code .`) opens the current folder in VS Code. If it does not work, open VS Code and use File > Open Folder.

### 1.8 Your first web page

In VS Code, create a file named `index.html` and type this:

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first web page.</p>
    <script>
      console.log('JavaScript is running!');
    </script>
  </body>
</html>
```

Right-click the file and choose **Open with Live Server**. Your browser opens the page. Press F12, click the **Console** tab, and you will see the message `JavaScript is running!`. You just ran your first JavaScript.

### 1.9 Your first Node.js program

Create a file `hello.js` in the same folder:

```js
console.log('Hello from Node.js!');
console.log(2 + 3);
```

Run it in the terminal:

```bash
$ node hello.js
```

Output:

```text
Hello from Node.js!
5
```

The same language, `console.log`, now works outside the browser. In the browser the message appears in DevTools; in Node it appears in the terminal.

### 1.10 A quick tour of browser DevTools

DevTools is your best friend as a web developer. The most useful panels:

- **Elements**: shows the HTML and CSS of the page. You can edit them live to experiment.
- **Console**: shows messages and errors, and lets you type JavaScript and run it immediately.
- **Network**: shows every request the page makes and the response it got. You will use this a lot when working with APIs.
- **Sources**: lets you pause code and step through it line by line (debugging).
- **Application**: shows stored data such as cookies and localStorage.

Try this now: open any website, press F12, go to the Console and type `document.title` then Enter. You will see the page title. You just asked JavaScript a question about a real website.

### Chapter 1 summary

- A website is files sent by a server to a browser: HTML for structure, CSS for style, JavaScript for behaviour.
- The browser (client) sends an HTTP request; the server sends back an HTTP response with a status code.
- JavaScript runs in browsers; Node.js runs JavaScript outside the browser; Express.js makes Node servers easy.
- You installed VS Code, Node.js, Git and learned basic terminal commands.

### Exercises

1. Change the heading in `index.html` to your own name and add a second paragraph about your hobby. Save and see Live Server refresh.
2. In the Console tab, type `2 * 21` and press Enter. What happens?
3. In `hello.js`, print three lines about yourself using three `console.log` statements.
4. Open any website, go to the Network tab, refresh the page and find the first request. What is its status code?
5. Explain in your own words, in two sentences, the difference between a client and a server.

## Chapter 2: HTML and CSS Crash Course

JavaScript needs something to control. That something is HTML and CSS. You do not need to become a design expert, but you must know enough to build a clean, good-looking page. This chapter covers exactly that, with a focus on what you will use in real projects.

### 2.1 HTML: the skeleton

HTML (HyperText Markup Language) describes the content of a page using **tags**. A tag is a word inside angle brackets. Most tags come in pairs: an opening tag and a closing tag with a slash.

```html
<p>This is a paragraph.</p>
```

Here `<p>` opens, `</p>` closes, and the text between them is the **content**. The whole thing is called an **element**. Tags can have **attributes** that give extra information, written as `name='value'`:

```html
<a href='https://developer.mozilla.org' target='_blank'>Visit MDN</a>
```

### 2.2 The structure of every HTML page

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Page title shown in the browser tab</title>
    <link rel='stylesheet' href='style.css' />
  </head>
  <body>
    <!-- everything visible goes here -->
    <script src='app.js'></script>
  </body>
</html>
```

- `<!DOCTYPE html>` tells the browser this is modern HTML.
- `<head>` holds information about the page that is not shown directly: the title, character set, link to CSS.
- The `viewport` meta tag is essential so that your page looks right on phones.
- `<body>` holds everything the user sees.
- The `<script>` tag at the end of the body loads your JavaScript after the HTML is ready.

### 2.3 The tags you will use every day

**Text**

```html
<h1>Main heading (use only one per page)</h1>
<h2>Section heading</h2>
<h3>Sub-section heading</h3>
<p>A paragraph of text with <strong>bold</strong> and <em>italic</em> words.</p>
<br />
<hr />
```

**Lists**

```html
<ul>
  <li>Bullet one</li>
  <li>Bullet two</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

**Links and images**

```html
<a href='about.html'>About us</a>
<img src='photo.jpg' alt='A smiling person holding a laptop' width='300' />
```

Always write a meaningful `alt` text for images. Screen readers read it to blind users, and search engines use it.

**Grouping elements**

```html
<div>A generic block-level box</div>
<span>A generic inline piece of text</span>
```

Block elements (`div`, `p`, `h1`, `ul`) start on a new line and stretch full width. Inline elements (`span`, `a`, `strong`, `img`) stay within the line of text.

### 2.4 Semantic HTML: giving meaning to structure

Instead of using `div` for everything, use tags that describe their purpose. This helps accessibility and search engines.

```html
<header>
  <nav>
    <a href='/'>Home</a>
    <a href='/blog'>Blog</a>
  </nav>
</header>

<main>
  <section>
    <h2>Latest articles</h2>
    <article>
      <h3>Article title</h3>
      <p>Summary of the article.</p>
    </article>
  </section>

  <aside>Side information or ads</aside>
</main>

<footer>
  <p>Copyright 2026 My Website</p>
</footer>
```

### 2.5 Forms: how users send data

Forms are how websites collect information: sign up, login, search, comments. You will connect forms to Express servers later.

```html
<form action='/signup' method='POST'>
  <label for='name'>Name</label>
  <input type='text' id='name' name='name' placeholder='Your name' required />

  <label for='email'>Email</label>
  <input type='email' id='email' name='email' required />

  <label for='password'>Password</label>
  <input type='password' id='password' name='password' minlength='8' required />

  <label for='country'>Country</label>
  <select id='country' name='country'>
    <option value='in'>India</option>
    <option value='us'>United States</option>
  </select>

  <label for='bio'>About you</label>
  <textarea id='bio' name='bio' rows='4'></textarea>

  <label>
    <input type='checkbox' name='agree' /> I agree to the terms
  </label>

  <button type='submit'>Create account</button>
</form>
```

Key points:

- `action` is the URL that receives the data, and `method` is how it is sent (`GET` or `POST`).
- `name` is the key under which the server receives the value. Without a `name`, the field is not sent.
- `label` connected by `for` and `id` makes the form easier to use: clicking the label focuses the input.
- Attributes like `required`, `minlength` and `type='email'` give you free basic validation in the browser. (Never trust only this; the server must validate too, see Chapter 23.)

### 2.6 Tables

```html
<table>
  <thead>
    <tr><th>Product</th><th>Price</th></tr>
  </thead>
  <tbody>
    <tr><td>Notebook</td><td>5</td></tr>
    <tr><td>Pen</td><td>1</td></tr>
  </tbody>
</table>
```

Use tables only for real tabular data, never for page layout.

### 2.7 CSS: the paint and the layout

CSS (Cascading Style Sheets) controls how HTML looks. A CSS rule has a **selector** (what to style) and **declarations** (how to style it):

```css
h1 {
  color: darkblue;
  font-size: 2rem;
}
```

Three ways to add CSS:

1. **External file (best):** `<link rel='stylesheet' href='style.css' />` in the head.
2. **Internal:** a `<style>` tag in the head.
3. **Inline:** `<p style='color: red'>`. Avoid it, except for quick tests.

### 2.8 Selectors

```css
/* Element selector: all paragraphs */
p { line-height: 1.6; }

/* Class selector: elements with class='card' (can be used many times) */
.card { border: 1px solid #ddd; }

/* ID selector: the one element with id='logo' (should be unique) */
#logo { width: 120px; }

/* Descendant: links inside nav */
nav a { text-decoration: none; }

/* Direct child */
ul > li { margin-bottom: 8px; }

/* Group */
h1, h2, h3 { font-family: Arial, sans-serif; }

/* State: when the mouse is over the button */
button:hover { background: #0a58ca; }

/* First and last */
li:first-child { font-weight: bold; }
```

In HTML, you attach a class like this: `<div class='card'>`. Prefer classes for styling. They are flexible and easy to reuse.

**Specificity** is what decides who wins when two rules disagree. Inline style beats ID, ID beats class, class beats element. If the specificity is equal, the rule written later wins. Do not fight with it; keep your selectors simple, mostly classes.

### 2.9 Colours, text and units

```css
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 16px;
  color: #222;               /* hex colour */
  background-color: rgb(250, 250, 250);
  line-height: 1.6;
}

.title {
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
}
```

Units you will meet:

- `px`: pixels. Fixed size.
- `rem`: relative to the root font size (usually 16px). `1.5rem` is 24px. Great for text and spacing because it scales with user settings.
- `%`: percent of the parent.
- `vw` and `vh`: percent of the viewport width and height.
- `fr`: a fraction of free space (used in Grid).

### 2.10 The box model

Every element is a rectangular box made of four layers, from inside to outside: **content**, **padding** (space inside the border), **border**, and **margin** (space outside the border).

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid black;
  margin: 16px auto;   /* 16px top and bottom, auto left and right centres the box */
}
```

By default, width means only the content width, so padding and border make the box bigger than expected. Fix this once for the whole site and forget about it:

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

Now `width: 300px` means the full box is 300px including padding and border. Almost every real project starts with this rule.

Shorthands: `padding: 10px 20px;` means 10px top and bottom, 20px left and right. `padding: 10px 20px 30px 40px;` goes clockwise: top, right, bottom, left.

### 2.11 Display and positioning

```css
.hide { display: none; }          /* removes the element from the page */
.inline { display: inline; }
.block { display: block; }
.inline-block { display: inline-block; }
```

Positioning lets you place elements precisely:

```css
.parent { position: relative; }
.badge {
  position: absolute;   /* placed relative to the nearest positioned parent */
  top: 8px;
  right: 8px;
}

.navbar {
  position: sticky;     /* sticks to the top while scrolling */
  top: 0;
}

.chat-button {
  position: fixed;      /* always in the same spot of the screen */
  bottom: 20px;
  right: 20px;
}
```

### 2.12 Flexbox: the layout tool you will use most

Flexbox arranges items in one direction (a row or a column) and makes alignment easy.

```css
.navbar {
  display: flex;
  justify-content: space-between;  /* spread along the main axis (horizontal) */
  align-items: center;             /* align along the cross axis (vertical) */
  gap: 16px;                       /* space between items */
}
```

Important flex properties on the container:

- `flex-direction: row | column` sets the main direction.
- `justify-content: flex-start | center | flex-end | space-between | space-around` aligns along the main direction.
- `align-items: stretch | center | flex-start | flex-end` aligns across.
- `flex-wrap: wrap` lets items move to the next line when there is no space.

On the children: `flex: 1` makes an item grow to fill the free space.

The famous 'centre anything' trick:

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### 2.13 CSS Grid: two-dimensional layouts

Grid arranges items in rows and columns at the same time. It is perfect for card layouts and page layouts.

```css
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);   /* three equal columns */
  gap: 20px;
}

/* Automatically as many columns as fit, each at least 250px wide */
.cards-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

Rule of thumb: use **Flexbox** for one-direction layouts (navbars, button rows, centring) and **Grid** for page and card layouts.

### 2.14 Responsive design

More than half of web traffic comes from phones, so your site must adapt to screen sizes. Three tools do the job:

1. The viewport meta tag (already in your HTML template).
2. Flexible layouts (`%`, `rem`, `fr`, `flex-wrap`, `auto-fit`).
3. **Media queries**, which apply CSS only on certain screen sizes.

```css
/* Mobile first: the default styles are for small screens */
.cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* From 700px width and up: two columns */
@media (min-width: 700px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

/* From 1000px width and up: three columns */
@media (min-width: 1000px) {
  .cards { grid-template-columns: repeat(3, 1fr); }
}
```

Images should never overflow their container:

```css
img { max-width: 100%; height: auto; display: block; }
```

### 2.15 CSS variables, transitions and a little polish

```css
:root {
  --primary: #4f46e5;
  --text: #1f2937;
  --radius: 12px;
}

.button {
  background: var(--primary);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.button:hover {
  transform: translateY(-2px);
  background: #4338ca;
}

.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: var(--radius);
}
```

Variables let you change the whole theme by editing one line. Transitions make changes smooth instead of sudden.

### 2.16 A complete example: a landing page

Put these two files in a folder and open `index.html` with Live Server.

**index.html**

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>CodeCafe</title>
    <link rel='stylesheet' href='style.css' />
  </head>
  <body>
    <header class='navbar'>
      <h2 class='logo'>CodeCafe</h2>
      <nav class='links'>
        <a href='#menu'>Menu</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </nav>
    </header>

    <section class='hero'>
      <h1>Fresh coffee for busy developers</h1>
      <p>Order online and pick it up in five minutes.</p>
      <a class='button' href='#menu'>See the menu</a>
    </section>

    <section id='menu' class='container'>
      <h2>Our menu</h2>
      <div class='cards'>
        <article class='card'><h3>Espresso</h3><p>Strong and simple.</p><strong>3</strong></article>
        <article class='card'><h3>Latte</h3><p>Smooth with milk.</p><strong>4</strong></article>
        <article class='card'><h3>Cold brew</h3><p>Slow and refreshing.</p><strong>5</strong></article>
      </div>
    </section>

    <footer class='footer'>Copyright 2026 CodeCafe</footer>
  </body>
</html>
```

**style.css**

```css
:root {
  --primary: #4f46e5;
  --dark: #111827;
  --light: #f9fafb;
  --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  color: var(--dark);
  background: var(--light);
  line-height: 1.6;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: white;
  position: sticky;
  top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.links a {
  margin-left: 16px;
  text-decoration: none;
  color: var(--dark);
}

.hero {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, var(--primary), #7c3aed);
  color: white;
}

.hero h1 { font-size: clamp(2rem, 5vw, 3.5rem); margin: 0 0 12px; }

.button {
  display: inline-block;
  margin-top: 16px;
  padding: 12px 24px;
  background: white;
  color: var(--primary);
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
}

.container { max-width: 1000px; margin: 0 auto; padding: 48px 20px; }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: var(--radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.card:hover { transform: translateY(-4px); }

.footer { text-align: center; padding: 24px; background: var(--dark); color: white; }
```

The `clamp(min, preferred, max)` function makes text that grows with the screen but never gets too small or too big. Resize your browser window and watch the cards rearrange themselves without any media query.

### 2.17 Common mistakes

- Forgetting to close a tag. The page may still show, but strangely. Prettier will help you spot it.
- Writing `class` rules in CSS without the dot (`card` instead of `.card`).
- Using many IDs for styling. Use classes.
- Forgetting the viewport meta tag, which makes the site tiny on phones.
- Writing fixed pixel widths everywhere, which breaks on small screens.
- Using DevTools too little. Right-click any element, choose Inspect, and see exactly which CSS applies.

### Chapter 2 summary

- HTML gives structure with elements; use semantic tags, forms with `name` attributes, and good `alt` text.
- CSS styles elements with selectors; prefer classes; always set `box-sizing: border-box`.
- Flexbox is for rows or columns; Grid is for rows and columns together; media queries make the page responsive.
- CSS variables and transitions help you build a consistent, polished look quickly.

### Exercises

1. Build a personal profile page with a header, a photo, a short bio, a list of skills and a contact form.
2. Make a navbar that shows links in a row on large screens and stacked on screens narrower than 600px.
3. Create a pricing section with three cards in a Grid. Make the middle card slightly larger with a coloured border.
4. Change the landing page colours by editing only the CSS variables.
5. Use DevTools to change the heading colour live, then copy the final value into your CSS file.

## Chapter 3: JavaScript Basics: Variables, Types and Operators

Now the real journey begins. In this chapter you will learn how to store information, the kinds of information JavaScript understands, and how to calculate with it. Everything later in the book stands on this chapter, so take your time.

### 3.1 Where to run JavaScript

You have three easy places to run code while learning:

1. **The browser Console** (F12, then Console tab). Great for tiny experiments.
2. **A script in an HTML file** using `<script>` tags, as in Chapter 1.
3. **Node.js** by saving a file such as `practice.js` and running `node practice.js`. This is what we will mostly use in the first chapters because the output is clean.

To see a result you use `console.log()`. It prints whatever you put inside the brackets.

```js
console.log('Hello');
console.log(10 + 5);
console.log('My age is', 25);   // you can pass many values, separated by commas
```

**Comments** are notes for humans. The computer ignores them:

```js
// This is a single-line comment

/*
  This is a
  multi-line comment
*/
```

**Statements** are instructions. Each one usually ends with a semicolon `;`. JavaScript can insert missing semicolons for you, but writing them avoids rare surprises, so we always write them.

### 3.2 Variables: named boxes for data

A **variable** is a named place in memory where you keep a value. Think of a labelled box.

```js
let age = 25;
const name = 'Albert';

console.log(name);   // Albert
console.log(age);    // 25

age = 26;            // allowed: let can be changed
// name = 'Bob';     // ERROR: const cannot be reassigned
```

There are three keywords to create variables:

| Keyword | Can be reassigned? | When to use it |
| --- | --- | --- |
| `const` | No | Default choice. Use it whenever the value will not be reassigned |
| `let` | Yes | When you know the value will change (counters, totals) |
| `var` | Yes | Old style. Avoid it in new code |

Why avoid `var`? It has confusing rules about where it is visible (we will see scope in Chapter 5) and it lets you declare the same name twice by mistake. Modern JavaScript uses `const` first and `let` only when needed.

**Rules for variable names:**

- Can contain letters, digits, `_` and `$`, but cannot start with a digit.
- Are case-sensitive: `score` and `Score` are different variables.
- Cannot be reserved words such as `let`, `class`, `if`.
- Use **camelCase** by convention: `firstName`, `totalPrice`, `isLoggedIn`.
- Choose meaningful names. `totalPrice` is better than `tp`.

### 3.3 Data types

Every value in JavaScript has a type. There are seven **primitive** types and one structured type called **object**. The ones you will use daily:

**1. Number**: whole numbers and decimals, all one type.

```js
const items = 3;
const price = 19.99;
const negative = -7;
console.log(items * price);   // 59.97

// Special numbers
console.log(1 / 0);           // Infinity
console.log('abc' * 2);       // NaN (Not a Number)
```

**2. String**: text, written in single quotes, double quotes or backticks.

```js
const first = 'Hello';
const second = "World";
console.log(first.length);          // 5
console.log(first + ' ' + second);  // Hello World
```

**3. Boolean**: only `true` or `false`. Used for decisions.

```js
const isStudent = true;
const hasPaid = false;
```

**4. Undefined**: a variable that was created but has no value yet.

```js
let city;
console.log(city);   // undefined
```

**5. Null**: a value you set on purpose to mean 'nothing' or 'empty'.

```js
let selectedUser = null;
```

**6. BigInt** (for huge integers) and **7. Symbol** (unique identifiers) exist too but you will rarely need them as a beginner.

**8. Object**: a collection of key-value pairs. Arrays, functions and dates are also objects. You will learn them fully in Chapter 6.

Use `typeof` to find the type of a value:

```js
console.log(typeof 42);          // number
console.log(typeof 'hi');        // string
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object  (a famous old bug in JavaScript, just remember it)
console.log(typeof [1, 2]);      // object
```

JavaScript is **dynamically typed**: a variable can hold any type, and the type can change. This is flexible, but it also lets bugs slip in. In Book 2 you will learn TypeScript, which adds type checking on top of JavaScript.

### 3.4 Strings in depth

Strings are everywhere on the web: names, emails, URLs, messages.

**Template literals** use backticks and let you put variables inside `${ }`. They also allow multi-line text. This is the modern way to build strings.

```js
const user = 'Asha';
const points = 120;

console.log(`Hello ${user}, you have ${points} points.`);
console.log(`Next level in ${200 - points} points.`);

const message = `Line one
Line two`;
```

**Common string methods.** Strings are *immutable*, which means methods do not change the original string; they return a new one.

```js
const text = '  JavaScript is Fun  ';

console.log(text.trim());                // 'JavaScript is Fun'
console.log(text.toUpperCase());         // '  JAVASCRIPT IS FUN  '
console.log(text.toLowerCase());
console.log(text.length);                // 22

const word = 'JavaScript';
console.log(word[0]);                    // 'J' (index starts at 0)
console.log(word.at(-1));                // 't' (last character)
console.log(word.indexOf('Script'));     // 4
console.log(word.includes('Java'));      // true
console.log(word.startsWith('Java'));    // true
console.log(word.endsWith('ipt'));       // true
console.log(word.slice(0, 4));           // 'Java'
console.log(word.slice(4));              // 'Script'
console.log(word.replace('Java', 'Type'));  // 'TypeScript'
console.log('a,b,c'.split(','));         // ['a', 'b', 'c']
console.log('ha'.repeat(3));             // 'hahaha'
console.log('7'.padStart(3, '0'));       // '007'
```

**Escape characters** let you write special characters inside a string: `\n` is a new line, `\t` is a tab, and `\'` is a single quote inside single quotes.

### 3.5 Numbers and the Math object

```js
console.log(10 + 3);    // 13
console.log(10 - 3);    // 7
console.log(10 * 3);    // 30
console.log(10 / 3);    // 3.3333333333333335
console.log(10 % 3);    // 1   (remainder, called modulo)
console.log(2 ** 5);    // 32  (power: 2 to the power of 5)
```

The remainder operator `%` is very useful: `n % 2 === 0` tells you if `n` is even.

**Floating point surprise.** Computers store decimals in binary, so tiny errors appear:

```js
console.log(0.1 + 0.2);   // 0.30000000000000004
```

For money, store the amount in the smallest unit (paise or cents) as whole numbers, or round the result with `toFixed`:

```js
console.log((0.1 + 0.2).toFixed(2));   // '0.30' (note: returns a string)
```

**Rounding and random numbers with `Math`:**

```js
console.log(Math.round(4.6));    // 5
console.log(Math.floor(4.9));    // 4 (always down)
console.log(Math.ceil(4.1));     // 5 (always up)
console.log(Math.max(3, 9, 5));  // 9
console.log(Math.min(3, 9, 5));  // 3
console.log(Math.abs(-8));       // 8
console.log(Math.sqrt(49));      // 7

// Random whole number from 1 to 10
const roll = Math.floor(Math.random() * 10) + 1;
console.log(roll);
```

### 3.6 Operators

**Assignment operators**

```js
let score = 10;
score += 5;    // same as score = score + 5  -> 15
score -= 3;    // 12
score *= 2;    // 24
score /= 4;    // 6
score++;       // add one -> 7
score--;       // subtract one -> 6
```

**Comparison operators** produce a boolean.

```js
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 4);     // false
console.log(5 === 5);    // true   strict equal
console.log(5 !== 6);    // true   strict not equal
```

Important: always use `===` and `!==` (strict). The loose versions `==` and `!=` convert types first and give surprising answers:

```js
console.log(5 == '5');    // true  (surprising!)
console.log(5 === '5');   // false (correct: number is not string)
console.log(0 == false);  // true  (surprising!)
```

**Logical operators** combine booleans.

```js
const age = 20;
const hasTicket = true;

console.log(age >= 18 && hasTicket);   // AND: both must be true -> true
console.log(age < 18 || hasTicket);    // OR: at least one true -> true
console.log(!hasTicket);               // NOT: flips the value -> false
```

**Truthy and falsy values.** In a condition, JavaScript converts any value into true or false. These are the **falsy** values (they behave like `false`): `false`, `0`, `''` (empty string), `null`, `undefined`, `NaN`. Everything else is **truthy**, including `'0'`, `[]` and `{}`.

```js
console.log(Boolean(''));       // false
console.log(Boolean('hello'));  // true
console.log(Boolean(0));        // false
console.log(Boolean([]));       // true
```

**Short-circuit logic** uses this to give default values:

```js
const nameInput = '';
console.log(nameInput || 'Guest');   // 'Guest' because empty string is falsy

const count = 0;
console.log(count || 10);    // 10   (probably not what you wanted!)
console.log(count ?? 10);    // 0    (?? only replaces null or undefined)
```

The **nullish coalescing operator** `??` is the safer way to provide a default when `0` or an empty string are valid values.

### 3.7 Type conversion

Values change type in two ways: **explicitly** (you ask for it) and **implicitly** (JavaScript does it for you, sometimes surprisingly).

```js
// Explicit conversion
console.log(Number('42'));        // 42
console.log(Number('abc'));       // NaN
console.log(Number(''));          // 0
console.log(parseInt('42px'));    // 42
console.log(parseFloat('3.14abc'));  // 3.14
console.log(String(123));         // '123'
console.log(Boolean(1));          // true

// Implicit conversion
console.log('5' + 2);    // '52'  (+ with a string joins text)
console.log('5' - 2);    // 3     (- forces numbers)
console.log('5' * '2');  // 10
```

The big lesson: when you read data from forms or URLs, it always arrives as a **string**. Convert it with `Number()` before doing maths, or you will get joined text like `'52'` instead of `7`.

### 3.8 Getting input

In the browser you can use `prompt()` for quick tests:

```js
const answer = prompt('What is your name?');
alert('Hello ' + answer);
```

In Node.js, a simple way to ask questions in the terminal uses the built-in `readline` module:

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (name) => {
  console.log(`Nice to meet you, ${name}!`);
  rl.close();
});
```

Do not worry about the details of the arrow function `(name) => { ... }` yet. It is explained in Chapter 5.

### 3.9 Small practical programs

**Program 1: a tip calculator**

```js
const bill = 840;
const tipPercent = 10;

const tip = (bill * tipPercent) / 100;
const total = bill + tip;

console.log(`Bill: ${bill}`);
console.log(`Tip (${tipPercent}%): ${tip}`);
console.log(`Total: ${total}`);
```

**Program 2: temperature converter**

```js
const celsius = 36.6;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}C is ${fahrenheit.toFixed(1)}F`);
```

**Program 3: swapping two variables**

```js
let a = 1;
let b = 2;
[a, b] = [b, a];       // destructuring trick, explained in Chapter 6
console.log(a, b);     // 2 1
```

### 3.10 Common mistakes

- Using `=` (assign) instead of `===` (compare).
- Forgetting that `'5' + 3` is `'53'`.
- Using a variable before it is created (`ReferenceError`).
- Trying to change a `const` (`TypeError: Assignment to constant variable`).
- Misspelling a name. JavaScript is case-sensitive: `userName` is not `username`.

### Chapter 3 summary

- Variables store data; use `const` by default and `let` when the value must change.
- The main types are number, string, boolean, undefined, null and object. Use `typeof` to check.
- Template literals (backticks with `${ }`) are the best way to build text.
- Use `===` for comparison, `&&`, `||`, `!` for logic, and `??` for safe defaults.
- Form data arrives as strings; convert to numbers when needed.

### Exercises

1. Create variables for your name, age and city. Print one sentence using a template literal.
2. Write a program that converts kilometres to miles (1 km = 0.621371 miles).
3. Given `const price = 1499;` and a discount of 15 percent, print the discounted price with two decimals.
4. Predict the output, then check: `console.log('10' + 5)`, `console.log('10' - 5)`, `console.log(true + 1)`, `console.log(null ?? 'default')`.
5. Extract the first name from `'Rahul Sharma'` using `split` and print it in uppercase.
6. Write a program that rolls two dice and prints the sum.

## Chapter 4: Making Decisions and Repeating Things

Programs become useful when they can **decide** (do this or that) and **repeat** (do this many times). These two ideas, conditions and loops, are the heart of programming. Every website you will ever build uses them hundreds of times.

### 4.1 The if statement

An `if` statement runs a block of code only when a condition is true.

```js
const age = 20;

if (age >= 18) {
  console.log('You can vote.');
}
```

The condition goes in round brackets. The code to run goes inside curly braces `{ }`. If the condition is false, the block is skipped.

### 4.2 else and else if

```js
const marks = 72;

if (marks >= 90) {
  console.log('Grade A');
} else if (marks >= 75) {
  console.log('Grade B');
} else if (marks >= 60) {
  console.log('Grade C');
} else {
  console.log('Needs improvement');
}
```

JavaScript checks the conditions from top to bottom and runs only the **first** one that is true. Here marks is 72, so the first condition (`>= 90`) is false, the second (`>= 75`) is false, the third (`>= 60`) is true, so it prints Grade C and ignores the rest. The order of the conditions matters.

### 4.3 Combining conditions

```js
const isLoggedIn = true;
const role = 'admin';

if (isLoggedIn && role === 'admin') {
  console.log('Show the admin panel.');
}

const day = 'Sunday';
if (day === 'Saturday' || day === 'Sunday') {
  console.log('Weekend!');
}

if (!isLoggedIn) {
  console.log('Please log in.');
}
```

Because of truthy and falsy values (Chapter 3), you can also write short checks:

```js
const username = '';

if (!username) {
  console.log('Username is required.');   // runs, because '' is falsy
}
```

### 4.4 The ternary operator

A compact way to choose between two values:

```js
const age = 16;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status);   // minor
```

The pattern is `condition ? valueIfTrue : valueIfFalse`. Use it for short, simple choices. For anything longer use `if` so the code stays readable. Avoid nesting ternaries.

### 4.5 The switch statement

When you compare one value against many exact options, `switch` is clearer than many `else if`.

```js
const day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Monday';
    break;
  case 2:
    dayName = 'Tuesday';
    break;
  case 3:
    dayName = 'Wednesday';
    break;
  default:
    dayName = 'Another day';
}

console.log(dayName);   // Wednesday
```

Do not forget `break`. Without it, JavaScript continues running the next cases too (called fall-through). You can use fall-through on purpose to group cases:

```js
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('Winter');
    break;
  default:
    console.log('Other season');
}
```

### 4.6 Loops

A **loop** repeats code. Imagine writing the numbers 1 to 100 with `console.log` one by one. A loop does it in three lines.

**The for loop** is used when you know how many times to repeat.

```js
for (let i = 1; i <= 5; i++) {
  console.log('Round', i);
}
```

The three parts inside the brackets are:

1. **Start**: `let i = 1` runs once at the beginning.
2. **Condition**: `i <= 5` is checked before every round. When it becomes false, the loop stops.
3. **Step**: `i++` runs after every round.

Output:

```text
Round 1
Round 2
Round 3
Round 4
Round 5
```

**The while loop** repeats while a condition is true. Use it when you do not know in advance how many rounds are needed.

```js
let number = 1;

while (number < 100) {
  number *= 2;
}
console.log(number);   // 128
```

**The do...while loop** runs the body at least once, then checks the condition.

```js
let tries = 0;

do {
  tries++;
  console.log('Attempt', tries);
} while (tries < 3);
```

**Beware of infinite loops.** If the condition never becomes false, the program never stops (your terminal will hang; press Ctrl+C to stop it). Always make sure something inside the loop moves it towards the end.

```js
// DANGER: i never changes, so this runs forever
// while (i < 5) { console.log(i); }
```

### 4.7 break and continue

- `break` leaves the loop immediately.
- `continue` skips the rest of the current round and goes to the next.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;   // skip 3
  if (i === 6) break;      // stop at 6
  console.log(i);
}
// prints 1, 2, 4, 5
```

### 4.8 Loops inside loops

A loop can contain another loop. The inner loop runs fully for every round of the outer loop. A multiplication table:

```js
for (let row = 1; row <= 3; row++) {
  let line = '';
  for (let col = 1; col <= 5; col++) {
    line += row * col + '\t';
  }
  console.log(line);
}
```

Output:

```text
1   2   3   4   5
2   4   6   8   10
3   6   9   12  15
```

### 4.9 for...of and for...in (a preview)

Two special loops make it easy to go through collections. You will use them a lot after Chapter 6.

```js
const fruits = ['apple', 'banana', 'mango'];

// for...of goes through VALUES of an array (or string)
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in goes through KEYS (property names) of an object
const person = { name: 'Asha', age: 22 };
for (const key in person) {
  console.log(key, person[key]);
}
```

Rule: use `for...of` for arrays and strings, and `for...in` only for plain objects.

### 4.10 Practical examples

**Example 1: FizzBuzz** (a classic interview question). For numbers 1 to 20, print 'Fizz' if divisible by 3, 'Buzz' if divisible by 5, 'FizzBuzz' if by both, otherwise the number.

```js
for (let n = 1; n <= 20; n++) {
  if (n % 15 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
    console.log('Fizz');
  } else if (n % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(n);
  }
}
```

**Example 2: sum of numbers 1 to 100**

```js
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);   // 5050
```

**Example 3: is a number prime?**

```js
const n = 29;
let isPrime = n > 1;

for (let i = 2; i * i <= n; i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}

console.log(`${n} is ${isPrime ? 'prime' : 'not prime'}`);
```

**Example 4: guessing game in the terminal (Node.js)**

```js
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const secret = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

function ask() {
  rl.question('Guess a number between 1 and 20: ', (answer) => {
    attempts++;
    const guess = Number(answer);

    if (guess === secret) {
      console.log(`Correct! You needed ${attempts} attempts.`);
      rl.close();
    } else {
      console.log(guess < secret ? 'Too low.' : 'Too high.');
      ask();
    }
  });
}

ask();
```

This example uses a function (`ask`) that calls itself; functions come in the next chapter.

### 4.11 Common mistakes

- Writing `if (x = 5)` (assignment) instead of `if (x === 5)` (comparison).
- Forgetting `break` in a `switch`.
- Off-by-one errors: using `<` when you meant `<=`. When a loop runs one time too few or too many, check this first.
- Changing the loop variable inside the loop body in confusing ways.
- Infinite loops from conditions that never become false.

### Chapter 4 summary

- `if`, `else if`, `else` run code based on conditions; the first true branch wins.
- The ternary `a ? b : c` is a short if/else for simple values; `switch` is for many exact matches.
- `for` repeats a known number of times; `while` repeats until a condition fails; `do...while` runs at least once.
- `break` leaves a loop; `continue` skips to the next round.

### Exercises

1. Write a program that prints whether a number is positive, negative or zero.
2. Print all even numbers from 1 to 50.
3. Write a program that finds the largest of three numbers using `if` only.
4. Using a loop, print this pattern:

```text
*
**
***
****
*****
```

5. Count how many vowels are in the string `'Programming is fun'` using a loop.
6. Write a loop that calculates the factorial of 6 (6 x 5 x 4 x 3 x 2 x 1 = 720).
7. Improve the guessing game so it tells the player when they have used 5 attempts and loses.

## Chapter 5: Functions

A **function** is a reusable block of code with a name. You write it once and use it as many times as you want. Functions are the main way we organise programs, avoid repeating ourselves, and break big problems into small pieces. In Node.js and Express, almost everything you write is a function.

### 5.1 Your first function

Think of a function as a recipe: a set of steps with a name. Writing the recipe is **defining** the function. Cooking it is **calling** (or invoking) it.

```js
// Define
function sayHello() {
  console.log('Hello!');
}

// Call
sayHello();
sayHello();
```

The code inside the function does not run when you define it. It runs each time you call it with `()` after the name.

### 5.2 Parameters and arguments

Functions become powerful when they accept input. The names in the definition are **parameters**. The actual values you pass when calling are **arguments**.

```js
function greet(name) {        // name is a parameter
  console.log(`Hello, ${name}!`);
}

greet('Asha');                // 'Asha' is an argument
greet('Ravi');
```

Several parameters, separated by commas:

```js
function add(a, b) {
  console.log(a + b);
}

add(2, 3);   // 5
```

**Default parameters** give a value when none is passed:

```js
function greet(name = 'friend') {
  console.log(`Hello, ${name}!`);
}

greet();          // Hello, friend!
greet('Meera');   // Hello, Meera!
```

### 5.3 Return values

A function can send a result back with `return`. The function stops running at that point.

```js
function multiply(a, b) {
  return a * b;
}

const result = multiply(4, 5);
console.log(result);   // 20
console.log(multiply(2, multiply(3, 4)));   // 24
```

Important difference: `console.log` only *shows* something on the screen; `return` *gives the value back* so that other code can use it. Most functions should return values and let the caller decide what to do with them.

A function without a `return` gives back `undefined`.

**Early return** is a clean way to handle special cases first:

```js
function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}
```

### 5.4 Three ways to write functions

**1. Function declaration**

```js
function square(x) {
  return x * x;
}
```

**2. Function expression** (a function stored in a variable)

```js
const square = function (x) {
  return x * x;
};
```

**3. Arrow function** (modern, short)

```js
const square = (x) => {
  return x * x;
};

// Even shorter when the body is one expression: the return is implicit
const square2 = (x) => x * x;

// One parameter: brackets optional (but many teams keep them)
const double = x => x * 2;

// No parameters: empty brackets needed
const now = () => new Date();

// Returning an object literal: wrap it in round brackets
const makeUser = (name) => ({ name, active: true });
```

Both declarations and arrow functions are common. The practical differences:

- **Hoisting:** declarations can be called before they appear in the file; expressions and arrow functions cannot.
- **`this`:** arrow functions do not have their own `this`. This matters in classes and event handlers (Chapter 12).
- Style: arrow functions are the standard for short callbacks, such as in `map` or Express routes. Declarations are fine for main, named functions.

### 5.5 Scope: who can see which variable

**Scope** means the area of the code where a variable is visible.

```js
const appName = 'Shop';        // global scope: visible everywhere

function showPrice() {
  const price = 100;           // function scope: visible only inside
  console.log(appName, price);
}

showPrice();
// console.log(price);   // ERROR: price is not defined here
```

`let` and `const` are also **block scoped**: they only exist inside the nearest pair of braces `{ }`.

```js
if (true) {
  const secret = 'inside';
  let counter = 1;
}
// console.log(secret);   // ERROR: not visible outside the block
```

`var` is function scoped, not block scoped, which causes bugs. Another reason to avoid it.

**Scope chain.** If JavaScript cannot find a variable in the current scope, it looks in the outer scope, then the next outer, up to the global scope. Inner code can see outer variables; outer code cannot see inner ones.

```js
const country = 'India';

function outer() {
  const city = 'Mumbai';

  function inner() {
    console.log(city, country);   // finds city in outer, country in global
  }

  inner();
}

outer();
```

Avoid global variables when you can. Keep variables as close as possible to where they are used.

### 5.4 Hoisting (briefly)

Before running your code, JavaScript scans it and registers declarations. This is called hoisting. What you need to remember:

```js
sayHi();                 // works: function declarations are hoisted
function sayHi() { console.log('Hi'); }

// sayBye();             // ERROR: cannot access before initialization
const sayBye = () => console.log('Bye');
```

Simple rule: define your functions and variables before you use them, and you will never be surprised.

### 5.6 Functions are values

In JavaScript, a function is a value like a number or a string. You can store it in a variable, put it in an array, pass it to another function, or return it from a function. This idea is the key to understanding callbacks, promises and Express middleware later.

```js
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
};

console.log(operations.add(5, 3));        // 8
console.log(operations['subtract'](5, 3)); // 2
```

### 5.7 Callbacks and higher-order functions

A **callback** is a function that you pass to another function so it can be called later. A function that takes or returns another function is called a **higher-order function**.

```js
function doTwice(action) {
  action();
  action();
}

doTwice(() => console.log('Knock knock'));

// A callback with a value
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(6, 3, (x, y) => x * y));   // 18
console.log(calculate(6, 3, (x, y) => x - y));   // 3
```

You have probably seen callbacks already without knowing the name:

```js
setTimeout(() => {
  console.log('Runs after 2 seconds');
}, 2000);

[1, 2, 3].forEach((n) => console.log(n * 10));
```

`setTimeout(fn, ms)` calls your function once after a delay. `setInterval(fn, ms)` calls it again and again until you stop it with `clearInterval`.

### 5.8 Rest parameters and the spread operator

```js
// Rest: collect any number of arguments into an array
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

console.log(sum(1, 2, 3, 4));   // 10

// Spread: expand an array into separate arguments
const scores = [70, 90, 85];
console.log(Math.max(...scores));   // 90
```

### 5.9 Closures

A **closure** is a function that remembers the variables from the place where it was created, even after that outer function has finished. This sounds abstract, so here is a simple example, a counter:

```js
function createCounter() {
  let count = 0;           // private variable

  return function () {
    count++;
    return count;
  };
}

const counterA = createCounter();
console.log(counterA());   // 1
console.log(counterA());   // 2
console.log(counterA());   // 3

const counterB = createCounter();   // a separate counter with its own memory
console.log(counterB());   // 1
```

Nobody outside can touch `count` directly; only the returned function can. Closures are used for private data, for functions that are configured once and reused, and everywhere in React hooks (Book 2).

Another practical closure: a function factory.

```js
function multiplyBy(factor) {
  return (number) => number * factor;
}

const triple = multiplyBy(3);
console.log(triple(10));   // 30
```

### 5.10 Immediately invoked function expressions and recursion

An **IIFE** is a function that runs right where it is defined. It was used a lot in the past to create private scope:

```js
(function () {
  const message = 'I run immediately';
  console.log(message);
})();
```

**Recursion** means a function calls itself. It needs a **base case** that stops the calls.

```js
function factorial(n) {
  if (n <= 1) return 1;           // base case
  return n * factorial(n - 1);    // recursive call
}

console.log(factorial(5));   // 120
```

### 5.11 Writing good functions

- **Do one thing.** If you need the word 'and' to describe what a function does, split it.
- **Name them with verbs:** `calculateTotal`, `isValidEmail`, `getUserById`. Functions returning booleans often start with `is` or `has`.
- **Keep parameters few.** More than three? Pass one object instead (see Chapter 6).
- **Avoid side effects when possible.** Prefer functions that take input and return output, without changing outside variables.
- **Return early** to avoid deeply nested if statements.

### 5.12 Practical examples

```js
// Check an email in a very basic way
const isValidEmail = (email) => email.includes('@') && email.includes('.');

// Format a price
const formatPrice = (amount, currency = 'INR') =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency }).format(amount);

console.log(formatPrice(1499.5));   // Rs. 1,499.50 style output

// Capitalise each word
const titleCase = (text) =>
  text
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

console.log(titleCase('hELLO wORLD from JAVASCRIPT'));   // Hello World From Javascript
```

### 5.13 Common mistakes

- Writing `greet` instead of `greet()` when you want to call the function. Without brackets you only reference the function.
- Forgetting `return`, which gives you `undefined`.
- Code after `return` never runs.
- Using an arrow function with `{ }` but forgetting `return` (with braces you must write `return` yourself).
- Modifying global variables inside functions, which makes bugs hard to find.

### Chapter 5 summary

- Functions package code for reuse. Use parameters for input and `return` for output.
- Prefer arrow functions for short callbacks and declarations for main named functions.
- Variables are visible only in their scope; `let` and `const` are block scoped.
- Functions are values, so you can pass them as callbacks. Closures remember the variables around them.

### Exercises

1. Write `isEven(n)` that returns true or false.
2. Write `calculateTax(amount, rate = 18)` that returns the amount including tax.
3. Write `countVowels(text)` and return how many vowels it has.
4. Write a function `createGreeter(greeting)` that returns a function. `createGreeter('Hi')('Ravi')` should return `'Hi, Ravi!'`.
5. Write a recursive function that adds numbers from 1 to n.
6. Write `sumAll(...numbers)` that returns the sum of any number of arguments, and the average in a second function.
7. Use `setInterval` to print the seconds from 1 to 5 and then stop with `clearInterval`.

## Chapter 6: Arrays and Objects

So far each variable held one value. Real programs handle many values at once: a list of products, a user with a name, an email and an address. JavaScript gives you two tools for this: **arrays** (ordered lists) and **objects** (named properties). Web development is mostly the work of moving arrays and objects around, so this chapter is one of the most important in the book.

### 6.1 Arrays

An **array** is an ordered list of values. Each value has a position called an **index**, starting at 0.

```js
const fruits = ['apple', 'banana', 'mango'];

console.log(fruits[0]);        // 'apple'
console.log(fruits[2]);        // 'mango'
console.log(fruits.length);    // 3
console.log(fruits.at(-1));    // 'mango' (last item)
console.log(fruits[10]);       // undefined (no such index)
```

Arrays can hold any types, even mixed ones, and other arrays:

```js
const mixed = [42, 'hello', true, null, [1, 2]];
const grid = [[1, 2], [3, 4]];
console.log(grid[1][0]);   // 3
```

Even if declared with `const`, you can change the **contents** of an array. `const` only stops you from assigning a new array to the variable.

### 6.2 Adding, removing and changing items

```js
const list = ['a', 'b', 'c'];

list.push('d');        // add to the end        -> ['a','b','c','d']
list.pop();            // remove from the end   -> ['a','b','c']
list.unshift('z');     // add to the start      -> ['z','a','b','c']
list.shift();          // remove from the start -> ['a','b','c']

list[1] = 'B';         // change an item        -> ['a','B','c']

// splice(start, deleteCount, ...itemsToInsert) changes the array in place
list.splice(1, 1);             // remove 1 item at index 1 -> ['a','c']
list.splice(1, 0, 'x', 'y');   // insert at index 1        -> ['a','x','y','c']
```

### 6.3 Finding things

```js
const nums = [5, 12, 8, 130, 44];

console.log(nums.includes(8));          // true
console.log(nums.indexOf(130));         // 3 (-1 if not found)
console.log(nums.find((n) => n > 10));  // 12 (first match, or undefined)
console.log(nums.findIndex((n) => n > 10));   // 1
console.log(nums.some((n) => n > 100)); // true  (at least one matches)
console.log(nums.every((n) => n > 1));  // true  (all match)
```

### 6.4 The big three: map, filter and reduce

These methods replace most loops in modern JavaScript. Each takes a callback function (Chapter 5) and **returns a new array or value without changing the original**.

**forEach**: do something for each item. Returns nothing.

```js
[1, 2, 3].forEach((n, index) => console.log(index, n));
```

**map**: transform every item and get a new array of the same length.

```js
const prices = [100, 250, 400];
const withTax = prices.map((p) => p * 1.18);
console.log(withTax);   // [118, 295, 472]

const users = [{ name: 'Asha' }, { name: 'Ravi' }];
const names = users.map((u) => u.name);
console.log(names);     // ['Asha', 'Ravi']
```

**filter**: keep only the items for which the callback returns true.

```js
const ages = [12, 18, 25, 16, 40];
const adults = ages.filter((age) => age >= 18);
console.log(adults);    // [18, 25, 40]
```

**reduce**: combine all items into a single value. It takes a callback `(accumulator, current)` and a starting value.

```js
const cart = [200, 350, 150];
const total = cart.reduce((sum, price) => sum + price, 0);
console.log(total);     // 700

// Count occurrences
const votes = ['a', 'b', 'a', 'c', 'a', 'b'];
const counts = votes.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});
console.log(counts);    // { a: 3, b: 2, c: 1 }
```

**Chaining.** Because each method returns an array, you can chain them:

```js
const orders = [
  { item: 'Book', price: 300, paid: true },
  { item: 'Pen', price: 20, paid: false },
  { item: 'Bag', price: 900, paid: true },
];

const paidTotal = orders
  .filter((o) => o.paid)
  .map((o) => o.price)
  .reduce((sum, p) => sum + p, 0);

console.log(paidTotal);   // 1200
```

### 6.5 Sorting, slicing, joining

```js
const numbers = [10, 9, 1, 100];

// sort() sorts as STRINGS by default, so provide a compare function for numbers
numbers.sort((a, b) => a - b);    // ascending  [1, 9, 10, 100]
numbers.sort((a, b) => b - a);    // descending [100, 10, 9, 1]

const words = ['banana', 'apple', 'cherry'];
words.sort();                      // alphabetical (changes the original array!)

// slice(start, end) returns a copy of part of the array; end is excluded
console.log([1, 2, 3, 4, 5].slice(1, 3));   // [2, 3]

console.log(['a', 'b', 'c'].join('-'));     // 'a-b-c'
console.log([1, 2].concat([3, 4]));         // [1, 2, 3, 4]
console.log([3, 1, 2].reverse());           // [2, 1, 3]
console.log([1, [2, [3]]].flat(Infinity));  // [1, 2, 3]
console.log(Array.isArray([]));             // true
console.log(Array.from({ length: 3 }, (_, i) => i * 2));   // [0, 2, 4]
```

Note that `sort`, `reverse`, `push`, `pop`, `shift`, `unshift` and `splice` **change the original array** (they are called *mutating* methods), while `map`, `filter`, `slice`, `concat` and `reduce` return something new. Newer JavaScript also has non-mutating versions like `toSorted()` and `toReversed()`.

### 6.6 Objects

An **object** stores related data as **key: value** pairs, called **properties**. If an array is like a numbered list, an object is like a form with labelled fields.

```js
const user = {
  name: 'Asha',
  age: 22,
  isAdmin: false,
  skills: ['HTML', 'CSS', 'JS'],
  address: {
    city: 'Bhubaneswar',
    pin: '751001',
  },
};

// Reading
console.log(user.name);               // dot notation
console.log(user['age']);             // bracket notation
console.log(user.address.city);       // nested
console.log(user.skills[0]);

// Changing, adding, deleting
user.age = 23;
user.email = 'asha@example.com';
delete user.isAdmin;

// Checking
console.log('email' in user);          // true
console.log(user.hasOwnProperty('age'));   // true
```

Use bracket notation when the key is stored in a variable or has odd characters:

```js
const field = 'name';
console.log(user[field]);   // 'Asha'
```

**Shorthand and computed properties:**

```js
const name = 'Ravi';
const age = 30;
const person = { name, age };             // same as { name: name, age: age }

const key = 'country';
const data = { [key]: 'India' };          // { country: 'India' }
```

### 6.7 Looping over objects

```js
const scores = { math: 90, science: 85, english: 78 };

console.log(Object.keys(scores));      // ['math', 'science', 'english']
console.log(Object.values(scores));    // [90, 85, 78]
console.log(Object.entries(scores));   // [['math', 90], ['science', 85], ['english', 78]]

for (const [subject, mark] of Object.entries(scores)) {
  console.log(`${subject}: ${mark}`);
}

// Build an object from entries
const doubled = Object.fromEntries(
  Object.entries(scores).map(([k, v]) => [k, v * 2])
);
```

### 6.8 Methods and this (a first look)

A function stored in an object is called a **method**. Inside it, `this` refers to the object it belongs to.

```js
const account = {
  owner: 'Meera',
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },
};

console.log(account.deposit(500));   // 1500
```

This becomes important in Chapter 12.

### 6.9 References, copies and equality

This is a very common source of confusion. Primitives (numbers, strings, booleans) are copied by value. Arrays and objects are copied by **reference**: both variables point to the *same* object in memory.

```js
let a = 5;
let b = a;
b = 10;
console.log(a);   // 5, unaffected

const original = { name: 'Asha' };
const alias = original;      // NOT a copy, same object
alias.name = 'Changed';
console.log(original.name);  // 'Changed'
```

To make a copy:

```js
const shallow = { ...original };            // shallow copy with spread
const arrCopy = [...fruits];

const deep = structuredClone(original);     // deep copy, including nested objects
```

A **shallow** copy copies the top level only; nested objects are still shared. Use `structuredClone` when you need a full copy.

Comparing objects with `===` compares references, not contents:

```js
console.log({ a: 1 } === { a: 1 });   // false (two different objects)
```

### 6.10 Destructuring

Destructuring pulls values out of arrays or objects into variables in one line. You will see it everywhere in modern code, especially in React and Express.

```js
// Array destructuring: by position
const [first, second, ...others] = [10, 20, 30, 40];
console.log(first, second, others);   // 10 20 [30, 40]

// Object destructuring: by name
const { name, age } = { name: 'Asha', age: 22, city: 'Pune' };
console.log(name, age);

// Rename and defaults
const { name: userName, role = 'user' } = { name: 'Ravi' };
console.log(userName, role);   // Ravi user

// Nested
const { address: { city } } = { address: { city: 'Delhi' } };

// In function parameters
function showUser({ name, age = 18 }) {
  console.log(`${name} (${age})`);
}
showUser({ name: 'Meera' });
```

### 6.11 The spread operator with arrays and objects

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b, 5];        // [1, 2, 3, 4, 5]

const defaults = { theme: 'light', lang: 'en' };
const custom = { lang: 'hi', fontSize: 16 };
const settings = { ...defaults, ...custom };
console.log(settings);   // { theme: 'light', lang: 'hi', fontSize: 16 }
```

Later properties override earlier ones. This pattern, *copy and change*, is the standard way to update data without mutating it.

```js
const updatedUser = { ...user, age: 30 };
const withNewItem = [...fruits, 'orange'];
const withoutFirst = fruits.filter((_, i) => i !== 0);
```

### 6.12 Optional chaining

Accessing a property of `undefined` throws an error. The optional chaining operator `?.` stops safely and returns `undefined` instead.

```js
const user = { profile: null };

// console.log(user.profile.avatar);   // TypeError: cannot read properties of null
console.log(user.profile?.avatar);     // undefined
console.log(user.profile?.avatar ?? 'default.png');   // 'default.png'
console.log(user.getName?.());         // safe method call
```

### 6.13 JSON: the language of data on the web

**JSON** (JavaScript Object Notation) is a text format for data. It looks like a JavaScript object, but it is just a string that can be sent over the network or stored in a file. Almost every API on the web speaks JSON.

Rules of JSON: keys must be in double quotes, strings use double quotes, no trailing commas, no comments, no functions.

```js
const product = { id: 1, name: 'Laptop', tags: ['tech', 'work'], inStock: true };

// Object -> JSON string
const json = JSON.stringify(product);
console.log(json);   // {"id":1,"name":"Laptop","tags":["tech","work"],"inStock":true}

// Pretty print with 2 spaces
console.log(JSON.stringify(product, null, 2));

// JSON string -> object
const back = JSON.parse(json);
console.log(back.name);   // 'Laptop'
```

Parsing invalid JSON throws an error, so in real code wrap `JSON.parse` in `try...catch` (Chapter 11).

### 6.14 Other useful built-in objects

**Date:**

```js
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());       // 0 to 11 (January is 0!)
console.log(now.toISOString());    // '2026-11-22T08:30:00.000Z'
console.log(now.toLocaleDateString('en-IN'));
console.log(Date.now());           // milliseconds since 1970, handy for timing
```

**Set** (unique values) and **Map** (key-value with any key type):

```js
const unique = [...new Set([1, 2, 2, 3, 3, 3])];   // [1, 2, 3]

const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a'), map.size, map.has('b'));
```

### 6.15 Practical examples

**Shopping cart**

```js
const cart = [
  { id: 1, name: 'Shirt', price: 799, qty: 2 },
  { id: 2, name: 'Cap', price: 299, qty: 1 },
  { id: 3, name: 'Socks', price: 99, qty: 3 },
];

const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const itemCount = cart.reduce((n, item) => n + item.qty, 0);
const expensive = cart.filter((i) => i.price > 500).map((i) => i.name);

console.log({ subtotal, itemCount, expensive });
// { subtotal: 2194, itemCount: 6, expensive: ['Shirt'] }
```

**Group items by a property**

```js
const students = [
  { name: 'A', grade: 'x' },
  { name: 'B', grade: 'y' },
  { name: 'C', grade: 'x' },
];

const byGrade = students.reduce((groups, s) => {
  (groups[s.grade] ||= []).push(s.name);
  return groups;
}, {});

console.log(byGrade);   // { x: ['A', 'C'], y: ['B'] }
```

### 6.16 Common mistakes

- Forgetting that indexes start at 0, and the last index is `length - 1`.
- Using `sort()` on numbers without a compare function.
- Thinking `const arr = []` makes the array unchangeable.
- Copying an object with `=` and then wondering why the original changed.
- Using `map` when you do not need the new array (use `forEach`), or forgetting to `return` inside `map` with braces.
- Reading a property of `undefined` (`Cannot read properties of undefined`). Check your data, or use `?.`.

### Chapter 6 summary

- Arrays are ordered lists; objects are named properties. Both are reference types.
- `map`, `filter`, `reduce`, `find`, `some`, `every` are the core array tools; they return new values.
- Spread (`...`) copies and merges; destructuring unpacks values into variables.
- `?.` and `??` make code safe against missing data.
- `JSON.stringify` and `JSON.parse` convert between objects and text.

### Exercises

1. Given `[4, 9, 16, 25]`, produce an array of the square roots using `map`.
2. From an array of products with prices, get the names of products cheaper than 500, sorted alphabetically.
3. Write `unique(array)` that removes duplicates.
4. Write a function that takes a sentence and returns an object counting how many times each word appears.
5. Given `{ name: 'Asha', address: { city: 'Pune' } }`, create a copy with the city changed to 'Mumbai' without changing the original.
6. Convert an array of `[key, value]` pairs into an object, and back.
7. Create a `student` object with a method `average()` that returns the average of an array of marks stored inside it.

## Chapter 7: Modern JavaScript (ES6 and Beyond)

JavaScript is standardised under the name **ECMAScript** (ES). A big update arrived in 2015 called ES6 (or ES2015), and since then a new version appears every year. Many features you learned already (`let`, `const`, arrow functions, template literals, destructuring, spread) came from this modern wave. This chapter collects the rest, so that you can read and write code the way professionals do today. It is also a good reference to return to.

### 7.1 Old style versus modern style

| Task | Old way | Modern way |
| --- | --- | --- |
| Variables | `var x = 1;` | `const x = 1;` or `let x = 1;` |
| Strings with values | `'Hi ' + name + '!'` | `` `Hi ${name}!` `` |
| Function | `function(a) { return a * 2; }` | `(a) => a * 2` |
| Default value | \`x = x |  |
| Copy an object | `Object.assign({}, obj)` | `{ ...obj }` |
| Take values out | `const a = obj.a; const b = obj.b;` | `const { a, b } = obj;` |
| Check an item exists | `arr.indexOf(x) !== -1` | `arr.includes(x)` |
| Safe property access | `a && a.b && a.b.c` | `a?.b?.c` |
| Async code | nested callbacks | `async` and `await` |
| Files | one giant script | `import` and `export` modules |

### 7.2 Logical assignment and other small helpers

```js
let settings = { theme: null, retries: 0 };

settings.theme ??= 'light';     // assign only if null or undefined
settings.retries ||= 3;         // assign if falsy (0 becomes 3: careful!)
settings.admin &&= false;       // assign only if currently truthy

console.log(1_000_000);         // numeric separators make big numbers readable
console.log(2 ** 10);           // exponent operator

// Optional catch binding when you do not need the error object
try {
  JSON.parse('not json');
} catch {
  console.log('Invalid JSON');
}
```

### 7.3 Newer array and string methods

```js
const items = [3, 1, 2];

console.log(items.at(-1));                  // 2  last item
console.log([[1, 2], [3]].flat());          // [1, 2, 3]
console.log([1, 2, 3].flatMap((n) => [n, n * 10]));   // [1, 10, 2, 20, 3, 30]
console.log([1, 2, 3, 4].findLast((n) => n % 2 === 1));  // 3

// Non-mutating versions (return a new array)
console.log(items.toSorted());              // [1, 2, 3]  items is unchanged
console.log(items.toReversed());
console.log(items.with(0, 99));             // [99, 1, 2]

// Object.groupBy (modern runtimes)
const people = [
  { name: 'A', city: 'Pune' },
  { name: 'B', city: 'Delhi' },
  { name: 'C', city: 'Pune' },
];
console.log(Object.groupBy(people, (p) => p.city));

// Strings
console.log('a-b-c'.replaceAll('-', '+'));  // 'a+b+c'
console.log('hello'.at(-1));                // 'o'
```

Note on support: new features appear in browsers and Node.js at different times. If something does not work, check its page on MDN and the table at caniuse.com (browsers). For Node.js, use a current LTS version to have almost everything in this chapter.

### 7.4 Classes (a first look)

Classes give a clean way to create many similar objects. We study them deeply in Chapter 12; here is the shape:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }
}

const u = new User('Asha', 'asha@example.com');
console.log(u.greet());
```

### 7.5 Modules: splitting code into files

A real project has many files. **Modules** let each file keep its own variables private and share only what it chooses to **export**. Other files **import** what they need.

There are two module systems in the JavaScript world:

- **ES Modules (ESM):** the official standard. Uses `import` and `export`. Works in browsers and modern Node.js.
- **CommonJS (CJS):** the original Node.js system. Uses `require` and `module.exports`. Still very common in older Node.js code and tutorials.

**ES Modules example**

File `math.js`:

```js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export default function multiply(a, b) {
  return a * b;
}
```

File `main.js`:

```js
import multiply, { PI, add } from './math.js';
import * as math from './math.js';        // everything under a namespace
import { add as sum } from './math.js';   // rename on import

console.log(add(2, 3), multiply(2, 3), PI);
console.log(math.add(1, 1));
```

- A file can have many **named exports**, imported with curly braces and the exact names.
- A file can have one **default export**, imported without braces under any name you like.
- In the browser, load the entry file with `<script type='module' src='main.js'></script>`. Note that modules must be served over HTTP (Live Server works), not opened directly from the file system.
- In Node.js, use ESM by naming files `.mjs` or by adding `'type': 'module'` to `package.json` (Chapter 15). Imports of your own files need the `.js` extension.

**CommonJS example (Node.js)**

```js
// math.js
function add(a, b) { return a + b; }
module.exports = { add };

// main.js
const { add } = require('./math');
console.log(add(1, 2));
```

In this book, Node.js and Express chapters will use ES Modules where it is practical, and we will point out CommonJS when old tutorials use it, so that you can read both.

### 7.6 Iterators and generators (a short look)

An **iterable** is anything you can loop over with `for...of`: arrays, strings, Maps, Sets. A **generator** is a special function that can pause and give values one by one using `yield`. You will rarely write one in website work, but it is good to recognise.

```js
function* countTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

for (const num of countTo(3)) {
  console.log(num);   // 1, 2, 3
}

console.log([...countTo(5)]);   // [1, 2, 3, 4, 5]
```

### 7.7 Getters, setters and private fields

```js
class Temperature {
  #celsius = 0;                    // private field: only usable inside the class

  get fahrenheit() {               // read like a property
    return (this.#celsius * 9) / 5 + 32;
  }

  set celsius(value) {             // validate when assigned
    if (typeof value !== 'number') throw new Error('Number required');
    this.#celsius = value;
  }
}

const t = new Temperature();
t.celsius = 100;
console.log(t.fahrenheit);   // 212
```

### 7.8 Useful built-ins you will meet in web work

**URL and URLSearchParams** help you read and build addresses safely:

```js
const url = new URL('https://shop.com/search?q=shoes&page=2');
console.log(url.hostname);                // 'shop.com'
console.log(url.searchParams.get('q'));   // 'shoes'

const params = new URLSearchParams({ q: 'red shirt', page: 1 });
console.log(params.toString());           // 'q=red+shirt&page=1'
```

**Intl** formats numbers, dates and currencies for different countries:

```js
console.log(new Intl.NumberFormat('en-IN').format(12345678));   // 1,23,45,678
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'long' }).format(new Date()));
```

**structuredClone**, **crypto.randomUUID()**, **globalThis**, **queueMicrotask** are small helpers available in modern browsers and Node:

```js
console.log(crypto.randomUUID());   // a unique id like '3b241101-e2bb-4255-8caf-4136c566a962'
```

### 7.9 Strict mode

Strict mode makes JavaScript stricter and catches silly mistakes (such as creating a variable by typing a wrong name). Modules and classes are strict automatically. In older scripts you can add `'use strict';` at the top of the file. You will almost never need to think about it in modern projects.

### 7.10 Readable code: a style guide in six rules

1. Use `const` by default, `let` when needed, never `var`.
2. Use meaningful names in camelCase; classes in PascalCase (`UserService`); constants in UPPER\_SNAKE\_CASE (`MAX_RETRIES`).
3. Prefer small functions that do one thing.
4. Prefer `map`, `filter` and `reduce` for transforming data, and loops for step-by-step logic.
5. Use `===`, never `==`.
6. Let tools help: Prettier formats the code, ESLint catches mistakes. Set them up once per project.

### Chapter 7 summary

- Modern JavaScript (ES6 and later) is the style used in all real projects.
- Logical assignment, `at`, `flat`, `toSorted`, `replaceAll` and similar methods save lines and bugs.
- Modules split code into files. ESM (`import` and `export`) is the standard; CommonJS (`require`) appears in older Node.js code.
- `URL`, `Intl` and other built-ins solve common web problems without extra libraries.

### Exercises

1. Rewrite this old code in modern style: `var name = 'Asha'; var msg = 'Hello ' + name + '!'; function double(x) { return x * 2; }`.
2. Create `utils.js` exporting `capitalize(text)` and `slugify(title)` (turn `'Hello World!'` into `'hello-world'`). Import and use them from `main.js`.
3. Use `Object.groupBy` or `reduce` to group an array of orders by status.
4. Create a `Counter` class with a private `#count`, a method `increment()` and a getter `value`.
5. Using `URL`, write `getQueryParam(url, name)` that returns a query parameter value.

## Chapter 8: The DOM: Controlling the Web Page with JavaScript

Until now your JavaScript printed text in a console. In this chapter it starts to change what people see on a web page. This is where JavaScript becomes fun, because you get instant visual results.

### 8.1 What is the DOM?

When a browser loads HTML, it builds a **tree** of objects in memory that represents the page. This tree is the **DOM** (Document Object Model). JavaScript can read this tree and change it, and the page updates immediately.

```html
<body>
  <h1 id='title'>Hello</h1>
  <ul>
    <li>One</li>
    <li>Two</li>
  </ul>
</body>
```

The browser sees this as: `document` > `html` > `body` > (`h1`, `ul` > (`li`, `li`)). Each box is called a **node**, and elements are one kind of node. In JavaScript the root is the global object `document`.

**Setting up a practice page.** Create `dom.html` and `dom.js` in a folder and open the HTML with Live Server. We will reuse this page in the examples below.

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <title>DOM Practice</title>
    <style>
      .highlight { background: yellow; }
      .hidden { display: none; }
    </style>
  </head>
  <body>
    <h1 id='title'>DOM Practice</h1>
    <p class='note'>First note</p>
    <p class='note'>Second note</p>
    <ul id='list'>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
    <button id='btn'>Click me</button>

    <script src='dom.js'></script>
  </body>
</html>
```

Because the script is at the end of the body, the elements already exist when the JavaScript runs. (You can also put the script in the head with the `defer` attribute: `<script src='dom.js' defer></script>`.)

### 8.2 Selecting elements

Before you can change an element, you must find it.

```js
// By id (returns one element or null)
const title = document.getElementById('title');

// Modern and flexible: use CSS selectors
const firstNote = document.querySelector('.note');        // first match only
const allNotes = document.querySelectorAll('.note');      // all matches (NodeList)
const items = document.querySelectorAll('#list li');

console.log(title, firstNote, allNotes.length);
```

`querySelector` and `querySelectorAll` accept any CSS selector, so you only have to remember these two. `querySelectorAll` returns a **NodeList**; you can loop with `forEach` or `for...of`, or turn it into an array with `[...allNotes]` to use `map` and `filter`.

```js
allNotes.forEach((note) => console.log(note.textContent));
const texts = [...allNotes].map((n) => n.textContent);
```

If nothing matches, `querySelector` returns `null`. Using `.textContent` on `null` throws an error, so be careful about typos in selectors.

### 8.3 Changing text and HTML

```js
const title = document.querySelector('#title');

title.textContent = 'New title';          // safe: treated as plain text
title.innerHTML = 'New <em>title</em>';   // parsed as HTML
```

- `textContent` sets or reads plain text. It is the safe default.
- `innerHTML` reads or sets HTML. **Danger:** never put user-provided text into `innerHTML`, because an attacker can insert a `<script>` or other harmful HTML (this is an attack called XSS, see Chapter 23). Use `textContent` for user data.

### 8.4 Changing styles and classes

```js
const note = document.querySelector('.note');

// Direct style (inline). Property names are camelCase.
note.style.color = 'red';
note.style.backgroundColor = 'lightyellow';
note.style.fontSize = '20px';

// Better: switch CSS classes and keep the design in your CSS file
note.classList.add('highlight');
note.classList.remove('highlight');
note.classList.toggle('highlight');       // add if missing, remove if present
console.log(note.classList.contains('highlight'));
```

Prefer `classList`. It keeps the look in CSS and the behaviour in JavaScript, which makes both easier to maintain.

### 8.5 Attributes and data attributes

```js
const link = document.querySelector('a');

link.setAttribute('href', 'https://example.com');
console.log(link.getAttribute('href'));
link.removeAttribute('target');

// Many attributes are also properties
const img = document.querySelector('img');
img.src = 'photo.jpg';
img.alt = 'My photo';

const input = document.querySelector('input');
input.value = 'Typed by JS';
input.disabled = true;
```

**Data attributes** let you store custom information in HTML and read it in JS. They start with `data-`:

```html
<button data-product-id='42' data-price='999'>Add to cart</button>
```

```js
const btn = document.querySelector('button');
console.log(btn.dataset.productId);   // '42'  (data-product-id becomes camelCase)
console.log(btn.dataset.price);        // '999' (always a string)
```

### 8.6 Creating and removing elements

The usual three steps are create, fill, insert.

```js
const list = document.querySelector('#list');

const li = document.createElement('li');   // 1. create
li.textContent = 'Cherry';                 // 2. fill
list.append(li);                           // 3. insert at the end

list.prepend(document.createElement('li'));   // insert at the start
```

Other ways to insert and remove:

```js
list.append(li);                 // add at end of list
list.prepend(li);                // add at start
reference.before(li);            // add before another element
reference.after(li);             // add after another element
li.remove();                     // remove an element
list.replaceChildren();          // remove everything inside
const copy = li.cloneNode(true); // copy an element (true = with children)
```

**Building a list from data** is something you will do constantly:

```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Mango'];
const list = document.querySelector('#list');

list.replaceChildren();   // clear

fruits.forEach((fruit) => {
  const li = document.createElement('li');
  li.textContent = fruit;
  list.append(li);
});
```

For many elements at once, build them in an array and add them together, which is faster:

```js
list.replaceChildren(
  ...fruits.map((fruit) => {
    const li = document.createElement('li');
    li.textContent = fruit;
    return li;
  })
);
```

**Template strings with insertAdjacentHTML** are a shortcut for bigger blocks of HTML, but only use them with trusted data (never raw user input):

```js
const products = [
  { name: 'Shirt', price: 799 },
  { name: 'Cap', price: 299 },
];

const grid = document.querySelector('#grid');
grid.innerHTML = products
  .map((p) => `<article class='card'><h3>${p.name}</h3><p>${p.price}</p></article>`)
  .join('');
```

### 8.7 Moving around the tree

```js
const list = document.querySelector('#list');

console.log(list.children);                // HTMLCollection of child elements
console.log(list.firstElementChild);
console.log(list.lastElementChild);

const item = list.firstElementChild;
console.log(item.parentElement);           // the ul
console.log(item.nextElementSibling);      // the next li
console.log(item.previousElementSibling);  // null (nothing before it)

console.log(item.closest('ul'));           // nearest ancestor that matches
```

### 8.8 Sizes, scrolling and the window

```js
console.log(window.innerWidth, window.innerHeight);   // viewport size
console.log(window.scrollY);                           // how far the page is scrolled

document.querySelector('#title').scrollIntoView({ behavior: 'smooth' });
window.scrollTo({ top: 0, behavior: 'smooth' });

const box = document.querySelector('.note').getBoundingClientRect();
console.log(box.top, box.left, box.width, box.height);
```

### 8.9 Putting it together: three small features

**1. Dark mode toggle**

```html
<button id='theme-btn'>Toggle theme</button>
```

```css
body.dark { background: #111; color: #eee; }
```

```js
const themeBtn = document.querySelector('#theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

(`addEventListener` is explained fully in the next chapter. It simply says: when the button is clicked, run this function.)

**2. Live character counter**

```html
<textarea id='msg' maxlength='100'></textarea>
<p><span id='count'>0</span> / 100</p>
```

```js
const msg = document.querySelector('#msg');
const count = document.querySelector('#count');

msg.addEventListener('input', () => {
  count.textContent = msg.value.length;
});
```

**3. Add and delete list items**

```html
<input id='new-item' placeholder='New item' />
<button id='add'>Add</button>
<ul id='items'></ul>
```

```js
const input = document.querySelector('#new-item');
const addBtn = document.querySelector('#add');
const itemsList = document.querySelector('#items');

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;               // ignore empty input

  const li = document.createElement('li');
  li.textContent = text + ' ';

  const del = document.createElement('button');
  del.textContent = 'x';
  del.addEventListener('click', () => li.remove());

  li.append(del);
  itemsList.append(li);
  input.value = '';
  input.focus();
});
```

### 8.10 Performance and good habits

- Selecting an element is cheap but not free. Store the result in a variable instead of selecting it again and again.
- Changing the DOM many times in a loop can be slow. Build elements first and insert them once.
- Keep HTML for structure, CSS for looks, JS for behaviour. Toggle classes instead of writing many inline styles.
- Always keep accessibility in mind: use real `button` elements for clickable things, not `div`.

### 8.11 Common mistakes

- Running the script before the elements exist (put the script at the end of `body` or use `defer`).
- Mixing up `getElementById('#title')` (no `#` here) with `querySelector('#title')` (needs `#`).
- Forgetting that `querySelectorAll` returns a list; you cannot write `list.style.color = 'red'` on it, you must loop.
- Using `innerHTML` with user data.
- Reading `value` as a number: it is always a string.

### Chapter 8 summary

- The DOM is the live tree of the page; JavaScript reads and changes it through `document`.
- Select with `querySelector` and `querySelectorAll`; change content with `textContent`; change appearance with `classList`.
- Create elements with `createElement`, insert with `append`, `prepend`, `before`, `after`; remove with `remove`.
- Use `data-` attributes to attach information to elements.

### Exercises

1. Change the text and colour of every paragraph on a page using one loop.
2. Build a page with an empty `ul`. From an array of 5 names, create the `li` elements with JavaScript.
3. Build a counter with `+`, `-` and reset buttons that update a number on screen.
4. Make a 'Read more' button that shows or hides extra text by toggling a CSS class.
5. Create a table of 10 rows (multiplication table of 7) entirely from JavaScript.

## Chapter 9: Events, Forms and Browser Storage

A web page that only displays things is a poster. A web page that reacts to clicks, typing and submissions is an application. **Events** are how the browser tells your code that something happened. In this chapter you learn to listen to events, handle forms correctly and remember data in the browser.

### 9.1 What is an event?

An **event** is a signal that something happened: the user clicked a button, pressed a key, moved the mouse, submitted a form, the page finished loading, the window was resized. You write an **event handler** (also called a listener): a function that runs when that event occurs.

```js
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

The syntax is `element.addEventListener(eventName, handlerFunction)`. You can add many listeners to the same element. To remove one, use `removeEventListener` with the same function reference:

```js
function onClick() { console.log('clicked'); }

button.addEventListener('click', onClick);
button.removeEventListener('click', onClick);

// Run only once
button.addEventListener('click', onClick, { once: true });
```

You may also see `onclick='...'` written inside HTML, or `button.onclick = ...` in old code. Prefer `addEventListener`, which is more flexible.

### 9.2 The event object

The browser passes an **event object** to your handler. It carries details about what happened.

```js
button.addEventListener('click', (event) => {
  console.log(event.type);         // 'click'
  console.log(event.target);       // the element that was clicked
  console.log(event.clientX, event.clientY);   // mouse position
});
```

### 9.3 Common events

| Group | Events | Typical use |
| --- | --- | --- |
| Mouse | `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove` | Buttons, hover effects, menus |
| Keyboard | `keydown`, `keyup` | Shortcuts, search on Enter, games |
| Form | `submit`, `input`, `change`, `focus`, `blur` | Validation, live search |
| Window | `load`, `DOMContentLoaded`, `resize`, `scroll` | Setup, sticky headers, lazy loading |
| Touch and pointer | `pointerdown`, `pointermove`, `touchstart` | Mobile gestures, drawing |

**Keyboard example:**

```js
document.addEventListener('keydown', (event) => {
  console.log(event.key);     // 'a', 'Enter', 'Escape', 'ArrowUp'...

  if (event.key === 'Escape') {
    document.querySelector('.modal')?.classList.add('hidden');
  }

  if (event.ctrlKey && event.key === 's') {
    event.preventDefault();   // stop the browser's own Save dialog
    console.log('Custom save');
  }
});
```

**Page-ready event:**

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('HTML is ready, run my setup here');
});
```

### 9.4 preventDefault

Many events have a built-in browser action: clicking a link navigates, submitting a form reloads the page. `event.preventDefault()` cancels that default action so that you can do your own thing.

```js
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Link click handled by JS, no navigation');
});
```

### 9.5 Event bubbling and delegation

When you click an element, the event first fires on that element, then **bubbles up** to its parent, then the parent's parent, up to `document`. (There is also a *capturing* phase in the opposite direction, rarely needed.)

```html
<ul id='todo'>
  <li>Learn JS <button>Delete</button></li>
  <li>Build app <button>Delete</button></li>
</ul>
```

Bubbling lets you use **event delegation**: instead of adding a listener to every button (and forgetting about buttons you add later), add one listener to the parent and check what was clicked.

```js
const todo = document.querySelector('#todo');

todo.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button) return;                       // click was not on a button

  button.closest('li').remove();
});
```

This single listener works even for list items created later by JavaScript. Delegation is a very common, professional pattern.

You can stop bubbling with `event.stopPropagation()`, but use it rarely; it often hides bugs.

### 9.6 Working with forms

Forms are central to websites. The right way to handle one in JavaScript is to listen to the **submit** event on the form, not the click on the button. That way the Enter key and the button both work.

```html
<form id='signup'>
  <input type='text' name='username' placeholder='Username' required />
  <input type='email' name='email' placeholder='Email' required />
  <input type='password' name='password' minlength='8' required />
  <select name='plan'>
    <option value='free'>Free</option>
    <option value='pro'>Pro</option>
  </select>
  <label><input type='checkbox' name='newsletter' /> Send me news</label>
  <button type='submit'>Sign up</button>
  <p id='error' class='hidden'></p>
</form>
```

```js
const form = document.querySelector('#signup');
const errorBox = document.querySelector('#error');

form.addEventListener('submit', (event) => {
  event.preventDefault();                       // stop page reload

  const data = new FormData(form);              // collect all named fields
  const values = Object.fromEntries(data);      // { username, email, password, plan, newsletter? }
  values.newsletter = data.has('newsletter');   // checkbox is only present when ticked

  if (values.username.trim().length < 3) {
    errorBox.textContent = 'Username must have at least 3 characters.';
    errorBox.classList.remove('hidden');
    return;
  }

  errorBox.classList.add('hidden');
  console.log('Valid data', values);
  form.reset();
});
```

**Reading single inputs directly:**

```js
const nameInput = document.querySelector('input[name=username]');
console.log(nameInput.value);          // text value (always a string)

const checkbox = document.querySelector('input[name=newsletter]');
console.log(checkbox.checked);         // true or false

const radio = document.querySelector('input[name=size]:checked');
console.log(radio?.value);
```

**input versus change:** `input` fires on every keystroke (live search, counters); `change` fires when the user finishes (leaves the field or picks an option).

**Debouncing** avoids doing heavy work on every keystroke, such as calling a search API. The function waits until the user stops typing for a short time:

```js
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

searchInput.addEventListener('input', debounce((e) => {
  console.log('Searching for', e.target.value);
}, 400));
```

This uses closures, which you learned in Chapter 5.

### 9.7 Built-in form validation

The browser can validate for you using HTML attributes (`required`, `minlength`, `maxlength`, `min`, `max`, `pattern`, `type='email'`). You can also use the **Constraint Validation API** in JavaScript:

```js
const email = document.querySelector('input[name=email]');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter a valid email address.');
  } else {
    email.setCustomValidity('');
  }
});
```

Remember: browser validation is for the user's convenience. Anyone can bypass it, so the server must validate again (Chapter 23).

### 9.8 Timers and the page lifecycle

```js
const id = setInterval(() => console.log('tick'), 1000);
setTimeout(() => clearInterval(id), 5000);       // stop after 5 seconds

window.addEventListener('load', () => console.log('Everything loaded, including images'));
window.addEventListener('resize', () => console.log(window.innerWidth));

// requestAnimationFrame runs before the next screen repaint (smooth animation)
function animate() {
  // update something
  requestAnimationFrame(animate);
}
```

### 9.9 Storing data in the browser

A web page forgets everything when you reload, unless you save the data somewhere. The browser offers several places:

| Storage | Size | Lifetime | Sent to the server? | Use for |
| --- | --- | --- | --- | --- |
| `localStorage` | about 5 MB | Until deleted | No | Settings, theme, drafts, simple app data |
| `sessionStorage` | about 5 MB | Until the tab closes | No | Temporary data for one tab |
| Cookies | about 4 KB each | Until their expiry date | Yes, with every request | Login sessions, tracking preferences |
| IndexedDB | Large | Until deleted | No | Big offline data |

**localStorage** stores **strings** under keys:

```js
localStorage.setItem('theme', 'dark');
console.log(localStorage.getItem('theme'));    // 'dark'
localStorage.removeItem('theme');
localStorage.clear();                           // delete everything for this site

// To store objects or arrays, convert them to JSON first
const settings = { fontSize: 18, notifications: true };
localStorage.setItem('settings', JSON.stringify(settings));

const saved = JSON.parse(localStorage.getItem('settings') ?? '{}');
console.log(saved.fontSize);
```

**Never store passwords, tokens that give full account access, or private data in localStorage.** Any script running on your page (including a malicious one injected by an XSS bug) can read it.

**Cookies** are small pieces of text the browser sends to the server with every request. You will mostly set them from the server (Chapter 22) with safe flags like `HttpOnly`. In the browser, you can read them like this:

```js
document.cookie = 'visited=true; max-age=86400; path=/';   // lasts one day
console.log(document.cookie);
```

### 9.10 Practical example: a theme switcher that remembers your choice

```html
<button id='theme-btn'>Toggle theme</button>
```

```js
const themeBtn = document.querySelector('#theme-btn');

function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
}

// Restore on page load; if nothing saved, follow the system setting
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme ?? (prefersDark ? 'dark' : 'light'));

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
});
```

### 9.11 Practical example: a persistent notes list

```html
<form id='note-form'>
  <input name='text' placeholder='Write a note' required />
  <button>Add</button>
</form>
<ul id='notes'></ul>
```

```js
const form = document.querySelector('#note-form');
const list = document.querySelector('#notes');

let notes = JSON.parse(localStorage.getItem('notes') ?? '[]');

function save() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function render() {
  list.replaceChildren(
    ...notes.map((note, index) => {
      const li = document.createElement('li');
      li.textContent = note + ' ';

      const del = document.createElement('button');
      del.textContent = 'Delete';
      del.dataset.index = index;
      li.append(del);
      return li;
    })
  );
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = new FormData(form).get('text').trim();
  if (!text) return;
  notes.push(text);
  save();
  render();
  form.reset();
});

list.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (!btn) return;
  notes.splice(Number(btn.dataset.index), 1);
  save();
  render();
});

render();
```

This small program contains the pattern behind many apps: keep your data in a variable (the **state**), write a `render` function that draws the page from the state, and update the state in event handlers followed by a call to `render`. React, which you learn in Book 2, is built on this exact idea.

### 9.12 Common mistakes

- Listening to `click` on the submit button instead of `submit` on the form.
- Forgetting `event.preventDefault()` and wondering why the page reloads.
- Calling the handler instead of passing it: `addEventListener('click', handle())` runs it immediately. Write `handle` without brackets.
- Storing objects in localStorage without `JSON.stringify`, which saves the text `[object Object]`.
- Adding listeners inside loops to many elements when delegation would be simpler.

### Chapter 9 summary

- Use `addEventListener` to react to events; the handler receives an event object.
- Use `submit` events on forms with `preventDefault`, and `FormData` to read values.
- Event delegation uses bubbling to handle many children with one listener.
- `localStorage` keeps strings across reloads; use `JSON.stringify` and `JSON.parse` for objects.
- Structure apps as state, render function and event handlers.

### Exercises

1. Build a button that changes the page background to a random colour on every click.
2. Build a form that checks two passwords match and shows an error message if they do not.
3. Make a keyboard shortcut: pressing `/` focuses the search box.
4. Build a simple image gallery where clicking a small thumbnail updates the large image (use event delegation).
5. Save a counter in localStorage so it keeps its value after refreshing the page.
6. Add a live search box that filters a list of 20 names as you type, using debounce.

## Chapter 10: Asynchronous JavaScript

Some things take time: loading data from a server, reading a file, waiting for a timer. If JavaScript stood still while waiting, your page would freeze. **Asynchronous** programming is how JavaScript keeps working while it waits. This is one of the topics beginners fear most, but with the right mental model it becomes simple. It is also essential: nearly every real website fetches data from a server.

### 10.1 Synchronous versus asynchronous

**Synchronous** code runs line by line, and each line waits for the previous one to finish.

```js
console.log('1. Make tea');
console.log('2. Drink tea');
console.log('3. Go to work');
```

Now compare with a timer:

```js
console.log('A');

setTimeout(() => {
  console.log('B (after 2 seconds)');
}, 2000);

console.log('C');
```

Output:

```text
A
C
B (after 2 seconds)
```

JavaScript did not wait. It scheduled the timer, moved on to print `C`, and came back to run the timer callback when the 2 seconds passed. Think of a cook who puts rice on the stove, sets a timer, and chops vegetables in the meantime. The cook is one person (JavaScript is single-threaded) but does not waste time standing and watching the rice.

### 10.2 How it works: the event loop (simple version)

JavaScript has these parts:

- The **call stack**: where the currently running code lives. One thing runs at a time.
- **Web APIs** (in the browser) or **system APIs** (in Node.js): the parts that actually do slow work such as timers, network requests and file reading, outside the stack.
- The **callback queue** (also *task queue*) and the **microtask queue**: waiting rooms for functions that are ready to run after slow work finishes.
- The **event loop**: a loop that checks whether the call stack is empty; if yes, it moves the next waiting function from the queue to the stack. Microtasks (promise callbacks) go before regular tasks (timers).

You do not need to manage this yourself. You only need to remember: **slow work is handed off, and your callback runs later, when the stack is free.** Even `setTimeout(fn, 0)` runs after the current synchronous code finishes.

```js
console.log('start');
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('end');
// start, end, promise, timeout
```

### 10.3 Callbacks

The oldest approach: pass a function that will be called when the work is done.

```js
function loadUser(id, callback) {
  setTimeout(() => {
    callback({ id, name: 'Asha' });
  }, 1000);
}

loadUser(1, (user) => {
  console.log('Got user', user.name);
});
```

The problem appears when steps depend on each other. The code moves to the right in a pyramid, called **callback hell**:

```js
loadUser(1, (user) => {
  loadPosts(user.id, (posts) => {
    loadComments(posts[0].id, (comments) => {
      console.log(comments);   // hard to read, hard to handle errors
    });
  });
});
```

Promises and async/await were created to solve this.

### 10.4 Promises

A **promise** is an object that represents a result that is not ready yet but will be in the future, like a receipt for an order. A promise is always in one of three states:

- **pending**: still working,
- **fulfilled**: finished successfully, with a value,
- **rejected**: failed, with an error.

**Creating a promise** (you will rarely do this; usually libraries give you promises):

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function loadUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('Invalid id'));
      } else {
        resolve({ id, name: 'Asha' });
      }
    }, 1000);
  });
}
```

**Using a promise** with `.then`, `.catch` and `.finally`:

```js
loadUser(1)
  .then((user) => {
    console.log('Success', user);
    return user.id;            // pass a value to the next .then
  })
  .then((id) => console.log('Id is', id))
  .catch((error) => console.log('Failed:', error.message))
  .finally(() => console.log('Always runs, e.g. hide the loading spinner'));
```

Rules to remember:

- `.then` receives the result when fulfilled.
- `.catch` receives the error when anything above it fails (one `.catch` at the end handles the whole chain).
- `.finally` runs in both cases.
- Whatever you `return` from a `.then` becomes the input of the next one. Returning another promise makes the chain wait for it.

### 10.5 async and await

`async` and `await` are a nicer way to write the same promise code so that it looks like normal, top-to-bottom code. This is the style you will use almost always.

```js
async function showUser() {
  const user = await loadUser(1);     // wait here until the promise settles
  console.log(user.name);
}

showUser();
```

Rules:

- Put `async` before a function to make it return a promise automatically.
- Use `await` in front of a promise inside an async function to pause that function (not the whole program) until the result is ready.
- Use `try...catch` to handle errors:

```js
async function main() {
  try {
    const user = await loadUser(0);
    console.log(user);
  } catch (error) {
    console.log('Something went wrong:', error.message);
  } finally {
    console.log('Done');
  }
}

main();
```

The callback hell from earlier becomes:

```js
async function showComments() {
  const user = await loadUser(1);
  const posts = await loadPosts(user.id);
  const comments = await loadComments(posts[0].id);
  console.log(comments);
}
```

Modern JavaScript and Node.js allow top-level `await` inside ES modules, so you can write `const data = await fetchSomething();` at the top of a module file.

### 10.6 Running things in parallel

`await` one after another runs the tasks **in sequence**. If the tasks do not depend on each other, start them together and wait for all:

```js
// Slow: about 3 seconds in total if each takes 1 second
const a = await wait(1000);
const b = await wait(1000);
const c = await wait(1000);

// Fast: about 1 second
const results = await Promise.all([loadUser(1), loadUser(2), loadUser(3)]);
console.log(results);   // array of three users
```

Useful `Promise` helpers:

| Helper | Meaning |
| --- | --- |
| `Promise.all([...])` | Waits for all to succeed; rejects at the first failure |
| `Promise.allSettled([...])` | Waits for all to finish and tells you which succeeded or failed |
| `Promise.race([...])` | Settles as soon as the first one settles (used for timeouts) |
| `Promise.any([...])` | Fulfils with the first success |

### 10.7 Fetch: talking to servers

`fetch()` is the built-in function for making HTTP requests. It returns a promise of a **Response** object. Reading the body is another promise.

```js
async function getTodos() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

  if (!response.ok) {                      // status is not 200 to 299
    throw new Error(`HTTP error ${response.status}`);
  }

  const todos = await response.json();     // parse the JSON body
  return todos;
}

getTodos()
  .then((todos) => console.log(todos))
  .catch((err) => console.log(err.message));
```

Important: `fetch` only rejects when the network itself fails. A 404 or 500 response does **not** reject, so you must check `response.ok` yourself.

Body readers: `response.json()` for JSON, `response.text()` for plain text, `response.blob()` for files and images.

(`jsonplaceholder.typicode.com` is a free fake API made for practice. It is great for learning.)

**Sending data with POST, PUT and DELETE:**

```js
async function createPost(post) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post),            // must be a string
  });

  if (!response.ok) throw new Error('Could not create post');
  return response.json();
}

const created = await createPost({ title: 'Hello', body: 'My first post', userId: 1 });
console.log(created);

// Update and delete
await fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Updated' }),
});

await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
```

**Query strings:**

```js
const params = new URLSearchParams({ q: 'shoes', page: 2 });
const res = await fetch(`https://api.example.com/search?${params}`);
```

**Sending a form with FormData** (needed for file uploads; do not set the Content-Type header yourself in this case):

```js
const formData = new FormData(document.querySelector('form'));
await fetch('/upload', { method: 'POST', body: formData });
```

**Cancelling a request and timeouts** with `AbortController`:

```js
const controller = new AbortController();
setTimeout(() => controller.abort(), 5000);   // cancel after 5 seconds

try {
  const res = await fetch(url, { signal: controller.signal });
  console.log(await res.json());
} catch (err) {
  if (err.name === 'AbortError') console.log('Request cancelled');
  else console.log('Other error', err);
}
```

### 10.8 CORS in simple words

Browsers have a safety rule called the **same-origin policy**: JavaScript on `https://mysite.com` cannot freely read responses from `https://other.com`. A server can allow it by sending special headers (this system is called **CORS**, Cross-Origin Resource Sharing). If you see an error like 'blocked by CORS policy' in the Console, the server you call has not allowed your website's origin. When you build your own server in Chapter 20 you will learn how to enable CORS properly. Never try to solve CORS by switching off browser security.

### 10.9 Building a real feature: a user directory

```html
<input id='search' placeholder='Search users' />
<p id='status'></p>
<ul id='users'></ul>
```

```js
const searchInput = document.querySelector('#search');
const statusText = document.querySelector('#status');
const usersList = document.querySelector('#users');

let users = [];

async function loadUsers() {
  statusText.textContent = 'Loading...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`Server responded with ${response.status}`);

    users = await response.json();
    statusText.textContent = '';
    render(users);
  } catch (error) {
    statusText.textContent = `Could not load users: ${error.message}`;
  }
}

function render(list) {
  usersList.replaceChildren(
    ...list.map((u) => {
      const li = document.createElement('li');
      li.textContent = `${u.name} (${u.email})`;
      return li;
    })
  );

  if (list.length === 0) statusText.textContent = 'No users found';
}

searchInput.addEventListener('input', () => {
  const term = searchInput.value.toLowerCase();
  render(users.filter((u) => u.name.toLowerCase().includes(term)));
});

loadUsers();
```

This example has all the parts of professional data fetching: a loading message, error handling, rendering from state, and filtering without calling the server again.

### 10.10 Other async tools you will meet

- `setTimeout`, `setInterval`: timers.
- `async` iteration with `for await (const item of stream)`: for streams and paginated sources.
- **Web Workers**: run heavy calculations on a separate thread.
- In Node.js: file system, database and network operations are all asynchronous, so you will use `async` and `await` in nearly every file of the backend.

### 10.11 Common mistakes

- Forgetting `await`, then using a Promise object as if it were the data (you see `Promise { <pending> }`).
- Using `await` outside an async function (except top-level await in modules).
- Not handling errors: an unhandled rejected promise can crash a Node.js program.
- Awaiting many independent tasks one by one instead of `Promise.all`.
- Using `forEach` with `await` inside, which does not wait. Use `for...of` or `Promise.all` with `map` instead:

```js
// Wrong: the loop does not wait for each callback
items.forEach(async (item) => { await save(item); });

// Right: sequential
for (const item of items) { await save(item); }

// Right: parallel
await Promise.all(items.map((item) => save(item)));
```

- Forgetting to check `response.ok` after `fetch`.

### Chapter 10 summary

- JavaScript handles slow work without freezing: it schedules callbacks and runs them via the event loop.
- Promises represent future results; `then`, `catch`, `finally` chain steps.
- `async` and `await` make promise code readable; handle errors with `try...catch`.
- Use `Promise.all` for independent tasks.
- `fetch` makes HTTP requests; always check `response.ok`; send JSON with a header and `JSON.stringify`.

### Exercises

1. Write `wait(ms)` returning a promise, then use it to log 'one', 'two', 'three' one second apart.
2. Fetch a list of posts from jsonplaceholder and display the first 10 titles on a page.
3. Build a 'random joke' or 'random user' button that fetches new data on each click, with loading and error messages.
4. Fetch posts and users in parallel with `Promise.all` and display each post with its author's name.
5. Write `fetchWithTimeout(url, ms)` using `AbortController`.
6. Predict the output of the code in 10.2 before running it, then run and compare.

## Chapter 11: Errors, Debugging and Organising Code

Every programmer, from beginner to expert, spends a large part of the day dealing with errors. The difference is that good developers understand error messages, handle errors on purpose, and know how to find bugs quickly. This chapter gives you those skills, plus a way to organise growing code into modules.

### 11.1 Kinds of errors

1. **Syntax errors:** the code is written wrongly, so it cannot even start. Example: a missing bracket. The error appears immediately and tells you the line.
2. **Runtime errors:** the code starts but fails while running. Example: reading a property of `undefined`.
3. **Logic errors (bugs):** the code runs without any error message but gives wrong results. These are the hardest, because nothing tells you where the problem is.

### 11.2 Reading an error message

```text
TypeError: Cannot read properties of undefined (reading 'name')
    at showUser (/home/me/app.js:12:23)
    at main (/home/me/app.js:20:3)
    at Object.<anonymous> (/home/me/app.js:25:1)
```

Read it in three steps:

1. **The type and message** (first line): a `TypeError` means you used a value in the wrong way. The message says you tried to read `name` from something that is `undefined`.
2. **The first line of the stack** (`at showUser (app.js:12:23)`): the file, line 12, column 23 where it happened.
3. **The rest of the stack**: the chain of function calls that led there, newest first. It shows *how* the program got to the failing line.

**The common error types:**

| Error | Usual cause | Example |
| --- | --- | --- |
| `SyntaxError` | Broken syntax | Missing `)` or `}`, bad JSON in `JSON.parse` |
| `ReferenceError` | Using a name that does not exist | A typo in a variable name, or using it before `let` |
| `TypeError` | Wrong kind of value for an operation | Calling something that is not a function; reading from `null` |
| `RangeError` | Number out of allowed range | `new Array(-1)`, infinite recursion |

Two error messages you will meet daily:

- **'x is not defined'**: you used a variable that was never declared, usually a typo or a wrong scope.
- **'Cannot read properties of undefined (reading y)'**: the thing before the dot is `undefined`. Look at the value one step earlier. Was the data loaded yet? Is the key spelled correctly? Did the array have that index?

### 11.3 try, catch, finally

When something might fail (parsing user text as JSON, a network request, reading a file) wrap it in `try...catch` so that your program can respond gracefully instead of crashing.

```js
function parseSettings(text) {
  try {
    const settings = JSON.parse(text);
    return settings;
  } catch (error) {
    console.log('Invalid settings, using defaults:', error.message);
    return { theme: 'light' };
  } finally {
    console.log('parseSettings finished');   // runs always
  }
}

console.log(parseSettings('{ bad json'));
```

The error object has these useful properties: `error.name`, `error.message`, `error.stack`.

Use `try...catch` around the *specific* risky operation and only catch errors that you can handle. Do not wrap whole programs and hide everything: an empty `catch {}` block is a bug factory, because errors disappear without a trace.

### 11.4 Throwing your own errors

Use `throw` to signal that something is wrong. Always throw `Error` objects (not plain strings), so you get a stack trace.

```js
function withdraw(balance, amount) {
  if (typeof amount !== 'number' || Number.isNaN(amount)) {
    throw new TypeError('Amount must be a number');
  }
  if (amount <= 0) {
    throw new RangeError('Amount must be positive');
  }
  if (amount > balance) {
    throw new Error('Insufficient funds');
  }
  return balance - amount;
}

try {
  console.log(withdraw(100, 150));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
```

**Custom error classes** let you tell kinds of problems apart. They are very useful in Express (Chapter 23), where an error should become the right HTTP status code.

```js
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(what = 'Resource') {
    super(`${what} not found`, 404);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message, 400);
  }
}

try {
  throw new NotFoundError('User');
} catch (error) {
  if (error instanceof NotFoundError) {
    console.log(error.statusCode, error.message);   // 404 'User not found'
  } else {
    throw error;   // an unexpected error: pass it on
  }
}
```

### 11.5 Errors in asynchronous code

- With `async` and `await`, use `try...catch` as usual (see Chapter 10).
- With promise chains, use `.catch()`.
- A plain `try...catch` does **not** catch errors thrown later inside a `setTimeout` callback or in a promise you forgot to `await`.

```js
// This catch does NOT run: the error happens later, outside the try block
try {
  setTimeout(() => { throw new Error('late'); }, 100);
} catch (e) {
  console.log('never printed');
}

// This works
async function run() {
  try {
    await Promise.reject(new Error('rejected'));
  } catch (e) {
    console.log('caught:', e.message);
  }
}
run();
```

Global safety nets exist: `window.addEventListener('error', ...)` and `'unhandledrejection'` in the browser, and `process.on('uncaughtException', ...)` and `process.on('unhandledRejection', ...)` in Node.js. Use them for logging, not for hiding problems.

### 11.6 Debugging: a method that works

When the code is wrong, avoid random changes. Use this loop instead:

1. **Reproduce** the bug reliably. Find the exact steps or input that cause it.
2. **Read** the error message and the stack trace carefully. Often the answer is in the message.
3. **Locate**: find which part of the program is wrong. Halve the problem: check the data in the middle of the flow. Is it correct there? Then the bug is later. Wrong? Then earlier.
4. **Understand** why. Form a guess, then test the guess.
5. **Fix** one thing at a time, then run again.
6. **Prevent**: add a test or a check so it cannot return.

The most powerful tip: **explain the code line by line, out loud, to a rubber duck** (or a friend). Saying it aloud often reveals the mistake. This is a real technique called rubber duck debugging.

### 11.7 Debugging tools

**1. console methods.** `console.log` is simple and good. These variants help more:

```js
const user = { name: 'Asha', age: 22 };

console.log('user is', user);
console.log({ user });                   // prints the variable name too
console.table([{ a: 1, b: 2 }, { a: 3, b: 4 }]);   // table view for arrays of objects
console.error('Something failed');       // red, with stack trace
console.warn('Careful');                 // yellow
console.group('Section');
console.log('inside group');
console.groupEnd();
console.time('loop');
for (let i = 0; i < 1e6; i++) {}
console.timeEnd('loop');                 // prints elapsed time
console.assert(user.age > 30, 'Age must be over 30');   // prints only if false
```

**2. The debugger statement and breakpoints.** The most underused tool by beginners. Write `debugger;` in your code. When DevTools is open, the program pauses on that line, and you can look at the values of all variables, then step forward line by line.

You can also click a line number in the **Sources** tab to set a **breakpoint**. While paused, use:

- **Resume** (F8): continue until the next breakpoint.
- **Step over** (F10): run this line and stop at the next one.
- **Step into** (F11): go inside the function that is called on this line.
- **Step out** (Shift+F11): finish the current function.
- The **Scope** and **Watch** panels show variable values.

**3. Debugging in VS Code with Node.js.** Open the Run and Debug panel, press 'Run and Debug', choose Node.js. Click left of a line number to place a red breakpoint. You can step through your server code the same way as in the browser. You can also run `node --inspect file.js` and open `chrome://inspect`.

**4. The Network tab** for any problem with fetch or APIs: look at the URL, method, the request payload, the response status and the response body.

**5. Linters.** ESLint warns about suspicious code (unused variables, missing `await`, undefined names) before you run anything.

### 11.8 Defensive programming

Write code that expects trouble.

- **Validate inputs** at the beginning of functions.
- **Use early returns** for invalid cases.
- **Check for null or undefined** with `?.` and `??`.
- **Never trust external data** (forms, APIs, files). Always check shape and type.

```js
function getInitials(user) {
  if (!user || typeof user.name !== 'string') return '?';
  return user.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase())
    .join('');
}

console.log(getInitials({ name: 'asha kumar' }));   // 'AK'
console.log(getInitials(null));                       // '?'
```

### 11.9 Organising code: a first project structure

As programs grow, one file becomes unmanageable. Split by responsibility. A small browser app might look like this:

```text
my-app/
  index.html
  css/
    style.css
  js/
    main.js          entry point: connects everything
    state.js         the data of the app
    api.js           functions that talk to servers
    ui.js            functions that draw things on the page
    utils.js         small helper functions
```

Principles for organising code:

- **Single responsibility:** a file or function should have one reason to change.
- **Separate data, logic and display.** For example, a function that calculates a total should not also draw it on the screen.
- **Avoid global variables.** Export and import what you need.
- **Name files by what they do** and keep them reasonably short (a few hundred lines).
- **Avoid circular imports** (A imports B, B imports A), which cause confusing bugs.

Example using ES modules in the browser:

```js
// js/api.js
export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Request failed');
  return res.json();
}

// js/ui.js
export function renderUsers(list, container) {
  container.replaceChildren(
    ...list.map((u) => {
      const li = document.createElement('li');
      li.textContent = u.name;
      return li;
    })
  );
}

// js/main.js
import { getUsers } from './api.js';
import { renderUsers } from './ui.js';

const container = document.querySelector('#users');

getUsers()
  .then((users) => renderUsers(users, container))
  .catch((err) => (container.textContent = err.message));
```

```html
<script type='module' src='js/main.js'></script>
```

### 11.10 Common debugging mistakes

- Changing many things at once, so you do not know what fixed or broke the code.
- Ignoring the first error and chasing later ones that are consequences of it.
- Not reading the error message at all.
- Assuming a value is correct instead of printing it.
- Searching the exact error message on the web only after an hour of guessing. Search early: copy the error text without your file names and add the language, for example `javascript cannot read properties of undefined reading map`.

### Chapter 11 summary

- Syntax, runtime and logic errors are different; learn to read the type, message and stack trace.
- Use `try...catch` around risky operations, throw `Error` objects, and create custom error classes.
- Debug with a method: reproduce, locate, understand, fix, prevent. Use `console` tools, `debugger` and breakpoints.
- Split code into modules by responsibility, with a clear entry file.

### Exercises

1. Write a function `safeJsonParse(text, fallback)` that returns the fallback when parsing fails.
2. Create `ValidationError` and `NotFoundError` classes and use them in a function `getUser(users, id)`.
3. Put a `debugger;` in a loop that sums numbers and use DevTools to watch the variable change.
4. Find and fix the bugs: `const items = [1,2,3]; items.forEach(i => { return i * 2 }); console.log(items.map(i => i * 2).join(', ')`. (Hint: at least one syntax error.)
5. Reorganise the Chapter 9 notes app into `state.js`, `ui.js` and `main.js` modules.

## Chapter 12: Classes, this and Prototypes

So far you used objects one at a time. What if you need a hundred users, a thousand products, or many similar things that share behaviour? You need a blueprint. In JavaScript the blueprint is a **class**. This chapter also explains the famous and confusing keyword `this`, and what is happening underneath classes (prototypes), so that nothing in JavaScript feels like magic.

### 12.1 The problem: repeating object code

```js
const user1 = { name: 'Asha', email: 'asha@mail.com', greet() { return `Hi ${this.name}`; } };
const user2 = { name: 'Ravi', email: 'ravi@mail.com', greet() { return `Hi ${this.name}`; } };
// Copying and pasting for every user is not a good idea
```

### 12.2 Classes

A **class** is a blueprint; an **object created from it** is an **instance**. The special `constructor` method runs when you create an instance with `new`.

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    return `Hi, I am ${this.name}`;
  }

  isGmail() {
    return this.email.endsWith('@gmail.com');
  }
}

const user1 = new User('Asha', 'asha@gmail.com');
const user2 = new User('Ravi', 'ravi@mail.com');

console.log(user1.greet());      // Hi, I am Asha
console.log(user2.isGmail());    // false
console.log(user1 instanceof User);   // true
```

Inside the class, `this` means 'the object being created or used'. Notice that the methods are written once in the class and shared by all instances. Class names start with a capital letter by convention.

### 12.3 Properties, static members and private fields

```js
class BankAccount {
  static bankName = 'Code Bank';      // belongs to the class, not to instances
  #balance = 0;                       // private: only code inside the class can use it
  transactions = [];                  // a public field with a default value

  constructor(owner, initialDeposit = 0) {
    this.owner = owner;
    this.#balance = initialDeposit;
  }

  deposit(amount) {
    if (amount <= 0) throw new RangeError('Deposit must be positive');
    this.#balance += amount;
    this.transactions.push({ type: 'deposit', amount });
    return this;                      // returning this allows chaining
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.transactions.push({ type: 'withdraw', amount });
    return this;
  }

  get balance() {                     // getter: read like a property
    return this.#balance;
  }

  static compare(a, b) {              // static method: called on the class
    return a.balance - b.balance;
  }
}

const acc = new BankAccount('Meera', 500);
acc.deposit(200).withdraw(100);       // chaining
console.log(acc.balance);              // 600
console.log(BankAccount.bankName);
// console.log(acc.#balance);         // SyntaxError: private field
```

Why private fields? They protect important data from being changed by accident. The only way to change the balance is through `deposit` and `withdraw`, which check the rules. This idea is called **encapsulation**.

### 12.4 Inheritance

A class can **extend** another class and reuse its features, adding or changing some. The child class is a *subclass*; the parent is the *superclass*.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);           // call the parent constructor FIRST
    this.breed = breed;
  }

  speak() {                // override the parent's method
    return `${this.name} barks.`;
  }

  describe() {
    return `${super.speak()} It is a ${this.breed}.`;   // call the parent's version
  }
}

const dog = new Dog('Rex', 'Labrador');
console.log(dog.speak());      // Rex barks.
console.log(dog.describe());   // Rex makes a sound. It is a Labrador.
console.log(dog instanceof Animal);   // true
```

In a child constructor you must call `super(...)` before using `this`.

**Do not overuse inheritance.** Many modern projects prefer **composition**: building objects from small pieces and functions instead of deep class hierarchies. Use inheritance only for a clear 'is a' relationship (a Dog is an Animal). You have seen it already: `class AppError extends Error` in Chapter 11.

### 12.5 Understanding this

`this` is a special keyword whose value depends on **how a function is called**, not where it is written. This is the single biggest source of confusion, so learn these rules:

| How the function is called | What `this` is |
| --- | --- |
| As a method: `obj.method()` | `obj`, the object before the dot |
| With `new`: `new User()` | The new object being created |
| As a plain function: `fn()` | `undefined` in strict mode and modules (the global object in old sloppy mode) |
| With `call`, `apply` or `bind` | Whatever you pass explicitly |
| Arrow function | No own `this`: it uses `this` of the surrounding code |
| Event handler (regular function) | The element that received the event |

**The classic problem: losing this**

```js
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this.count);
  },
};

counter.increment();            // 1  (called as a method: this is counter)

const fn = counter.increment;   // copy the function out of the object
// fn();                        // this is not counter any more: error or NaN!

setTimeout(counter.increment, 100);   // also loses this
```

**Three solutions**

```js
// 1. bind: creates a new function with this fixed
const bound = counter.increment.bind(counter);
bound();

// 2. wrap in an arrow function
setTimeout(() => counter.increment(), 100);

// 3. call / apply: call right now with a chosen this
counter.increment.call(counter);
```

**Arrow functions and this**

Because arrow functions have no `this` of their own, they are perfect inside methods for callbacks:

```js
class Timer {
  seconds = 0;

  start() {
    setInterval(() => {
      this.seconds++;        // this is the Timer instance, thanks to the arrow function
      console.log(this.seconds);
    }, 1000);
  }
}

new Timer().start();
```

But do **not** use arrow functions for object methods when you need `this` to be the object:

```js
const person = {
  name: 'Asha',
  wrong: () => console.log(this.name),     // this is NOT person here
  right() { console.log(this.name); },     // use method shorthand
};
```

Another pattern for class methods used as callbacks: define them as arrow-function fields, which bind `this` automatically.

```js
class Button {
  label = 'Click me';

  handleClick = () => {
    console.log(this.label);   // always the instance
  };
}

const b = new Button();
document.querySelector('#btn').addEventListener('click', b.handleClick);
```

### 12.6 Prototypes: what classes really are

Under the hood, JavaScript objects are linked to other objects called their **prototype**. When you ask for a property that an object does not have, JavaScript looks in its prototype, then in the prototype's prototype, and so on, until it ends at `null`. This is the **prototype chain**.

```js
const animal = {
  eat() { return 'eating'; },
};

const dog = Object.create(animal);   // dog's prototype is animal
dog.bark = () => 'woof';

console.log(dog.bark());   // found on dog
console.log(dog.eat());    // not on dog, found on its prototype
console.log(Object.getPrototypeOf(dog) === animal);   // true
```

A `class` is a cleaner way to set up exactly this system. Methods you write in a class are stored on `Class.prototype` and shared by all instances:

```js
class User {
  greet() { return 'hi'; }
}

const u = new User();
console.log(Object.getPrototypeOf(u) === User.prototype);   // true
console.log(u.hasOwnProperty('greet'));                      // false: it lives on the prototype
console.log(typeof User);                                    // 'function'
```

Even arrays and strings use prototypes: `[1,2,3].map` exists because `Array.prototype.map` exists. This is also why you can call `.toString()` on almost everything (it comes from `Object.prototype`).

You will rarely write prototype code by hand today. It is important to know the idea so that you can understand error messages, documentation and older code.

### 12.7 Object-oriented ideas in one page

- **Encapsulation:** keep data private and expose a safe set of methods.
- **Abstraction:** hide complex details behind a simple interface (you call `array.sort()` without knowing the algorithm).
- **Inheritance:** reuse features by extending a class.
- **Polymorphism:** different classes can respond to the same method name in their own way. If `Dog` and `Cat` both have `speak()`, code can call `animal.speak()` on either without caring which one it is.

```js
class Cat extends Animal {
  speak() { return `${this.name} meows.`; }
}

for (const a of [new Dog('Rex', 'Lab'), new Cat('Tom')]) {
  console.log(a.speak());   // each answers in its own way
}
```

### 12.8 A practical example: a small inventory model

```js
class Product {
  constructor(id, name, price, stock = 0) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  get inStock() {
    return this.stock > 0;
  }

  toJSON() {                       // controls how JSON.stringify prints it
    return { id: this.id, name: this.name, price: this.price, stock: this.stock };
  }
}

class Inventory {
  #products = new Map();

  add(product) {
    this.#products.set(product.id, product);
    return this;
  }

  find(id) {
    const product = this.#products.get(id);
    if (!product) throw new Error(`Product ${id} not found`);
    return product;
  }

  sell(id, quantity = 1) {
    const product = this.find(id);
    if (product.stock < quantity) throw new Error('Not enough stock');
    product.stock -= quantity;
    return product;
  }

  get totalValue() {
    let total = 0;
    for (const p of this.#products.values()) total += p.price * p.stock;
    return total;
  }

  list() {
    return [...this.#products.values()];
  }
}

const store = new Inventory();
store.add(new Product(1, 'Laptop', 55000, 5)).add(new Product(2, 'Mouse', 500, 40));

store.sell(1, 2);
console.log(store.totalValue);         // 3 * 55000 + 40 * 500 = 185000
console.log(JSON.stringify(store.list(), null, 2));
```

### 12.9 Classes in the real world of this book

You will not write many classes in Express work. Most server code uses plain functions and objects. But classes appear in:

- Custom error classes (Chapter 11, 23).
- Mongoose models (Chapter 21) are classes under the hood.
- Libraries and frameworks (Node.js `EventEmitter`, many npm packages).
- Services with internal state (a mail service, a cache).

In React (Book 2), modern code uses functions and hooks, not classes. So learn classes well enough to read and use them, and do not worry about mastering advanced patterns.

### 12.10 Common mistakes

- Forgetting `new` when creating an instance (`User('a')` instead of `new User('a')`).
- Forgetting `super()` in a child constructor (`ReferenceError`).
- Losing `this` when passing methods as callbacks.
- Using arrow functions as object methods when `this` is needed.
- Creating deep inheritance trees. Prefer simple designs.

### Chapter 12 summary

- Classes are blueprints for objects; `constructor` sets up each instance; `extends` and `super` give inheritance.
- Use `#private` fields for data that must not be touched from outside, and getters and setters for controlled access.
- `this` depends on how a function is called. Arrow functions take `this` from outside. Use `bind` or arrow functions when passing methods as callbacks.
- Objects delegate to prototypes through the prototype chain; classes are a clean syntax for it.

### Exercises

1. Create a `Rectangle` class with `width`, `height`, an `area` getter and a `perimeter()` method. Add a `Square` subclass.
2. Build a `Stack` class with `push`, `pop`, `peek` and `size` (use a private array).
3. Create a `TodoList` class with methods to add, complete and remove tasks, and a method that returns only unfinished tasks.
4. Make a class with a method that you pass to `setTimeout`. First observe the `this` problem, then fix it in two ways.
5. Create a `ValidationError` class that holds the name of the failing field, and use it in a form validator.

## Chapter 13: Mini Project: A Task Manager in the Browser

Time to combine everything from Chapters 1 to 12 into one real application. You will build a **Task Manager** that runs in the browser. It looks professional, works on phones, and remembers your tasks after a refresh. No server is needed yet. Later, in Part 5, you will move this idea to a real backend with a database.

### 13.1 What we are building

**Features**

- Add a task with a title and a priority (low, medium, high).
- Mark tasks done or not done with a checkbox.
- Edit and delete tasks.
- Filter: All, Active, Done.
- Show how many tasks are still active.
- Clear all completed tasks.
- Save everything in localStorage.

**Skills practised:** DOM selection and creation, events and delegation, forms, arrays (`map`, `filter`), objects, spread, JSON, localStorage, modules, the state-render pattern.

### 13.2 The plan: state, actions, render

Before writing code, think in three parts. This structure is used in almost every front-end application, including React.

1. **State:** the data. Here: an array `tasks` and a string `filter`.
2. **Actions:** functions that change the state (`addTask`, `toggleTask`, `deleteTask`...). After each change we save and re-draw.
3. **Render:** one function that draws the screen based only on the current state.

We never change the screen by hand in many places. We change the state and call `render()`. This keeps the program predictable and simple to debug.

Each task is an object:

```js
{ id: 'a1b2...', title: 'Buy milk', priority: 'medium', done: false, createdAt: 1730000000000 }
```

### 13.3 Step 1: Project files

```text
task-manager/
  index.html
  style.css
  app.js
```

### 13.4 Step 2: The HTML

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title>Task Manager</title>
    <link rel='stylesheet' href='style.css' />
  </head>
  <body>
    <main class='app'>
      <h1>Task Manager</h1>

      <form id='task-form' class='task-form'>
        <input
          id='task-input'
          name='title'
          type='text'
          placeholder='What needs to be done?'
          maxlength='100'
          autocomplete='off'
          required
        />
        <select name='priority' aria-label='Priority'>
          <option value='low'>Low</option>
          <option value='medium' selected>Medium</option>
          <option value='high'>High</option>
        </select>
        <button type='submit'>Add</button>
      </form>

      <div class='toolbar'>
        <div id='filters' class='filters'>
          <button type='button' data-filter='all' class='active'>All</button>
          <button type='button' data-filter='active'>Active</button>
          <button type='button' data-filter='done'>Done</button>
        </div>
        <span id='counter'></span>
      </div>

      <ul id='task-list' class='task-list'></ul>
      <p id='empty' class='empty hidden'>Nothing here yet.</p>

      <button id='clear-done' type='button' class='link-btn'>Clear completed</button>
    </main>

    <script type='module' src='app.js'></script>
  </body>
</html>
```

Notes: the `data-filter` attributes tell us which filter each button means. Using `type='module'` on the script lets us use modern JavaScript features and keeps variables private to the file.

### 13.5 Step 3: The CSS

```css
:root {
  --bg: #f3f4f6;
  --card: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --primary: #4f46e5;
  --danger: #dc2626;
  --low: #16a34a;
  --medium: #d97706;
  --high: #dc2626;
  --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; }

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
}

.app {
  max-width: 640px;
  margin: 40px auto;
  padding: 24px;
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

h1 { margin: 0 0 20px; font-size: 1.6rem; }

.task-form { display: flex; gap: 8px; }
.task-form input[type='text'] { flex: 1; min-width: 0; }

input[type='text'], select {
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  cursor: pointer;
  font-size: 0.95rem;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  background: var(--primary);
  color: white;
}

button:hover { filter: brightness(1.1); }

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 8px;
  flex-wrap: wrap;
  gap: 8px;
}

.filters button {
  background: transparent;
  color: var(--muted);
  padding: 6px 12px;
}

.filters button.active {
  background: #eef2ff;
  color: var(--primary);
  font-weight: 600;
}

#counter { color: var(--muted); font-size: 0.9rem; }

.task-list { list-style: none; padding: 0; margin: 0; }

.task {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 10px;
  border-bottom: 1px solid #e5e7eb;
  border-left: 4px solid transparent;
}

.task.priority-low { border-left-color: var(--low); }
.task.priority-medium { border-left-color: var(--medium); }
.task.priority-high { border-left-color: var(--high); }

.task .title { flex: 1; word-break: break-word; }
.task.done .title { text-decoration: line-through; color: var(--muted); }

.task .toggle { width: 18px; height: 18px; }

.task button {
  background: transparent;
  color: var(--muted);
  padding: 4px 8px;
}

.task button[data-action='delete']:hover { color: var(--danger); }

.empty { text-align: center; color: var(--muted); padding: 24px 0; }
.hidden { display: none; }

.link-btn {
  background: none;
  color: var(--muted);
  padding: 12px 0 0;
  text-decoration: underline;
}

@media (max-width: 520px) {
  .app { margin: 0; border-radius: 0; min-height: 100vh; }
  .task-form { flex-wrap: wrap; }
  .task-form input[type='text'] { flex-basis: 100%; }
}
```

### 13.6 Step 4: The JavaScript

We will write `app.js` in sections. Type each section in order.

**Part A: storage and state**

```js
const STORAGE_KEY = 'task-manager:v1';

function loadTasks() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];   // corrupted data: start fresh instead of crashing
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// The state
let tasks = loadTasks();
let filter = 'all';        // 'all' | 'active' | 'done'
```

**Part B: grabbing the elements**

```js
const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const counter = document.querySelector('#counter');
const emptyMessage = document.querySelector('#empty');
const filtersBox = document.querySelector('#filters');
const clearDoneBtn = document.querySelector('#clear-done');
```

**Part C: the actions that change state**

Each action creates a new array instead of changing the old one (`map`, `filter`, spread). This is the safer professional style.

```js
function commit() {
  saveTasks();
  render();
}

function addTask(title, priority) {
  const task = {
    id: crypto.randomUUID(),
    title,
    priority,
    done: false,
    createdAt: Date.now(),
  };
  tasks = [task, ...tasks];
  commit();
}

function toggleTask(id) {
  tasks = tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  commit();
}

function editTask(id, title) {
  tasks = tasks.map((t) => (t.id === id ? { ...t, title } : t));
  commit();
}

function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
  commit();
}

function clearDone() {
  tasks = tasks.filter((t) => !t.done);
  commit();
}

function setFilter(newFilter) {
  filter = newFilter;
  render();
}
```

**Part D: rendering**

```js
function getVisibleTasks() {
  if (filter === 'active') return tasks.filter((t) => !t.done);
  if (filter === 'done') return tasks.filter((t) => t.done);
  return tasks;
}

function createButton(text, action, label) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = text;
  btn.dataset.action = action;
  btn.setAttribute('aria-label', label);
  return btn;
}

function createTaskElement(task) {
  const li = document.createElement('li');
  li.className = `task priority-${task.priority}`;
  li.classList.toggle('done', task.done);
  li.dataset.id = task.id;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'toggle';
  checkbox.checked = task.done;
  checkbox.setAttribute('aria-label', 'Mark as done');

  const title = document.createElement('span');
  title.className = 'title';
  title.textContent = task.title;      // textContent: safe against HTML injection

  li.append(
    checkbox,
    title,
    createButton('Edit', 'edit', 'Edit task'),
    createButton('Delete', 'delete', 'Delete task')
  );

  return li;
}

function render() {
  const visible = getVisibleTasks();

  list.replaceChildren(...visible.map(createTaskElement));

  const activeCount = tasks.filter((t) => !t.done).length;
  counter.textContent = `${activeCount} task${activeCount === 1 ? '' : 's'} left`;

  emptyMessage.classList.toggle('hidden', visible.length > 0);
  clearDoneBtn.classList.toggle('hidden', !tasks.some((t) => t.done));

  for (const btn of filtersBox.querySelectorAll('button')) {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  }
}
```

**Part E: events**

We use one listener for the whole list (event delegation, Chapter 9) because tasks are created dynamically.

```js
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const title = data.get('title').trim();
  const priority = data.get('priority');

  if (!title) return;

  addTask(title, priority);
  form.reset();
  form.elements.priority.value = 'medium';
  input.focus();
});

list.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  const id = button.closest('li').dataset.id;

  if (button.dataset.action === 'delete') {
    deleteTask(id);
  } else if (button.dataset.action === 'edit') {
    const task = tasks.find((t) => t.id === id);
    const newTitle = prompt('Edit task', task.title)?.trim();
    if (newTitle) editTask(id, newTitle);
  }
});

list.addEventListener('change', (event) => {
  if (!event.target.matches('.toggle')) return;
  toggleTask(event.target.closest('li').dataset.id);
});

filtersBox.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (button) setFilter(button.dataset.filter);
});

clearDoneBtn.addEventListener('click', clearDone);

// First draw
render();
```

Open `index.html` with Live Server (modules need HTTP). Add a few tasks, refresh the page, and your tasks are still there.

### 13.7 How it works: a walk-through

1. The page loads. `tasks` is read from localStorage and `render()` draws the list.
2. You submit the form. The `submit` handler stops the reload, reads the values with `FormData`, calls `addTask`.
3. `addTask` creates a new array with the new task first, then calls `commit()`.
4. `commit()` saves to localStorage and calls `render()`, which rebuilds the visible list from scratch.
5. Clicking checkboxes or buttons goes through the single delegated listeners on `list`, which find the task id from the `data-id` of the closest `li`.

The data flows in a circle: **user event, action changes state, render updates screen**.

### 13.8 Testing checklist

- Try adding an empty task and a task with only spaces. Nothing should be added.
- Add a task containing HTML such as `<b>bold</b>`. It must appear as plain text.
- Complete a task, then switch to the Active and Done filters.
- Refresh the browser. Is everything preserved?
- Open DevTools, Application tab, Local Storage, and look at the saved JSON.
- Resize the window to phone width.

### 13.9 Upgrades to practise (pick at least three)

1. **Due dates:** add a date input and show overdue tasks in red.
2. **Inline editing:** replace `prompt` with an input that appears in place when you double-click a title.
3. **Sorting:** a select to sort by priority, creation time or title.
4. **Search box:** filter tasks by text as you type (with debounce).
5. **Drag and drop** reordering with the HTML Drag and Drop API.
6. **Undo delete:** keep the deleted task for 5 seconds with an Undo button.
7. **Categories** (work, personal) with coloured tags.
8. **Export and import** tasks as a JSON file.
9. **Split into modules:** `storage.js`, `state.js`, `ui.js`, `main.js` (see Chapter 11).

### 13.10 What you learned

You can now build interactive front ends from scratch. The same task manager will return in the capstone (Chapter 26), but with a real server, a database and user accounts, so that your tasks are available from any device.

### Exercises

1. Complete at least three upgrades from 13.9.
2. Draw on paper the data flow of your app and compare it with section 13.7.
3. Introduce a deliberate bug (for example, forget `commit()` in `deleteTask`). Find it with DevTools only.
4. Deploy your front end to GitHub Pages or Netlify (both host static files for free). Write down the steps you took; we will repeat them for the server in Chapter 27.

## Chapter 14: Introduction to Node.js

You now know JavaScript well enough to build interactive pages. The next step is the **back end**: code that runs on a server, receives requests, talks to databases and sends responses. In this chapter you meet Node.js, the program that lets JavaScript leave the browser.

### 14.1 What is Node.js?

Browsers contain a **JavaScript engine** that reads and runs your code. Chrome's engine is called **V8**, written in C++. In 2009 a developer named Ryan Dahl took V8 out of the browser, added tools to work with files, networks and the operating system, and called the result **Node.js**.

So Node.js is:

- A **runtime**: a program that runs JavaScript outside the browser.
- Built on V8, so it is fast.
- **Event-driven and non-blocking**: it handles many tasks at the same time without waiting for slow operations (this is the async model from Chapter 10).
- Used for web servers, APIs, command-line tools, build tools, real-time apps (chat), automation scripts and more.

**Why companies choose Node.js**

- One language (JavaScript or TypeScript) for the front end and back end, so teams share knowledge and code.
- Excellent for I/O-heavy applications: many users making requests, reading from databases and calling other services.
- A huge ecosystem: **npm** is the largest software registry in the world, with over two million packages.
- Strong in the job market and used by companies of all sizes.

**Where Node.js is not the best tool:** very heavy CPU work such as video encoding, large-scale scientific computing or machine learning training. (It can still orchestrate such tasks, or use worker threads.)

### 14.2 Browser JavaScript versus Node.js

|  | Browser | Node.js |
| --- | --- | --- |
| Global object | `window` | `globalThis` (also `global`) |
| DOM (`document`, `querySelector`) | Yes | No, there is no page |
| `alert`, `localStorage`, `location` | Yes | No |
| File system (`fs`), operating system, processes | No (blocked for safety) | Yes |
| Network servers (`http`) | No (only client requests with `fetch`) | Yes |
| Module system | ES Modules | ES Modules and CommonJS |
| `fetch`, `URL`, `setTimeout`, `console`, `Promise` | Yes | Yes (in current versions) |
| Environment | Different browsers and versions | You choose the Node.js version on your server |

The language is the same. What changes are the **tools around it** (the APIs).

### 14.3 Checking your installation

```bash
$ node --version
$ npm --version
```

If you want to switch between Node.js versions easily for different projects, install a version manager: **nvm** (Mac and Linux), **nvm-windows**, or **fnm** or **Volta** (all platforms). Then `nvm install --lts` and `nvm use --lts` work. Always prefer the LTS (Long Term Support) release for real projects.

### 14.4 The REPL: Node as a calculator

Type `node` alone to open the **REPL** (Read, Evaluate, Print, Loop), an interactive console.

```bash
$ node
> 2 + 2
4
> const name = 'Node'
undefined
> name.toUpperCase()
'NODE'
> .help
> .exit
```

The REPL is perfect for quickly testing a function or a regular expression. Press Ctrl+C twice, or type `.exit`, to leave.

### 14.5 Running files

```bash
$ node app.js
```

Useful flags:

```bash
$ node --watch app.js       # restart automatically when you save (Node 18.11+)
$ node --env-file=.env app.js   # load environment variables from a file (Node 20.6+)
$ node --inspect app.js     # allow debugging with DevTools or VS Code
```

`--watch` replaces the popular `nodemon` tool for many cases, though you will still see nodemon in most tutorials.

### 14.6 The process object

A global object called `process` describes the running program and lets you interact with it.

```js
console.log(process.version);        // Node version
console.log(process.platform);       // 'win32', 'linux', 'darwin'
console.log(process.cwd());          // the folder you started node from
console.log(process.pid);            // process id
console.log(process.memoryUsage());  // memory in bytes
console.log(process.uptime());       // seconds since the program started
```

**Command-line arguments** with `process.argv`:

```js
// greet.js
const [, , name = 'friend', times = '1'] = process.argv;

for (let i = 0; i < Number(times); i++) {
  console.log(`Hello, ${name}!`);
}
```

```bash
$ node greet.js Asha 3
Hello, Asha!
Hello, Asha!
Hello, Asha!
```

`process.argv[0]` is the path to node, `[1]` is the path to your file, and the rest are your arguments, always strings.

**Environment variables** with `process.env`. These are settings that live outside the code: the port number, database address, secret keys. You will use them constantly (Chapter 24).

```js
const port = process.env.PORT || 3000;
console.log(`Server would listen on ${port}`);
```

```bash
$ PORT=8080 node app.js           # Mac and Linux
$ set PORT=8080 && node app.js    # Windows Command Prompt
$ $env:PORT=8080; node app.js     # Windows PowerShell
```

**Exiting and exit codes:**

```js
if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is missing');
  process.exit(1);              // 0 means success, any other number means failure
}
```

**Reacting to signals** (clean shutdown, used when deploying):

```js
process.on('SIGINT', () => {         // Ctrl+C
  console.log('Closing resources...');
  process.exit(0);
});
```

### 14.7 Reading input and writing output

```js
process.stdout.write('No new line here');
console.log('With a new line');
console.error('This goes to the error stream (stderr)');
```

There are three standard streams: **stdin** (input), **stdout** (normal output) and **stderr** (error output). On servers, logs usually go to stdout and stderr.

For interactive input use `readline`, as you did in Chapter 3. The promise-based version is easier:

```js
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const name = await rl.question('Your name? ');
console.log(`Hello, ${name}`);
rl.close();
```

### 14.8 Modules in Node.js: ESM and CommonJS

Node supports both systems you met in Chapter 7. How does Node decide which one a file uses?

- Files ending in `.mjs` are always ES Modules; `.cjs` are always CommonJS.
- For `.js` files, Node looks at the nearest `package.json`. If it contains `'type': 'module'`, `.js` files are ES Modules. Otherwise they are CommonJS.

This book will use **ES Modules** for new code. Create a project like this:

```bash
$ mkdir hello-node
$ cd hello-node
$ npm init -y
```

Then open `package.json` and add the line `'type': 'module'` (with double quotes, as JSON requires):

```json
{
  "name": "hello-node",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  }
}
```

In ES Modules in Node:

- Use `import` and `export`.
- Local imports need the full file name with extension: `import { add } from './math.js';`.
- Built-in modules are best imported with the `node:` prefix: `import fs from 'node:fs';`.
- `__dirname` and `__filename` do not exist. Use this instead:

```js
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In the newest Node versions you can also use import.meta.dirname and import.meta.filename
```

- Top-level `await` works.

When you read older code you will see CommonJS:

```js
const fs = require('fs');
const { add } = require('./math');
module.exports = { something };
console.log(__dirname);
```

Both styles do the same job. Recognise both; write ESM.

### 14.9 The event loop in Node.js (a little deeper)

In Node.js, slow tasks such as reading files, database queries and network calls are handed to the operating system or to a small pool of background threads (managed by a library called libuv). While they work, Node keeps running other code. When a task finishes, its callback is placed in a queue and the event loop runs it when the call stack is empty.

The golden rule of Node.js: **never block the event loop.** If you run a long calculation or a synchronous heavy operation, every other user of your server waits.

```js
import fs from 'node:fs';

// Blocking: the whole program stops until the file is read
const data = fs.readFileSync('big-file.txt', 'utf8');

// Non-blocking: Node continues while the file is being read
fs.readFile('big-file.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log('File read');
});
console.log('This prints first');
```

On a real server, always use the asynchronous (non-blocking) versions (`fs.promises` or the callback versions). The `Sync` functions are fine in start-up scripts and command-line tools.

Two extra scheduling tools exist: `process.nextTick(fn)` runs before other promise callbacks, and `setImmediate(fn)` runs after the current I/O phase. You rarely need them.

### 14.10 Handling errors at the process level

```js
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
  process.exit(1);     // the program is in an unknown state: log and exit
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled promise rejection:', reason);
  process.exit(1);
});
```

In production, a process manager (PM2 or Docker, Chapter 27) restarts the program after it exits.

### 14.11 A first useful program: a word counter tool

A command-line tool that reads a text file and prints statistics.

```js
// wordcount.js
import fs from 'node:fs/promises';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node wordcount.js <file>');
  process.exit(1);
}

try {
  const text = await fs.readFile(filePath, 'utf8');

  const words = text.toLowerCase().match(/[a-z']+/g) ?? [];
  const counts = new Map();

  for (const word of words) {
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }

  const top = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  console.log(`Lines: ${text.split('\n').length}`);
  console.log(`Words: ${words.length}`);
  console.log(`Unique words: ${counts.size}`);
  console.log('Top 5:');
  console.table(top.map(([word, count]) => ({ word, count })));
} catch (error) {
  console.error(`Could not read ${filePath}: ${error.message}`);
  process.exit(1);
}
```

Create a `story.txt` with some English text and run `node wordcount.js story.txt`. (This uses a **regular expression**, `/[a-z']+/g`, which finds sequences of letters. Regular expressions are a powerful tool for matching text patterns; learn them gradually from MDN.)

### 14.12 Useful built-ins of the modern Node.js

- `fetch`: the same as in the browser, available globally.
- `node:test`: a built-in test runner (Chapter 25 compares it to Jest).
- `crypto.randomUUID()` and `node:crypto` for hashing and tokens.
- `AbortController`, `URL`, `TextEncoder`, `structuredClone`, `performance.now()`.
- `node:readline`, `node:os`, `node:child_process`, `node:worker_threads`.

```js
const start = performance.now();
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
console.log(await res.json());
console.log(`Took ${Math.round(performance.now() - start)} ms`);
```

### 14.13 Common mistakes

- Using `document` or `window` in Node.js (they do not exist). `ReferenceError: document is not defined`.
- Mixing `require` and `import` in one file or project type, giving `Cannot use import statement outside a module` or `require is not defined in ES module scope`. Check `package.json` for `type`.
- Forgetting the `.js` extension in ESM relative imports.
- Running the command from the wrong folder (`Cannot find module`). Check `pwd`.
- Using blocking functions in code that runs for each user request.

### Chapter 14 summary

- Node.js runs JavaScript outside the browser using Chrome's V8 engine; it has no DOM but gives access to files, network and the operating system.
- Use `process.argv`, `process.env` and `process.exit` to interact with the environment.
- Use ES Modules (`'type': 'module'`) for new code and recognise CommonJS in old code.
- Never block the event loop; prefer asynchronous APIs.

### Exercises

1. Write a CLI `temperature.js` that converts `node temperature.js 100 c` to Fahrenheit and `node temperature.js 212 f` to Celsius.
2. Write a script that prints how long it took to run a loop of one million additions.
3. Make the word counter accept a second argument for how many top words to show.
4. Read the environment variable `GREETING` and print it, with a default when missing.
5. Convert a small CommonJS program (two files using `require`) into ES Modules.

## Chapter 15: Node Core Modules and npm

Node.js comes with a toolbox of **core modules** for files, paths, operating system information, events, streams and security. On top of that, **npm** gives you access to more than two million community packages. Together they are what makes Node.js productive. In this chapter you learn both.

All examples assume an ES Modules project (`'type': 'module'` in `package.json`, as set up in Chapter 14).

### 15.1 The path module: working with file paths

Paths are written differently on Windows (`C:\Users\me\file.txt`) and on Mac or Linux (`/home/me/file.txt`). Never build paths by joining strings with slashes. Use `path`.

```js
import path from 'node:path';

console.log(path.join('users', 'asha', 'docs', 'cv.pdf'));   // users/asha/docs/cv.pdf  (uses the right separator)
console.log(path.resolve('data', 'file.txt'));               // absolute path from the current folder
console.log(path.basename('/a/b/photo.jpg'));                // 'photo.jpg'
console.log(path.basename('/a/b/photo.jpg', '.jpg'));        // 'photo'
console.log(path.dirname('/a/b/photo.jpg'));                 // '/a/b'
console.log(path.extname('photo.jpg'));                      // '.jpg'
console.log(path.parse('/a/b/photo.jpg'));                   // { root, dir, base, ext, name }
```

A very common pattern is to build a path relative to the current file, not to where you launched `node`:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(__dirname, 'data', 'users.json');
```

### 15.2 The fs module: reading and writing files

`fs` has three styles: synchronous (`readFileSync`), callbacks (`readFile`) and promises (`fs/promises`). Use the **promises** version with `async` and `await`.

```js
import fs from 'node:fs/promises';

// Write (creates or replaces the file)
await fs.writeFile('notes.txt', 'Line one\n');

// Append
await fs.appendFile('notes.txt', 'Line two\n');

// Read
const text = await fs.readFile('notes.txt', 'utf8');   // without 'utf8' you get a Buffer
console.log(text);

// Folders
await fs.mkdir('output/reports', { recursive: true });   // creates nested folders, no error if it exists
const files = await fs.readdir('output');                // array of names
console.log(files);

// Information about a file
const info = await fs.stat('notes.txt');
console.log(info.size, info.isFile(), info.isDirectory(), info.mtime);

// Rename, copy, delete
await fs.rename('notes.txt', 'notes-old.txt');
await fs.copyFile('notes-old.txt', 'backup.txt');
await fs.rm('backup.txt');
await fs.rm('output', { recursive: true, force: true });   // delete a folder with everything inside
```

**Checking if a file exists.** Avoid checking and then using (a race condition). Try to use it and handle the error:

```js
try {
  const text = await fs.readFile('config.json', 'utf8');
  console.log(JSON.parse(text));
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('File does not exist, using defaults');
  } else {
    throw error;
  }
}
```

Common error codes: `ENOENT` (no such file or folder), `EACCES` (permission denied), `EEXIST` (already exists), `EISDIR` (it is a folder).

**A tiny JSON database.** Many small projects and prototypes store data in a JSON file:

```js
// jsonStore.js
import fs from 'node:fs/promises';

export async function readJson(file, fallback = []) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return fallback;
    throw error;
  }
}

export async function writeJson(file, data) {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
}
```

```js
// usage
import { readJson, writeJson } from './jsonStore.js';

const users = await readJson('users.json');
users.push({ id: Date.now(), name: 'Asha' });
await writeJson('users.json', users);
```

This is fine for learning and tiny tools. For real applications with several users at the same time, use a real database (Chapter 21), because two requests writing to the same file at once can corrupt data.

### 15.3 The os module

```js
import os from 'node:os';

console.log(os.platform());          // 'linux' | 'darwin' | 'win32'
console.log(os.cpus().length);       // number of CPU cores
console.log(os.totalmem() / 1024 ** 3, 'GB total');
console.log(os.freemem() / 1024 ** 3, 'GB free');
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
```

### 15.4 Events: the EventEmitter

Much of Node.js is built on the **observer pattern**: objects emit named events and other code listens. It is the same idea as browser events, but for your own objects.

```js
import { EventEmitter } from 'node:events';

const shop = new EventEmitter();

shop.on('order', (item, qty) => {
  console.log(`Order received: ${qty} x ${item}`);
});

shop.on('order', (item) => {
  console.log(`Sending confirmation email for ${item}`);
});

shop.once('open', () => console.log('Shop opened (only the first time)'));

shop.emit('open');
shop.emit('order', 'Laptop', 2);
```

You can extend it to make your own classes emit events:

```js
class Downloader extends EventEmitter {
  start() {
    this.emit('start');
    setTimeout(() => this.emit('progress', 50), 500);
    setTimeout(() => this.emit('done', { size: 1024 }), 1000);
  }
}

const d = new Downloader();
d.on('start', () => console.log('Started'));
d.on('progress', (p) => console.log(`${p}%`));
d.on('done', (info) => console.log('Finished', info));
d.start();
```

An event named `'error'` is special: if you emit it and nobody listens, Node throws and the program crashes. Always add an `'error'` listener on emitters that can fail.

### 15.5 Buffers and streams

A **Buffer** is a block of raw bytes in memory. Files, network data and images are bytes; text is bytes interpreted as characters.

```js
const buf = Buffer.from('Hello', 'utf8');
console.log(buf);                    // <Buffer 48 65 6c 6c 6f>
console.log(buf.toString('utf8'));   // 'Hello'
console.log(buf.toString('base64')); // 'SGVsbG8='
console.log(Buffer.from('SGVsbG8=', 'base64').toString());   // 'Hello'
```

A **stream** processes data piece by piece instead of loading everything into memory. This matters for large files: copying a 4 GB video should not need 4 GB of RAM.

```js
import fs from 'node:fs';
import { pipeline } from 'node:stream/promises';
import zlib from 'node:zlib';

// Copy a big file with constant memory use
await pipeline(
  fs.createReadStream('big-video.mp4'),
  fs.createWriteStream('copy.mp4')
);

// Compress a file while reading it
await pipeline(
  fs.createReadStream('server.log'),
  zlib.createGzip(),
  fs.createWriteStream('server.log.gz')
);
```

There are four kinds of streams: **readable**, **writable**, **duplex** (both) and **transform** (change data while passing). In web servers, the request is a readable stream and the response is a writable stream, so you can stream a large file directly to a user with `fs.createReadStream(file).pipe(res)`.

### 15.6 The crypto module: hashing, random values and encryption

```js
import crypto from 'node:crypto';

// Random unique id
console.log(crypto.randomUUID());

// Random secure token (e.g. password reset links)
console.log(crypto.randomBytes(32).toString('hex'));

// Hash (a one-way fingerprint of data): useful for checksums, NOT for storing passwords directly
const hash = crypto.createHash('sha256').update('hello').digest('hex');
console.log(hash);

// HMAC: a hash with a secret key, used to sign data
const signature = crypto.createHmac('sha256', 'my-secret').update('payload').digest('hex');
```

For storing user passwords do not use plain SHA hashes. Use a slow password-hashing function such as `bcrypt`, `argon2` or `crypto.scrypt`, as explained in Chapter 22.

### 15.7 util and other handy modules

```js
import util from 'node:util';
import fs from 'node:fs';

// Convert an old callback function into a promise-returning function
const readFileAsync = util.promisify(fs.readFile);
const text = await readFileAsync('notes.txt', 'utf8');

// Print nested objects fully
console.log(util.inspect({ a: { b: { c: { d: 1 } } } }, { depth: null, colors: true }));

// Format strings
console.log(util.format('%s is %d years old', 'Asha', 22));
```

Other core modules you will meet later: `http` and `https` (servers, Chapter 16), `child_process` (run other programs), `worker_threads` (parallel work), `zlib` (compression), `dns`, `net`, `url`, `querystring`, `timers/promises`.

```js
import { setTimeout as sleep } from 'node:timers/promises';
await sleep(1000);        // a ready-made promise-based delay
```

### 15.8 npm: the Node Package Manager

**npm** does three jobs: it is a **website and registry** where packages are published (npmjs.com), a **command-line tool** that downloads them, and a **convention** (the `package.json` file) for describing a project.

**Starting a project**

```bash
$ mkdir my-project && cd my-project
$ npm init -y
```

This creates `package.json`:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  },
  "keywords": [],
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {}
}
```

The important parts:

- `name` and `version`: identity of the project.
- `type`: `module` for ES Modules.
- `scripts`: shortcuts for commands. Run with `npm run dev`, and `npm start` and `npm test` need no `run`.
- `dependencies`: packages your app needs **to run**.
- `devDependencies`: packages needed only **during development** (testing tools, linters).

**Installing packages**

```bash
$ npm install dayjs              # add to dependencies (short: npm i dayjs)
$ npm install -D eslint          # add to devDependencies (-D means --save-dev)
$ npm install express@4          # a specific major version
$ npm install                    # install everything listed in package.json
$ npm uninstall dayjs            # remove
$ npm update                     # update within allowed version ranges
$ npm outdated                   # show packages with newer versions
$ npm ls --depth=0               # list installed top-level packages
```

When you install a package, three things happen:

1. The package and its own dependencies are downloaded into the **`node_modules`** folder. It can become huge; never edit it by hand.
2. The package is listed in `package.json`.
3. Exact versions are recorded in **`package-lock.json`**, so that everyone on the team (and your server) installs exactly the same versions.

**Rules for Git:**

- **Commit** `package.json` and `package-lock.json`.
- **Never commit** `node_modules`. Anyone can recreate it with `npm install`. Add it to a file named `.gitignore`:

```text
node_modules
.env
.DS_Store
```

### 15.9 Using a package

```bash
$ npm install dayjs
```

```js
import dayjs from 'dayjs';

console.log(dayjs().format('DD MMM YYYY, HH:mm'));
console.log(dayjs('2026-12-25').diff(dayjs(), 'day'), 'days until Christmas');
console.log(dayjs().add(7, 'day').format('dddd'));
```

For each package, find its README on npmjs.com or GitHub. It shows how to import and use it.

### 15.10 Semantic versioning

Versions look like `4.18.2` and follow **semver**: `MAJOR.MINOR.PATCH`.

- **PATCH** (4.18.**2**): bug fixes, safe to update.
- **MINOR** (4.**18**.2): new features that do not break old code.
- **MAJOR** (**4**.18.2): breaking changes; read the release notes before upgrading.

In `package.json` you will see prefixes:

| Written | Meaning |
| --- | --- |
| `"^4.18.2"` | Accept updates that do not change the major number (4.x.x, at least 4.18.2). The default |
| `"~4.18.2"` | Accept only patch updates (4.18.x) |
| `"4.18.2"` | Exactly this version |

### 15.11 npm scripts and npx

Scripts are the standard way to define project commands, so everyone, including your hosting service, uses the same ones.

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "node --watch src/server.js",
  "lint": "eslint .",
  "format": "prettier --write .",
  "test": "node --test",
  "clean": "rm -rf dist"
}
```

```bash
$ npm start
$ npm run dev
$ npm test
$ npm run lint
```

**npx** runs a package's command without installing it permanently, and is very handy for project generators:

```bash
$ npx create-vite@latest my-app
$ npx prettier --write .
```

### 15.12 Global packages, pnpm and yarn

`npm install -g nodemon` installs a tool for use from anywhere. Prefer **local** installation plus `npx` or scripts, so the version is stored with the project. Alternatives to npm exist (**pnpm** and **yarn**). They read the same `package.json`, and pnpm is popular for saving disk space and being fast. Everything you learn in this book works with any of them, but we will use npm.

### 15.13 Choosing and trusting packages

Packages are code written by strangers that will run on your computer and your server. Be careful.

Before installing, check:

- **Popularity and activity:** weekly downloads, last publish date, open issues on GitHub.
- **Documentation:** a clear README with examples.
- **Size and number of dependencies:** a tiny task should not pull in hundreds of packages.
- **Is it really needed?** Modern JavaScript and Node.js can do many things that once required a library.
- **Spelling:** attackers publish packages with names nearly identical to popular ones (typosquatting). Double-check the name.

After installing, run:

```bash
$ npm audit
$ npm audit fix
```

This reports known security problems in your dependencies.

### 15.14 Publishing is possible too

Sharing your own package is easy: write the code, add a good `name`, `version`, `main` and README, create a free account on npmjs.com, run `npm login` and `npm publish`. Many developers publish small utilities. You do not need this now, but it is nice to know the door is open.

### 15.15 Practical project: a log analyser CLI

Put the pieces together. A tool that reads a web server log, counts requests per status code and prints a coloured summary.

```bash
$ mkdir log-tool && cd log-tool
$ npm init -y
$ npm install chalk
```

Set `'type': 'module'` in `package.json`. Create `sample.log`:

```text
2026-11-20T10:00:01Z GET /home 200
2026-11-20T10:00:03Z GET /about 200
2026-11-20T10:00:09Z GET /missing 404
2026-11-20T10:01:12Z POST /login 500
2026-11-20T10:01:30Z GET /home 200
```

Create `analyse.js`:

```js
import fs from 'node:fs/promises';
import chalk from 'chalk';

const file = process.argv[2];
if (!file) {
  console.error(chalk.red('Usage: node analyse.js <logfile>'));
  process.exit(1);
}

const text = await fs.readFile(file, 'utf8');
const lines = text.split('\n').filter(Boolean);

const byStatus = {};
const byPath = {};

for (const line of lines) {
  const [time, method, path, status] = line.split(' ');
  byStatus[status] = (byStatus[status] ?? 0) + 1;
  byPath[path] = (byPath[path] ?? 0) + 1;
}

console.log(chalk.bold(`Total requests: ${lines.length}`));

for (const [status, count] of Object.entries(byStatus)) {
  const color = status.startsWith('2') ? chalk.green : status.startsWith('4') ? chalk.yellow : chalk.red;
  console.log(color(`${status}: ${count}`));
}

const busiest = Object.entries(byPath).sort((a, b) => b[1] - a[1])[0];
console.log(`Busiest path: ${busiest[0]} (${busiest[1]} requests)`);
```

Run `node analyse.js sample.log`.

### 15.16 Common mistakes

- Committing `node_modules` or `.env` to Git.
- Using `fs.readFileSync` inside request handlers on a busy server.
- Building paths with string concatenation, which breaks on Windows.
- Installing a package globally and forgetting that your teammates or server do not have it.
- Ignoring `npm audit` warnings forever, or running `npm audit fix --force` without understanding that it can break your app.
- Deleting `package-lock.json` casually.

### Chapter 15 summary

- `path` for paths, `fs/promises` for files, `os` for system info, `events` for custom events, `stream` for large data, `crypto` for security helpers.
- npm installs packages into `node_modules`, tracks them in `package.json` and locks versions in `package-lock.json`.
- Use scripts for commands, semver to understand versions, and `npm audit` to check security.
- Never commit `node_modules` or secrets.

### Exercises

1. Write a script that lists all files in a folder with their sizes, sorted from largest to smallest.
2. Build a note-taking CLI: `node notes.js add 'Buy milk'`, `node notes.js list` and `node notes.js remove 1`, saving data in a JSON file.
3. Create an `EventEmitter` based `Timer` class that emits `tick` every second and `done` after N seconds.
4. Install `dayjs` and write a script that prints the number of days until your next birthday.
5. Use streams to copy a large file and compare memory use with `readFile` plus `writeFile`.
6. Add `start`, `dev` and `lint` scripts to a project and run each.

## Chapter 16: Building a Web Server with Plain Node.js

Before using Express, you will build a server with only what Node.js provides. This may feel slow, but it is the most valuable exercise in the book: after it, Express will not look like magic. You will understand exactly what it does for you and why people use it.

### 16.1 Your first server

Create a folder `plain-server`, run `npm init -y`, set `'type': 'module'`, and create `server.js`:

```js
import http from 'node:http';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('Hello from my first server!');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Run `node server.js` and open `http://localhost:3000` in your browser. You will see the message. Congratulations: you are running a web server!

**What happened**

- `http.createServer(handler)` creates a server. The handler function runs **for every request** that arrives.
- `req` (request) is an object describing what the client sent: method, URL, headers, body.
- `res` (response) is an object you use to send the answer: status, headers, body.
- `res.end(...)` finishes the response. If you forget it, the browser waits forever.
- `server.listen(port)` starts waiting for connections. **localhost** is your own computer; **3000** is the **port**, like a numbered door. Only one program can use a port at a time. If you see `EADDRINUSE`, another program already uses it: stop it or choose another port.

Stop the server with Ctrl+C. After changing the code you must restart, or run it with `node --watch server.js`.

### 16.2 Looking at the request

```js
import http from 'node:http';

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  console.log(req.headers['user-agent']);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ method: req.method, url: req.url }));
});

server.listen(3000);
```

Visit `http://localhost:3000/products?id=5` and look at the terminal. `req.url` contains `/products?id=5`: the path **and** the query string together. Use the `URL` class to split them:

```js
const url = new URL(req.url, `http://${req.headers.host}`);
console.log(url.pathname);                  // '/products'
console.log(url.searchParams.get('id'));    // '5'
```

Browsers also request `/favicon.ico` automatically, so you will often see two requests in the log.

### 16.3 Sending different kinds of responses

**HTML**

```js
res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
res.end('<h1>Welcome</h1><p>This is HTML.</p>');
```

**JSON**

```js
res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
res.end(JSON.stringify({ name: 'Asha', skills: ['JS', 'Node'] }));
```

**Redirect**

```js
res.writeHead(301, { Location: '/new-page' });
res.end();
```

**Errors**

```js
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Page not found');
```

The **Content-Type** header tells the browser how to interpret the body. If you send HTML with `text/plain`, the browser shows the tags as text.

Status codes you should use correctly: `200` OK, `201` Created, `204` No Content, `301` and `302` redirects, `400` Bad Request, `401` Unauthorized (not logged in), `403` Forbidden, `404` Not Found, `500` Internal Server Error.

### 16.4 Routing by hand

**Routing** means choosing the code to run based on the method and the path.

```js
import http from 'node:http';

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'GET' && pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>Home</h1><a href="/about">About</a>');
  }

  if (req.method === 'GET' && pathname === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end('<h1>About</h1><a href="/">Home</a>');
  }

  if (req.method === 'GET' && pathname === '/api/time') {
    return sendJson(res, 200, { now: new Date().toISOString() });
  }

  sendJson(res, 404, { error: 'Not found' });
});

server.listen(3000, () => console.log('http://localhost:3000'));
```

Every new page means another `if`. That already looks messy, and we have not handled URL parameters or POST bodies yet.

### 16.5 Reading the request body

When a client sends data with POST, PUT or PATCH, the body arrives as a **stream** of chunks. You must collect them.

```js
function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function readJson(req) {
  const raw = await readBody(req);
  if (!raw) return {};
  return JSON.parse(raw);        // throws for invalid JSON: handle it!
}
```

In a production server you should also limit the maximum size of the body, so that a client cannot send gigabytes. (Express libraries do this for you.)

### 16.6 A mini REST API: a todo list in memory

Now combine everything. This API keeps todos in an array (they disappear when the server restarts, which is fine for learning).

```js
// api.js
import http from 'node:http';

let todos = [
  { id: 1, title: 'Learn Node.js', done: false },
  { id: 2, title: 'Build an API', done: false },
];
let nextId = 3;

function sendJson(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(data === undefined ? '' : JSON.stringify(data));
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {            // protect against huge bodies
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const { pathname } = new URL(req.url, `http://${req.headers.host}`);
    const parts = pathname.split('/').filter(Boolean);     // '/api/todos/2' -> ['api','todos','2']

    if (parts[0] !== 'api' || parts[1] !== 'todos') {
      return sendJson(res, 404, { error: 'Not found' });
    }

    const id = parts[2] ? Number(parts[2]) : null;

    // GET /api/todos
    if (req.method === 'GET' && id === null) {
      return sendJson(res, 200, todos);
    }

    // GET /api/todos/:id
    if (req.method === 'GET') {
      const todo = todos.find((t) => t.id === id);
      return todo ? sendJson(res, 200, todo) : sendJson(res, 404, { error: 'Todo not found' });
    }

    // POST /api/todos
    if (req.method === 'POST' && id === null) {
      const body = await readJson(req);
      if (typeof body.title !== 'string' || !body.title.trim()) {
        return sendJson(res, 400, { error: 'title is required' });
      }
      const todo = { id: nextId++, title: body.title.trim(), done: false };
      todos.push(todo);
      return sendJson(res, 201, todo);
    }

    // PATCH /api/todos/:id
    if (req.method === 'PATCH' && id !== null) {
      const todo = todos.find((t) => t.id === id);
      if (!todo) return sendJson(res, 404, { error: 'Todo not found' });
      const body = await readJson(req);
      if (typeof body.title === 'string') todo.title = body.title.trim();
      if (typeof body.done === 'boolean') todo.done = body.done;
      return sendJson(res, 200, todo);
    }

    // DELETE /api/todos/:id
    if (req.method === 'DELETE' && id !== null) {
      const before = todos.length;
      todos = todos.filter((t) => t.id !== id);
      return todos.length < before
        ? sendJson(res, 204)
        : sendJson(res, 404, { error: 'Todo not found' });
    }

    sendJson(res, 405, { error: 'Method not allowed' });
  } catch (error) {
    sendJson(res, 400, { error: error.message });
  }
});

server.listen(3000, () => console.log('API on http://localhost:3000/api/todos'));
```

**Testing your API.** A browser can only easily send GET requests by typing a URL. To test POST, PATCH and DELETE use one of these:

1. **Thunder Client** (VS Code extension): click New Request, choose the method, enter the URL, put JSON in the Body tab, and press Send.
2. **curl** in the terminal:

```bash
$ curl http://localhost:3000/api/todos
$ curl -X POST http://localhost:3000/api/todos -H 'Content-Type: application/json' -d '{"title":"Write tests"}'
$ curl -X PATCH http://localhost:3000/api/todos/1 -H 'Content-Type: application/json' -d '{"done":true}'
$ curl -X DELETE http://localhost:3000/api/todos/2
```

(On Windows PowerShell, the quoting of JSON is different; Thunder Client or Postman is easier.)

3. **Postman**, a popular desktop app for testing APIs.

### 16.7 Serving static files by hand

Websites need to send HTML, CSS, images and JavaScript files. Doing it yourself shows how much work Express saves:

```js
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  const requested = pathname === '/' ? '/index.html' : pathname;

  // SECURITY: stop paths like /../../secret.txt from escaping the public folder
  const filePath = path.join(publicDir, path.normalize(requested));
  if (!filePath.startsWith(publicDir)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  try {
    const content = await fs.readFile(filePath);
    const type = mimeTypes[path.extname(filePath)] ?? 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': type });
    res.end(content);
  } catch (error) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('File not found');
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));
```

Put your Chapter 13 task manager files inside a folder named `public` next to `server.js`, and your app is now served by your own server. Notice the security check: the **path traversal** attack (`/../server.js`) tries to read files outside the public folder. Security is easy to forget when you write everything by hand.

### 16.8 What the plain approach lacks

After this exercise you can list what a real application needs that plain `http` does not give you:

| Need | By hand |
| --- | --- |
| Many routes with URL parameters (`/users/:id`) | Manual splitting and `if` chains |
| Reading JSON, form data and file uploads | Write your own body readers and parsers |
| Static files | Write your own, with security checks and caching |
| Cookies and sessions | Parse and sign them yourself |
| Reusable steps (logging, authentication) | Repeat code in every route |
| Central error handling | Try and catch everywhere |
| Templates (HTML pages with data) | Join strings by hand |

These are exactly the problems **Express.js** solves, with very little code and in a style the whole Node.js community knows.

### 16.9 HTTPS, HTTP/2 and real servers (just the idea)

On the real internet, traffic is encrypted with HTTPS. You will almost never configure HTTPS inside your Node.js code. Instead, your hosting platform or a **reverse proxy** (a front server such as Nginx or Caddy, or a cloud load balancer) handles HTTPS and forwards plain HTTP requests to your Node.js app on a local port. We cover this in Chapter 27.

### 16.10 Common mistakes

- Forgetting `res.end()`, so requests hang.
- Sending two responses to one request (`Cannot set headers after they are sent`). Use `return` after sending.
- Forgetting the `Content-Type` header.
- Not handling invalid JSON in the body (the server crashes).
- Trusting the URL to build file paths without checking (path traversal).
- Starting the server twice on the same port.

### Chapter 16 summary

- `http.createServer` runs your handler for every request; `req` describes it and `res` sends the answer.
- Routing is choosing code by method and path; bodies arrive as streams and must be collected and parsed.
- You built a small JSON REST API and a static file server, and saw how repetitive and risky it is by hand.
- Express.js exists to remove this repetition.

### Exercises

1. Add a route `GET /api/todos?done=true` that filters todos by the query string.
2. Add validation: titles longer than 100 characters return 400.
3. Write a route `GET /api/hello/:name` returning a greeting, parsing the name from the path by hand.
4. Make the todo API save to a `todos.json` file so data survives restarts.
5. Log each request with the time, method, URL, status code and how long it took (milliseconds).

## Chapter 17: Express.js: First Steps

Express is a small, fast framework for building web servers and APIs with Node.js. It is the most widely used Node.js web framework and the base for many others. In this chapter you build your first Express applications and learn the core ideas: routes, requests and responses.

### 17.1 What is Express?

Express sits on top of Node's `http` module and adds the missing pieces you saw in Chapter 16: easy routing, URL parameters, body parsing, static files, cookies, templates and middleware. It does not force a structure on you; it gives you simple building blocks.

**A note on versions.** Express **5** is the current major version. If you follow old tutorials you will see Express 4 code. Almost everything is the same. Where the two differ in a way that matters, this book points it out. Install without a version number to get the current release:

```bash
$ npm install express
```

### 17.2 Setting up the project

```bash
$ mkdir express-intro && cd express-intro
$ npm init -y
$ npm install express
```

Open `package.json`. Add `'type': 'module'` and these scripts:

```json
{
  "name": "express-intro",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

Create a `.gitignore` containing `node_modules` and `.env`.

### 17.3 Hello, Express

Create `server.js`:

```js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

Run `npm run dev` and open `http://localhost:3000`. Compare with Chapter 16: the same result with much less code.

Line by line:

1. `express()` creates the **app**, an object that represents your server.
2. `app.get(path, handler)` says: when a **GET** request arrives for this **path**, run this **handler**.
3. The handler receives `req` and `res`, which are **extended versions** of Node's own request and response objects, with many extra helpers.
4. `res.send()` sends a response and chooses the correct Content-Type automatically.
5. `app.listen(PORT, callback)` starts the server.

### 17.4 Routes

A **route** is the combination of an HTTP method, a path and a handler.

```js
app.get('/', (req, res) => res.send('Home page'));
app.get('/about', (req, res) => res.send('About page'));
app.post('/contact', (req, res) => res.send('Form received'));
app.put('/profile', (req, res) => res.send('Profile replaced'));
app.patch('/profile', (req, res) => res.send('Profile updated'));
app.delete('/profile', (req, res) => res.send('Profile deleted'));
app.all('/secret', (req, res) => res.send('Any method works here'));
```

Express checks routes **in the order you write them**. The first route that matches and sends a response wins.

**What each method means (REST conventions)**

| Method | Meaning | Example |
| --- | --- | --- |
| `GET` | Read data, no changes | Get the list of products |
| `POST` | Create something new | Register a user |
| `PUT` | Replace something completely | Replace a profile |
| `PATCH` | Change part of something | Change only the email |
| `DELETE` | Remove something | Delete a comment |

### 17.5 Route parameters and query strings

**Route parameters** are variable parts of the path, written with a colon:

```js
app.get('/users/:id', (req, res) => {
  res.send(`User with id ${req.params.id}`);
});

app.get('/posts/:year/:month/:slug', (req, res) => {
  const { year, month, slug } = req.params;
  res.json({ year, month, slug });
});
```

Visiting `/users/42` gives `req.params.id === '42'` (always a string).

**Query strings** come after the question mark: `/search?q=shoes&page=2`.

```js
app.get('/search', (req, res) => {
  const { q = '', page = '1' } = req.query;
  res.json({ search: q, page: Number(page) });
});
```

Use **params** to identify a resource (`/users/42`) and **query strings** for optional filters, sorting and pagination (`/users?role=admin&sort=name`).

**Optional segments and wildcard patterns.** In Express 5 the syntax for patterns is stricter than in Express 4. For a catch-all use a named wildcard:

```js
app.get('/files/*filepath', (req, res) => {
  res.json({ path: req.params.filepath });   // an array of segments in Express 5
});

app.get('/users{/:id}', (req, res) => {       // optional segment in Express 5
  res.send(req.params.id ?? 'all users');
});
```

(Older code used `'*'` and `'/users/:id?'`. If an old tutorial throws a path error on Express 5, this is the reason.)

### 17.6 The request object (req)

| Property | What it holds |
| --- | --- |
| `req.params` | Route parameters (`/users/:id`) |
| `req.query` | Query string values |
| `req.body` | Parsed body (needs a body-parsing middleware; see 17.8) |
| `req.headers` / `req.get('Name')` | Request headers |
| `req.method` | `'GET'`, `'POST'`... |
| `req.path`, `req.originalUrl`, `req.url` | Path variants |
| `req.ip` | Client address |
| `req.cookies` | Cookies (needs `cookie-parser`) |
| `req.protocol`, `req.hostname`, `req.secure` | Protocol and host information |

```js
app.get('/debug', (req, res) => {
  res.json({
    method: req.method,
    path: req.path,
    query: req.query,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
  });
});
```

### 17.7 The response object (res)

| Method | What it does |
| --- | --- |
| `res.send(data)` | Sends text, HTML, a buffer, or an object (as JSON) |
| `res.json(object)` | Sends JSON with the right header |
| `res.status(code)` | Sets the status code; chainable: `res.status(404).json({...})` |
| `res.sendStatus(code)` | Sets the status and sends its standard text, e.g. `204` |
| `res.redirect(url)` | Redirects the browser (302 by default; `res.redirect(301, url)`) |
| `res.sendFile(absolutePath)` | Sends a file |
| `res.download(path)` | Prompts the user to download a file |
| `res.render(view, data)` | Renders a template (Chapter 19) |
| `res.set(name, value)` | Sets a header |
| `res.cookie(name, value, options)` | Sets a cookie |
| `res.type('html')` | Sets the Content-Type |
| `res.end()` | Ends without a body |

```js
app.get('/api/user', (req, res) => {
  res.status(200).json({ id: 1, name: 'Asha' });
});

app.get('/old-page', (req, res) => {
  res.redirect(301, '/new-page');
});

app.get('/missing', (req, res) => {
  res.status(404).send('Sorry, we could not find that.');
});
```

Remember: send **one** response per request. After `res.send`, `res.json`, `res.redirect` or `res.end` the request is finished. Use `return` if code could continue running:

```js
app.get('/greet', (req, res) => {
  if (!req.query.name) {
    return res.status(400).json({ error: 'name is required' });   // return stops here
  }
  res.json({ message: `Hello ${req.query.name}` });
});
```

### 17.8 Reading JSON and form data from the body

By default Express does not parse the body. Add the built-in **middleware** (more on middleware in the next chapter):

```js
app.use(express.json());                          // for Content-Type: application/json
app.use(express.urlencoded({ extended: true }));  // for HTML form posts

app.post('/api/messages', (req, res) => {
  const { name, text } = req.body ?? {};

  if (!name || !text) {
    return res.status(400).json({ error: 'name and text are required' });
  }

  res.status(201).json({ id: Date.now(), name, text });
});
```

Place these `app.use(...)` lines **before** your routes. In Express 5, `req.body` is `undefined` when no parser handled the request, so `req.body ?? {}` is a good habit.

### 17.9 The Todo API again, now with Express

Compare this with the plain `http` version from Chapter 16.

```js
import express from 'express';

const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: 'Learn Express', done: false },
  { id: 2, title: 'Build an API', done: false },
];
let nextId = 3;

// List, with an optional filter
app.get('/api/todos', (req, res) => {
  let result = todos;
  if (req.query.done !== undefined) {
    result = result.filter((t) => String(t.done) === req.query.done);
  }
  res.json(result);
});

// Read one
app.get('/api/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });
  res.json(todo);
});

// Create
app.post('/api/todos', (req, res) => {
  const title = req.body?.title;
  if (typeof title !== 'string' || !title.trim()) {
    return res.status(400).json({ error: 'title is required' });
  }
  const todo = { id: nextId++, title: title.trim(), done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

// Update
app.patch('/api/todos/:id', (req, res) => {
  const todo = todos.find((t) => t.id === Number(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  const { title, done } = req.body ?? {};
  if (typeof title === 'string') todo.title = title.trim();
  if (typeof done === 'boolean') todo.done = done;

  res.json(todo);
});

// Delete
app.delete('/api/todos/:id', (req, res) => {
  const before = todos.length;
  todos = todos.filter((t) => t.id !== Number(req.params.id));
  if (todos.length === before) return res.status(404).json({ error: 'Todo not found' });
  res.sendStatus(204);
});

// 404 for everything else
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
```

About 60 lines instead of about 110, with no manual URL splitting, body reading or JSON headers. Test it with Thunder Client or curl exactly as in Chapter 16.

### 17.10 Serving static files

One line serves a whole folder of HTML, CSS, JS and images:

```js
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')));
```

If you put `index.html`, `style.css` and `app.js` inside the `public` folder, they are available at `/`, `/style.css` and `/app.js`. Notice that the folder name `public` is not part of the URL. `express.static` handles content types, caching headers, security against path traversal and more. Try serving your Chapter 13 task manager this way.

To send a specific file (for example a single page application's `index.html`) use `res.sendFile`:

```js
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});
```

### 17.11 A tiny error and 404 setup

```js
// ...all your routes above...

// 404 handler: reached only if no earlier route answered
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handler: has FOUR parameters, which is how Express knows it is an error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});
```

In Express 5, if an `async` route handler throws or its promise rejects, the error is passed to the error handler automatically:

```js
app.get('/boom', async (req, res) => {
  throw new Error('This is caught by the error handler');
});
```

(In Express 4 you needed `try...catch` and `next(err)`, or a wrapper package.) We explore error handling fully in Chapter 23.

### 17.12 Recommended folder structure to start

```text
express-intro/
  package.json
  server.js            starts the server
  public/              static files (CSS, client JS, images)
  .gitignore
```

In the next chapters the structure grows into folders for routes, controllers, models and middleware.

### 17.13 Common mistakes

- Forgetting `app.use(express.json())` and getting an undefined or empty `req.body`.
- Putting the 404 handler before the routes. Order matters.
- Sending two responses (forgetting `return`).
- Forgetting to restart the server after changes (use `npm run dev`).
- Using `req.params.id` as a number without converting it; it is a string.
- Testing a POST route by typing the URL in a browser (which sends GET).
- Not returning proper status codes: always match the code to the situation.

### Chapter 17 summary

- Express wraps Node's `http` with simple routing, request and response helpers.
- A route is a method, a path and a handler `(req, res) => {...}`.
- `req.params`, `req.query` and `req.body` carry the input; `res.json`, `res.status`, `res.send` and others produce the output.
- `express.json()` and `express.urlencoded()` parse bodies; `express.static()` serves files.
- A 404 handler and an error handler (four parameters) finish the setup.

### Exercises

1. Create routes for `/`, `/about` and `/contact` returning different HTML snippets.
2. Build `GET /api/greet/:name?lang=en|hi|es` that returns a greeting in the chosen language.
3. Build a `/api/calc/:operation` route that takes `a` and `b` from the query string, for add, subtract, multiply and divide, handling division by zero with status 400.
4. Add a `notes` API (GET all, GET one, POST, DELETE) storing notes in memory.
5. Serve your Chapter 13 task manager from a `public` folder using `express.static`.
6. Add a custom 404 page and an error handler that logs the error and returns JSON.

## Chapter 18: Routing and Middleware

Middleware is the most important idea in Express. Once you understand it, everything else (body parsing, logging, authentication, validation, error handling, security headers) is just middleware. In this chapter you learn how it works, how to write your own, and how to organise routes with `express.Router`.

### 18.1 What is middleware?

Imagine a request travelling through an airport: check-in, security, passport control, boarding gate. Each station can look at the traveller, change something, stop the journey, or let the traveller continue. A request in Express passes through a **pipeline** of functions called **middleware**.

A middleware function has three parameters:

```js
function myMiddleware(req, res, next) {
  // do something with req or res
  next();     // pass control to the next function in the pipeline
}
```

- It can **read or change** `req` and `res` (for example add `req.user`).
- It can **end** the request by sending a response (for example, 401 if the user is not logged in).
- Or it must call **`next()`** to continue to the next middleware or route. If it neither responds nor calls `next()`, the request hangs forever.

Even your route handlers are just the final middleware in the chain.

### 18.2 Your first middleware: a logger

```js
import express from 'express';

const app = express();

app.use((req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {                       // runs when the response has been sent
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode} ${ms}ms`);
  });

  next();
});

app.get('/', (req, res) => res.send('Home'));
app.get('/slow', async (req, res) => {
  await new Promise((r) => setTimeout(r, 500));
  res.send('Slow page');
});

app.listen(3000);
```

Visit the pages and watch the terminal print lines like `GET /slow 200 503ms`.

### 18.3 The three levels where middleware lives

```js
// 1. Application-level: runs for EVERY request (below this line)
app.use(logger);

// 2. Path-level: runs only for URLs starting with /admin
app.use('/admin', requireAdmin);

// 3. Route-level: runs only for this one route, before its handler
app.get('/profile', requireLogin, (req, res) => {
  res.json(req.user);
});

// Several in a row
app.post('/posts', requireLogin, validatePost, createPost);
```

**Order matters.** Express runs middleware and routes from top to bottom. A middleware placed after a route will not run for that route.

```js
app.get('/early', (req, res) => res.send('I never see the logger'));
app.use(logger);                 // too late for /early
app.get('/late', (req, res) => res.send('I do see the logger'));
```

A typical order for an application:

1. Security and utility middleware (`helmet`, `cors`, logging)
2. Body parsers (`express.json`)
3. Static files
4. Your routes
5. The 404 handler
6. The error handler (always last)

### 18.4 Built-in and popular middleware

| Middleware | Purpose |
| --- | --- |
| `express.json()` | Parse JSON bodies |
| `express.urlencoded({ extended: true })` | Parse HTML form bodies |
| `express.static(folder)` | Serve static files |
| `morgan` (npm) | Professional request logger |
| `cors` (npm) | Allow other websites to call your API |
| `helmet` (npm) | Set safe HTTP headers |
| `cookie-parser` (npm) | Parse cookies into `req.cookies` |
| `compression` (npm) | Compress responses |
| `express-rate-limit` (npm) | Limit repeated requests |
| `multer` (npm) | Handle file uploads |
| `express-session` (npm) | Sessions |

Installing and using a few of them:

```bash
$ npm install morgan cors helmet compression cookie-parser
```

```js
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan('dev'));        // colourful one-line logs while developing
app.use(cookieParser());
app.use(express.json());
```

Each of these is a function that **returns** a middleware function. That is why you call them with brackets: `helmet()`.

### 18.5 Writing useful custom middleware

**1. Add data to the request: a request id**

```js
import crypto from 'node:crypto';

function requestId(req, res, next) {
  req.id = crypto.randomUUID();
  res.setHeader('X-Request-Id', req.id);
  next();
}

app.use(requestId);
```

**2. Protect routes: a simple API key check**

```js
function requireApiKey(req, res, next) {
  const key = req.get('x-api-key');

  if (key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid or missing API key' });   // stop here
  }

  next();
}

app.use('/api', requireApiKey);
```

**3. A configurable middleware (a function that returns a middleware)**

```js
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'You are not allowed to do this' });
    }
    next();
  };
}

app.delete('/api/users/:id', requireLogin, requireRole('admin'), deleteUser);
```

**4. A simple rate limiter (to understand the idea; use `express-rate-limit` in real projects)**

```js
function simpleRateLimit({ windowMs = 60_000, max = 30 } = {}) {
  const hits = new Map();

  return (req, res, next) => {
    const now = Date.now();
    const record = hits.get(req.ip) ?? { count: 0, start: now };

    if (now - record.start > windowMs) {
      record.count = 0;
      record.start = now;
    }

    record.count++;
    hits.set(req.ip, record);

    if (record.count > max) {
      return res.status(429).json({ error: 'Too many requests, slow down.' });
    }
    next();
  };
}

app.use('/api', simpleRateLimit({ max: 100 }));
```

**5. A validation middleware**

```js
function validateTodo(req, res, next) {
  const { title } = req.body ?? {};

  if (typeof title !== 'string' || title.trim().length < 1 || title.length > 100) {
    return res.status(400).json({ error: 'title must be 1 to 100 characters' });
  }

  req.body.title = title.trim();
  next();
}

app.post('/api/todos', validateTodo, createTodo);
```

### 18.6 Middleware and async code

In Express 5, async middleware works safely: if it throws or the promise rejects, Express forwards the error to the error handler.

```js
async function loadUser(req, res, next) {
  const user = await db.findUser(req.params.id);   // if this fails, the error handler runs
  if (!user) return res.status(404).json({ error: 'User not found' });
  req.user = user;
  next();
}
```

(In Express 4, you wrapped async code in `try...catch` and called `next(error)` yourself.)

### 18.7 Organising routes with express.Router

When an app grows, putting all routes in `server.js` becomes unmanageable. A **Router** is a mini-application that groups related routes. You mount it under a path prefix.

```text
project/
  server.js
  src/
    app.js
    routes/
      index.js
      users.js
      posts.js
```

**`src/routes/users.js`**

```js
import { Router } from 'express';

const router = Router();

const users = [
  { id: 1, name: 'Asha' },
  { id: 2, name: 'Ravi' },
];

// Paths here are RELATIVE to where the router is mounted
router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

router.post('/', (req, res) => {
  const user = { id: users.length + 1, name: req.body?.name };
  users.push(user);
  res.status(201).json(user);
});

export default router;
```

**`src/routes/index.js`** combines all routers:

```js
import { Router } from 'express';
import usersRouter from './users.js';
import postsRouter from './posts.js';

const router = Router();

router.use('/users', usersRouter);
router.use('/posts', postsRouter);

export default router;
```

**`src/app.js`** builds the application (without starting it, which makes testing easier):

```js
import express from 'express';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use('/api', routes);          // final URLs: /api/users, /api/users/1, /api/posts

app.use((req, res) => res.status(404).json({ error: 'Route not found' }));

export default app;
```

**`server.js`** only starts the server:

```js
import app from './src/app.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
```

Separating `app` from `listen` is a professional habit: tests can import the app without opening a network port (Chapter 25).

**Router-level middleware.** A router can have its own middleware that applies to all its routes:

```js
router.use(requireLogin);               // everything below needs a login
router.get('/me', (req, res) => res.json(req.user));
```

**Chaining routes for the same path:**

```js
router
  .route('/:id')
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
```

**Route parameter middleware** (runs whenever a path has that parameter):

```js
router.param('id', (req, res, next, id) => {
  if (!Number.isInteger(Number(id))) {
    return res.status(400).json({ error: 'id must be a number' });
  }
  next();
});
```

### 18.8 Controllers: separating routes from logic

As handlers grow, move them into **controller** functions. Routes become a short, readable list.

**`src/controllers/userController.js`**

```js
const users = [{ id: 1, name: 'Asha' }];

export function listUsers(req, res) {
  res.json(users);
}

export function getUser(req, res) {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
}

export function createUser(req, res) {
  const user = { id: Date.now(), name: req.body.name };
  users.push(user);
  res.status(201).json(user);
}
```

**`src/routes/users.js`**

```js
import { Router } from 'express';
import { listUsers, getUser, createUser } from '../controllers/userController.js';
import { validateUser } from '../middleware/validate.js';

const router = Router();

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', validateUser, createUser);

export default router;
```

In Chapter 20 you will see the full structure: routes, controllers, services and models.

### 18.9 Calling next with an error, and skipping

```js
app.get('/risky', (req, res, next) => {
  const error = new Error('Something went wrong');
  error.status = 500;
  next(error);            // skips all normal middleware, jumps to the error handler
});

// Skip the rest of THIS route's handlers and go to the next matching route
app.get('/maybe', (req, res, next) => {
  if (req.query.skip) return next('route');
  res.send('First handler');
});
app.get('/maybe', (req, res) => res.send('Second route'));
```

### 18.10 Practice project: a small blog API

Combine the chapter: a blog API with routers, middleware and a logger.

```text
blog-api/
  server.js
  src/
    app.js
    middleware/
      logger.js
      validate.js
      notFound.js
      errorHandler.js
    routes/
      index.js
      posts.js
    controllers/
      postController.js
    data/
      posts.js          (an in-memory array for now)
```

Requirements:

- `GET /api/posts` with optional `?tag=` filter and `?page=&limit=` pagination.
- `GET /api/posts/:id`, `POST /api/posts`, `PATCH /api/posts/:id`, `DELETE /api/posts/:id`.
- `POST` and `PATCH` use a validation middleware (title 3 to 120 characters, body required).
- All requests are logged with method, URL, status and duration.
- Unknown routes return a JSON 404; errors return a JSON 500 with no stack trace.

Pagination example for your controller:

```js
export function listPosts(req, res) {
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));

  let result = posts;
  if (req.query.tag) result = result.filter((p) => p.tags.includes(req.query.tag));

  const total = result.length;
  const items = result.slice((page - 1) * limit, page * limit);

  res.json({ page, limit, total, pages: Math.ceil(total / limit), items });
}
```

### 18.11 Common mistakes

- Forgetting to call `next()`, so the request hangs.
- Calling `next()` **and** sending a response, causing 'headers already sent' errors. After you respond, `return`.
- Placing middleware after the routes it should protect.
- Registering `express.json()` after the routes.
- Writing the error handler with three parameters instead of four, so Express treats it as normal middleware.
- Defining a router but forgetting to export or mount it.
- Putting too much business logic directly in routes.

### Chapter 18 summary

- Middleware are functions `(req, res, next)` that form a pipeline; call `next()` to continue or respond to stop.
- Order matters: security, parsers, static, routes, 404, error handler.
- Use ready-made middleware for logging, CORS, security headers and compression, and write your own for authentication, roles and validation.
- `express.Router` groups routes; controllers hold the handler logic; separate `app` from `listen`.

### Exercises

1. Write a middleware that adds `req.startTime` and logs the duration after the response finishes.
2. Write `requireJson` middleware that returns 415 (Unsupported Media Type) when a POST does not use `application/json`.
3. Split the Todo API from Chapter 17 into routes and controllers.
4. Write a middleware that blocks requests outside business hours for `/admin` routes (with a configurable time range).
5. Build the blog API of 18.10 fully, including pagination.

## Chapter 19: Templates, Static Files and Forms

So far your server sent plain text and JSON. Real websites send full HTML pages that change depending on the data: a list of products, a user's name, an error message. A **template engine** lets you write HTML with placeholders that Express fills with data on the server. This is called **server-side rendering (SSR)**. In this chapter you build real pages, handle HTML forms correctly, and show messages to users.

(Later, in Book 2, you will see Next.js, which does server-side rendering with React components. Understanding it here, with the simplest tools, will make Next.js much easier.)

### 19.1 Two ways to build a website

| Approach | How it works | Typical use |
| --- | --- | --- |
| **Server-rendered pages** | The server builds the final HTML for each request and sends it | Blogs, shops, company sites, dashboards; good for SEO and simple to build |
| **API plus front-end app** | The server sends JSON; JavaScript in the browser builds the page | Highly interactive apps; React, Vue |

Many real products mix both. We start with server-rendered pages because they are the quickest way to a working, good-looking website.

### 19.2 Setting up EJS

**EJS** (Embedded JavaScript) is a popular, simple template engine: you write normal HTML and add JavaScript in special tags. Other options are Pug, Handlebars and Nunjucks; the ideas are the same.

```bash
$ npm install ejs
```

Project structure:

```text
site/
  server.js
  package.json
  public/
    css/style.css
    js/main.js
    images/
  views/
    index.ejs
    about.ejs
    404.ejs
    partials/
      header.ejs
      footer.ejs
```

**server.js**

```js
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'ejs');                       // use EJS for templates
app.set('views', path.join(__dirname, 'views'));    // where the templates live

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { title: 'Home', user: 'Asha' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About us' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Not found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
```

`res.render('index', data)` finds `views/index.ejs`, fills it with `data`, and sends the resulting HTML.

### 19.3 EJS syntax

There are three tags you need:

| Tag | Meaning |
| --- | --- |
| `<%= value %>` | Prints the value **with HTML escaping** (safe for user data) |
| `<%- value %>` | Prints the value **raw, unescaped** (only for trusted HTML, like partials) |
| `<% code %>` | Runs JavaScript without printing (`if`, `for`) |

**views/index.ejs**

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title><%= title %></title>
    <link rel='stylesheet' href='/css/style.css' />
  </head>
  <body>
    <h1>Welcome, <%= user %>!</h1>
    <p>Today is <%= new Date().toDateString() %>.</p>

    <% if (user === 'Asha') { %>
      <p>You are the site owner.</p>
    <% } else { %>
      <p>Hello, visitor.</p>
    <% } %>
  </body>
</html>
```

**Loops**

```js
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mouse', price: 500 },
    { id: 3, name: 'Keyboard', price: 1500 },
  ];
  res.render('products', { title: 'Products', products });
});
```

```html
<!-- views/products.ejs -->
<h1>Products</h1>

<% if (products.length === 0) { %>
  <p>No products yet.</p>
<% } else { %>
  <ul class='grid'>
    <% products.forEach((product) => { %>
      <li class='card'>
        <h3><%= product.name %></h3>
        <p>Price: <%= product.price.toLocaleString('en-IN') %></p>
        <a href='/products/<%= product.id %>'>Details</a>
      </li>
    <% }) %>
  </ul>
<% } %>
```

**Security: escaping.** `<%= %>` converts dangerous characters such as `<` into harmless text. If a user's comment contains `<script>alert(1)</script>`, it is shown as text, not run. That protection against **XSS** is the main reason to use `<%= %>` for any data that did not come from you. Use `<%- %>` only for trusted HTML that you wrote.

### 19.4 Partials: reusing header and footer

Every page needs the same header and footer. Write them once as **partials** and include them.

**views/partials/header.ejs**

```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <title><%= typeof title !== 'undefined' ? title + ' | My Site' : 'My Site' %></title>
    <link rel='stylesheet' href='/css/style.css' />
  </head>
  <body>
    <header class='navbar'>
      <a class='logo' href='/'>My Site</a>
      <nav>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </nav>
    </header>
    <main class='container'>
```

**views/partials/footer.ejs**

```html
    </main>
    <footer class='footer'>Copyright <%= new Date().getFullYear() %> My Site</footer>
    <script src='/js/main.js'></script>
  </body>
</html>
```

**Using them in a page**

```html
<%- include('partials/header') %>

<h1>About us</h1>
<p>We build great things.</p>

<%- include('partials/footer') %>
```

`include` can also receive data: `<%- include('partials/card', { product }) %>`. A partial `card.ejs` then uses the `product` variable.

**Global data for all views** (such as the current year or logged-in user) can go in `app.locals` or `res.locals`:

```js
app.locals.siteName = 'My Site';          // available in every template, always

app.use((req, res, next) => {
  res.locals.currentPath = req.path;      // available in templates for this request
  next();
});
```

Now you can highlight the active link: `<a href='/about' class='<%= currentPath === '/about' ? 'active' : '' %>'>About</a>`. (Mind the quotes inside the template: use double quotes in the real file for the attribute so the inner single quotes work.)

### 19.5 Static files and assets

`express.static` serves the `public` folder. Use absolute paths from the root in HTML:

```html
<link rel='stylesheet' href='/css/style.css' />
<script src='/js/main.js'></script>
<img src='/images/logo.png' alt='Logo' />
```

For better speed in production, set caching options:

```js
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',     // browsers may reuse the files for a week
  etag: true,
}));
```

When you change a CSS file that is cached, browsers may not see the update. A common solution is to add a version in the file name or query string (`/css/style.css?v=2`), or to use a build tool that adds a hash automatically.

### 19.5b Writing good CSS for server-rendered pages

Your Chapter 2 skills apply directly. Keep one `style.css` for the whole site, use CSS variables, and build the layout with Flexbox and Grid. Put this reset at the top, then your components (navbar, card, button, form):

```css
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, sans-serif; line-height: 1.6; }
.container { max-width: 1000px; margin: 0 auto; padding: 24px 16px; }
```

### 19.6 HTML forms and POST requests

Forms send data to the server. For a normal HTML form there are two methods:

- **GET**: data goes in the URL (`/search?q=shoes`). Use for searches and filters. Never for passwords.
- **POST**: data goes in the request body. Use for anything that changes data.

Express needs `express.urlencoded({ extended: true })` to read form posts into `req.body`.

**views/contact.ejs**

```html
<%- include('partials/header') %>

<h1>Contact us</h1>

<% if (typeof errors !== 'undefined' && errors.length) { %>
  <ul class='errors'>
    <% errors.forEach((e) => { %><li><%= e %></li><% }) %>
  </ul>
<% } %>

<form action='/contact' method='POST' class='form'>
  <label>Name
    <input type='text' name='name' value='<%= values?.name ?? '' %>' required />
  </label>

  <label>Email
    <input type='email' name='email' value='<%= values?.email ?? '' %>' required />
  </label>

  <label>Message
    <textarea name='message' rows='5' required><%= values?.message ?? '' %></textarea>
  </label>

  <button type='submit'>Send</button>
</form>

<%- include('partials/footer') %>
```

(As above, inside the template you will need to adjust quotes: the `?? ''` part uses single quotes and the HTML attributes use double quotes in the real file. EJS code between `<%= %>` is plain JavaScript.)

**Handling the form on the server: validate, then redirect**

```js
const messages = [];       // in a real app: save to a database

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', errors: [], values: {} });
});

app.post('/contact', (req, res) => {
  const { name = '', email = '', message = '' } = req.body ?? {};
  const errors = [];

  if (name.trim().length < 2) errors.push('Please enter your name.');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.push('Please enter a valid email.');
  if (message.trim().length < 10) errors.push('Message must have at least 10 characters.');

  if (errors.length) {
    // Show the form again with the errors AND what the user typed (status 400 or 422)
    return res.status(422).render('contact', {
      title: 'Contact',
      errors,
      values: { name, email, message },
    });
  }

  messages.push({ name: name.trim(), email: email.trim(), message: message.trim(), at: new Date() });

  res.redirect('/contact/thanks');         // Post/Redirect/Get
});

app.get('/contact/thanks', (req, res) => {
  res.render('thanks', { title: 'Thank you' });
});
```

**The Post/Redirect/Get (PRG) pattern.** After a successful POST, do **not** render a page directly. Redirect to a GET page instead. If you rendered directly, pressing refresh would re-submit the form and create duplicates. With a redirect, refresh just reloads the thanks page.

### 19.7 Flash messages: one-time notices

After a redirect you often want to say 'Your profile was saved'. The message must survive one redirect and then disappear. That is called a **flash message**, and it is stored in the **session** (data the server remembers about a visitor, using a cookie).

```bash
$ npm install express-session
```

```js
import session from 'express-session';

app.use(session({
  secret: process.env.SESSION_SECRET || 'change-me-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', maxAge: 1000 * 60 * 60 },   // 1 hour
}));

// Tiny flash helper: move the message from the session into res.locals once
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

function flash(req, type, text) {
  req.session.flash = { type, text };
}
```

Use it in a handler:

```js
app.post('/subscribe', (req, res) => {
  // ...save the email...
  flash(req, 'success', 'Thanks for subscribing!');
  res.redirect('/');
});
```

Show it in the header partial:

```html
<% if (flash) { %>
  <div class='alert alert-<%= flash.type %>'><%= flash.text %></div>
<% } %>
```

The default session store keeps data in memory, which is fine for development but not for production (data is lost on restart and it leaks memory). In Chapter 22 you will use a database-backed session store.

### 19.8 PUT and DELETE from HTML forms

HTML forms can only send GET and POST. For editing and deleting resources, either use JavaScript `fetch`, or the **method-override** trick: send a POST with a hidden field or query parameter that tells Express which method you really mean.

```bash
$ npm install method-override
```

```js
import methodOverride from 'method-override';
app.use(methodOverride('_method'));        // reads ?_method=DELETE from the URL
```

```html
<form action='/products/<%= product.id %>?_method=DELETE' method='POST'>
  <button type='submit'>Delete</button>
</form>
```

```js
app.delete('/products/:id', (req, res) => {
  // delete the product
  res.redirect('/products');
});
```

### 19.9 CSRF in one paragraph

When the user is logged in, their browser automatically sends the session cookie with every request to your site, **even if the request was triggered by another malicious website**. That malicious site could hide a form that posts to your `/delete-account`. This attack is **CSRF** (Cross-Site Request Forgery). Protections: the cookie option `sameSite: 'lax'` (shown above) already blocks most cases, and for important forms you add a secret per-session **CSRF token** that your server checks. We cover this properly in Chapter 23.

### 19.10 Complete mini project: a guestbook website

Pages: home, guestbook (list and form), about, 404. Data lives in a JSON file using the helper from Chapter 15.

```js
// server.js (key parts)
import express from 'express';
import session from 'express-session';
import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, 'data', 'entries.json');

async function readEntries() {
  try {
    return JSON.parse(await fs.readFile(DATA_FILE, 'utf8'));
  } catch (e) {
    if (e.code === 'ENOENT') return [];
    throw e;
  }
}

async function saveEntries(entries) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
}

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'dev-secret', resave: false, saveUninitialized: false }));
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get('/', (req, res) => res.render('index', { title: 'Home' }));

app.get('/guestbook', async (req, res) => {
  const entries = (await readEntries()).reverse();     // newest first
  res.render('guestbook', { title: 'Guestbook', entries, errors: [], values: {} });
});

app.post('/guestbook', async (req, res) => {
  const name = String(req.body?.name ?? '').trim();
  const comment = String(req.body?.comment ?? '').trim();
  const errors = [];

  if (name.length < 2 || name.length > 40) errors.push('Name must be 2 to 40 characters.');
  if (comment.length < 3 || comment.length > 500) errors.push('Comment must be 3 to 500 characters.');

  if (errors.length) {
    const entries = (await readEntries()).reverse();
    return res.status(422).render('guestbook', { title: 'Guestbook', entries, errors, values: { name, comment } });
  }

  const entries = await readEntries();
  entries.push({ id: crypto.randomUUID(), name, comment, createdAt: new Date().toISOString() });
  await saveEntries(entries);

  req.session.flash = { type: 'success', text: 'Thanks for signing the guestbook!' };
  res.redirect('/guestbook');
});

app.use((req, res) => res.status(404).render('404', { title: 'Not found' }));

app.listen(3000, () => console.log('http://localhost:3000'));
```

Build the views (`index`, `guestbook`, `404`, header and footer partials) and the CSS yourself using this chapter. Display each entry's date with `new Date(entry.createdAt).toLocaleString('en-IN')`.

### 19.11 Common mistakes

- Using `<%- %>` with user data, opening the door to XSS.
- Forgetting `app.use(express.urlencoded(...))`, so `req.body` is empty.
- Rendering a page after a successful POST instead of redirecting.
- Wrong relative paths for CSS and JS (`style.css` instead of `/css/style.css`), which break on nested routes.
- Forgetting that template variables must be passed in `res.render`; referencing a missing variable throws `title is not defined`. Use `typeof title !== 'undefined'` checks or always pass defaults via `res.locals`.
- Forgetting `name` attributes on form fields.

### Chapter 19 summary

- Template engines (EJS here) build HTML pages from data; `res.render(view, data)` does the work.
- `<%= %>` escapes output (safe); `<%- %>` does not; `<% %>` runs code.
- Partials remove repetition; `res.locals` and `app.locals` share data with all views.
- Handle forms with `express.urlencoded`, validate on the server, re-render with errors and old values, and use Post/Redirect/Get after success.
- Flash messages use the session to show one-time notices.

### Exercises

1. Build a three-page site (home, about, contact) using header and footer partials and one CSS file.
2. Make a products page that loops over an array and links to a detail page `/products/:id` (404 when the id does not exist).
3. Add the contact form with validation and a flash message after success.
4. Add a search form on the products page using GET (`/products?q=...`).
5. Add a delete button to the guestbook entries using method-override (protect it with a simple admin password for now).
6. Build the guestbook from 19.10 fully and style it responsively.

## Chapter 20: Building REST APIs with Express

An **API** (Application Programming Interface) is a way for programs to talk to each other. A **web API** lets a front end (a React app, a mobile app, another server) read and change data on your server using HTTP and JSON. The most common style is called **REST**. Almost every modern website you will build has one. In this chapter you learn to design an API well and to structure it as a professional project.

### 20.1 REST in plain words

REST is a set of conventions, not a strict law. The core ideas:

1. **Everything is a resource**: users, products, orders, comments. Each has a URL.
2. **Use nouns in URLs, and HTTP methods as the verbs.** Not `/getUsers` or `/createUser`, but `GET /users` and `POST /users`.
3. **Use status codes** to say how it went.
4. **Be stateless**: each request carries everything the server needs (for example a token). The server does not rely on remembering the previous request.
5. **Use JSON** for data.

**URL design**

| Goal | Request | Notes |
| --- | --- | --- |
| List books | `GET /api/books` | Supports filter, sort, pagination |
| Get one book | `GET /api/books/42` |  |
| Create a book | `POST /api/books` | Body has the data; returns `201` and the new book |
| Replace a book | `PUT /api/books/42` | Whole resource |
| Change part of a book | `PATCH /api/books/42` | Only the fields sent |
| Delete a book | `DELETE /api/books/42` | Returns `204` with no body |
| Reviews of a book | `GET /api/books/42/reviews` | Nested resource |
| Add a review | `POST /api/books/42/reviews` |  |

Rules of thumb: plural nouns (`/books`), lowercase, hyphens for multiple words (`/book-reviews`), no verbs, no file extensions, and limit nesting to one or two levels.

### 20.2 Status codes that you should know

| Code | Name | Use it when |
| --- | --- | --- |
| 200 | OK | Successful GET, PATCH, PUT |
| 201 | Created | A POST created something (send the new object) |
| 204 | No Content | Success with nothing to return (DELETE) |
| 400 | Bad Request | The request is malformed or fails validation |
| 401 | Unauthorized | Not logged in or invalid token |
| 403 | Forbidden | Logged in but not allowed |
| 404 | Not Found | The resource or route does not exist |
| 409 | Conflict | The action clashes with existing data (email already used) |
| 422 | Unprocessable Content | Valid syntax but the data fails business rules (some APIs use 400 instead) |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Your server has a bug |
| 503 | Service Unavailable | Server overloaded or in maintenance |

### 20.3 A consistent response format

Pick one shape and keep it everywhere. A clear convention:

```json
// Success: a single item
{ "data": { "id": 1, "title": "Dune" } }

// Success: a list with pagination information
{ "data": [ ... ], "meta": { "page": 1, "limit": 10, "total": 85, "pages": 9 } }

// Error
{ "error": { "message": "Book not found", "code": "NOT_FOUND" } }
```

Consistency makes the front-end developer's life (maybe yours) much easier.

### 20.4 The layered architecture

A professional Express API separates responsibilities into layers:

```text
books-api/
  server.js                 starts the server
  package.json
  .env
  src/
    app.js                  builds the Express app
    config/
      index.js              reads environment variables
    routes/
      index.js
      books.js              URL -> controller
    controllers/
      bookController.js     reads req, calls service, sends res
    services/
      bookService.js        business rules and logic
    models/ (or repositories/)
      bookRepository.js     talks to the data store
    middleware/
      validate.js
      notFound.js
      errorHandler.js
    utils/
      AppError.js
      asyncHandler.js
```

Each layer has one job:

- **Routes:** map method and URL to a controller function, add middleware.
- **Controllers:** handle HTTP. Read input from `req`, call the service, choose the status code, send the response. No business rules here.
- **Services:** the business logic ('a book's ISBN must be unique'). They know nothing about `req` and `res`, so you can reuse and test them easily.
- **Repositories or models:** the only place that talks to the database or storage. In Chapter 21 we swap the in-memory repository for MongoDB without touching the other layers.

This pattern is sometimes called MVC (Model, View, Controller) when views are templates, or a layered or clean architecture for APIs.

### 20.5 Building a Books API step by step

**Setup**

```bash
$ mkdir books-api && cd books-api
$ npm init -y
$ npm install express cors helmet morgan dotenv
```

Set `'type': 'module'` and scripts in `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "node --watch --env-file=.env server.js"
}
```

Create `.env`:

```text
PORT=4000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

**src/config/index.js**

```js
export const config = {
  port: Number(process.env.PORT) || 3000,
  env: process.env.NODE_ENV || 'development',
  corsOrigin: process.env.CORS_ORIGIN || '*',
};
```

**src/utils/AppError.js**

```js
export class AppError extends Error {
  constructor(message, status = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.name = 'AppError';
    this.status = status;
    this.code = code;
  }
}

export class NotFoundError extends AppError {
  constructor(what = 'Resource') {
    super(`${what} not found`, 404, 'NOT_FOUND');
  }
}

export class ValidationError extends AppError {
  constructor(message, details) {
    super(message, 400, 'VALIDATION_ERROR');
    this.details = details;
  }
}
```

**src/models/bookRepository.js** (in-memory for now)

```js
let books = [
  { id: 1, title: 'Dune', author: 'Frank Herbert', year: 1965, tags: ['scifi'] },
  { id: 2, title: 'Emma', author: 'Jane Austen', year: 1815, tags: ['classic'] },
  { id: 3, title: 'Neuromancer', author: 'William Gibson', year: 1984, tags: ['scifi', 'cyberpunk'] },
];
let nextId = 4;

export const bookRepository = {
  async findAll() {
    return books;
  },
  async findById(id) {
    return books.find((b) => b.id === id) ?? null;
  },
  async create(data) {
    const book = { id: nextId++, ...data };
    books.push(book);
    return book;
  },
  async update(id, changes) {
    const index = books.findIndex((b) => b.id === id);
    if (index === -1) return null;
    books[index] = { ...books[index], ...changes };
    return books[index];
  },
  async remove(id) {
    const before = books.length;
    books = books.filter((b) => b.id !== id);
    return books.length < before;
  },
};
```

All methods are `async` even though the data is in memory. That way the rest of the code already works with promises, and the switch to a real database later changes nothing outside this file.

**src/services/bookService.js**

```js
import { bookRepository } from '../models/bookRepository.js';
import { NotFoundError } from '../utils/AppError.js';

export const bookService = {
  async list({ q, tag, sort = 'title', order = 'asc', page = 1, limit = 10 }) {
    let items = [...(await bookRepository.findAll())];

    if (q) {
      const term = q.toLowerCase();
      items = items.filter(
        (b) => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)
      );
    }
    if (tag) items = items.filter((b) => b.tags.includes(tag));

    const allowedSort = ['title', 'author', 'year'];
    const sortKey = allowedSort.includes(sort) ? sort : 'title';
    const direction = order === 'desc' ? -1 : 1;

    items.sort((a, b) => {
      const x = a[sortKey];
      const y = b[sortKey];
      return (x > y ? 1 : x < y ? -1 : 0) * direction;
    });

    const total = items.length;
    const start = (page - 1) * limit;

    return {
      items: items.slice(start, start + limit),
      meta: { page, limit, total, pages: Math.ceil(total / limit) || 1 },
    };
  },

  async get(id) {
    const book = await bookRepository.findById(id);
    if (!book) throw new NotFoundError('Book');
    return book;
  },

  create(data) {
    return bookRepository.create(data);
  },

  async update(id, changes) {
    const book = await bookRepository.update(id, changes);
    if (!book) throw new NotFoundError('Book');
    return book;
  },

  async remove(id) {
    const removed = await bookRepository.remove(id);
    if (!removed) throw new NotFoundError('Book');
  },
};
```

**src/middleware/validate.js**

```js
import { ValidationError } from '../utils/AppError.js';

function cleanBook(body, { partial = false } = {}) {
  const errors = [];
  const out = {};

  if (!partial || body.title !== undefined) {
    if (typeof body.title !== 'string' || body.title.trim().length < 1 || body.title.length > 200) {
      errors.push('title must be a string of 1 to 200 characters');
    } else out.title = body.title.trim();
  }

  if (!partial || body.author !== undefined) {
    if (typeof body.author !== 'string' || body.author.trim().length < 1) {
      errors.push('author is required');
    } else out.author = body.author.trim();
  }

  if (!partial || body.year !== undefined) {
    const year = Number(body.year);
    if (!Number.isInteger(year) || year < 0 || year > new Date().getFullYear() + 1) {
      errors.push('year must be a valid integer');
    } else out.year = year;
  }

  if (body.tags !== undefined) {
    if (!Array.isArray(body.tags) || !body.tags.every((t) => typeof t === 'string')) {
      errors.push('tags must be an array of strings');
    } else out.tags = body.tags.map((t) => t.trim().toLowerCase());
  } else if (!partial) {
    out.tags = [];
  }

  if (errors.length) throw new ValidationError('Invalid book data', errors);
  return out;
}

export const validateBook = (req, res, next) => {
  req.validated = cleanBook(req.body ?? {});
  next();
};

export const validateBookPatch = (req, res, next) => {
  const data = cleanBook(req.body ?? {}, { partial: true });
  if (Object.keys(data).length === 0) throw new ValidationError('Nothing to update');
  req.validated = data;
  next();
};

export function validateId(req, res, next) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) throw new ValidationError('id must be a positive integer');
  req.id = id;
  next();
}
```

By throwing inside middleware, we rely on Express 5 forwarding errors to the error handler. (In Chapter 23 you will learn schema validation libraries such as Zod, which replace this hand-written code.)

**src/controllers/bookController.js**

```js
import { bookService } from '../services/bookService.js';

export async function listBooks(req, res) {
  const { q, tag, sort, order } = req.query;
  const page = Math.max(1, Number(req.query.page) || 1);
  const limit = Math.min(50, Math.max(1, Number(req.query.limit) || 10));

  const { items, meta } = await bookService.list({ q, tag, sort, order, page, limit });
  res.json({ data: items, meta });
}

export async function getBook(req, res) {
  res.json({ data: await bookService.get(req.id) });
}

export async function createBook(req, res) {
  const book = await bookService.create(req.validated);
  res.status(201).location(`/api/books/${book.id}`).json({ data: book });
}

export async function updateBook(req, res) {
  res.json({ data: await bookService.update(req.id, req.validated) });
}

export async function deleteBook(req, res) {
  await bookService.remove(req.id);
  res.sendStatus(204);
}
```

**src/routes/books.js**

```js
import { Router } from 'express';
import * as c from '../controllers/bookController.js';
import { validateBook, validateBookPatch, validateId } from '../middleware/validate.js';

const router = Router();

router.get('/', c.listBooks);
router.post('/', validateBook, c.createBook);

router.get('/:id', validateId, c.getBook);
router.patch('/:id', validateId, validateBookPatch, c.updateBook);
router.put('/:id', validateId, validateBook, c.updateBook);
router.delete('/:id', validateId, c.deleteBook);

export default router;
```

**src/routes/index.js**

```js
import { Router } from 'express';
import booksRouter from './books.js';

const router = Router();

router.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
router.use('/books', booksRouter);

export default router;
```

**src/middleware/notFound.js and errorHandler.js**

```js
// notFound.js
import { NotFoundError } from '../utils/AppError.js';

export const notFound = (req, res, next) => {
  next(new NotFoundError(`Route ${req.method} ${req.originalUrl}`));
};
```

```js
// errorHandler.js
import { config } from '../config/index.js';

export function errorHandler(err, req, res, next) {
  // Body parser errors (invalid JSON) have a status of 400
  const status = err.status ?? err.statusCode ?? 500;
  const isServerError = status >= 500;

  if (isServerError) console.error(err);          // log the real problem

  res.status(status).json({
    error: {
      message: isServerError && config.env === 'production' ? 'Internal server error' : err.message,
      code: err.code ?? (isServerError ? 'INTERNAL_ERROR' : 'BAD_REQUEST'),
      ...(err.details && { details: err.details }),
      ...(config.env !== 'production' && isServerError && { stack: err.stack }),
    },
  });
}
```

**src/app.js**

```js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from './config/index.js';
import routes from './routes/index.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin }));
if (config.env !== 'test') app.use(morgan('dev'));
app.use(express.json({ limit: '100kb' }));

app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
```

**server.js**

```js
import app from './src/app.js';
import { config } from './src/config/index.js';

const server = app.listen(config.port, () => {
  console.log(`API running on http://localhost:${config.port}/api`);
});

// Graceful shutdown: finish current requests, then exit
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    console.log(`${signal} received, closing server...`);
    server.close(() => process.exit(0));
  });
}
```

Run `npm run dev` and try these requests:

```bash
$ curl 'http://localhost:4000/api/books?tag=scifi&sort=year&order=desc'
$ curl http://localhost:4000/api/books/1
$ curl -X POST http://localhost:4000/api/books -H 'Content-Type: application/json' -d '{"title":"Hyperion","author":"Dan Simmons","year":1989,"tags":["scifi"]}'
$ curl -X PATCH http://localhost:4000/api/books/1 -H 'Content-Type: application/json' -d '{"year":1966}'
$ curl -X DELETE http://localhost:4000/api/books/2 -i
$ curl http://localhost:4000/api/books/999        # 404 error format
```

### 20.6 CORS: letting your front end call your API

When your React or plain JavaScript front end runs on one origin (for example `http://localhost:5173`) and your API on another (`http://localhost:4000`), the browser blocks the calls unless the API says it is allowed. The `cors` package sends the right headers.

```js
import cors from 'cors';

// Development: allow everything (not for production)
app.use(cors());

// Production: allow only your website(s)
app.use(cors({
  origin: ['https://myshop.com', 'https://www.myshop.com'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,          // allow cookies; requires an explicit origin, not '*'
}));
```

For requests that change data or send special headers, browsers first send a **preflight** request (`OPTIONS`) asking permission. The `cors` middleware answers it automatically. If your front end and API are on the **same origin** (for example Express serves the React build), no CORS configuration is needed.

### 20.7 Using the API from a front end

```js
const API = 'http://localhost:4000/api';

async function request(path, options = {}) {
  const response = await fetch(`${API}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  if (response.status === 204) return null;

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.error?.message ?? 'Request failed');
  }
  return payload;
}

export const booksApi = {
  list: (params = {}) => request(`/books?${new URLSearchParams(params)}`),
  get: (id) => request(`/books/${id}`),
  create: (book) => request('/books', { method: 'POST', body: book }),
  update: (id, changes) => request(`/books/${id}`, { method: 'PATCH', body: changes }),
  remove: (id) => request(`/books/${id}`, { method: 'DELETE' }),
};

// Usage
const { data, meta } = await booksApi.list({ tag: 'scifi', page: 1 });
console.log(data, meta);
```

This small client wraps `fetch` once, so the rest of your front end never repeats headers or error checks.

### 20.8 API versioning, documentation and other professional details

- **Versioning:** put the version in the path (`/api/v1/books`) so you can change the design later (`/api/v2`) without breaking existing apps.
- **Documentation:** describe your API with **OpenAPI** (Swagger). Tools like `swagger-ui-express` show an interactive page where people can read and try the endpoints. At least write a README listing the endpoints, parameters and examples.
- **Idempotency:** `GET`, `PUT`, `DELETE` should give the same final result when repeated. `POST` normally does not. This matters for retries.
- **Filtering, sorting and pagination** should be built in from the start for any list that can grow.
- **Cursor pagination** (`?after=<id>`) works better than page numbers for large and fast-changing lists.
- **Rate limiting** protects against abuse (Chapter 23). **Compression** reduces size (`compression` package).
- **ETag and caching headers** let browsers avoid downloading unchanged data.
- **Health endpoint** (`/api/health`) lets hosting platforms check your app is alive.
- **Request IDs and structured logs** help find problems in production (Chapter 24).

### 20.9 Common mistakes

- Using verbs in URLs (`/api/createBook`).
- Returning `200` for everything, even errors.
- Different response shapes in different routes.
- Putting database queries and business rules directly into route handlers.
- Returning sensitive fields (password hashes) in responses.
- Allowing unlimited page sizes (`?limit=1000000`).
- Using `cors({ origin: '*' })` with credentials, or leaving CORS wide open in production.
- Not validating input, assuming the front end always sends correct data.

### Chapter 20 summary

- REST uses nouns for URLs, HTTP methods for actions, status codes for results and JSON for data.
- Structure the code in layers: routes, controllers, services and repositories, plus middleware and utilities.
- Provide consistent success and error formats, pagination, filtering and sorting.
- Configure CORS carefully, and wrap `fetch` in a small client on the front end.

### Exercises

1. Build the Books API completely and test every endpoint with Thunder Client.
2. Add `GET /api/books/:id/reviews` and `POST /api/books/:id/reviews` with an in-memory reviews repository.
3. Build a small front end (plain HTML and JS) that lists books with search, tag filter and pagination using the API client from 20.7.
4. Add `/api/v1` versioning and a health endpoint that reports memory use.
5. Write a README documenting each endpoint with example requests and responses.
6. Add `ETag` or `Cache-Control` headers on the books list and observe the effect in the Network tab.

## Chapter 21: Databases: MongoDB, Mongoose and SQL Basics

Until now your data lived in arrays or JSON files and vanished (or got corrupted) under real use. A **database** stores data safely on disk, lets many users read and write at the same time, and finds data fast. In this chapter you learn the two main families of databases and use MongoDB with Mongoose in depth, then see the SQL way with PostgreSQL.

### 21.1 Two families of databases

|  | SQL (relational) | NoSQL (document, MongoDB) |
| --- | --- | --- |
| Data shape | Tables with rows and columns, fixed schema | Collections of JSON-like documents, flexible schema |
| Relations | Joins between tables with foreign keys | Embed documents or store references |
| Examples | PostgreSQL, MySQL, SQLite | MongoDB, Firestore |
| Strong at | Consistent, structured data; complex queries; transactions | Fast development, nested data, changing shapes |
| Typical use | Shops, banking, anything with many relations | Content, profiles, catalogues, prototypes |

Neither is better in general. Many companies use both. MongoDB feels natural to JavaScript developers because documents look like JavaScript objects, so we start there.

### 21.2 MongoDB concepts

- A **database** contains **collections** (like tables), such as `users` and `posts`.
- A collection contains **documents** (like rows), stored as BSON (binary JSON).
- Every document has a unique `_id` (an **ObjectId** by default).

```json
{
  "_id": "66f1a2b3c4d5e6f708192a3b",
  "name": "Asha",
  "email": "asha@example.com",
  "skills": ["JS", "Node"],
  "address": { "city": "Pune" },
  "createdAt": "2026-11-22T08:00:00.000Z"
}
```

**Getting a database.** The easiest way: create a free cluster on **MongoDB Atlas** (mongodb.com/atlas), create a database user, allow your IP address, and copy the **connection string**, which looks like `mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/mydb`. Alternatively, install MongoDB Community Server locally (connection string `mongodb://127.0.0.1:27017/mydb`) or run it with Docker. Keep the connection string in `.env`, never in your code.

### 21.3 Connecting with Mongoose

**Mongoose** is a library that adds schemas, validation and handy methods on top of the official MongoDB driver.

```bash
$ npm install mongoose
```

```text
# .env
MONGODB_URI=mongodb://127.0.0.1:27017/books_db
```

```js
// src/config/db.js
import mongoose from 'mongoose';

export async function connectDb(uri = process.env.MONGODB_URI) {
  if (!uri) throw new Error('MONGODB_URI is not set');

  mongoose.connection.on('error', (err) => console.error('MongoDB error:', err));
  mongoose.connection.on('disconnected', () => console.warn('MongoDB disconnected'));

  await mongoose.connect(uri);
  console.log('MongoDB connected');
}
```

```js
// server.js
import app from './src/app.js';
import { connectDb } from './src/config/db.js';

await connectDb();                       // connect BEFORE accepting requests
app.listen(process.env.PORT || 3000);
```

### 21.4 Schemas and models

A **schema** describes the shape and rules of documents. A **model** is the class you use to query the collection.

```js
// src/models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      minlength: 1,
      maxlength: 200,
    },
    author: { type: String, required: true, trim: true },
    year: { type: Number, min: 0, max: 2100 },
    isbn: { type: String, unique: true, sparse: true },
    tags: { type: [String], default: [] },
    rating: { type: Number, min: 0, max: 5, default: 0 },
    status: { type: String, enum: ['available', 'borrowed'], default: 'available' },
  },
  { timestamps: true }              // adds createdAt and updatedAt automatically
);

export const Book = mongoose.model('Book', bookSchema);
```

Mongoose names the collection by lowercasing and pluralising the model name (`Book` becomes `books`). Common schema types: `String`, `Number`, `Boolean`, `Date`, `ObjectId`, arrays, nested objects and `Map`. Options include `required`, `default`, `unique`, `enum`, `min`, `max`, `match` (regular expression), `trim`, `lowercase`, and custom `validate` functions.

### 21.5 CRUD operations

**Create**

```js
const book = await Book.create({ title: 'Dune', author: 'Frank Herbert', year: 1965, tags: ['scifi'] });
console.log(book._id, book.createdAt);

await Book.insertMany([{ title: 'Emma', author: 'Jane Austen' }, { title: 'Ulysses', author: 'James Joyce' }]);
```

**Read**

```js
const all = await Book.find();                              // every book
const scifi = await Book.find({ tags: 'scifi' });           // filter
const one = await Book.findById('66f1a2b3c4d5e6f708192a3b');
const first = await Book.findOne({ author: 'Jane Austen' });

const recent = await Book.find({ year: { $gte: 1950 } })    // query operators
  .select('title author year')                               // only these fields
  .sort({ year: -1 })                                        // newest first
  .skip(20)                                                  // pagination
  .limit(10)
  .lean();                                                   // plain objects, faster

const count = await Book.countDocuments({ status: 'available' });
const exists = await Book.exists({ isbn: '123' });
```

Query operators you will use often:

| Operator | Meaning | Example |
| --- | --- | --- |
| `$eq`, `$ne` | equal, not equal | `{ status: { $ne: 'borrowed' } }` |
| `$gt`, `$gte`, `$lt`, `$lte` | comparisons | `{ year: { $lt: 1900 } }` |
| `$in`, `$nin` | in a list | `{ tags: { $in: ['scifi', 'horror'] } }` |
| `$and`, `$or`, `$not` | logic | `{ $or: [{ year: 1965 }, { author: 'Frank Herbert' }] }` |
| `$regex` | text pattern | `{ title: { $regex: 'dune', $options: 'i' } }` |
| `$exists` | field present | `{ isbn: { $exists: true } }` |

**Update**

```js
// Get, change, save (runs full validation, triggers hooks)
const book = await Book.findById(id);
book.rating = 4.5;
await book.save();

// One step; new: true returns the updated document; runValidators checks the schema rules
const updated = await Book.findByIdAndUpdate(
  id,
  { $set: { rating: 4.8 }, $addToSet: { tags: 'classic' } },
  { new: true, runValidators: true }
);

await Book.updateMany({ year: { $lt: 1900 } }, { $addToSet: { tags: 'old' } });
```

Update operators: `$set`, `$unset`, `$inc` (add to a number), `$push` and `$addToSet` (add to an array), `$pull` (remove from an array).

**Delete**

```js
await Book.findByIdAndDelete(id);
await Book.deleteMany({ status: 'borrowed' });
```

### 21.6 Validation and errors

Mongoose validates documents before saving, and throws a `ValidationError` with details. Also expect a `CastError` for invalid ids (`/api/books/abc`) and error code `11000` for unique violations.

```js
try {
  await Book.create({ author: 'Nobody' });         // missing title
} catch (error) {
  console.log(error.name);                         // 'ValidationError'
  console.log(error.errors.title.message);         // 'Title is required'
}
```

Check that an id is valid before querying:

```js
import mongoose from 'mongoose';

if (!mongoose.isValidObjectId(req.params.id)) {
  return res.status(400).json({ error: { message: 'Invalid id' } });
}
```

A central place to translate database errors into HTTP responses (add to the error handler from Chapter 20):

```js
export function errorHandler(err, req, res, next) {
  let status = err.status ?? 500;
  let message = err.message;
  let details;

  if (err.name === 'ValidationError' && err.errors) {          // Mongoose validation
    status = 400;
    message = 'Validation failed';
    details = Object.values(err.errors).map((e) => e.message);
  } else if (err.name === 'CastError') {                       // bad ObjectId
    status = 400;
    message = `Invalid ${err.path}`;
  } else if (err.code === 11000) {                             // duplicate key
    status = 409;
    message = `${Object.keys(err.keyValue)[0]} already exists`;
  }

  if (status >= 500) console.error(err);
  res.status(status).json({ error: { message, ...(details && { details }) } });
}
```

### 21.7 Schema extras: virtuals, methods, statics, hooks, indexes

```js
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true });

// Virtual: a computed field that is not stored
userSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

// Instance method
userSchema.methods.isAdmin = function () {
  return this.role === 'admin';
};

// Static method (on the model)
userSchema.statics.findByEmail = function (email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Hook (middleware) that runs before saving
userSchema.pre('save', function (next) {
  if (this.isModified('email')) this.email = this.email.toLowerCase();
  next();
});

// Index: makes queries on these fields fast
userSchema.index({ lastName: 1, firstName: 1 });

// Control JSON output
userSchema.set('toJSON', { virtuals: true });
```

**Indexes** are the most important performance tool. Without one, a query reads every document. With an index on the queried field, MongoDB jumps straight to the answer. Index the fields you filter and sort by often, but not everything (indexes cost space and slow writes).

### 21.8 Relationships

In MongoDB you choose between **embedding** and **referencing**.

**Embedding:** put related data inside the document. Good for data that is read together and belongs to one parent.

```js
const orderSchema = new mongoose.Schema({
  customerName: String,
  items: [{ product: String, qty: Number, price: Number }],   // embedded
});
```

**Referencing:** store the `_id` of another document. Good when the related data is large, shared, or changes independently.

```js
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export const Post = mongoose.model('Post', postSchema);

// Fetch posts together with their author's name
const posts = await Post.find().populate('author', 'name email');
console.log(posts[0].author.name);
```

`populate` replaces the stored id with the actual document (Mongoose runs an extra query for you). Rule of thumb: embed when the child belongs to exactly one parent and is small; reference when many parents share it or it can grow without limit (comments on a popular post).

### 21.9 Aggregation pipeline

For reports and statistics, MongoDB processes documents through stages:

```js
const stats = await Book.aggregate([
  { $match: { year: { $gte: 1900 } } },                       // filter
  { $unwind: '$tags' },                                       // one document per tag
  { $group: { _id: '$tags', count: { $sum: 1 }, avgRating: { $avg: '$rating' } } },
  { $sort: { count: -1 } },
  { $limit: 5 },
]);

console.log(stats);   // [{ _id: 'scifi', count: 12, avgRating: 4.1 }, ...]
```

### 21.10 Plugging Mongoose into the layered API

Only the repository from Chapter 20 changes. The service, controllers and routes stay the same.

```js
// src/models/bookRepository.js
import mongoose from 'mongoose';
import { Book } from './Book.js';

const validId = (id) => mongoose.isValidObjectId(id);

export const bookRepository = {
  async findPage({ q, tag, sort = 'title', order = 'asc', page = 1, limit = 10 }) {
    const filter = {};
    if (q) {
      const safe = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');   // escape regex characters
      filter.$or = [{ title: new RegExp(safe, 'i') }, { author: new RegExp(safe, 'i') }];
    }
    if (tag) filter.tags = tag;

    const sortKey = ['title', 'author', 'year', 'rating'].includes(sort) ? sort : 'title';

    const [items, total] = await Promise.all([
      Book.find(filter)
        .sort({ [sortKey]: order === 'desc' ? -1 : 1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Book.countDocuments(filter),
    ]);

    return { items, total };
  },

  findById: (id) => (validId(id) ? Book.findById(id).lean() : null),
  create: (data) => Book.create(data),
  update: (id, changes) =>
    validId(id) ? Book.findByIdAndUpdate(id, changes, { new: true, runValidators: true }).lean() : null,
  async remove(id) {
    if (!validId(id)) return false;
    return Boolean(await Book.findByIdAndDelete(id));
  },
};
```

Notice how the `$` and regular-expression escaping protects against **injection**: user text is never trusted as a pattern. Also, with MongoDB, ids are strings like `66f1...`, so the `validateId` middleware from Chapter 20 should now use `mongoose.isValidObjectId` instead of integer checks.

**NoSQL injection warning.** If you pass `req.body` or `req.query` straight into a query, an attacker can send objects such as `{ "email": { "$ne": null } }` and bypass checks. Always validate that inputs are the expected type (strings), or use a sanitiser such as `express-mongo-sanitize` and schema validation (Chapter 23).

### 21.11 SQL basics with PostgreSQL

Relational databases store data in **tables** with fixed columns. You talk to them with **SQL** (Structured Query Language). PostgreSQL is the most popular open-source choice. SQLite (a single file, no server) is great for learning and small apps.

**Creating tables**

```sql
CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE posts (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  body        TEXT,
  published   BOOLEAN NOT NULL DEFAULT false,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

A **primary key** uniquely identifies each row. A **foreign key** (`REFERENCES`) links a post to its user and keeps the data consistent: you cannot create a post for a user that does not exist.

**CRUD in SQL**

```sql
-- Create
INSERT INTO users (name, email) VALUES ('Asha', 'asha@example.com');

-- Read
SELECT * FROM users;
SELECT id, name FROM users WHERE email = 'asha@example.com';
SELECT * FROM posts WHERE published = true ORDER BY created_at DESC LIMIT 10 OFFSET 20;

-- Update
UPDATE users SET name = 'Asha K' WHERE id = 1;

-- Delete
DELETE FROM posts WHERE id = 5;
```

(Always write a `WHERE` in `UPDATE` and `DELETE`, or you change every row!)

**Joins** combine tables:

```sql
SELECT posts.title, users.name AS author
FROM posts
JOIN users ON users.id = posts.user_id
WHERE posts.published = true
ORDER BY posts.created_at DESC;

-- Count posts per user (including users with none)
SELECT users.name, COUNT(posts.id) AS post_count
FROM users
LEFT JOIN posts ON posts.user_id = users.id
GROUP BY users.id, users.name
HAVING COUNT(posts.id) >= 0
ORDER BY post_count DESC;
```

**Using PostgreSQL from Node.js** with the `pg` package. The golden rule is to use **parameterised queries** (`$1`, `$2`). Never build SQL by joining strings with user input: that is **SQL injection**, one of the most damaging attacks on the web.

```bash
$ npm install pg
```

```js
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// SAFE: the value is sent separately from the SQL text
export async function findUserByEmail(email) {
  const { rows } = await pool.query('SELECT id, name, email FROM users WHERE email = $1', [email]);
  return rows[0] ?? null;
}

export async function createUser(name, email) {
  const { rows } = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email',
    [name, email]
  );
  return rows[0];
}

// DANGEROUS (never do this):
// pool.query(`SELECT * FROM users WHERE email = '${email}'`);
```

**Transactions** make several statements succeed or fail together (for example, moving money between two accounts):

```js
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [100, 1]);
  await client.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2', [100, 2]);
  await client.query('COMMIT');
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  client.release();
}
```

**ORMs and query builders.** Instead of writing SQL by hand you can use **Prisma**, **Drizzle**, **Sequelize**, **TypeORM** or **Knex**. Prisma and Drizzle are popular with TypeScript (Book 2). They generate types from your schema, handle migrations (versioned changes to your tables) and work with PostgreSQL, MySQL, SQLite and MongoDB (Prisma). Learn raw SQL first; it makes every ORM easier.

### 21.12 Which database should you choose?

- Learning and prototypes: MongoDB Atlas free tier or SQLite.
- Content sites, profiles, flexible shapes: MongoDB is comfortable.
- Orders, payments, inventory, reports, lots of relations: PostgreSQL.
- Caching, sessions, rate limiting, queues: **Redis** (an in-memory store) alongside your main database.
- Search: Elasticsearch, Meilisearch or PostgreSQL full-text search.

When in doubt for a serious business application, PostgreSQL is a safe, powerful default.

### 21.13 Good practices

- Keep secrets (connection strings) in environment variables.
- Connect once at startup and reuse the connection or pool.
- Add indexes for frequently queried fields; check slow queries with `explain()` (MongoDB) or `EXPLAIN` (SQL).
- Validate input before it reaches the database; use limits on page size.
- Never store plain-text passwords (Chapter 22).
- Make regular backups (Atlas and managed PostgreSQL providers do this for you); test restoring one.
- Use separate databases for development, testing and production.
- Use `lean()` for read-only Mongoose queries that you only send as JSON.

### 21.14 Common mistakes

- Forgetting `await`, then returning a Query object or Promise instead of data.
- Starting the server before the database is connected.
- Hardcoding the connection string and committing it to GitHub (rotate it immediately if that happens).
- Using `findByIdAndUpdate` without `runValidators: true`, silently skipping validation.
- Passing unvalidated `req.body` into queries.
- Building SQL with string concatenation.
- Storing unbounded arrays inside one document (documents have a 16 MB limit).
- Not indexing, then wondering why queries become slow as data grows.

### Chapter 21 summary

- Databases give safe, shared, fast persistent storage. SQL stores tables with relations; MongoDB stores flexible documents.
- Mongoose provides schemas, validation, queries, hooks, virtuals, population and aggregation.
- Keep database code in repositories so the rest of the app does not change when the database does.
- Use parameterised queries in SQL and validated inputs in MongoDB to prevent injection.

### Exercises

1. Create a MongoDB Atlas cluster (or local MongoDB) and connect with Mongoose. Print the number of documents in a collection.
2. Replace the in-memory repository of the Books API by the Mongoose version and verify every endpoint again.
3. Add a `User` model and a `Review` model referencing both a user and a book; return a book with its reviews and reviewer names using `populate`.
4. Write an aggregation that returns the average rating per author.
5. Install PostgreSQL (or use SQLite), create `users` and `posts` tables, insert sample data and write three join queries.
6. Write a Node script that safely inserts a user using parameterised queries, then try (in a safe test table) to see why string concatenation is dangerous.

## Chapter 22: Authentication and Authorization

Almost every real website has users: sign up, log in, see your own data, and keep other people out. Getting this right is one of the most important skills of a back-end developer, because mistakes here lead to stolen accounts. In this chapter you learn the safe, standard ways.

### 22.1 The two words you must not confuse

- **Authentication (authN):** *Who are you?* Proving identity, usually with email and password.
- **Authorization (authZ):** *What are you allowed to do?* Checking permissions: can this user delete this post? Is this an admin?

The flow: the user registers, logs in (authentication), the server remembers them for later requests, and for each protected action checks permissions (authorization).

### 22.2 Passwords: never store them as text

If your database leaks and passwords are stored as plain text, every user is compromised (and many reuse passwords on other sites). The rule:

1. Never store the password. Store a **hash**: the result of a one-way function. You cannot turn a hash back into the password.
2. Use a **slow, salted** password-hashing algorithm made for this job: **bcrypt**, **scrypt** or **argon2**. Do not use plain MD5, SHA-1 or SHA-256 for passwords: they are far too fast, so attackers can test billions of guesses per second.
3. A **salt** (random data added to each password before hashing, handled automatically by bcrypt) makes identical passwords produce different hashes.

```bash
$ npm install bcryptjs
```

(`bcryptjs` is pure JavaScript and installs everywhere. The native `bcrypt` package is faster but needs compilation. The API is almost identical.)

```js
import bcrypt from 'bcryptjs';

const hash = await bcrypt.hash('my-secret-password', 12);   // 12 = cost factor (work); 10 to 12 is typical
console.log(hash);   // $2a$12$....(60 characters, includes the salt)

console.log(await bcrypt.compare('my-secret-password', hash));  // true
console.log(await bcrypt.compare('wrong', hash));               // false
```

Never write your own cryptography. Use well-tested libraries.

### 22.3 The User model

```js
// src/models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 60 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^@\s]+@[^@\s]+\.[^@\s]+$/, 'Invalid email'],
    },
    password: { type: String, required: true, minlength: 8, select: false },   // select:false hides it from queries
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    passwordChangedAt: Date,
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordChangedAt = new Date();
  next();
});

userSchema.methods.checkPassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

userSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.password;          // never leak it, even by accident
    delete ret.__v;
    return ret;
  },
});

export const User = mongoose.model('User', userSchema);
```

The `select: false` option means normal queries never return the password hash. When you do need it (login), ask for it explicitly with `.select('+password')`.

### 22.4 Two ways to remember a logged-in user

HTTP is **stateless**: each request is independent. After login the server must recognise the user on later requests. There are two main approaches:

|  | **Sessions (cookie-based)** | **Tokens (JWT)** |
| --- | --- | --- |
| What the browser stores | A cookie with a random session id | A signed token (in a cookie or sent in a header) |
| Where the user's data lives | On the server (memory, database or Redis) | Inside the token itself |
| Logging a user out | Delete the session on the server: instant | Hard: a token is valid until it expires (needs extra work) |
| Scaling | Needs a shared session store when you have many servers | Easy: servers just verify the signature |
| Best for | Server-rendered websites | APIs for mobile apps, single-page apps, microservices |

Both are fine. For a classic website with EJS pages, **sessions** are simpler and safer. For an API consumed by React or a mobile app, **JWT** is common. We build both.

### 22.5 Approach 1: Session-based authentication

```bash
$ npm install express-session connect-mongo
```

**Session setup**

```js
import session from 'express-session';
import MongoStore from 'connect-mongo';

app.set('trust proxy', 1);       // needed when behind a proxy such as Render, Railway, Nginx

app.use(session({
  name: 'sid',
  secret: process.env.SESSION_SECRET,               // long random string from .env
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),   // sessions survive restarts
  cookie: {
    httpOnly: true,                                  // JavaScript in the page cannot read it
    secure: process.env.NODE_ENV === 'production',   // HTTPS only in production
    sameSite: 'lax',                                 // helps against CSRF
    maxAge: 1000 * 60 * 60 * 24 * 7,                 // 7 days
  },
}));
```

Generate a strong secret once: `node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"`.

**Register, login, logout**

```js
// src/controllers/authController.js (session version)
import { User } from '../models/User.js';

export async function register(req, res) {
  const { name, email, password } = req.body ?? {};

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: { message: 'name, email and password are required' } });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: { message: 'Password must have at least 8 characters' } });
  }

  const exists = await User.exists({ email: email.toLowerCase().trim() });
  if (exists) {
    return res.status(409).json({ error: { message: 'Email already registered' } });
  }

  const user = await User.create({ name, email, password });

  req.session.regenerate((err) => {          // new session id after privilege change
    if (err) throw err;
    req.session.userId = user.id;
    res.status(201).json({ data: user });
  });
}

export async function login(req, res) {
  const { email, password } = req.body ?? {};

  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: { message: 'email and password are required' } });
  }

  const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password');

  // The SAME message for unknown email and wrong password: do not reveal which one failed
  if (!user || !(await user.checkPassword(password))) {
    return res.status(401).json({ error: { message: 'Invalid email or password' } });
  }

  req.session.regenerate((err) => {          // prevents session fixation attacks
    if (err) throw err;
    req.session.userId = user.id;
    res.json({ data: user });
  });
}

export function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie('sid');
    res.sendStatus(204);
  });
}
```

**Protecting routes: the `requireAuth` middleware**

```js
// src/middleware/auth.js (session version)
import { User } from '../models/User.js';

export async function requireAuth(req, res, next) {
  const userId = req.session?.userId;
  if (!userId) return res.status(401).json({ error: { message: 'Please log in' } });

  const user = await User.findById(userId);
  if (!user) {
    return req.session.destroy(() => res.status(401).json({ error: { message: 'Please log in' } }));
  }

  req.user = user;
  next();
}

export const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user?.role)) {
    return res.status(403).json({ error: { message: 'You do not have permission' } });
  }
  next();
};
```

**Using them**

```js
router.post('/register', register);
router.post('/login', loginLimiter, login);      // rate-limited (22.9)
router.post('/logout', logout);
router.get('/me', requireAuth, (req, res) => res.json({ data: req.user }));

router.get('/admin/users', requireAuth, requireRole('admin'), listAllUsers);
```

**Server-rendered pages.** For EJS pages, redirect instead of returning 401:

```js
export function requireLoginPage(req, res, next) {
  if (!req.session.userId) {
    req.session.returnTo = req.originalUrl;     // send them back here after login
    return res.redirect('/login');
  }
  next();
}

// Make the user available in every template
app.use(async (req, res, next) => {
  res.locals.currentUser = req.session.userId ? await User.findById(req.session.userId) : null;
  next();
});
```

### 22.6 Approach 2: JWT-based authentication

A **JSON Web Token** is a signed string with three parts separated by dots: `header.payload.signature`. The payload contains claims such as the user id and expiry. The server signs it with a secret key. When the token comes back, the server verifies the signature: if it is valid and not expired, the data inside can be trusted. **The payload is only encoded, not encrypted**, so anyone can read it. Never put passwords or secrets in it.

```bash
$ npm install jsonwebtoken cookie-parser
```

**Signing and verifying**

```js
import jwt from 'jsonwebtoken';

const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });

try {
  const payload = jwt.verify(token, process.env.JWT_SECRET);   // throws if invalid or expired
  console.log(payload.sub, payload.role);
} catch (error) {
  console.log(error.name);      // 'TokenExpiredError' or 'JsonWebTokenError'
}
```

**Access token and refresh token (the standard pattern)**

- The **access token** is short-lived (5 to 15 minutes) and is sent with every API request. If it is stolen, the damage window is small.
- The **refresh token** is long-lived (days or weeks), stored in an `httpOnly` cookie, and only used to get new access tokens. Store a hash of it in the database so you can revoke it (log out everywhere, stolen device).

```js
// src/utils/tokens.js
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';

export const signAccessToken = (user) =>
  jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });

export const newRefreshToken = () => crypto.randomBytes(48).toString('hex');
export const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');
```

```js
// Controller (JWT version)
const REFRESH_DAYS = 30;

function setRefreshCookie(res, token) {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/api/auth',                              // only sent to the auth routes
    maxAge: REFRESH_DAYS * 24 * 60 * 60 * 1000,
  });
}

export async function login(req, res) {
  const { email, password } = req.body ?? {};
  const user = await User.findOne({ email: String(email).toLowerCase().trim() }).select('+password');

  if (!user || !(await user.checkPassword(String(password)))) {
    return res.status(401).json({ error: { message: 'Invalid email or password' } });
  }

  const refresh = newRefreshToken();
  await RefreshToken.create({
    user: user.id,
    tokenHash: hashToken(refresh),
    expiresAt: new Date(Date.now() + REFRESH_DAYS * 86400000),
  });

  setRefreshCookie(res, refresh);
  res.json({ accessToken: signAccessToken(user), user });
}

export async function refresh(req, res) {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ error: { message: 'No refresh token' } });

  const record = await RefreshToken.findOne({ tokenHash: hashToken(token), expiresAt: { $gt: new Date() } });
  if (!record) return res.status(401).json({ error: { message: 'Invalid refresh token' } });

  const user = await User.findById(record.user);
  if (!user) return res.status(401).json({ error: { message: 'User no longer exists' } });

  // Rotation: the old refresh token is used up, issue a new one
  await record.deleteOne();
  const next = newRefreshToken();
  await RefreshToken.create({ user: user.id, tokenHash: hashToken(next), expiresAt: new Date(Date.now() + REFRESH_DAYS * 86400000) });

  setRefreshCookie(res, next);
  res.json({ accessToken: signAccessToken(user) });
}

export async function logout(req, res) {
  const token = req.cookies.refreshToken;
  if (token) await RefreshToken.deleteOne({ tokenHash: hashToken(token) });
  res.clearCookie('refreshToken', { path: '/api/auth' });
  res.sendStatus(204);
}
```

(`RefreshToken` is a small Mongoose model with `user`, `tokenHash` and `expiresAt`, and a TTL index on `expiresAt` so MongoDB deletes old rows by itself.)

**The JWT middleware**

```js
// src/middleware/auth.js (JWT version)
import jwt from 'jsonwebtoken';

export function requireAuth(req, res, next) {
  const header = req.get('authorization') ?? '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: { message: 'Missing access token' } });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: payload.sub, role: payload.role };
    next();
  } catch (error) {
    const message = error.name === 'TokenExpiredError' ? 'Access token expired' : 'Invalid access token';
    res.status(401).json({ error: { message } });
  }
}
```

**From the front end**

```js
let accessToken = null;           // keep it in memory (a variable), not localStorage

async function api(path, options = {}) {
  const doFetch = () => fetch(`/api${path}`, {
    ...options,
    credentials: 'include',       // send the refresh cookie
    headers: { 'Content-Type': 'application/json', ...(accessToken && { Authorization: `Bearer ${accessToken}` }) },
  });

  let res = await doFetch();

  if (res.status === 401) {       // access token expired: refresh once and retry
    const refreshRes = await fetch('/api/auth/refresh', { method: 'POST', credentials: 'include' });
    if (refreshRes.ok) {
      accessToken = (await refreshRes.json()).accessToken;
      res = await doFetch();
    }
  }
  return res;
}
```

**Where to store tokens in the browser?** `localStorage` is readable by any script on your page, so one XSS bug exposes the token. An in-memory variable plus an `httpOnly` refresh cookie is safer. If you use cookies for the access token as well, protect against CSRF with `sameSite` and CSRF tokens.

### 22.7 Authorization patterns

**Role-based:** the user has a role, and routes require roles (`requireRole('admin')` above).

**Ownership checks:** a normal user may change only their own resources. This check is often forgotten, and it is a leading cause of data leaks (called *IDOR*: insecure direct object reference).

```js
export async function updatePost(req, res) {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: { message: 'Post not found' } });

  const isOwner = post.author.toString() === req.user.id;
  const isAdmin = req.user.role === 'admin';

  if (!isOwner && !isAdmin) {
    return res.status(403).json({ error: { message: 'You can only edit your own posts' } });
  }

  post.set(req.body);          // validate req.body fields first in a real app
  await post.save();
  res.json({ data: post });
}
```

**Never trust IDs or roles coming from the client.** Take the user's identity from the session or verified token, not from the request body. A request that says `{ "role": "admin" }` must not be believed.

For larger apps look at permission libraries (CASL) or policy files that centralise rules.

### 22.8 Password reset and email verification (the flow)

1. User submits their email to `/forgot-password`.
2. Server creates a random token, stores its **hash** with an expiry (for example 30 minutes), and emails a link `https://site.com/reset-password?token=...`. The response is always the same ('If that email exists, we sent a link') so attackers cannot discover which emails are registered.
3. User opens the link and submits a new password with the token.
4. Server hashes the received token, finds the matching unexpired record, sets the new password, deletes the token and logs out other sessions.

Email verification works the same way. You will send emails in Chapter 24.

### 22.9 Protecting the login route

```bash
$ npm install express-rate-limit
```

```js
import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,         // 15 minutes
  limit: 10,                        // 10 attempts per IP in that window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: { message: 'Too many login attempts. Try again later.' } },
});
```

Extra protections used by serious sites: account lockout or delays after repeated failures, two-factor authentication (TOTP apps, SMS or email codes), notifications for new-device logins, and checking passwords against lists of breached passwords.

### 22.10 Social login and passkeys (the idea)

**OAuth 2.0 and OpenID Connect** let users sign in with Google, GitHub and others. Users do not create another password, and you never see theirs. In Node.js you can use **Passport.js** strategies, or hosted services such as Auth0, Clerk, Supabase Auth, Firebase Auth or Auth.js (used with Next.js, Book 2). **Passkeys** (WebAuthn) replace passwords with device-based cryptographic keys.

For many products, using a trusted auth provider is smarter than building everything yourself, because authentication has many edge cases. Building it once, as you do here, is the best way to learn how it works.

### 22.11 Security checklist for authentication

- Hash passwords with bcrypt, scrypt or argon2; never store or log plain passwords.
- Use HTTPS everywhere in production; mark cookies `secure`, `httpOnly` and `sameSite`.
- Long, random, secret keys from environment variables; rotate them if exposed.
- Same generic error for wrong email and wrong password.
- Rate limit login, registration and password reset.
- Regenerate the session id after login.
- Short-lived access tokens; revocable refresh tokens.
- Check authorization (roles and ownership) on every protected route.
- Never return password hashes or tokens in API responses or logs.
- Validate and sanitise all inputs (Chapter 23).

### 22.12 Common mistakes

- Storing passwords in plain text, or hashing with SHA-256 only.
- Putting JWTs in localStorage and then having an XSS hole.
- Putting sensitive data in a JWT payload.
- Giving access tokens a lifetime of months.
- Forgetting to check ownership (IDOR).
- Trusting `req.body.userId` or `req.body.role`.
- Using a weak, short or hardcoded session or JWT secret and committing it.
- Telling the attacker 'email not found' versus 'wrong password'.
- Not handling `401` on the front end by refreshing or redirecting to login.

### Chapter 22 summary

- Authentication proves identity; authorization decides permissions.
- Hash passwords with bcrypt; never store them directly.
- Sessions suit server-rendered sites; JWT access plus refresh tokens suit APIs and single-page apps.
- Protect routes with middleware, check roles and ownership, rate limit login, and use `httpOnly`, `secure` and `sameSite` cookies.

### Exercises

1. Add register, login, logout and `GET /me` to the Books API using sessions and test them in Thunder Client (it keeps cookies).
2. Add a `createdBy` field to books and let only the owner or an admin edit or delete a book.
3. Build login and register pages with EJS, a navbar that shows the user's name, and a protected `/dashboard` page.
4. Implement the JWT version with refresh token rotation, and a small front end that logs in and calls a protected endpoint.
5. Add `express-rate-limit` to login and register routes and verify the 429 response.
6. Write down, in your own words, what could go wrong if cookies were not `httpOnly`, and if passwords were stored as plain text.

## Chapter 23: Validation, Error Handling and Security

A website that works for friendly users is a prototype. A website that survives careless users, broken clients and attackers is a product. This chapter turns your application into the second kind. The golden rule of this whole chapter: **never trust anything that comes from the client.** Form fields, query strings, headers, cookies, uploaded files and even ids in URLs can all be forged.

### 23.1 Input validation with Zod

Hand-written validation (Chapter 20) gets long and inconsistent. **Zod** is a popular library that describes the allowed shape of data as a schema, validates it, converts types and produces clear error messages. (It also generates TypeScript types, which you will love in Book 2.)

```bash
$ npm install zod
```

```js
import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(60),
  email: z.string().trim().toLowerCase().email('Invalid email'),
  password: z
    .string()
    .min(8, 'At least 8 characters')
    .max(72, 'At most 72 characters')               // bcrypt only uses the first 72 bytes
    .regex(/[A-Za-z]/, 'Needs a letter')
    .regex(/[0-9]/, 'Needs a number'),
  age: z.coerce.number().int().min(13).max(120).optional(),   // coerce turns '25' into 25
  newsletter: z.boolean().default(false),
  role: z.enum(['user', 'admin']).default('user'),
});

const result = registerSchema.safeParse({ name: ' Asha ', email: 'ASHA@Mail.com', password: 'secret123' });

if (!result.success) {
  console.log(result.error.issues);      // [{ path: ['password'], message: '...' }]
} else {
  console.log(result.data);              // cleaned: trimmed, lowercased, defaults applied
}
```

`safeParse` never throws; it returns `{ success, data }` or `{ success: false, error }`. Use `parse` if you want it to throw.

**A reusable validation middleware**

```js
// src/middleware/validate.js
import { ValidationError } from '../utils/AppError.js';

export const validate = (schemas) => (req, res, next) => {
  const problems = [];

  for (const part of ['params', 'query', 'body']) {
    if (!schemas[part]) continue;
    const result = schemas[part].safeParse(req[part] ?? {});
    if (result.success) {
      // In Express 5 req.query is read-only, so keep the cleaned values separately
      req.valid = { ...req.valid, [part]: result.data };
    } else {
      problems.push(...result.error.issues.map((i) => ({ field: `${part}.${i.path.join('.')}`, message: i.message })));
    }
  }

  if (problems.length) return next(new ValidationError('Validation failed', problems));
  next();
};
```

```js
// Usage
const createPostSchema = z.object({
  title: z.string().trim().min(3).max(120),
  body: z.string().trim().min(1).max(20000),
  tags: z.array(z.string().trim().toLowerCase().max(30)).max(10).default([]),
});

const idParams = z.object({ id: z.string().regex(/^[a-f0-9]{24}$/, 'Invalid id') });

router.post('/', requireAuth, validate({ body: createPostSchema }), createPost);
router.get('/:id', validate({ params: idParams }), getPost);

// In the controller use the cleaned data, never the raw req.body
export async function createPost(req, res) {
  const post = await Post.create({ ...req.valid.body, author: req.user.id });
  res.status(201).json({ data: post });
}
```

**Whitelist, do not blacklist.** Zod objects drop unknown keys by default, which prevents **mass assignment** (a user sending `{ "role": "admin", "isPaid": true }` and you saving everything). Always pick the fields you accept.

Other good libraries: **Joi**, **Yup**, **Valibot**, and **express-validator**.

### 23.2 A complete error-handling strategy

There are two kinds of errors:

- **Operational errors:** expected problems in a working program: invalid input, resource not found, wrong password, database unavailable. Handle them and send a helpful message.
- **Programmer errors:** bugs: reading a property of `undefined`, wrong function arguments. You cannot recover sensibly. Log, send a generic 500, and fix the code.

The pattern you already know:

1. Throw typed errors (`NotFoundError`, `ValidationError`, `ForbiddenError`) from services and middleware.
2. Let them reach **one central error-handling middleware**, the last in the chain.
3. That handler decides the status code, the message and the logging.

```js
// src/middleware/errorHandler.js
import { ZodError } from 'zod';
import { config } from '../config/index.js';
import { logger } from '../utils/logger.js';

export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);       // response already started: delegate to Express

  let status = err.status ?? err.statusCode ?? 500;
  let message = err.message;
  let code = err.code;
  let details = err.details;

  if (err instanceof ZodError) {
    status = 400; code = 'VALIDATION_ERROR'; message = 'Validation failed';
    details = err.issues.map((i) => ({ field: i.path.join('.'), message: i.message }));
  } else if (err.name === 'ValidationError' && err.errors) {            // Mongoose
    status = 400; code = 'VALIDATION_ERROR'; message = 'Validation failed';
    details = Object.values(err.errors).map((e) => ({ field: e.path, message: e.message }));
  } else if (err.name === 'CastError') {
    status = 400; code = 'BAD_ID'; message = `Invalid ${err.path}`;
  } else if (err.code === 11000) {
    status = 409; code = 'DUPLICATE'; message = `${Object.keys(err.keyValue)[0]} already exists`;
  } else if (err.type === 'entity.parse.failed') {                       // invalid JSON body
    status = 400; code = 'INVALID_JSON'; message = 'Request body is not valid JSON';
  } else if (err.type === 'entity.too.large') {
    status = 413; code = 'PAYLOAD_TOO_LARGE'; message = 'Request body too large';
  }

  const isServerError = status >= 500;

  logger[isServerError ? 'error' : 'warn']({ err, method: req.method, url: req.originalUrl, status, requestId: req.id });

  res.status(status).json({
    error: {
      message: isServerError && config.env === 'production' ? 'Something went wrong' : message,
      code: code ?? (isServerError ? 'INTERNAL_ERROR' : 'ERROR'),
      ...(details && { details }),
      ...(config.env !== 'production' && isServerError && { stack: err.stack }),
    },
  });
}
```

Never send stack traces or internal messages (database names, file paths, SQL) to users in production. They help attackers.

**Safety nets**

```js
process.on('unhandledRejection', (reason) => {
  logger.error({ err: reason }, 'Unhandled rejection');
  process.exit(1);
});
process.on('uncaughtException', (error) => {
  logger.error({ err: error }, 'Uncaught exception');
  process.exit(1);
});
```

In production, a process manager restarts the app (Chapter 27).

**HTML error pages.** For server-rendered sites, render friendly `404.ejs` and `500.ejs` pages instead of JSON. Check `req.accepts('html')` to decide between page and JSON.

### 23.3 The OWASP Top 10 in plain words

OWASP (owasp.org) publishes a list of the most common web security problems. These are the ones every beginner must know, with the defence for each.

| Problem | What it means | Main defence |
| --- | --- | --- |
| **Injection** (SQL, NoSQL, command) | Attacker data is treated as code or query | Parameterised queries, validated types, never build commands from strings |
| **Broken authentication** | Weak passwords, stolen or guessable sessions and tokens | Chapter 22 checklist, rate limiting, MFA |
| **Broken access control** | Users do things they should not (IDOR, missing role checks) | Check permissions and ownership on every route, server-side |
| **Cross-site scripting (XSS)** | Attacker script runs in other users' browsers | Escape output, `textContent`, template escaping, Content Security Policy |
| **CSRF** | Another site makes the user's browser send a forged request | `sameSite` cookies, CSRF tokens, check Origin header |
| **Security misconfiguration** | Default passwords, debug mode on, open ports, verbose errors | Hardening, `helmet`, production settings, least privilege |
| **Vulnerable dependencies** | A library you use has a known hole | `npm audit`, update regularly, fewer dependencies |
| **Sensitive data exposure** | Secrets, tokens or personal data leak | HTTPS, encryption, no secrets in code or logs |
| **SSRF** | Your server is tricked into calling internal addresses | Validate URLs, allow-lists, block private IP ranges |
| **Insufficient logging** | Attacks go unnoticed | Structured logs, alerts |

### 23.4 Security headers with Helmet

```js
import helmet from 'helmet';

app.use(helmet());
```

One line sets many protective HTTP headers: `Strict-Transport-Security` (force HTTPS), `X-Content-Type-Options: nosniff`, `X-Frame-Options` (prevent clickjacking), a default `Content-Security-Policy` and more. Also hide the framework banner: `app.disable('x-powered-by')` (Helmet does this).

**Content Security Policy (CSP)** tells the browser which sources of scripts, styles and images are allowed. It is the best second line of defence against XSS. If your pages use inline scripts or external CDNs, customise it:

```js
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
}));
```

### 23.5 XSS: defending against script injection

XSS happens when text written by a user is shown on a page as HTML. Example attack: a comment containing `<img src=x onerror=stealCookies()>`.

- With EJS use `<%= %>`, never `<%- %>`, for user data.
- In browser JS use `textContent`, not `innerHTML`.
- If you must allow rich text (a blog editor), sanitise it with a library such as **DOMPurify** (browser) or **sanitize-html** (Node).
- Use CSP and `httpOnly` cookies as extra layers.
- Be careful with URLs: reject `javascript:` links in user-provided hrefs (allow only `http:` and `https:`).

```js
import sanitizeHtml from 'sanitize-html';

const clean = sanitizeHtml(userHtml, {
  allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'ul', 'ol', 'li', 'br'],
  allowedAttributes: { a: ['href'] },
  allowedSchemes: ['http', 'https', 'mailto'],
});
```

### 23.6 CSRF protection

Sessions in cookies are sent automatically, so your forms and state-changing routes need protection.

1. Set session cookies with `sameSite: 'lax'` (or `'strict'`). Modern browsers then do not send them on cross-site POSTs. This stops most CSRF.
2. For defence in depth use a CSRF token: generate a random value per session, put it in a hidden form field (or a header for API calls), and verify it on each unsafe request. A maintained package for this is `csrf-csrf` (double-submit cookie pattern), and older `csurf` is deprecated.
3. Never change data with GET requests (`GET /delete?id=5` is a classic mistake: an image tag on any site can trigger it).
4. APIs that use `Authorization: Bearer` headers (not cookies) are not vulnerable to classic CSRF.

### 23.7 Rate limiting and brute-force protection

```js
import rateLimit from 'express-rate-limit';

// General limit for the whole API
app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: true, legacyHeaders: false }));

// Stricter limits on sensitive routes
app.use('/api/auth', rateLimit({ windowMs: 15 * 60 * 1000, limit: 20 }));
```

Behind a proxy (Render, Railway, Nginx) call `app.set('trust proxy', 1)` or every user will appear to have the same IP. For many servers, store the counters in Redis (`rate-limit-redis`). Also limit body sizes (`express.json({ limit: '100kb' })`), page sizes, and the number of uploads.

### 23.8 Injection defences in detail

**SQL:** parameterised queries or an ORM (Chapter 21).

**NoSQL:** make sure inputs are the types you expect. Zod or `String(value)` ensures a client cannot send `{ "$ne": null }` where you expect a string. Optionally use `express-mongo-sanitize`.

**Command injection:** never pass user input to a shell.

```js
import { execFile } from 'node:child_process';

// DANGEROUS: exec(`convert ${filename} out.png`)   <- filename can be 'a.png; rm -rf /'
// Safer: execFile does not use a shell, arguments are passed separately
execFile('convert', [filename, 'out.png'], (err, stdout) => { /* ... */ });
```

**Path traversal:** never join user input into file paths without checking (Chapter 16). Prefer ids to file names.

**Regular expression denial of service (ReDoS):** badly written regexes can freeze the server on crafted input. Avoid nested quantifiers like `(a+)+` on user input.

**Server-side request forgery (SSRF):** if your server fetches a URL supplied by a user (image preview, webhook), validate it against an allow-list and block private addresses.

### 23.9 Handling secrets and configuration

- Keep secrets in environment variables, never in code, Git, front-end bundles, logs or error messages.
- Add `.env` to `.gitignore`. Commit a `.env.example` with fake values to document what is needed.
- Use different secrets for development and production. Rotate them if they leak.
- Validate configuration at startup so the app fails fast if something is missing:

```js
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  MONGODB_URI: z.string().min(1),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters'),
  SESSION_SECRET: z.string().min(32),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
});

export const env = envSchema.parse(process.env);   // throws a readable error at startup
```

If you ever commit a secret to GitHub by mistake, assume it is stolen: **revoke it and create a new one.** Deleting it in a later commit is not enough, because it stays in the history.

### 23.10 HTTPS and transport security

HTTPS encrypts traffic so that nobody on the network can read or change it. It is required for logins, and browsers mark non-HTTPS sites as 'Not secure'. Hosting platforms provide free certificates automatically (Let's Encrypt). Redirect all HTTP traffic to HTTPS and use the `Strict-Transport-Security` header (Helmet does). Set cookies with `secure: true` in production.

### 23.11 Logging properly

`console.log` is fine for learning. In production use a structured logger such as **pino** that writes JSON lines with levels, timestamps and context, which log services can search.

```bash
$ npm install pino pino-http
$ npm install -D pino-pretty
```

```js
// src/utils/logger.js
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  redact: ['req.headers.authorization', 'req.headers.cookie', 'password', '*.password', 'token'],   // never log secrets
  ...(process.env.NODE_ENV !== 'production' && { transport: { target: 'pino-pretty' } }),
});
```

```js
import pinoHttp from 'pino-http';
app.use(pinoHttp({ logger }));       // logs every request with timing and status
```

Log levels: `error` (something failed), `warn` (suspicious), `info` (normal events), `debug` (details for developers). Log who did what and when for important actions (logins, deletions, permission changes). Never log passwords, tokens or full card numbers.

### 23.12 A hardened app.js

```js
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import pinoHttp from 'pino-http';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import routes from './routes/index.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.set('trust proxy', 1);
app.disable('x-powered-by');

app.use(pinoHttp({ logger }));
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN.split(','), credentials: true }));
app.use(compression());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(cookieParser());
app.use(mongoSanitize());

app.use('/api', rateLimit({ windowMs: 15 * 60 * 1000, limit: 300, standardHeaders: true, legacyHeaders: false }));
app.use('/api', routes);

app.use(notFound);
app.use(errorHandler);

export default app;
```

(Note: with Express 5, `express-mongo-sanitize` may need a version that supports the read-only `req.query`; if it errors, rely on schema validation instead, which is the stronger protection anyway.)

### 23.13 A pre-launch security checklist

- All inputs validated with schemas; unknown fields dropped.
- Passwords hashed; sessions or tokens configured safely; rate limits on auth.
- Every route checks authentication and authorization (including ownership).
- `helmet`, CORS restricted to your domains, HTTPS enforced.
- Output escaped; user HTML sanitised; CSP enabled.
- No secrets in the repository; environment variables validated at startup.
- `npm audit` clean or understood; dependencies up to date.
- Errors do not leak internals; logs do not contain secrets.
- Database user has minimal rights; database is not open to the whole internet.
- Backups exist and have been tested.

### 23.14 Common mistakes

- Validating only in the browser.
- Accepting whatever fields `req.body` contains and saving them (mass assignment).
- Returning detailed error messages or stack traces to users.
- Using `cors({ origin: '*' })` for an API with cookies.
- Logging passwords, tokens and authorization headers.
- Disabling security features (like TLS checks) 'just to make it work'.
- Believing that 'nobody will try to hack a small site'. Automated bots scan every address on the internet constantly.

### Chapter 23 summary

- Validate every input on the server using schemas (Zod), and use only the cleaned data.
- Handle errors in one central middleware; separate operational errors from bugs; never leak internals.
- Learn the main attack families (injection, XSS, CSRF, broken access control) and their defences.
- Use Helmet, CORS, rate limiting, HTTPS, safe cookies, structured logs with redaction, and keep secrets out of code.

### Exercises

1. Replace the hand-written validation in the Books API with Zod schemas and the `validate` middleware.
2. Try these attacks on a deliberately weak copy of your app, then fix them: HTML in a comment (XSS), `{ "$ne": null }` as a login email (NoSQL injection), `PATCH` with `{ "role": "admin" }` (mass assignment).
3. Add pino logging with redaction and verify that passwords never appear in logs.
4. Add a `.env.example`, environment validation at startup and a failing-fast check for a missing secret.
5. Run `npm audit` on your project and read each report entry.
6. Review one of your routes with the checklist in 23.13 and write down what is missing.

## Chapter 24: File Uploads, Email and Environment Configuration

Real websites let users upload avatars and documents, send emails (welcome messages, password resets, receipts), and behave differently on your laptop and on the live server. This chapter gives you those three practical skills.

### 24.1 Uploading files with Multer

A normal form body is text. Files need a different encoding called **multipart/form-data**. **Multer** is the standard Express middleware that parses it and saves files.

```bash
$ npm install multer
```

**The HTML form** (note `enctype` and the `name` of the file input):

```html
<form action='/api/profile/avatar' method='POST' enctype='multipart/form-data'>
  <input type='file' name='avatar' accept='image/png, image/jpeg, image/webp' required />
  <button type='submit'>Upload</button>
</form>
```

**Server: saving to disk**

```js
// src/middleware/upload.js
import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { ValidationError } from '../utils/AppError.js';

const UPLOAD_DIR = path.resolve('uploads');
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const ALLOWED = new Map([
  ['image/jpeg', '.jpg'],
  ['image/png', '.png'],
  ['image/webp', '.webp'],
]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    // NEVER use the user's file name: it can contain ../ or overwrite other files
    const ext = ALLOWED.get(file.mimetype) ?? '';
    cb(null, `${crypto.randomUUID()}${ext}`);
  },
});

export const uploadImage = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024, files: 1 },        // 2 MB, one file
  fileFilter: (req, file, cb) => {
    if (!ALLOWED.has(file.mimetype)) {
      return cb(new ValidationError('Only JPEG, PNG and WebP images are allowed'));
    }
    cb(null, true);
  },
});
```

```js
// route
import { uploadImage } from '../middleware/upload.js';

router.post('/avatar', requireAuth, uploadImage.single('avatar'), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: { message: 'No file uploaded' } });

  const url = `/uploads/${req.file.filename}`;
  await User.findByIdAndUpdate(req.user.id, { avatarUrl: url });

  res.status(201).json({ data: { url, size: req.file.size, type: req.file.mimetype } });
});
```

Multer puts the file information in `req.file` (or `req.files` for several) and the text fields in `req.body`. Variants:

```js
upload.single('avatar');                               // one file, field named avatar
upload.array('photos', 5);                             // up to 5 files in the field photos
upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'gallery', maxCount: 8 }]);
multer().none();                                       // multipart form with only text fields
```

**Serving uploaded files**

```js
app.use('/uploads', express.static('uploads', { maxAge: '7d', index: false }));
```

**Handling Multer errors** (add to the error handler):

```js
import multer from 'multer';

if (err instanceof multer.MulterError) {
  status = 400;
  message = err.code === 'LIMIT_FILE_SIZE' ? 'File is too large (max 2 MB)' : err.message;
}
```

### 24.2 Upload security

Uploads are a favourite attack route. Follow these rules:

- **Limit size and count** (`limits`).
- **Allow-list file types.** The `mimetype` comes from the client and can be faked. For important cases check the real content by reading the first bytes ('magic numbers') with a package such as `file-type`.
- **Generate your own file names.** Never trust the original name.
- **Never let users upload executable code into a folder that your server runs or serves as HTML.** Serve uploads from a separate folder or domain, and do not serve `.html` or `.svg` uploads inline (SVG can contain scripts).
- **Require authentication** for upload routes and rate limit them.
- **Scan or re-encode images** (for example resize with `sharp`), which also strips hidden data and reduces size.
- **Do not store uploads on the app server disk in production** (next section).

**Resizing images with sharp**

```bash
$ npm install sharp
```

```js
import sharp from 'sharp';

await sharp(req.file.path)
  .resize(256, 256, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile(`uploads/avatar-${req.user.id}.webp`);
```

### 24.3 Where to store files in production

Many hosting platforms have an **ephemeral filesystem**: files written to disk disappear when the app restarts or is redeployed, and files are not shared between several instances. In production, store uploads in **object storage**:

- Amazon S3, Cloudflare R2, Google Cloud Storage, Backblaze B2, Supabase Storage.
- Image services such as Cloudinary or ImageKit add resizing and a CDN.

Two common patterns:

1. **Upload through your server**, then forward to storage (simple, but your server handles the bytes). Use `multer.memoryStorage()` and send `req.file.buffer` to the storage SDK.
2. **Direct upload with a presigned URL**: your server creates a short-lived signed URL; the browser uploads straight to storage. This saves server bandwidth and is the standard for large files.

```js
// Pattern 2 with the AWS SDK v3 (also works with Cloudflare R2)
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'node:crypto';

const s3 = new S3Client({
  region: process.env.S3_REGION,
  credentials: { accessKeyId: process.env.S3_KEY, secretAccessKey: process.env.S3_SECRET },
});

router.post('/uploads/sign', requireAuth, async (req, res) => {
  const { contentType } = req.body;
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(contentType)) {
    return res.status(400).json({ error: { message: 'Unsupported type' } });
  }

  const key = `avatars/${req.user.id}/${crypto.randomUUID()}`;
  const command = new PutObjectCommand({ Bucket: process.env.S3_BUCKET, Key: key, ContentType: contentType });
  const url = await getSignedUrl(s3, command, { expiresIn: 60 });     // valid for 60 seconds

  res.json({ uploadUrl: url, key });
});
```

The browser then does `fetch(uploadUrl, { method: 'PUT', body: file, headers: { 'Content-Type': file.type } })`.

### 24.4 Uploading from the front end with fetch

```js
const input = document.querySelector('#avatar');

input.addEventListener('change', async () => {
  const file = input.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) return alert('Max 2 MB');

  const formData = new FormData();
  formData.append('avatar', file);                  // same name as upload.single('avatar')

  const res = await fetch('/api/profile/avatar', {
    method: 'POST',
    body: formData,                                 // do NOT set Content-Type yourself
    credentials: 'include',
  });

  const result = await res.json();
  if (!res.ok) return alert(result.error.message);

  document.querySelector('#preview').src = result.data.url;
});
```

Show an instant preview before uploading with `URL.createObjectURL(file)`.

### 24.5 Sending email with Nodemailer

```bash
$ npm install nodemailer
```

Email needs an **SMTP server** (or an email API). Do not use a personal Gmail account for production. Choose a transactional email provider: Resend, SendGrid, Postmark, Amazon SES, Brevo, Mailgun. Each gives SMTP settings or an HTTP API and the ability to verify your domain (SPF, DKIM, DMARC records) so that your emails do not land in spam.

For development use **Ethereal** (free fake inbox from Nodemailer) or **Mailpit/MailHog** (a local inbox in Docker). No real emails are sent.

```js
// src/services/mailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_PORT === '465',           // true for port 465, false for 587 (STARTTLS)
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

export async function sendMail({ to, subject, text, html }) {
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM || 'My Site <no-reply@mysite.com>',
    to,
    subject,
    text,          // plain-text version (always include it)
    html,
  });
  return info.messageId;
}

export function welcomeEmail(user) {
  const name = escapeHtml(user.name);
  return {
    to: user.email,
    subject: 'Welcome to My Site!',
    text: `Hi ${user.name}, welcome to My Site. We are glad you are here.`,
    html: `<h1>Welcome, ${name}!</h1><p>We are glad you are here.</p>`,
  };
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
```

**Password reset email**

```js
export async function forgotPassword(req, res) {
  const email = String(req.body?.email ?? '').toLowerCase().trim();
  const user = await User.findOne({ email });

  if (user) {
    const token = crypto.randomBytes(32).toString('hex');
    user.resetTokenHash = crypto.createHash('sha256').update(token).digest('hex');
    user.resetTokenExpires = new Date(Date.now() + 30 * 60 * 1000);
    await user.save({ validateBeforeSave: false });

    const link = `${process.env.APP_URL}/reset-password?token=${token}`;
    await sendMail({
      to: user.email,
      subject: 'Reset your password',
      text: `Open this link within 30 minutes to reset your password: ${link}`,
      html: `<p>Open this link within 30 minutes to reset your password:</p><p><a href='${link}'>Reset password</a></p>`,
    });
  }

  // The same answer whether the email exists or not
  res.json({ message: 'If that email is registered, we sent a reset link.' });
}
```

**Email good practice**

- Send slow emails **in the background**, not before responding to the user. Either do not `await` it (and catch its errors), or better, use a **job queue** such as BullMQ (Redis) so that failures are retried.
- Keep the content of emails short, with a plain-text alternative.
- Escape user data you put in HTML emails.
- Never put real secrets in links that live longer than necessary; use expiry and one-time tokens.
- Add an unsubscribe link for marketing emails (legal requirement in many countries).

### 24.6 Environment configuration done properly

Your code stays the same, but the settings differ between **development** (your laptop), **testing** and **production** (the live server): database address, secrets, email credentials, allowed origins, log level. These belong in **environment variables**.

**The .env file** (for local development only):

```text
NODE_ENV=development
PORT=4000
APP_URL=http://localhost:4000
MONGODB_URI=mongodb://127.0.0.1:27017/mysite_dev
SESSION_SECRET=replace-with-a-long-random-string-of-at-least-32-characters
JWT_SECRET=another-long-random-string-of-at-least-32-characters
SMTP_HOST=localhost
SMTP_PORT=1025
MAIL_FROM=My Site <no-reply@localhost>
```

**Loading it.** Modern Node.js can load the file itself:

```bash
$ node --env-file=.env server.js
```

Or with the `dotenv` package (works on every Node version):

```bash
$ npm install dotenv
```

```js
import 'dotenv/config';      // must be the FIRST import in your entry file
```

**Rules**

1. `.env` is in `.gitignore`. Never commit it.
2. Commit a `.env.example` listing every variable with fake values, so teammates and future you know what to set.
3. In production you do not upload the `.env` file. You enter the variables in your hosting dashboard (Chapter 27).
4. All values are strings. Convert numbers and booleans (`Number(process.env.PORT)`, `process.env.FLAG === 'true'`).
5. Read `process.env` in **one** place (a `config` or `env` module), validate it at startup (Chapter 23) and import the validated object elsewhere.
6. Use `NODE_ENV=production` on the server. Express and many libraries run faster and safer in that mode (less detailed errors, view caching).

```js
// src/config/index.js
const required = ['MONGODB_URI', 'SESSION_SECRET'];
const missing = required.filter((name) => !process.env[name]);
if (missing.length) {
  throw new Error(`Missing environment variables: ${missing.join(', ')}`);
}

export const config = {
  env: process.env.NODE_ENV ?? 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: Number(process.env.PORT ?? 3000),
  appUrl: process.env.APP_URL ?? 'http://localhost:3000',
  mongoUri: process.env.MONGODB_URI,
  sessionSecret: process.env.SESSION_SECRET,
};
```

**Feature flags and per-environment behaviour**

```js
if (config.isProd) {
  app.use(requireHttps);
} else {
  app.use(morgan('dev'));
}
```

### 24.7 Other practical backend tasks (a quick tour)

- **Scheduled jobs (cron):** `node-cron` or the hosting platform's scheduler for nightly cleanups and reports.
- **Background jobs and queues:** BullMQ with Redis for emails, image processing and imports.
- **Caching:** Redis or in-memory caching for expensive queries; HTTP caching headers for static content.
- **Real-time features:** WebSockets with `ws` or `Socket.IO` for chat, live notifications and dashboards.
- **Payments:** Stripe or Razorpay. Never handle raw card numbers yourself; use their hosted checkout and verify payments with webhooks.
- **Pagination, search and filters:** covered in Chapters 18 and 20.
- **Generating PDFs and spreadsheets:** `pdfkit`, `puppeteer`, `exceljs`.
- **Internationalisation:** `i18next` for multiple languages.

```js
// A tiny cron-like job with node-cron
import cron from 'node-cron';

cron.schedule('0 3 * * *', async () => {        // every day at 03:00
  const result = await Session.deleteMany({ expiresAt: { $lt: new Date() } });
  logger.info({ removed: result.deletedCount }, 'Cleaned old sessions');
});
```

### 24.8 Common mistakes

- Forgetting `enctype='multipart/form-data'` or setting `Content-Type` manually in `fetch` (it needs the boundary that the browser adds).
- Field name mismatch between `<input name='avatar'>` and `upload.single('avatar')`.
- Trusting the original file name and extension.
- Saving uploads to a disk that disappears on deploy.
- Waiting for an email provider inside the request, making responses slow or failing when the provider is down.
- Committing `.env`, or putting SMTP passwords or S3 keys in the code.
- Using different names for the same variable in code and in the hosting dashboard.
- Forgetting that environment variables are strings (`'false'` is truthy).

### Chapter 24 summary

- Multer handles multipart uploads; limit size and types, create your own file names, and store files in object storage in production.
- Nodemailer sends email via SMTP or provider APIs; use a fake inbox in development, send in the background in production.
- Keep configuration in environment variables, with a validated config module and a committed `.env.example`.

### Exercises

1. Add avatar upload to your user profile with a 2 MB limit and JPEG, PNG and WebP only. Show the image on the profile page.
2. Resize uploaded avatars to 256 by 256 with `sharp`.
3. Set up Ethereal or Mailpit and send a welcome email on registration, without delaying the response.
4. Implement the password reset flow end to end (request, email, reset form, new password).
5. Create `.env.example`, a validated config module, and a startup check that exits with a clear message when a variable is missing.
6. Research: sign up for a free tier of Cloudinary, Cloudflare R2 or Supabase Storage and upload one file from Node.js.

## Chapter 25: Testing Your Code

How do you know your website still works after you change something? You could click through every page by hand after every edit, but that is slow and you will forget things. **Automated tests** are small programs that check your program for you, in seconds, every time. Teams that test ship faster, because they can change code without fear.

### 25.1 Why test?

- **Catch bugs early**, when they are cheap to fix.
- **Refactor safely:** improve the code and see immediately whether you broke anything.
- **Document behaviour:** tests show how the code is supposed to be used.
- **Confidence to deploy**, even on Friday.

You do not need to test everything. Test what matters: business rules, calculations, validation, authentication, permissions, and the main user paths.

### 25.2 Kinds of tests

| Type | What it checks | Speed | Example |
| --- | --- | --- | --- |
| **Unit** | One function or module in isolation | Very fast | `calculateTotal([...])` returns the right sum |
| **Integration** | Several parts working together (route, service, database) | Fast to medium | `POST /api/books` really stores a book and returns 201 |
| **End-to-end (E2E)** | The whole system through a real browser | Slow | A user signs up, logs in and buys something (Playwright, Cypress) |

The **testing pyramid** suggests many unit tests, fewer integration tests and a handful of E2E tests.

### 25.3 Choosing a test runner

Three good options in the Node.js world:

- **node:test** (built into Node.js 18 and later): no installation, enough for many projects.
- **Jest:** the most popular, with a huge ecosystem, mocking and coverage built in.
- **Vitest:** very fast, Jest-compatible API, works great with ESM and TypeScript, and is the usual choice with Vite and in Book 2.

The ideas are identical. We start with `node:test` (nothing to install), then show Jest and Vitest syntax, which is almost the same.

### 25.4 Your first unit tests with node:test

A function to test:

```js
// src/utils/price.js
export function applyDiscount(price, percent) {
  if (typeof price !== 'number' || price < 0) throw new RangeError('Invalid price');
  if (percent < 0 || percent > 100) throw new RangeError('Invalid percent');
  return Math.round(price * (1 - percent / 100) * 100) / 100;
}

export function cartTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}
```

The tests:

```js
// src/utils/price.test.js
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount, cartTotal } from './price.js';

describe('applyDiscount', () => {
  test('takes 10 percent off', () => {
    assert.equal(applyDiscount(200, 10), 180);
  });

  test('returns the same price for 0 percent', () => {
    assert.equal(applyDiscount(99.99, 0), 99.99);
  });

  test('rejects invalid percent', () => {
    assert.throws(() => applyDiscount(100, 150), RangeError);
  });
});

describe('cartTotal', () => {
  test('sums price times quantity', () => {
    const items = [{ price: 100, qty: 2 }, { price: 50, qty: 1 }];
    assert.equal(cartTotal(items), 250);
  });

  test('returns 0 for an empty cart', () => {
    assert.equal(cartTotal([]), 0);
  });
});
```

Run with:

```bash
$ node --test
```

Node finds files named `*.test.js` and prints which tests passed or failed. Add `"test": "node --test"` to your npm scripts.

**The anatomy of a test: Arrange, Act, Assert**

1. **Arrange:** prepare the data and objects.
2. **Act:** call the code you are testing.
3. **Assert:** check the result.

Name tests like sentences that say what the code should do: 'rejects invalid percent', not 'test2'. Test one idea per test.

**Common assertions**

```js
assert.equal(actual, expected);            // strict equality ===
assert.deepEqual(actualObject, expectedObject);   // compares contents of objects and arrays
assert.ok(value);                          // truthy
assert.throws(() => fn(), ErrorType);      // fn must throw
await assert.rejects(asyncFn(), /message/);  // async function must reject
```

### 25.5 Jest and Vitest

They add nicer assertions (`expect`), mocks, watch mode and coverage.

```bash
$ npm install -D vitest          # or: npm install -D jest
```

```json
"scripts": { "test": "vitest run", "test:watch": "vitest", "coverage": "vitest run --coverage" }
```

```js
import { describe, it, expect } from 'vitest';      // in Jest these are global; no import needed
import { applyDiscount } from './price.js';

describe('applyDiscount', () => {
  it('takes 10 percent off', () => {
    expect(applyDiscount(200, 10)).toBe(180);
  });

  it('rejects invalid percent', () => {
    expect(() => applyDiscount(100, 150)).toThrow(RangeError);
  });

  it('compares objects and arrays with toEqual', () => {
    expect({ a: 1, b: [1, 2] }).toEqual({ a: 1, b: [1, 2] });
  });
});
```

Useful `expect` matchers: `toBe` (===), `toEqual` (deep), `toBeTruthy`, `toBeNull`, `toContain`, `toHaveLength`, `toMatchObject`, `toThrow`, `resolves` and `rejects` for promises, `not` to negate.

**Setup and teardown hooks**

```js
import { beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

beforeAll(async () => { /* once before all tests: connect to the test database */ });
afterAll(async () => { /* once after all: disconnect */ });
beforeEach(async () => { /* before every test: clear data */ });
```

### 25.6 Mocks, stubs and spies

A unit test should not send real emails or call real payment services. A **mock** replaces a dependency with a controlled fake.

```js
import { vi, it, expect } from 'vitest';       // jest: use jest.fn() and jest.mock()

it('sends a welcome email after registration', async () => {
  const sendMail = vi.fn().mockResolvedValue('message-id');   // a fake function
  const registerUser = makeRegisterUser({ sendMail });          // pass the dependency in

  await registerUser({ name: 'Asha', email: 'asha@example.com' });

  expect(sendMail).toHaveBeenCalledTimes(1);
  expect(sendMail).toHaveBeenCalledWith(expect.objectContaining({ to: 'asha@example.com' }));
});
```

This works well because the code receives its dependencies as arguments (**dependency injection**). Code written this way is easy to test. You can also replace whole modules with `vi.mock('./mailer.js')`, and fake the clock with `vi.useFakeTimers()`.

### 25.7 Integration tests for an Express API with Supertest

Because in Chapter 18 you separated `app` from `listen`, tests can use the app without opening a port. **Supertest** sends requests directly to it.

```bash
$ npm install -D supertest
```

```js
// tests/books.test.js
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../src/app.js';
import { Book } from '../src/models/Book.js';

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();          // a real MongoDB in memory, no setup needed
  await mongoose.connect(mongo.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

beforeEach(async () => {
  await Book.deleteMany({});                         // every test starts with an empty database
});

describe('POST /api/books', () => {
  it('creates a book and returns 201', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'Dune', author: 'Frank Herbert', year: 1965 })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(res.body.data).toMatchObject({ title: 'Dune', author: 'Frank Herbert' });
    expect(await Book.countDocuments()).toBe(1);
  });

  it('returns 400 for a missing title', async () => {
    const res = await request(app).post('/api/books').send({ author: 'Nobody' }).expect(400);
    expect(res.body.error.message).toBeDefined();
  });
});

describe('GET /api/books/:id', () => {
  it('returns 404 for an unknown id', async () => {
    await request(app).get('/api/books/64b64b64b64b64b64b64b64b').expect(404);
  });

  it('returns the book', async () => {
    const book = await Book.create({ title: 'Emma', author: 'Jane Austen' });
    const res = await request(app).get(`/api/books/${book.id}`).expect(200);
    expect(res.body.data.title).toBe('Emma');
  });
});
```

**Testing protected routes.** Log in once inside the test and keep the cookie or token:

```js
it('rejects anonymous users', async () => {
  await request(app).delete('/api/books/123').expect(401);
});

it('allows a logged-in user', async () => {
  const agent = request.agent(app);                     // keeps cookies between requests
  await agent.post('/api/auth/register').send({ name: 'A', email: 'a@x.com', password: 'password1' }).expect(201);
  await agent.get('/api/auth/me').expect(200);
});
```

For JWT: ` request(app).get('/api/me').set('Authorization',  `Bearer ${token}`)`.

**Test database rules:** never run tests against your development or production database. Use an in-memory database (`mongodb-memory-server`), a separate test database, or a throw-away Docker container, and clean it before each test.

### 25.8 Test-driven development (TDD) in one minute

TDD flips the order: **Red** (write a failing test first), **Green** (write the least code to pass), **Refactor** (clean up while tests stay green). You do not have to use TDD always, but writing the test first for a tricky function or a bug is a great habit. For a bug: first write a test that reproduces it (it fails), fix the code (it passes), and the bug can never silently return.

### 25.9 Code coverage

Coverage reports show which lines your tests run.

```bash
$ npx vitest run --coverage
$ node --test --experimental-test-coverage
```

Coverage helps find untested areas. Do not chase 100 percent as a goal: it is possible to have full coverage with weak tests. Aim for meaningful tests of critical code, and for many projects 70 to 90 percent is healthy.

### 25.10 Testing the front end (a short look)

- **DOM tests** with Vitest or Jest using `jsdom` or `happy-dom` simulate a browser.
- **Testing Library** (`@testing-library/dom`, `@testing-library/react` in Book 2) tests the page the way a user uses it: find a button by its label, click it, check the text.
- **End-to-end tests** with **Playwright** or **Cypress** drive a real browser through whole flows.

```js
// Playwright example (sketch)
import { test, expect } from '@playwright/test';

test('a user can add a task', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByPlaceholder('What needs to be done?').fill('Write tests');
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('Write tests')).toBeVisible();
});
```

### 25.11 Good testing habits

- Tests must be **independent**: each can run alone and in any order.
- Tests must be **deterministic**: no randomness, no real time, no real network. Fake them.
- Keep tests **fast**; slow tests are not run.
- Test **behaviour**, not implementation details. If you rename a private variable, no test should break.
- Write **clear failure messages** and meaningful test names.
- Run tests **automatically** on every push with continuous integration (Chapter 27: GitHub Actions).
- Treat test code as real code: keep it clean.

### 25.12 Common mistakes

- Tests that depend on each other or on leftover data.
- Testing against the real database or real email service.
- Forgetting `await` in async tests, so the test passes before the check runs.
- Mocking so much that the test checks only the mocks.
- Writing tests only after everything is done and then skipping hard cases.
- Ignoring a failing test or marking it `skip` forever.

### Chapter 25 summary

- Tests are programs that check your program: unit, integration and end-to-end.
- Use `node:test`, Jest or Vitest; structure tests as arrange, act, assert, with clear names.
- Mock external services; test Express apps with Supertest and a temporary database.
- Run tests automatically, and use coverage as a guide, not a goal.

### Exercises

1. Write unit tests for five functions from earlier chapters (such as `titleCase`, `isValidEmail`, `paginate`).
2. Add Supertest integration tests for all Books API endpoints, including error cases (400, 404).
3. Add tests for register, login and a protected route.
4. Reproduce a bug on purpose, write a failing test for it, then fix the code.
5. Generate a coverage report and write a test for one uncovered branch.
6. Add a `test` script and run it before each commit.

## Chapter 26: Capstone Project: InkBlog, a Complete Full-Stack Website

Now you combine everything. You will build **InkBlog**, a multi-user blogging website with accounts, posts written in Markdown, cover images, comments, likes, tags, search, pagination and an admin role. It is a real, portfolio-ready project that uses every skill from this book. Take your time: build it feature by feature, run it after each step, and commit to Git often.

### 26.1 What InkBlog does

**Visitors** can read posts, search, filter by tag, paginate and read comments.

**Registered users** can additionally: create, edit and delete their own posts (Markdown, cover image upload, tags), comment, like posts, edit their profile with an avatar, and see a dashboard of their posts.

**Admins** can delete any post or comment.

**Technical features:** server-rendered pages (EJS), sessions stored in MongoDB, hashed passwords, CSRF protection, validation with Zod, sanitised Markdown, file uploads, security headers, rate limiting, structured error pages, tests, and deployment (Chapter 27).

### 26.2 Architecture and folders

```text
inkblog/
  package.json
  server.js
  .env.example
  .gitignore
  uploads/                    (created at runtime, ignored by Git)
  public/
    css/style.css
    js/main.js
  src/
    app.js
    config/
      env.js
      db.js
    models/
      User.js
      Post.js
      Comment.js
    services/
      postService.js
    controllers/
      authController.js
      postController.js
      commentController.js
      userController.js
    routes/
      index.js
      auth.js
      posts.js
      users.js
    middleware/
      auth.js
      csrf.js
      locals.js
      upload.js
      validate.js
      errors.js
    schemas/
      index.js
    utils/
      AppError.js
      markdown.js
      slug.js
    views/
      partials/header.ejs, footer.ejs
      home.ejs, post.ejs, post-form.ejs
      login.ejs, register.ejs, dashboard.ejs, profile.ejs
      404.ejs, error.ejs
  tests/
    auth.test.js
    posts.test.js
```

The flow for a request: **route, middleware (auth, csrf, validation, upload), controller (HTTP), service (business rules and ownership), model (database)**, then the controller renders a view.

### 26.3 Step 1: Project setup

```bash
$ mkdir inkblog && cd inkblog
$ git init
$ npm init -y
$ npm install express ejs mongoose express-session connect-mongo bcryptjs zod multer sharp helmet compression morgan express-rate-limit marked sanitize-html
$ npm install -D vitest supertest mongodb-memory-server
```

`package.json` essentials:

```json
{
  "name": "inkblog",
  "version": "1.0.0",
  "type": "module",
  "engines": { "node": ">=20" },
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch --env-file=.env server.js",
    "test": "vitest run"
  }
}
```

`.gitignore`:

```text
node_modules
.env
uploads
coverage
```

`.env.example` (copy to `.env` and fill in):

```text
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000
MONGODB_URI=mongodb://127.0.0.1:27017/inkblog
SESSION_SECRET=change-me-to-a-random-string-of-at-least-32-characters
```

### 26.4 Step 2: Configuration, database and error types

```js
// src/config/env.js
import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  APP_URL: z.string().default('http://localhost:3000'),
  MONGODB_URI: z.string().min(1),
  SESSION_SECRET: z.string().min(32),
});

export const env = schema.parse(process.env);
export const isProd = env.NODE_ENV === 'production';
```

```js
// src/config/db.js
import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDb(uri = env.MONGODB_URI) {
  await mongoose.connect(uri);
  console.log('MongoDB connected');
}
```

```js
// src/utils/AppError.js
export class AppError extends Error {
  constructor(message, status = 500) { super(message); this.status = status; }
}
export class NotFoundError extends AppError { constructor(what = 'Page') { super(`${what} not found`, 404); } }
export class ForbiddenError extends AppError { constructor(msg = 'You are not allowed to do that') { super(msg, 403); } }
export class ValidationError extends AppError {
  constructor(errors) { super('Validation failed', 422); this.errors = errors; }
}
```

### 26.5 Step 3: Models

```js
// src/models/User.js  (extends Chapter 22)
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, minlength: 2, maxlength: 60 },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, select: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  bio: { type: String, maxlength: 300, default: '' },
  avatarUrl: { type: String, default: '' },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.checkPassword = function (plain) {
  return bcrypt.compare(plain, this.password);
};

export const User = mongoose.model('User', userSchema);
```

```js
// src/models/Post.js
import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, minlength: 3, maxlength: 120 },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, trim: true, maxlength: 300, default: '' },
  content: { type: String, required: true, maxlength: 50000 },      // Markdown source
  coverUrl: { type: String, default: '' },
  tags: { type: [String], default: [] },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  commentCount: { type: Number, default: 0 },
}, { timestamps: true });

postSchema.index({ tags: 1, createdAt: -1 });
postSchema.index({ createdAt: -1 });

export const Post = mongoose.model('Post', postSchema);
```

```js
// src/models/Comment.js
import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true, index: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  body: { type: String, required: true, trim: true, minlength: 1, maxlength: 1000 },
}, { timestamps: true });

export const Comment = mongoose.model('Comment', commentSchema);
```

### 26.6 Step 4: Utilities (slug and safe Markdown)

```js
// src/utils/slug.js
import crypto from 'node:crypto';

export function slugify(text) {
  const base = text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')          // remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  return `${base || 'post'}-${crypto.randomBytes(3).toString('hex')}`;     // unique suffix
}
```

```js
// src/utils/markdown.js
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const allowedTags = [
  ...sanitizeHtml.defaults.allowedTags, 'h1', 'h2', 'h3', 'img', 'pre', 'code', 'blockquote', 'hr',
];

export function renderMarkdown(source) {
  const dirty = marked.parse(source, { async: false });
  return sanitizeHtml(dirty, {
    allowedTags,
    allowedAttributes: { a: ['href', 'title'], img: ['src', 'alt', 'title'], code: ['class'] },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: { a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer nofollow', target: '_blank' }) },
  });
}
```

Users write Markdown; we convert to HTML and **sanitise** the result, so a post can never inject scripts. Because the HTML is cleaned, it is safe to print it unescaped (`<%- %>`) in the view.

### 26.7 Step 5: Validation schemas

```js
// src/schemas/index.js
import { z } from 'zod';

const tagList = z
  .string()
  .default('')
  .transform((s) => [...new Set(s.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean))].slice(0, 5))
  .pipe(z.array(z.string().max(24)));

export const registerSchema = z.object({
  name: z.string().trim().min(2, 'Name must have at least 2 characters').max(60),
  email: z.string().trim().toLowerCase().email('Enter a valid email'),
  password: z.string().min(8, 'Password must have at least 8 characters').max(72),
});

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1),
});

export const postSchema = z.object({
  title: z.string().trim().min(3, 'Title must have at least 3 characters').max(120),
  excerpt: z.string().trim().max(300).default(''),
  content: z.string().trim().min(10, 'Write at least 10 characters').max(50000),
  tags: tagList,
});

export const commentSchema = z.object({
  body: z.string().trim().min(1, 'Comment cannot be empty').max(1000),
});
```

```js
// src/middleware/validate.js
// Parses req.body with a schema; on failure re-renders the form with errors and typed values
export const validateForm = (schema, { view, extra = () => ({}) }) => (req, res, next) => {
  const result = schema.safeParse(req.body ?? {});
  if (result.success) {
    req.valid = result.data;
    return next();
  }
  const errors = result.error.issues.map((i) => i.message);
  const values = { ...req.body };
  delete values.password;                                // never send passwords back to the page
  res.status(422).render(view, { title: 'Please fix the errors', errors, values, ...extra(req) });
};
```

### 26.8 Step 6: Middleware (locals, CSRF, auth, upload, errors)

```js
// src/middleware/locals.js: values every view can use
import { User } from '../models/User.js';

export async function attachLocals(req, res, next) {
  res.locals.currentUser = null;
  if (req.session.userId) {
    const user = await User.findById(req.session.userId).lean();
    if (user) { res.locals.currentUser = user; req.user = user; req.user.id = String(user._id); }
    else delete req.session.userId;
  }
  res.locals.flash = req.session.flash ?? null;
  delete req.session.flash;
  res.locals.path = req.path;
  res.locals.errors = [];
  res.locals.values = {};
  next();
}

export const flash = (req, type, text) => { req.session.flash = { type, text }; };
```

```js
// src/middleware/csrf.js: a simple synchroniser-token CSRF defence
import crypto from 'node:crypto';
import { AppError } from '../utils/AppError.js';

export function csrfToken(req, res, next) {
  req.session.csrf ??= crypto.randomBytes(32).toString('hex');
  res.locals.csrfToken = req.session.csrf;
  next();
}

function valid(req) {
  const sent = req.body?._csrf ?? req.get('x-csrf-token');
  const real = req.session.csrf;
  if (typeof sent !== 'string' || !real || sent.length !== real.length) return false;
  return crypto.timingSafeEqual(Buffer.from(sent), Buffer.from(real));
}

// Runs for all unsafe methods, except multipart forms (those are verified after Multer parses them)
export function csrfGuard(req, res, next) {
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) return next();
  if (req.is('multipart/form-data')) return next();
  if (!valid(req)) return next(new AppError('Invalid or missing CSRF token', 403));
  next();
}

// Use this AFTER the upload middleware on multipart routes
export function csrfAfterUpload(req, res, next) {
  if (!valid(req)) return next(new AppError('Invalid or missing CSRF token', 403));
  next();
}
```

Every form contains `<input type='hidden' name='_csrf' value='<%= csrfToken %>'>`, and fetch calls send the `X-CSRF-Token` header.

```js
// src/middleware/auth.js
import { flash } from './locals.js';

export function requireAuth(req, res, next) {
  if (req.user) return next();
  req.session.returnTo = req.originalUrl;
  flash(req, 'error', 'Please log in to continue.');
  res.redirect('/login');
}

export function guestOnly(req, res, next) {
  if (!req.user) return next();
  res.redirect('/dashboard');
}
```

```js
// src/middleware/upload.js (adapted from Chapter 24)
import multer from 'multer';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { ValidationError } from '../utils/AppError.js';

const DIR = path.resolve('uploads');
fs.mkdirSync(DIR, { recursive: true });

const upload = multer({
  storage: multer.memoryStorage(),                         // we resize in memory, then write our own file
  limits: { fileSize: 3 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) =>
    ['image/jpeg', 'image/png', 'image/webp'].includes(file.mimetype)
      ? cb(null, true)
      : cb(new ValidationError(['Only JPEG, PNG or WebP images are allowed'])),
});

export const uploadCover = upload.single('cover');
export const uploadAvatar = upload.single('avatar');

// Re-encode the image: validates it is a real image and strips metadata
export async function saveImage(file, { width, height }) {
  const name = `${crypto.randomUUID()}.webp`;
  await sharp(file.buffer).resize(width, height, { fit: 'cover' }).webp({ quality: 80 }).toFile(path.join(DIR, name));
  return `/uploads/${name}`;
}
```

```js
// src/middleware/errors.js
import multer from 'multer';
import { isProd } from '../config/env.js';

export const notFound = (req, res) => res.status(404).render('404', { title: 'Page not found' });

export function errorHandler(err, req, res, next) {
  if (res.headersSent) return next(err);

  let status = err.status ?? 500;
  let message = err.message;

  if (err instanceof multer.MulterError) {
    status = 400;
    message = err.code === 'LIMIT_FILE_SIZE' ? 'Image is too large (max 3 MB).' : err.message;
  } else if (err.name === 'CastError') {
    status = 404; message = 'Not found';
  } else if (err.code === 11000) {
    status = 409; message = 'That value is already in use.';
  }

  if (status >= 500) console.error(err);

  const wantsJson = req.accepts(['html', 'json']) === 'json' || req.get('x-requested-with') === 'fetch';
  const publicMessage = status >= 500 && isProd ? 'Something went wrong. Please try again later.' : message;

  if (wantsJson) return res.status(status).json({ error: publicMessage });
  res.status(status).render('error', { title: `Error ${status}`, status, message: publicMessage });
}
```

### 26.9 Step 7: The Express app

```js
// src/app.js
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import { env, isProd } from './config/env.js';
import { attachLocals } from './middleware/locals.js';
import { csrfToken, csrfGuard } from './middleware/csrf.js';
import { notFound, errorHandler } from './middleware/errors.js';
import routes from './routes/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('trust proxy', 1);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.disable('x-powered-by');

app.use(helmet({ contentSecurityPolicy: { directives: { 'img-src': ["'self'", 'data:', 'https:'] } } }));
app.use(compression());
if (env.NODE_ENV !== 'test') app.use(morgan(isProd ? 'combined' : 'dev'));

app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: isProd ? '7d' : 0 }));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'), { maxAge: '7d', index: false }));

app.use(express.urlencoded({ extended: false, limit: '100kb' }));
app.use(express.json({ limit: '100kb' }));

app.use(session({
  name: 'inkblog.sid',
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: env.MONGODB_URI }),
  cookie: { httpOnly: true, sameSite: 'lax', secure: isProd, maxAge: 1000 * 60 * 60 * 24 * 7 },
}));

app.use(csrfToken);
app.use(attachLocals);
app.use(csrfGuard);
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 600, standardHeaders: true, legacyHeaders: false }));

app.use(routes);

app.use(notFound);
app.use(errorHandler);

export default app;
```

```js
// server.js
import app from './src/app.js';
import { env } from './src/config/env.js';
import { connectDb } from './src/config/db.js';

await connectDb();

const server = app.listen(env.PORT, () => console.log(`InkBlog running at ${env.APP_URL}`));

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
```

### 26.10 Step 8: Authentication (register, login, logout)

```js
// src/controllers/authController.js
import { User } from '../models/User.js';
import { flash } from '../middleware/locals.js';

export const showRegister = (req, res) => res.render('register', { title: 'Create account' });
export const showLogin = (req, res) => res.render('login', { title: 'Log in' });

function startSession(req, user, done) {
  const returnTo = req.session.returnTo;
  req.session.regenerate((err) => {                    // new session id on login: prevents fixation
    if (err) return done(err);
    req.session.userId = String(user._id);
    done(null, returnTo?.startsWith('/') ? returnTo : '/dashboard');
  });
}

export async function register(req, res, next) {
  const { name, email, password } = req.valid;

  if (await User.exists({ email })) {
    return res.status(422).render('register', {
      title: 'Create account', errors: ['That email is already registered.'], values: { name, email },
    });
  }

  const user = await User.create({ name, email, password });
  startSession(req, user, (err, to) => {
    if (err) return next(err);
    flash(req, 'success', `Welcome to InkBlog, ${user.name}!`);
    res.redirect(to);
  });
}

export async function login(req, res, next) {
  const { email, password } = req.valid;
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.checkPassword(password))) {
    return res.status(401).render('login', { title: 'Log in', errors: ['Invalid email or password.'], values: { email } });
  }

  startSession(req, user, (err, to) => {
    if (err) return next(err);
    flash(req, 'success', 'Logged in successfully.');
    res.redirect(to);
  });
}

export function logout(req, res) {
  req.session.destroy(() => {
    res.clearCookie('inkblog.sid');
    res.redirect('/');
  });
}
```

```js
// src/routes/auth.js
import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import * as c from '../controllers/authController.js';
import { validateForm } from '../middleware/validate.js';
import { registerSchema, loginSchema } from '../schemas/index.js';
import { guestOnly } from '../middleware/auth.js';

const router = Router();
const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, limit: 20, standardHeaders: true, legacyHeaders: false });

router.get('/register', guestOnly, c.showRegister);
router.post('/register', authLimiter, guestOnly, validateForm(registerSchema, { view: 'register' }), c.register);

router.get('/login', guestOnly, c.showLogin);
router.post('/login', authLimiter, guestOnly, validateForm(loginSchema, { view: 'login' }), c.login);

router.post('/logout', c.logout);

export default router;
```

### 26.11 Step 9: Posts (service, controller, routes)

```js
// src/services/postService.js
import { Post } from '../models/Post.js';
import { Comment } from '../models/Comment.js';
import { slugify } from '../utils/slug.js';
import { NotFoundError, ForbiddenError } from '../utils/AppError.js';

const PAGE_SIZE = 6;
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const canEdit = (user, post) =>
  Boolean(user) && (user.role === 'admin' || String(post.author._id ?? post.author) === String(user._id));

export async function listPosts({ q, tag, page = 1 }) {
  const filter = {};
  if (tag) filter.tags = String(tag).toLowerCase();
  if (q) filter.title = new RegExp(escapeRegex(String(q).slice(0, 60)), 'i');     // simple search on titles

  const skip = (Math.max(1, Number(page) || 1) - 1) * PAGE_SIZE;

  const [posts, total] = await Promise.all([
    Post.find(filter).sort({ createdAt: -1 }).skip(skip).limit(PAGE_SIZE).populate('author', 'name avatarUrl').lean(),
    Post.countDocuments(filter),
  ]);

  return { posts, total, pages: Math.max(1, Math.ceil(total / PAGE_SIZE)) };
}

export async function getBySlug(slug) {
  const post = await Post.findOne({ slug }).populate('author', 'name avatarUrl bio').lean();
  if (!post) throw new NotFoundError('Post');
  return post;
}

export async function createPost(user, data, coverUrl) {
  return Post.create({ ...data, slug: slugify(data.title), coverUrl: coverUrl ?? '', author: user._id });
}

export async function updatePost(user, slug, data, coverUrl) {
  const post = await Post.findOne({ slug });
  if (!post) throw new NotFoundError('Post');
  if (!canEdit(user, post)) throw new ForbiddenError();

  Object.assign(post, data);                           // data comes from the Zod schema (whitelisted fields)
  if (coverUrl) post.coverUrl = coverUrl;
  await post.save();
  return post;
}

export async function deletePost(user, slug) {
  const post = await Post.findOne({ slug });
  if (!post) throw new NotFoundError('Post');
  if (!canEdit(user, post)) throw new ForbiddenError();
  await Comment.deleteMany({ post: post._id });
  await post.deleteOne();
}

export async function toggleLike(user, slug) {
  const post = await Post.findOne({ slug });
  if (!post) throw new NotFoundError('Post');

  const has = post.likes.some((id) => String(id) === String(user._id));
  await Post.updateOne({ _id: post._id }, has ? { $pull: { likes: user._id } } : { $addToSet: { likes: user._id } });

  return { liked: !has, count: post.likes.length + (has ? -1 : 1) };
}

export const popularTags = () =>
  Post.aggregate([{ $unwind: '$tags' }, { $group: { _id: '$tags', n: { $sum: 1 } } }, { $sort: { n: -1 } }, { $limit: 10 }]);
```

```js
// src/controllers/postController.js
import * as posts from '../services/postService.js';
import { Comment } from '../models/Comment.js';
import { renderMarkdown } from '../utils/markdown.js';
import { saveImage } from '../middleware/upload.js';
import { flash } from '../middleware/locals.js';

export async function home(req, res) {
  const { q = '', tag = '', page = 1 } = req.query;
  const [result, tags] = await Promise.all([posts.listPosts({ q, tag, page }), posts.popularTags()]);

  res.render('home', {
    title: 'InkBlog',
    ...result,
    tags,
    q: String(q),
    tag: String(tag),
    page: Math.max(1, Number(page) || 1),
  });
}

export async function showPost(req, res) {
  const post = await posts.getBySlug(req.params.slug);
  const comments = await Comment.find({ post: post._id }).sort({ createdAt: 1 }).populate('author', 'name avatarUrl').lean();

  res.render('post', {
    title: post.title,
    post,
    html: renderMarkdown(post.content),
    comments,
    canEdit: posts.canEdit(res.locals.currentUser, post),
    liked: res.locals.currentUser ? post.likes.some((id) => String(id) === String(res.locals.currentUser._id)) : false,
  });
}

export const newPostForm = (req, res) => res.render('post-form', { title: 'New post', post: null, action: '/posts' });

export async function create(req, res) {
  const cover = req.file ? await saveImage(req.file, { width: 1200, height: 630 }) : '';
  const post = await posts.createPost(req.user, req.valid, cover);
  flash(req, 'success', 'Post published!');
  res.redirect(`/posts/${post.slug}`);
}

export async function editForm(req, res) {
  const post = await posts.getBySlug(req.params.slug);
  if (!posts.canEdit(req.user, post)) return res.status(403).render('error', { title: 'Forbidden', status: 403, message: 'You cannot edit this post.' });
  res.render('post-form', { title: 'Edit post', post, values: { ...post, tags: post.tags.join(', ') }, action: `/posts/${post.slug}/edit` });
}

export async function update(req, res) {
  const cover = req.file ? await saveImage(req.file, { width: 1200, height: 630 }) : null;
  const post = await posts.updatePost(req.user, req.params.slug, req.valid, cover);
  flash(req, 'success', 'Post updated.');
  res.redirect(`/posts/${post.slug}`);
}

export async function remove(req, res) {
  await posts.deletePost(req.user, req.params.slug);
  flash(req, 'success', 'Post deleted.');
  res.redirect('/dashboard');
}

export async function like(req, res) {
  res.json(await posts.toggleLike(req.user, req.params.slug));
}
```

```js
// src/routes/posts.js
import { Router } from 'express';
import * as c from '../controllers/postController.js';
import * as comments from '../controllers/commentController.js';
import { requireAuth } from '../middleware/auth.js';
import { uploadCover } from '../middleware/upload.js';
import { csrfAfterUpload } from '../middleware/csrf.js';
import { validateForm } from '../middleware/validate.js';
import { postSchema, commentSchema } from '../schemas/index.js';

const router = Router();
const formView = { view: 'post-form', extra: (req) => ({ post: null, action: req.originalUrl }) };

router.get('/new', requireAuth, c.newPostForm);
router.post('/', requireAuth, uploadCover, csrfAfterUpload, validateForm(postSchema, formView), c.create);

router.get('/:slug', c.showPost);
router.get('/:slug/edit', requireAuth, c.editForm);
router.post('/:slug/edit', requireAuth, uploadCover, csrfAfterUpload, validateForm(postSchema, formView), c.update);
router.post('/:slug/delete', requireAuth, c.remove);
router.post('/:slug/like', requireAuth, c.like);

router.post('/:slug/comments', requireAuth, validateForm(commentSchema, { view: 'error' }), comments.add);
router.post('/:slug/comments/:id/delete', requireAuth, comments.remove);

export default router;
```

The comment controller follows the same shape: find the post by slug, create a `Comment`, increment `commentCount` with `$inc`, flash a message and redirect back to `/posts/:slug#comments`. For deletion, allow the comment author or an admin, and decrement the counter.

```js
// src/routes/index.js
import { Router } from 'express';
import authRoutes from './auth.js';
import postRoutes from './posts.js';
import userRoutes from './users.js';
import { home } from '../controllers/postController.js';

const router = Router();

router.get('/', home);
router.use(authRoutes);
router.use('/posts', postRoutes);
router.use(userRoutes);                // /dashboard, /users/:id, /settings

export default router;
```

### 26.12 Step 10: The views

Build the pages with the EJS skills of Chapter 19. These are the key templates.

**partials/header.ejs** (excerpt)

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <title><%= title %> | InkBlog</title>
  <link rel='stylesheet' href='/css/style.css' />
</head>
<body data-csrf='<%= csrfToken %>'>
<header class='navbar'>
  <a class='logo' href='/'>InkBlog</a>
  <form class='search' action='/' method='GET'>
    <input type='search' name='q' placeholder='Search posts' value='<%= typeof q !== "undefined" ? q : "" %>' />
  </form>
  <nav>
    <% if (currentUser) { %>
      <a href='/posts/new'>Write</a>
      <a href='/dashboard'>Dashboard</a>
      <form action='/logout' method='POST' class='inline'>
        <input type='hidden' name='_csrf' value='<%= csrfToken %>' />
        <button class='link'>Log out (<%= currentUser.name %>)</button>
      </form>
    <% } else { %>
      <a href='/login'>Log in</a>
      <a class='button' href='/register'>Sign up</a>
    <% } %>
  </nav>
</header>

<% if (flash) { %><div class='alert alert-<%= flash.type %>'><%= flash.text %></div><% } %>
<% if (errors.length) { %><ul class='alert alert-error'><% errors.forEach(e => { %><li><%= e %></li><% }) %></ul><% } %>
<main class='container'>
```

**home.ejs** (excerpt: the post list, tags and pagination)

```html
<%- include('partials/header') %>

<section class='layout'>
  <div>
    <% if (posts.length === 0) { %>
      <p class='empty'>No posts found.</p>
    <% } %>

    <% posts.forEach((post) => { %>
      <article class='card'>
        <% if (post.coverUrl) { %><img src='<%= post.coverUrl %>' alt='' loading='lazy' /><% } %>
        <h2><a href='/posts/<%= post.slug %>'><%= post.title %></a></h2>
        <p class='meta'>By <%= post.author.name %> on <%= new Date(post.createdAt).toLocaleDateString('en-IN') %>
          &middot; <%= post.likes.length %> likes &middot; <%= post.commentCount %> comments</p>
        <p><%= post.excerpt || post.content.slice(0, 160) %></p>
        <p class='tags'><% post.tags.forEach((t) => { %><a href='/?tag=<%= encodeURIComponent(t) %>'>#<%= t %></a> <% }) %></p>
      </article>
    <% }) %>

    <% if (pages > 1) { %>
      <nav class='pagination'>
        <% if (page > 1) { %><a href='/?page=<%= page - 1 %>&q=<%= encodeURIComponent(q) %>&tag=<%= encodeURIComponent(tag) %>'>Previous</a><% } %>
        <span>Page <%= page %> of <%= pages %></span>
        <% if (page < pages) { %><a href='/?page=<%= page + 1 %>&q=<%= encodeURIComponent(q) %>&tag=<%= encodeURIComponent(tag) %>'>Next</a><% } %>
      </nav>
    <% } %>
  </div>

  <aside>
    <h3>Popular tags</h3>
    <% tags.forEach((t) => { %><a class='chip' href='/?tag=<%= encodeURIComponent(t._id) %>'>#<%= t._id %> (<%= t.n %>)</a><% }) %>
  </aside>
</section>

<%- include('partials/footer') %>
```

**post.ejs** (excerpt)

```html
<%- include('partials/header') %>

<article class='post'>
  <h1><%= post.title %></h1>
  <p class='meta'>By <a href='/users/<%= post.author._id %>'><%= post.author.name %></a>
    &middot; <%= new Date(post.createdAt).toLocaleDateString('en-IN') %></p>
  <% if (post.coverUrl) { %><img class='cover' src='<%= post.coverUrl %>' alt='' /><% } %>

  <div class='content'><%- html %></div>     <!-- sanitised Markdown: safe to print raw -->

  <% if (currentUser) { %>
    <button id='like-btn' data-slug='<%= post.slug %>' class='<%= liked ? "liked" : "" %>'>
      Like (<span id='like-count'><%= post.likes.length %></span>)
    </button>
  <% } %>

  <% if (canEdit) { %>
    <a class='button' href='/posts/<%= post.slug %>/edit'>Edit</a>
    <form action='/posts/<%= post.slug %>/delete' method='POST' class='inline' data-confirm='Delete this post?'>
      <input type='hidden' name='_csrf' value='<%= csrfToken %>' />
      <button class='danger'>Delete</button>
    </form>
  <% } %>
</article>

<section id='comments'>
  <h2>Comments (<%= comments.length %>)</h2>
  <% comments.forEach((c) => { %>
    <div class='comment'>
      <strong><%= c.author.name %></strong>
      <small><%= new Date(c.createdAt).toLocaleString('en-IN') %></small>
      <p><%= c.body %></p>          <!-- plain text, escaped: comments cannot contain HTML -->
    </div>
  <% }) %>

  <% if (currentUser) { %>
    <form action='/posts/<%= post.slug %>/comments' method='POST'>
      <input type='hidden' name='_csrf' value='<%= csrfToken %>' />
      <textarea name='body' rows='3' maxlength='1000' required></textarea>
      <button>Add comment</button>
    </form>
  <% } else { %>
    <p><a href='/login'>Log in</a> to comment.</p>
  <% } %>
</section>

<%- include('partials/footer') %>
```

**post-form.ejs** must use `enctype='multipart/form-data'`, include the hidden `_csrf` field, inputs for title, excerpt, tags (comma separated), a Markdown textarea, and a file input named `cover`, plus values and errors for re-display.

The other pages (login, register, dashboard, profile, 404, error) are simple applications of the same patterns. Build them yourself as part of the exercise.

### 26.13 Step 11: Progressive enhancement with browser JavaScript

The site works without JavaScript. A little script improves it: instant likes and confirmation dialogs.

```js
// public/js/main.js
const csrf = document.body.dataset.csrf;

// Confirm before dangerous forms
document.addEventListener('submit', (event) => {
  const message = event.target.dataset?.confirm;
  if (message && !confirm(message)) event.preventDefault();
});

// Like button without a page reload
const likeBtn = document.querySelector('#like-btn');

likeBtn?.addEventListener('click', async () => {
  likeBtn.disabled = true;
  try {
    const res = await fetch(`/posts/${likeBtn.dataset.slug}/like`, {
      method: 'POST',
      headers: { 'X-CSRF-Token': csrf, 'X-Requested-With': 'fetch' },
    });
    if (!res.ok) throw new Error('Request failed');
    const { liked, count } = await res.json();
    likeBtn.classList.toggle('liked', liked);
    document.querySelector('#like-count').textContent = count;
  } catch (error) {
    alert('Could not update your like. Please try again.');
  } finally {
    likeBtn.disabled = false;
  }
});

// Live preview of the chosen cover image
const coverInput = document.querySelector('input[name=cover]');
coverInput?.addEventListener('change', () => {
  const file = coverInput.files[0];
  const preview = document.querySelector('#cover-preview');
  if (file && preview) preview.src = URL.createObjectURL(file);
});
```

(Because the page is protected by CSP `script-src 'self'`, scripts must live in files, not inline.)

### 26.14 Step 12: Styling

Use the CSS skills from Chapter 2 and the Task Manager. Decide a palette with CSS variables, build a responsive layout with Grid (`.layout` with main column and sidebar, collapsing to one column under 800px), cards with Flexbox and shadows, a sticky navbar, alerts for flash messages (`alert-success`, `alert-error`), readable typography for `.content` (line height 1.8, max width 70 characters, styled `pre`, `code`, `blockquote`, `img { max-width: 100% }`), and a visible focus style on all links and buttons for accessibility.

### 26.15 Step 13: Tests for the critical paths

Use Vitest, Supertest and `mongodb-memory-server` as in Chapter 25. Set the environment variables before importing the app:

```js
// tests/setup.js
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongo = await MongoMemoryServer.create();
process.env.MONGODB_URI = mongo.getUri();
process.env.SESSION_SECRET = 'x'.repeat(40);
process.env.NODE_ENV = 'test';
```

Tests worth writing:

- Registering with invalid data returns 422 and does not create a user.
- Registering twice with the same email is rejected.
- Login with a wrong password returns 401 with the generic message.
- A POST without a CSRF token returns 403.
- An anonymous user is redirected to `/login` from `/posts/new`.
- A user cannot edit or delete another user's post (403), an admin can.
- Markdown containing `<script>` is sanitised in the rendered post.
- Pagination returns the right number of posts per page.

To test forms with CSRF, request the page first, read the token from the HTML (or expose it through a test-only route), keep the cookie with `request.agent(app)`, then post with the token.

### 26.16 Final quality checklist

- Every route that changes data: authenticated, authorised, CSRF-protected, validated.
- No secrets in Git; `.env.example` is up to date; configuration is validated at startup.
- Passwords hashed; sessions stored in MongoDB; cookies `httpOnly`, `secure` (in production) and `sameSite`.
- User content escaped or sanitised everywhere; CSP active.
- Images re-encoded, size-limited and given random names.
- Friendly 404 and error pages; no stack traces in production.
- Indexes on slug, author, tags and createdAt.
- Works on a phone-sized screen; keyboard accessible; images have alt text.
- Tests pass; `npm audit` reviewed; README explains how to run the project.

### 26.17 Extensions: make it yours

1. **Drafts and publishing:** a `published` flag and a drafts tab in the dashboard.
2. **Email:** welcome email, password reset and email verification (Chapter 24).
3. **Full-text search:** add a MongoDB text index on title, content and tags, then query with `$text` and sort by relevance.
4. **Follow authors** and a personal feed.
5. **Rich editor** with live Markdown preview.
6. **RSS feed** at `/rss.xml` and a sitemap for SEO, plus Open Graph meta tags for nice link previews.
7. **JSON API** under `/api` with token authentication, so a mobile app or the React front end from Book 2 can use it.
8. **Cloud storage** for images (S3, R2, Cloudinary) instead of the local disk.
9. **Rate limits per user** and an audit log for admin actions.
10. **Rebuild the front end with Next.js** in Book 2, keeping this Express API.

### Chapter 26 summary

- You designed and built a complete full-stack application: models, services, controllers, routes, views, middleware, security, uploads and tests.
- The layered structure (route, middleware, controller, service, model) keeps each part small and testable.
- Security is a feature to build in from the first line, not to add at the end.

### Exercises

1. Build InkBlog through step 13, committing to Git after each step with clear messages.
2. Write the missing pages (dashboard, profile, login, register, 404, error) and the comment controller.
3. Write at least eight automated tests from 26.15.
4. Implement three extensions from 26.17.
5. Write a README with screenshots, setup instructions, architecture notes and a list of what you learned.

## Chapter 27: Deployment: Putting Your Website on the Internet

A website on your laptop helps nobody. **Deployment** means running your application on a computer that is always on and connected to the internet, with a real address and HTTPS. In this chapter you learn Git and GitHub, how to prepare your app, and three ways to deploy: a managed platform (easiest), a virtual server (most control) and Docker (most portable). You also learn domains, HTTPS, continuous integration and basic operations.

(Hosting products change their screens and prices often. The ideas below stay the same, so use each provider's current documentation for exact button names.)

### 27.1 Git and GitHub essentials

**Git** records the history of your project so that you can go back, compare, and work with others. **GitHub** stores your Git repositories online, and most hosting platforms deploy directly from it.

```bash
$ git init                              # start tracking this folder (once)
$ git status                            # what changed?
$ git add .                             # stage all changes
$ git commit -m 'Add login page'        # save a snapshot with a message
$ git log --oneline                     # history
$ git diff                              # see exact changes before committing
```

**Connect to GitHub:** create an empty repository on github.com, then:

```bash
$ git branch -M main
$ git remote add origin https://github.com/YOUR-NAME/inkblog.git
$ git push -u origin main
```

(GitHub asks you to authenticate with a personal access token or with the GitHub CLI or an SSH key; follow the instructions it shows.)

**Branches and pull requests (how teams work)**

```bash
$ git switch -c feature/comments        # new branch
# ...edit, commit...
$ git push -u origin feature/comments   # then open a Pull Request on GitHub
$ git switch main && git pull           # later: update your local main
```

Good habits: small commits with clear messages ('Add CSRF protection to forms', not 'stuff'), one feature per branch, never commit secrets, and check `git status` before committing. If you accidentally commit a secret, revoke the secret first, then clean the history.

### 27.2 Making your app production-ready

Before deploying, check this list:

1. **A `start` script** in `package.json`: `"start": "node server.js"`. Hosting platforms run `npm start`.
2. **Read the port from the environment:** `process.env.PORT`. Platforms assign it. Never hardcode 3000.
3. **Listen on all interfaces** if the platform requires it (`app.listen(PORT, '0.0.0.0')`). Many platforms do.
4. **`NODE_ENV=production`** set on the server.
5. **Secrets in environment variables**, not in Git (Chapter 24).
6. **`app.set('trust proxy', 1)`** because the platform's proxy sits in front of your app (needed for secure cookies and rate limiting).
7. **HTTPS-only cookies** in production (`secure: true`).
8. **A health endpoint** (`GET /health` returning 200) for the platform to check.
9. **Graceful shutdown** on `SIGTERM` (Chapter 20).
10. **A production database** (MongoDB Atlas or managed PostgreSQL), not a local one, with a restricted user and IP rules.
11. **No reliance on the local disk** for permanent data (uploads go to object storage, sessions to the database).
12. **Specify the Node version** in `package.json` (`"engines": { "node": ">=20" }`) so the platform uses a compatible one.
13. **Run tests and `npm audit`** before shipping.

```js
app.get('/health', (req, res) => res.json({ status: 'ok', uptime: process.uptime() }));
```

### 27.3 Option 1: A managed platform (Render, Railway, Fly.io and similar)

Platforms as a service (PaaS) take your code from GitHub, build it, run it, give it an HTTPS address and restart it if it crashes. You do not manage servers. This is the best start for most projects. Render, Railway and Fly.io are popular choices; free tiers exist but change over time and may sleep when idle.

The workflow is the same everywhere. Using Render as the example:

1. **Create the database.** In MongoDB Atlas: create a cluster, create a database user with a strong password, and under Network Access allow the platform to connect (many beginners allow `0.0.0.0/0` for simplicity; for production prefer the provider's fixed outbound IPs or private networking). Copy the connection string, with the real username and password, ending with your database name.
2. **Push your code to GitHub.**
3. **Create a Web Service** on the platform and connect your GitHub repository.
4. **Set the commands:**
   - Build command: `npm install` (or `npm ci`, which installs exactly from the lock file)
   - Start command: `npm start`
5. **Add environment variables** in the dashboard: `NODE_ENV=production`, `MONGODB_URI`, `SESSION_SECRET`, `APP_URL` (your final public URL), and any others from your `.env.example`.
6. **Set the health check path** to `/health`.
7. **Deploy.** Watch the build logs. When it says the service is live you get a URL such as `https://inkblog.onrender.com`.
8. **Test everything on the live URL:** register, log in, create a post, upload an image, log out. Check the logs for errors.
9. **Enable auto-deploy:** every push to the `main` branch builds and releases a new version.

**Typical first-deploy problems and fixes**

| Symptom | Likely cause |
| --- | --- |
| Build fails with `Cannot find module` | A package is in `devDependencies` but needed at runtime, or you forgot to commit `package-lock.json` |
| App starts then stops | It listens on a fixed port instead of `process.env.PORT`, or crashes on a missing environment variable |
| `MongooseServerSelectionError` | Wrong connection string, wrong password (special characters must be URL-encoded), or the database does not allow the platform's IP |
| Logged out on every request | Missing `trust proxy`, `secure` cookie without HTTPS awareness, or sessions stored in memory across restarts |
| Uploaded images vanish after redeploy | Ephemeral disk: use object storage or attach a persistent disk |
| 502 or 503 errors | The app crashed or did not become healthy in time; read the logs |

**Static front ends** (a React or Next.js build, plain HTML) can also go to **Vercel**, **Netlify**, **Cloudflare Pages** or **GitHub Pages**, which are excellent and often free for small sites. You will use Vercel for Next.js in Book 2.

### 27.4 Domain names and DNS

A **domain name** (`inkblog.com`) is the human-friendly address. You buy it from a **registrar** (Namecheap, Cloudflare, GoDaddy, Google Domains successors, and local ones) for a yearly fee.

**DNS** (Domain Name System) is the phone book that maps your domain to your server. You edit **DNS records** at your registrar or DNS provider:

| Record | Purpose | Example |
| --- | --- | --- |
| `A` | Domain to an IPv4 address | `inkblog.com` points to `203.0.113.10` |
| `AAAA` | Domain to an IPv6 address |  |
| `CNAME` | Name to another name (alias) | `www` points to `inkblog.onrender.com` |
| `TXT` | Text data: ownership verification, SPF, DKIM | Email authentication, domain verification |
| `MX` | Where email for the domain goes | Your email provider |

**Connecting a custom domain to a platform:** add the domain in the platform dashboard; it tells you which DNS records to create (usually a CNAME for `www` and an A or ALIAS record for the root domain). DNS changes can take from minutes to a few hours to spread. The platform then issues a free HTTPS certificate automatically (Let's Encrypt). Update `APP_URL` and any CORS settings to the new domain, and redirect `www` to the root (or the reverse) so that you have one main address.

### 27.5 Option 2: Your own server (VPS) with PM2 and Nginx

A **VPS** (Virtual Private Server) is a rented Linux computer in a data centre (DigitalOcean, Hetzner, Linode, AWS Lightsail, and others). You have full control, usually at a low monthly price, and you are also responsible for everything: security updates, firewall, backups, monitoring. It is a great way to learn how servers work.

**The setup in short** (Ubuntu server):

```bash
# 1. Connect from your computer (use SSH keys, not passwords)
$ ssh root@YOUR_SERVER_IP

# 2. Create a normal user, give it sudo, and stop using root
$ adduser deploy && usermod -aG sudo deploy

# 3. Firewall: allow only SSH, HTTP and HTTPS
$ ufw allow OpenSSH && ufw allow 'Nginx Full' && ufw enable

# 4. Install Node.js (use the NodeSource or nvm instructions for the current LTS), Git and Nginx
$ sudo apt update && sudo apt install -y git nginx

# 5. Get your code
$ git clone https://github.com/YOUR-NAME/inkblog.git && cd inkblog
$ npm ci --omit=dev

# 6. Create the environment file (never commit it)
$ nano .env
```

**PM2** is a process manager: it keeps your app running, restarts it when it crashes, starts it on boot and manages logs.

```bash
$ sudo npm install -g pm2
$ pm2 start server.js --name inkblog
$ pm2 save                       # remember the process list
$ pm2 startup                    # prints a command: run it to start PM2 on boot
$ pm2 logs inkblog               # live logs
$ pm2 restart inkblog            # after deploying new code
$ pm2 status
```

For several CPU cores you can run PM2 in cluster mode (`pm2 start server.js -i max`), which needs a shared session store (you already use MongoDB for that).

**Nginx as a reverse proxy.** Nginx listens on ports 80 and 443, handles HTTPS, compression and static file caching, and forwards requests to your Node app on a local port.

```nginx
# /etc/nginx/sites-available/inkblog
server {
    listen 80;
    server_name inkblog.com www.inkblog.com;

    client_max_body_size 5m;                 # allow uploads up to 5 MB

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
$ sudo ln -s /etc/nginx/sites-available/inkblog /etc/nginx/sites-enabled/
$ sudo nginx -t && sudo systemctl reload nginx
```

**Free HTTPS with Certbot (Let's Encrypt):**

```bash
$ sudo apt install -y certbot python3-certbot-nginx
$ sudo certbot --nginx -d inkblog.com -d www.inkblog.com
```

Certbot edits the Nginx config, installs the certificate and sets up automatic renewal. Point your domain's `A` record to the server IP first.

**Updating the site later:**

```bash
$ cd ~/inkblog && git pull && npm ci --omit=dev && pm2 restart inkblog
```

**Server hygiene:** apply security updates regularly (`unattended-upgrades`), use SSH keys and disable password login, keep the database off the public internet, schedule database backups, and monitor disk, memory and uptime.

### 27.6 Option 3: Docker (a portable box for your app)

**Docker** packages your app with everything it needs (Node version, system libraries) into an **image**. A running image is a **container**. The same container runs identically on your laptop, a colleague's computer and the server, which ends the classic 'it works on my machine' problem. Most cloud platforms can run Docker images.

```dockerfile
# Dockerfile
FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

# Copy only the dependency files first: Docker caches this layer until they change
COPY package*.json ./
RUN npm ci --omit=dev

COPY . .

# Do not run as root
USER node

EXPOSE 3000
CMD ["node", "server.js"]
```

```text
# .dockerignore
node_modules
.git
.env
uploads
coverage
```

```bash
$ docker build -t inkblog .
$ docker run -p 3000:3000 --env-file .env inkblog
```

**Docker Compose** runs several containers together, for example your app and its database, with one command:

```yaml
# docker-compose.yml
services:
  app:
    build: .
    ports:
      - '3000:3000'
    env_file: .env
    environment:
      MONGODB_URI: mongodb://db:27017/inkblog
    depends_on:
      - db

  db:
    image: mongo:7
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
```

```bash
$ docker compose up --build
```

The database data lives in a **volume** so that it survives container restarts.

### 27.7 Continuous integration and deployment with GitHub Actions

**CI** (continuous integration) runs your tests automatically on every push and pull request. **CD** (continuous deployment) releases the code when the tests pass. GitHub Actions does both for free for public repositories and with generous limits for private ones.

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - run: npm ci
      - run: npm audit --audit-level=high
        continue-on-error: true
      - run: npm test
```

If you use auto-deploy on your platform, protect `main`: in the GitHub repository settings require the CI check to pass before a pull request can be merged. Then only tested code reaches production. Store deployment secrets in **GitHub Secrets** (Settings, Secrets and variables), never in the workflow file.

### 27.8 Environments and releases

- Keep at least **development** (your laptop), and **production**. Teams add **staging** (a copy of production for final checks).
- Use separate databases and secrets for each.
- **Database migrations:** when you change the database structure (SQL tables, or required fields in MongoDB), apply changes carefully and in a backward compatible way: add new columns or fields first, deploy code that uses them, and remove old ones later. Tools: Prisma Migrate, Knex, `migrate-mongo`.
- **Rollbacks:** know how to return to the previous version quickly (platform dashboards keep previous releases; with Git you can `git revert`).
- **Tag releases** in Git (`git tag v1.2.0`) so you know what runs where.

### 27.9 Monitoring, logging and alerts

A live site needs eyes on it.

- **Logs:** read them in the platform dashboard or `pm2 logs`. Structured JSON logs (pino, Chapter 23) can be sent to Better Stack, Datadog, Grafana Loki and similar tools.
- **Uptime checks:** UptimeRobot or Better Stack ping your `/health` URL and email you if it fails.
- **Error tracking:** **Sentry** captures exceptions with stack traces, user context and release versions, and alerts you. It has a Node.js and a browser SDK.
- **Metrics:** CPU, memory, response times, error rates, database performance. Platforms and tools such as Grafana and Prometheus show them.
- **Analytics:** privacy-friendly options (Plausible, Umami) or Google Analytics to understand visitors.

```js
// Sentry in Express (sketch; follow the current docs for your version)
import * as Sentry from '@sentry/node';
Sentry.init({ dsn: process.env.SENTRY_DSN, environment: process.env.NODE_ENV });
// ...routes...
Sentry.setupExpressErrorHandler(app);      // before your own error handler
```

### 27.10 Performance basics

Fast sites keep visitors and rank better in search.

- **Compress responses** (`compression` middleware or Nginx gzip and Brotli).
- **Cache static files** with long `Cache-Control` headers and versioned file names.
- **Use a CDN** (Cloudflare, or the platform's own) so that static files and images come from servers near the user.
- **Optimise images:** resize, use WebP or AVIF, add `loading='lazy'`, set `width` and `height`.
- **Database:** add indexes for your queries, paginate everything, select only the fields you need, avoid queries inside loops (the N+1 problem), and use `lean()`.
- **Cache expensive results** in memory or Redis for seconds or minutes.
- **Minimise JavaScript and CSS** sent to the browser; load scripts with `defer`.
- **Do not block the event loop** (Chapter 14); move heavy work to background jobs or worker threads.
- **Measure first:** Lighthouse in Chrome DevTools gives a score and concrete suggestions; the Network tab shows what is slow.

### 27.11 Backups and disaster recovery

Something will eventually go wrong: a bad deployment, a mistaken delete, a provider outage. Prepare:

- **Automated database backups** (Atlas and managed PostgreSQL providers offer them; check retention).
- **Test a restore** at least once. An untested backup is only a hope.
- Keep copies of uploaded files (object storage with versioning).
- Keep infrastructure settings written down (or as code: Docker, compose files, Terraform).
- Know who can access which account, and secure those accounts with two-factor authentication.

### 27.12 Costs and choosing a path

| Need | Good starting choice |
| --- | --- |
| First project, minimum effort | A managed platform (Render, Railway, Fly.io) plus MongoDB Atlas free tier |
| Static site or Next.js front end | Vercel, Netlify or Cloudflare Pages |
| Learn servers, low cost, control | A small VPS with PM2 and Nginx |
| Team, many services, repeatable | Docker with a container platform (Fly.io, Cloud Run, ECS) |
| Serious production | Managed database, backups, monitoring, CI/CD, staging environment |

Free tiers are for learning and small projects. Check current limits and prices before depending on them.

### 27.13 Launch checklist

- Tests pass in CI; `npm audit` reviewed.
- Environment variables set; no secrets in Git.
- HTTPS working; HTTP redirects to HTTPS; one canonical domain.
- Database backups on; production database not publicly open.
- Cookies `secure`, `httpOnly`, `sameSite`; `trust proxy` set.
- Error pages friendly; error tracking and uptime monitoring configured.
- Meta tags, favicon, `robots.txt`, sitemap, privacy policy and cookie notice if needed.
- Test on a real phone and in two different browsers.
- Lighthouse scores checked for performance, accessibility and best practices.
- A rollback plan is ready.

### 27.14 Common mistakes

- Hardcoded ports and localhost URLs in front-end code (use relative paths or an environment-based base URL).
- Committing `.env` or database passwords.
- Leaving the database open to the whole internet with a weak password.
- Forgetting that free instances sleep and the first request can take many seconds.
- Storing uploads on a disk that is wiped on every deploy.
- Deploying on Friday evening without monitoring.
- Never reading the logs.
- No backups.

### Chapter 27 summary

- Git and GitHub track your work and trigger deployments.
- A production-ready app reads its port and secrets from the environment, trusts the proxy, exposes a health route and avoids local disk for permanent data.
- You can deploy on a managed platform (easiest), a VPS with PM2 and Nginx (control), or Docker (portable). Domains need DNS records; HTTPS is free with Let's Encrypt or your platform.
- CI runs tests on every change; monitoring, backups and a rollback plan keep the site healthy.

### Exercises

1. Push InkBlog (or the Books API) to GitHub with a proper README and `.gitignore`.
2. Deploy it to a managed platform with MongoDB Atlas. Record each problem you hit and how you fixed it.
3. Add the GitHub Actions workflow and make a failing test block a pull request.
4. Write a Dockerfile and a compose file for your app and run everything locally with one command.
5. (Optional) Rent a small VPS, set up PM2, Nginx and HTTPS, and serve your app from your own domain.
6. Add Sentry and an uptime monitor, break something on purpose in a test environment, and confirm that you are alerted.

## Chapter 28: Best Practices and Your Next Steps

You can now build and publish full-stack websites. This last chapter collects the habits that separate beginners from professionals, shows how to keep growing, and prepares you for Book 2: TypeScript, React and Next.js.

### 28.1 Writing clean code

Code is read far more often than it is written, by teammates and by you six months later. Optimise for the reader.

- **Names tell the truth.** `getUserById`, `isEmailVerified`, `totalPrice`. Avoid `data`, `temp`, `x`, `handle`, `doStuff`. A long, clear name beats a short, vague one.
- **Small functions with one job.** If a function does validation, database work, email sending and response formatting, split it.
- **Avoid deep nesting.** Use early returns and guard clauses instead of five levels of `if`.
- **No magic values.** Replace `if (status === 3)` and `setTimeout(fn, 86400000)` with named constants: `const ORDER_SHIPPED = 3; const ONE_DAY_MS = 24 * 60 * 60 * 1000;`.
- **Do not repeat yourself (DRY)**, but do not over-abstract either. Wait until the third repetition before extracting a helper; a wrong abstraction is worse than a little duplication.
- **Prefer simple code.** Cleverness is a cost. If you need a comment to explain how a trick works, write plain code instead.
- **Comments explain why, not what.** `// Retry once: the payment API sometimes returns 502 on the first call` is useful. `// increase i by one` is noise.
- **Consistent formatting** via Prettier, and consistent rules via ESLint, so nobody argues about style.
- **Delete dead code.** Git remembers it.
- **Handle errors deliberately** (Chapter 11 and 23). Silent `catch {}` blocks hide bugs.

Before:

```js
function p(u, o) {
  if (u) {
    if (u.a) {
      if (o.t > 100) {
        return o.t * 0.9;
      } else {
        return o.t;
      }
    }
  }
  return null;
}
```

After:

```js
const BULK_THRESHOLD = 100;
const BULK_DISCOUNT = 0.1;

function calculateOrderTotal(user, order) {
  if (!user?.isActive) return null;

  const isBulkOrder = order.total > BULK_THRESHOLD;
  return isBulkOrder ? order.total * (1 - BULK_DISCOUNT) : order.total;
}
```

### 28.2 Project structure and architecture

- Organise by **responsibility** (routes, controllers, services, models) as in Chapter 20 and 26, or by **feature** (`users/`, `posts/`, each containing its own routes, controller, service, model and tests) once the app is bigger. Feature folders scale well.
- Keep **business logic out of HTTP handlers** so that it can be tested and reused (for example by a background job or a CLI).
- Keep **configuration in one place** and **database access in one layer**.
- Prefer **dependency injection** (passing dependencies in) over hidden global imports where testing is important.
- Make **small, reversible decisions**. You can start with a modular monolith (one deployable app with clear modules). Microservices solve organisational scale problems that most projects do not have.
- **Document decisions** in a short README or `docs/` folder: how to run, how to test, how to deploy, the folder layout, environment variables.

### 28.3 Working with Git like a professional

- Commit small and often, with messages in the imperative mood: 'Add password reset flow', 'Fix off-by-one error in pagination'.
- Use feature branches and pull requests, even when working alone. A pull request is a checkpoint to review your own diff.
- Review your own changes before asking others. Read the diff line by line.
- Keep `main` always deployable, protected by CI.
- Use `.gitignore` properly; never commit `node_modules`, `.env`, build output or uploads.
- Learn a few power tools when you are ready: `git stash`, `git rebase -i`, `git bisect` (finds the commit that introduced a bug), `git reflog` (recovers lost work).

### 28.4 Reading code and documentation

A large part of your career is reading other people's code. Practise it.

- Read the **official documentation** first: MDN for JavaScript and the web, nodejs.org/docs, expressjs.com, the docs of each library.
- Read the **source code of small libraries** you use. Open the repository on GitHub, find the entry file and follow the flow. You will be surprised how readable many are.
- Read **issues and changelogs** when something behaves oddly; someone has often met the same problem.
- Learn to **ask good questions**: state what you want, what you tried, the exact error, and a minimal example that reproduces it. Often you find the answer while writing the question.
- When using AI assistants, treat them as a fast tutor and pair programmer, not an oracle. Ask for explanations, read the code they suggest, run it, test it, and understand it before using it. Verify package names and API usage against the official documentation, because generated code can contain mistakes or outdated APIs. Never paste secrets into any tool.

### 28.5 Habits that make you grow quickly

1. **Build projects**, not only tutorials. After each chapter build something slightly outside the book.
2. **Finish things.** A small deployed project teaches more than five abandoned big ones.
3. **Read errors patiently**, and debug with a method (Chapter 11).
4. **Write tests** for the parts that matter, and run them often.
5. **Refactor** after it works: rename, split, simplify.
6. **Learn the fundamentals deeply** (JavaScript, HTTP, databases, security). Frameworks change every few years; fundamentals last a career.
7. **Teach others.** Write a blog post or explain a concept to a friend. If you cannot explain it simply, you have not fully understood it.
8. **Get feedback.** Share your code, ask for review, join communities (Discord servers, GitHub discussions, local meetups).
9. **Take care of yourself.** Sleep, breaks and exercise improve your code more than another hour of tired staring at the screen.
10. **Be consistent.** One hour every day beats a ten-hour weekend binge.

### 28.6 Common beginner mistakes (a final review)

| Area | Mistake | Better habit |
| --- | --- | --- |
| JavaScript | Using `var`, `==`, forgetting `await` | `const` and `let`, `===`, handle every promise |
| Async | Using `forEach` with `await`; not handling rejections | `for...of` or `Promise.all`; `try...catch` |
| Data | Mutating arrays and objects unexpectedly | Copy with spread, `map`, `filter` |
| Express | Business logic inside routes; no central error handler | Layered structure; one error middleware |
| Security | Trusting client input; secrets in Git; plain-text passwords | Validate on the server; env variables; hash with bcrypt |
| Database | No indexes; unbounded queries; string-built SQL | Index; paginate; parameterise |
| Deployment | Hardcoded ports and URLs; no backups; no monitoring | Environment config; backups; alerts |
| Process | Giant commits; no tests; copy-pasting without understanding | Small commits; tests; understand before using |

### 28.7 Where to go from here: your roadmap

**Right now (next 2 to 4 weeks)**

- Finish the capstone and deploy it. Put it on GitHub with a clear README and screenshots.
- Build one more project of your own idea (a habit tracker, a recipe site, a small shop, a quiz app, a chat app).
- Review Chapters 5, 6, 10 and 23 once more. These contain the ideas people most often need to revisit.

**Book 2 (the next 2 to 3 months): the modern front end**

1. **TypeScript:** add types to JavaScript so that many bugs are caught before running the code. You will use it in both the server and the browser.
2. **React:** build rich interfaces from reusable components with state and hooks.
3. **Next.js:** a full-stack React framework with routing, server rendering, API routes, server components and easy deployment. With Next.js you can build very good websites quickly and keep your Express knowledge for custom back ends.

What you already know that will help directly: arrays and objects (every list on the screen), `map` and `filter` (rendering lists), closures (hooks), async and fetch (loading data), ES modules, `this` (why React moved to functions), HTTP and REST (calling APIs), authentication (sessions and tokens in Next.js), and deployment.

**Beyond that (pick by interest)**

| Direction | What to learn |
| --- | --- |
| More back end | PostgreSQL deeply, Prisma or Drizzle, Redis, queues (BullMQ), WebSockets, GraphQL, microservices basics |
| DevOps and cloud | Docker, CI/CD, Linux, Nginx, AWS or another cloud, Terraform, observability |
| Testing and quality | Playwright end-to-end tests, performance profiling, accessibility |
| Computer science | Data structures and algorithms, system design basics, operating systems and networks |
| Mobile | React Native or Expo, reusing your React and TypeScript skills |
| AI features | Calling language-model APIs, retrieval, streaming responses to the browser |

### 28.8 Building a portfolio and finding work

- **Three good projects beat ten average ones.** Make each solve a real problem, be deployed, and have a README that explains the problem, the stack, the architecture, how to run it, and what you learned. Screenshots and a live link matter.
- Show **full-stack range**: one project with authentication and a database (InkBlog), one polished front end, one API with tests and documentation.
- Keep your GitHub profile tidy: pin your best repositories, write clear commit messages.
- Write a short personal site or profile that links to your projects.
- Contribute to open source in small ways: fix a typo in documentation, report a clear bug, then fix a small issue.
- **Prepare for interviews:** practise JavaScript fundamentals (closures, `this`, promises, the event loop, array methods), Node and Express concepts (middleware, error handling, authentication), REST and databases (indexes, relations), and basic data structures and algorithms. Be able to explain your own projects and decisions clearly, including mistakes and trade-offs.
- Learn to talk about **trade-offs**: sessions or JWT, SQL or NoSQL, monolith or services. There is rarely one correct answer; the skill is explaining why you chose.

### 28.9 Project ideas to practise

1. **Expense tracker** with categories, monthly charts and CSV export.
2. **URL shortener** with click statistics and expiry.
3. **Link-in-bio page builder** for creators.
4. **Online quiz platform** with timers, scores and a leaderboard.
5. **Job board** with company accounts, applications and email notifications.
6. **Real-time chat** with rooms (Socket.IO).
7. **Mini e-commerce** with products, cart, orders and a payment sandbox.
8. **Habit and study tracker** with streaks and reminders.
9. **Recipe sharing site** with image uploads, ratings and search.
10. **Appointment booking system** with availability and confirmation emails.

For each: write requirements first, sketch the database, list the endpoints, build the API with tests, then the interface, then deploy.

### 28.10 Final words

Learning to build for the web is a long journey, but a very rewarding one. You started this book knowing what a browser is. You now understand the whole path of a request: from a click in the browser, across the network, through middleware and business logic to a database, and back as a page or JSON. That understanding is the foundation under every framework you will ever learn.

When you feel stuck, remember that every professional developer has felt the same, many times. Take a break, break the problem into smaller pieces, read the error, search with precise words and try again. Progress comes from the steady habit of building, not from talent.

In Book 2 we take your skills to the modern front end with TypeScript, React and Next.js. Keep your capstone project: you will rebuild its interface with React and Next.js and connect it to the API you already know.

### Chapter 28 summary

- Clean code means clear names, small functions, simple logic and honest comments; structure code by responsibility or by feature.
- Professional habits: small commits, pull requests, tests, documentation, reading docs and code, and asking good questions.
- Your path: finish and deploy projects, then learn TypeScript, React and Next.js, then specialise.
- A portfolio of a few well-presented, deployed projects is your best proof of skill.

### Final exercises

1. Choose the messiest file in your capstone and refactor it using the rules in 28.1. Write down what improved.
2. Write a README for your best project: problem, features, stack, architecture diagram, setup, tests, deployment link and lessons learned.
3. Pick one project idea from 28.9, write its requirements and endpoint list, and build the first version in two weeks.
4. Make a personal learning plan for the next 90 days with weekly goals, including Book 2.
5. Explain to someone, without code, how a request travels from the browser to the database and back. If they understand it, you have mastered Part 5.

## Appendices

### Appendix A: JavaScript Cheat Sheet

**Variables and types**

```js
const a = 1;  let b = 'text';  // never var
typeof 42;  // 'number'   (also string, boolean, undefined, object, function, bigint, symbol)
Number('42'); String(42); Boolean(0); parseInt('42px'); parseFloat('3.14');
```

**Operators**

```js
=== !== < > <= >=      // comparison (never use == or !=)
&& || ! ??             // logic, nullish default
a ?? 'default'         // only for null or undefined
obj?.prop?.[0]?.()     // optional chaining
x ||= 1; x &&= 2; x ??= 3;   // logical assignment
`Hello ${name}`        // template literal
```

**Control flow**

```js
if (x) {} else if (y) {} else {}
cond ? a : b
switch (v) { case 1: ...; break; default: ... }
for (let i = 0; i < n; i++) {}
for (const item of array) {}
for (const key in object) {}
while (cond) {}  do {} while (cond);
break;  continue;
```

**Functions**

```js
function add(a, b = 0) { return a + b; }
const add2 = (a, b) => a + b;
const sum = (...nums) => nums.reduce((s, n) => s + n, 0);
(async () => { await something(); })();
```

**Arrays**

```js
arr.push(x) arr.pop() arr.unshift(x) arr.shift() arr.splice(i, n, ...items)
arr.slice(a, b)  arr.concat(b)  arr.join(',')  arr.reverse()  arr.sort((a, b) => a - b)
arr.map(fn)  arr.filter(fn)  arr.reduce((acc, x) => acc, init)  arr.forEach(fn)
arr.find(fn)  arr.findIndex(fn)  arr.some(fn)  arr.every(fn)  arr.includes(x)  arr.indexOf(x)
arr.flat()  arr.flatMap(fn)  arr.at(-1)  Array.from(iterable)  Array.isArray(x)
[...arr, x]  const [first, ...rest] = arr;
```

**Objects**

```js
const o = { a: 1, b: { c: 2 } };
o.a  o['a']  o.b?.c  delete o.a  'a' in o
Object.keys(o)  Object.values(o)  Object.entries(o)  Object.fromEntries(entries)
{ ...o, a: 5 }  const { a, b: { c } } = o;  structuredClone(o)
JSON.stringify(o, null, 2)  JSON.parse(text)
```

**Strings**

```js
s.length  s.at(-1)  s.trim()  s.toUpperCase()  s.toLowerCase()
s.includes('x')  s.startsWith('x')  s.endsWith('x')  s.indexOf('x')
s.slice(a, b)  s.split(',')  s.replace('a', 'b')  s.replaceAll('a', 'b')
s.padStart(3, '0')  s.repeat(3)  s.match(/regex/g)
```

**Numbers and Math**

```js
Math.round() Math.floor() Math.ceil() Math.max() Math.min() Math.abs() Math.sqrt() Math.random()
n.toFixed(2)  Number.isInteger(n)  Number.isNaN(n)  2 ** 3  n % 2
```

**Classes**

```js
class Dog extends Animal {
  #secret = 1;                  // private field
  static count = 0;             // static field
  constructor(name) { super(name); }
  get label() { return this.name; }
  bark() { return 'woof'; }
}
const d = new Dog('Rex');
```

**Async**

```js
const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
if (!res.ok) throw new Error(res.status);
const json = await res.json();
await Promise.all([p1, p2]);   Promise.allSettled([...]);   Promise.race([...]);
setTimeout(fn, ms);  setInterval(fn, ms);  clearTimeout(id);
```

**Errors**

```js
try { risky(); } catch (err) { console.error(err); } finally { cleanup(); }
throw new Error('message');
```

**DOM**

```js
document.querySelector('.x')   document.querySelectorAll('.x')
el.textContent  el.innerHTML  el.value  el.classList.add/remove/toggle/contains
el.setAttribute('a', 'b')  el.dataset.name  el.style.color = 'red'
document.createElement('li')  parent.append(el)  el.remove()  parent.replaceChildren(...els)
el.addEventListener('click', (e) => { e.preventDefault(); })
localStorage.setItem('k', JSON.stringify(v))   JSON.parse(localStorage.getItem('k') ?? 'null')
```

**Modules**

```js
export const x = 1;  export default fn;
import fn, { x } from './file.js';  import * as lib from './lib.js';
```

### Appendix B: Node.js and Express Cheat Sheet

**Node.js**

```js
import fs from 'node:fs/promises';   import path from 'node:path';   import os from 'node:os';
import crypto from 'node:crypto';    import { EventEmitter } from 'node:events';
process.argv   process.env.NAME   process.cwd()   process.exit(1)   process.on('SIGTERM', fn)
await fs.readFile(file, 'utf8')   await fs.writeFile(file, text)   await fs.mkdir(dir, { recursive: true })
path.join(a, b)   path.resolve(p)   path.extname(f)   path.basename(f)
crypto.randomUUID()   crypto.randomBytes(32).toString('hex')
const __dirname = path.dirname(fileURLToPath(import.meta.url));
```

**npm**

```bash
npm init -y   npm install pkg   npm install -D pkg   npm uninstall pkg   npm ci   npm run script
npm outdated   npm update   npm audit   npx tool   node --watch --env-file=.env server.js
```

**Express skeleton**

```js
import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/users/:id', (req, res) => {
  const { id } = req.params;          // route params (strings)
  const { q } = req.query;            // ?q=...
  const body = req.body;              // parsed body
  res.status(200).json({ id, q });
});

app.use((req, res) => res.status(404).json({ error: 'Not found' }));       // 404
app.use((err, req, res, next) => res.status(err.status ?? 500).json({ error: err.message }));  // errors (4 args)

app.listen(process.env.PORT || 3000);
```

**Request and response quick reference**

| Request | Response |
| --- | --- |
| `req.params`, `req.query`, `req.body` | `res.send()`, `res.json()`, `res.sendStatus(204)` |
| `req.headers`, `req.get('x')` | `res.status(code)`, `res.set(name, value)` |
| `req.cookies` (cookie-parser), `req.session` | `res.cookie()`, `res.clearCookie()` |
| `req.method`, `req.path`, `req.originalUrl`, `req.ip` | `res.redirect(url)`, `res.render(view, data)`, `res.sendFile(path)` |
| `req.file`, `req.files` (multer) | `res.download(path)`, `res.end()` |

**Middleware and routers**

```js
const mw = (req, res, next) => { /* work */ next(); };
app.use(mw);   app.use('/api', mw);   app.get('/x', mw, handler);
const router = express.Router();   router.get('/', h);   app.use('/users', router);
```

**Typical package set**

| Need | Package |
| --- | --- |
| Security headers | `helmet` |
| Cross-origin requests | `cors` |
| Request logs | `morgan` or `pino-http` |
| Compression | `compression` |
| Cookies | `cookie-parser` |
| Sessions | `express-session` with `connect-mongo` |
| Rate limiting | `express-rate-limit` |
| Validation | `zod` |
| Password hashing | `bcryptjs` or `argon2` |
| JWT | `jsonwebtoken` |
| Uploads | `multer`, `sharp` |
| Email | `nodemailer` |
| MongoDB | `mongoose` |
| PostgreSQL | `pg`, Prisma or Drizzle |
| Tests | `vitest` or `jest`, `supertest` |
| Templates | `ejs` |

**Mongoose quick reference**

```js
await Model.create(doc)          await Model.find(filter).sort({ x: -1 }).skip(n).limit(n).lean()
await Model.findById(id)         await Model.findOne(filter)
await Model.findByIdAndUpdate(id, { $set: data }, { new: true, runValidators: true })
await Model.findByIdAndDelete(id)   await Model.countDocuments(filter)
await Model.aggregate([{ $match: {} }, { $group: { _id: '$x', n: { $sum: 1 } } }])
```

### Appendix C: HTTP Status Codes

| Code | Name | Meaning |
| --- | --- | --- |
| 100 | Continue | Client may continue sending the body |
| 200 | OK | Request succeeded |
| 201 | Created | A new resource was created |
| 202 | Accepted | Request accepted for later processing |
| 204 | No Content | Success with no body |
| 301 | Moved Permanently | The resource has a new permanent URL |
| 302 | Found | Temporary redirect |
| 304 | Not Modified | Use your cached copy |
| 307, 308 | Temporary and Permanent Redirect | Redirect that keeps the HTTP method |
| 400 | Bad Request | Malformed request or invalid data |
| 401 | Unauthorized | Authentication is missing or invalid |
| 403 | Forbidden | Authenticated but not allowed |
| 404 | Not Found | Resource or route does not exist |
| 405 | Method Not Allowed | The method is not supported for this URL |
| 409 | Conflict | Conflicts with the current state (duplicate) |
| 413 | Content Too Large | The body is bigger than allowed |
| 415 | Unsupported Media Type | Wrong Content-Type |
| 422 | Unprocessable Content | Well-formed but semantically invalid |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server failure |
| 502 | Bad Gateway | A proxy got an invalid answer from the app |
| 503 | Service Unavailable | Overloaded or down for maintenance |
| 504 | Gateway Timeout | The upstream server took too long |

Groups: **1xx** informational, **2xx** success, **3xx** redirection, **4xx** client error (you can fix by changing the request), **5xx** server error (the server must fix it).

### Appendix D: Glossary

| Term | Simple meaning |
| --- | --- |
| **API** | A set of URLs and rules that lets programs talk to a server |
| **Async** | Work that finishes later while other code keeps running |
| **Authentication** | Proving who you are |
| **Authorization** | Deciding what you may do |
| **Back end** | Code running on the server |
| **Bcrypt** | A slow password-hashing algorithm |
| **Callback** | A function passed to another function to be called later |
| **CDN** | A network of servers that delivers files from a location near the user |
| **Client** | The program that sends requests, usually a browser |
| **Closure** | A function that remembers the variables around where it was created |
| **Component** | A reusable piece of user interface (Book 2) |
| **Cookie** | A small piece of data the browser stores and sends back to the server |
| **CORS** | Browser rule and headers controlling which websites may call your server |
| **CRUD** | Create, Read, Update, Delete |
| **CSRF** | An attack that makes a logged-in user's browser send an unwanted request |
| **DNS** | The system that turns domain names into server addresses |
| **DOM** | The tree of objects that represents the web page |
| **Dependency** | A library your project needs |
| **Endpoint** | One URL and method that an API offers |
| **Environment variable** | A setting stored outside the code |
| **Event loop** | The mechanism that runs callbacks when the call stack is free |
| **Express** | A minimal web framework for Node.js |
| **Front end** | Code running in the browser |
| **Git** | A tool that records the history of your code |
| **Hash** | A one-way fingerprint of data |
| **Header** | Extra information sent with a request or response |
| **HTTP and HTTPS** | The protocol for web communication, and its encrypted version |
| **Index** | A database structure that makes searching fast |
| **Injection** | An attack where user data is treated as code or a query |
| **JSON** | A text format for data that looks like JavaScript objects |
| **JWT** | A signed token that carries claims such as a user id |
| **Middleware** | A function in the Express pipeline that handles a request on its way to the route |
| **Module** | A file that exports and imports code |
| **MongoDB** | A document database |
| **Node.js** | A runtime that runs JavaScript outside the browser |
| **npm** | The package manager and registry for JavaScript |
| **ORM** | A tool that maps database tables or documents to objects |
| **Port** | A numbered door on a computer where a program listens |
| **Promise** | An object representing a future result |
| **Prototype** | The object another object inherits properties from |
| **REST** | A style of API design using resources, URLs, HTTP methods and status codes |
| **Reverse proxy** | A server in front of your app that forwards requests (Nginx) |
| **Route** | A method plus a path plus a handler |
| **Schema** | A description of the shape and rules of data |
| **Server** | A computer or program that answers requests |
| **Session** | Data the server remembers about a visitor, linked by a cookie |
| **SQL** | The language for relational databases |
| **SSR** | Server-side rendering: building the HTML on the server |
| **State** | The data an application currently holds |
| **Stream** | Data processed piece by piece instead of all at once |
| **TypeScript** | JavaScript with types (Book 2) |
| **Validation** | Checking that data has the expected form |
| **XSS** | An attack that runs a harmful script in another user's browser |

### Appendix E: Recommended Resources

- **MDN Web Docs** (developer.mozilla.org): the best reference for JavaScript, HTML, CSS and web APIs.
- **javascript.info**: a free, in-depth JavaScript tutorial.
- **nodejs.org/docs** and the Node.js Learn pages: official Node.js documentation.
- **expressjs.com**: Express documentation and guides.
- **mongoosejs.com** and **mongodb.com/docs**: database documentation.
- **owasp.org**: web security knowledge, including the Top 10 and cheat sheets.
- **roadmap.sh**: visual learning roadmaps for backend, frontend and DevOps.
- **web.dev** and Chrome DevTools documentation: performance, accessibility and best practices.
- **freeCodeCamp** and **The Odin Project**: free structured courses and projects.

*End of Book 1. Book 2 covers TypeScript, React.js and Next.js.*
