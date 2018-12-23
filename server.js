var express = require("express"),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require("mongoose"),
    Task = require("./api/models/todoListModel"),    
    bodyparser = require("body-parser");

//connect to MongoDb
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todo-db");

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var routes = require("./api/routes/todoListRoutes");
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log("Todo list Restful API started on port "+port);