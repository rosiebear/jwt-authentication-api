var express = require('express');
var faker = require('faker');
var cors = require("cors");

var app = express();
app.use(cors());
app.get('/random-user', function(req, res){
    var user = faker.helpers.userCard();
    user.avatar = faker.image.avatar();
    res.json(user);
});

app.listen(3001, function(){
   console.log('App listening on localhost:3001');
});