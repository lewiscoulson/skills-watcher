var express = require('express');

var app = new express();
var parser = require('body-parser');

app.get('/',  function(req,res){
    res.render('./../app/index.ejs',{});
})

.use(express.static(__dirname + '/../.tmp'))
.listen(7779);

app.use(parser.json());
app.use(parser.urlencoded({extended: false}));

require('./routes/skills.js')(app);