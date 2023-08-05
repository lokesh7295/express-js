const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser());

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render('layout');
})

app.get('/flashcard', (request, response) => {
    response.locals.pvariable = "data in pvariable"
    //response.locals.hvariable = "data in hvariable"
    response.render('card', {hvariable : "data in hvariable", hint: "think of which grave it is", colors});
})

app.get('/hello', (request, response) => {
    response.render('hello', {name : request.cookies.username});
})

app.post('/hello', (request, response) => {
    response.cookie('username', request.body.username);
    response.render('hello', {name: request.body.username});
})


app.listen(3000)