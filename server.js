/**
 * Created with JetBrains WebStorm.
 * User: pariskshitdutt
 * Date: 06/02/2014
 * Time: 17:40
 * To change this template use File | Settings | File Templates.
 */

var express = require('express');
var server;
var mysql      = require('mysql');
var app = express();
var port = 1337;
var data;
var connection = mysql.createConnection({
    host     : 'bo.favista.in',
    user     : 'track',
    password : 'pwoek724',
    database :'favista'
});
connection.connect(function(err){
});

app.configure(function(){
        app.set("view options", { layout: false, pretty: true });
        app.engine('html', require('ejs').renderFile);
        app.set('views', __dirname + '/views');
        app.use(express.favicon());
        app.use("/public", express.static(__dirname + '/public'));
    }
);

server=app.listen(port);
// Routes
app.get('/', function(req, resp){
    resp.render('index.html');
});
app.post('/getdata',function(req,res){

})