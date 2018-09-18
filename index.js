var express = require("express");
var express_app = express();
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var routes = require('./app/routes/index');

var app1Guide = require('./app/controllers/app1Guide');

app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

app.use(app1Guide);

app.get("/",function(request,response){
    response.json({message: "Express is up!"});
});

// app.express({ expressApp: express_app });
// express_app.listen(process.env.PORT );
app.listen(80);


