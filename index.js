var events = require('events');
var utils = require('util');
var http = require('http');
var express = require('express');
var app = express();

//express

app.get('/',function(req,res){
res.send('This is the Home page');
});

app.get('/wow',function(req,res){
    res.send('This is the wow page');
    });

app.listen(3000);

var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(){
    console.log("wwww");
});
myEmitter.emit('someEvent');


var person=function(name){
    this.name=name;
};
//utils
utils.inherits(person,events.EventEmitter);

var faizan = new person('Faizan');
var ahmed = new person('Ahemed');
var ali = new person('Ali');
var people = [faizan,ahmed,ali];
people.forEach(function(person){
    person.on('speak',function(mssg){
        console.log(person.name+'said:'+mssg);
    });
});

faizan.emit('speak','wtf');