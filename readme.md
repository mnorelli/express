![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Building Web Servers with Express

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->

Express is a simple, flexible JavaScript library that enables us to more easily build a web server in Node.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

* Illustrate the request response cycle
* Use npm (node package manager) to require Express
* Write a web server using Express
* Serve JSON data over the server
* Serve static files over the server

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Have proficiency in JavaScript
* Build a simple web server with Node's `http` object
* Use npm to require packages


### Express file tree(?)

Here's a recommended way to structure a simple web application

```
├── server.js  // your server code
├── package.json    // lists dependencies; changed by npm install --save somePackage
├── public  // i.e. client-side
│   ├── images  // images to serve to client
│   ├── scripts
│       └── app.js   // client-side javascript file
│   └── styles
│       └── style.css
├── views  // html files that we'll serve
│   └── index.html
└── node_modules  // don't edit files in here!
    ├── express // etc
```

### Request Response Cycle

Remember that the interwebs is many clients querying many servers. We've done a lot with clients and APIs, and now we want to write the server side code that handles the request and then responds with some data.

![request](http://i.imgur.com/YXgj8.png)

### Setup Express

Get to it:

1. `mkdir first-express-app`
2. `cd first-express-app`
3. `npm init -y`
4. `npm install express --save`
5. `touch server.js` in first-express-app directory

```javascript
// server.js

var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.send('Hello World');
});


app.listen(port);
console.log('Server started on ' + port);
```

Notice the get verb here - this can also be post, put, delete, etc. Then run the app using:

```bash
node server.js
```

Navigate to `http://localhost:3000` and voila!

### MiddleWare

#### Logging in Express with Middleware

**Middleware** is simply any function that gets called *after* the application's router recieves it but *before* controller handles it.

> Order of events: HTTP Request --> Router --> Middleware --> Controller --> HTTP Response 

Add the following to your app.js file:

```javascript
// Middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);
  next();
});

app.get('/', function(req, res) {
```

Let's go through this. After setting up our app and before our routes we tell our app to use a new function we are providing. That's all Middleware is! When writing custom Middleware, it's best practice to pass in the **req** object, the **res** object and finally **next**, _even if we don't use it!_ In this case, we are simply logging out the request method ('GET'), the request path ('/') and the request IP ('127.0.0.1' - localhost).


### Render JSON

Let's look at a basic `get` method in an express app.

```js
// server.js
  var taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ]
```

```js
  app.get('/api/taquerias', function (req, res) {
    res.json(taquerias);
  });
```

> Chellenge: render a list of cafes as JSON under the route `/api/cafes`. Test it using `curl`. 


### Hitting your API

TODO: elaborate on `fetch` & challenge

Now we can go to `/api/taquerias` or `/api/cafes` to have our data send back to us as a `.json`

EXPLAIN AND USE `fetch` to get taquerias.

> Challenge: Use fetch to get your cafes and render them to you `index.html` page when a user clicks a button `Show Cafes`

###Serve Static Files

1. Make a directory in your project called `public`; then create `public/scripts`, `public/styles` and `public/images` subdirectories.  Move `styles.css`, and `app.js`, into their public subdirectories.  These files are called static files. (You can delete the old directories they were in.)

1. Set up the express app to serve the static files (actually, the whole public directory.)

  ```js
    // server.js
    app.use(express.static('public'));
  ```

1. Get a `console.log("Sanity Check: JS is working!")` from your `app.js` to appear in your browser dev tools console.

1. Get the css styles in `styles.css` working again on the index page.

1. Everything should be working again now, and you should see your albums when you visit `localhost:3000`.  If not, fix it!

> Chellenge: Add an image to your `public/images` folder and display it in `index.html`.


## Closing Thoughts

...

## Additional Resources

* RESTful Convention...
