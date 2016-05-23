'use strict'

const express = require('express');   
const app     = express();
const port    = process.env.PORT || 3000;
const router  = express.Router();
const bodyParser = require('body-parser');   // middleware for form to JSON

const taquerias = [
  { name: "La Taqueria", id:14 },
  { name: "El Farolito", id:25 },
  { name: "Taqueria Cancun", id:31 }
]

app.use(express.static('public'));
app.use('/',router);
var urlencodedparser = bodyParser.urlencoded({extended:false});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("middleware hit");
  console.log("%s request to %s", req.method, req.path);
  next();
});

app.set('views', './views');
app.set('view engine', 'ejs');


router.get('/', function(req, res) {
  console.log("home hit!\n");
  res.render('index', { header: 'index!'});
});

router.get('/contact', function(req, res) {
  res.render('contact', { header: 'contact!'});
});

router.get('/about', function(req, res) {
  console.log("hit about me!\n");
  res.render('about', { header: 'about!'});
});

// taquerias api index route
router.get('/api/v1/taquerias', function (req, res) {
  console.log("hit taquerias!\n")
  res.json(taquerias); // render all taquerias
});

router.get('/api/v1/taquerias/:id', function (req, res, next) {
  console.log("hit taquerias!\n")
  next();
}, function(req,res,next){
  // console.log("req.params: ",req.params)
  for (var i=0;i<taquerias.length;i++){
      if (req.params.id == taquerias[i].id) {
      res.json(taquerias[i]);
    }
    }
});


router.post('/api/v1/taquerias', function (req, res) {
  console.log("hit taquerias to POST!\n")
  // var tempRestaurant = req.body.restaurant
  // var tempId = req.body.id
  // var tempTaqueria = {restaurant: tempRestaurant, id: tempId}
  taquerias.push(req.body)
});

router.form('/form', function (req, res) {
  console.log("hit taquerias!\n")
  res.json(taquerias); // render all taquerias
});

// app.get('/', function(req, res) {
//   console.log("home hit!\n")
//   // res.sendFile(__dirname+"/views/index.html");
//   res.render('index');
// });

// app.get('/aboutme', function(req, res) {
//   console.log("hit about me!\n")
//   res.send("I'm having trouble with my browser game; I need to ask for help.");
// });

// // taquerias api index route
// app.get('/api/v1/taquerias', function (req, res) {
//   console.log("hit taquerias!\n")
//   res.json(taquerias); // render all taquerias
// });


app.listen(port);
console.log('Server started on', port);

app.use('/', router);


var carRouter = express.Router();

carRouter.get('/', function(req, res) {
  console.log(req+" request to /, this is the READE action.")
});

carRouter.get('/:id', function(req, res) {
  // SHOW
});

carRouter.get('/new', function(req, res) {
  // NEW
});

carRouter.post('/', function(req, res) {
  // CREATE
});

carRouter.get('/:id/edit', function(req, res) {
  // SHOW
});

carRouter.put('/:id', function(req, res) {
  // UPDATE
});

carRouter.delete('/:id', function(req, res) {
  // DELETE
});


app.use("/cars", carRouter)
