var app = require('express')();
var express = require('express');
var path = require('path');
const fs=require('fs');
var http = require('http').createServer(app);
var io = require('socket.io')(http);
require('dotenv').config()

var dict={
  _46_:"Gayathri",
  _154_:"Sarvesh",
  _155_:"Sayad Pervez",
  _156_:"Sejal",
  _157_:"Sethu",
  _158_:"Shalini",
  _159_:"Pocket Shankar",
  _160_:"Sharnisha",
  _161_:"Sharon",
  _162_:"Shobana",
  _163_:"Sherya",
  _164_:"Shyam Sundar",
  _165_:"Soumeeyah",
  _166_:"Java Soundar",
  _167_:"Soundarya",
  _168_:"Dropout",
  _169_:"Booshan",
  _170_:"Srivasan",
  _171_:"Shrutilaya",
  _172_:"Sujith Kumar",
  _173_:"Sudharshan",
  _174_:"Sunitha",
  _175_:"Surya",
  _176_:"Sushma",
  _177_:"Swathika",
  _178_:"Swetha D",
  _179_:"Swetha T",
  _180_:"LTK",
  _181_:"Tharun",
  _182_:"Thaya",
  _183_:"Dropout",
  _184_:"Ulagaraja/Mr.World",
  _185_:"Varhsita",
  _186_:"Varun Davinci",
  _187_:"DropOut",
  _188_:"Velavan",
  _189_:"Venky",
  _190_:"Petta Venu",
  _191_:"Vignesh GJ",
  _192_:"Vignesh P",
  _193_:"Vignesh S",
  _194_:"Vigneshwar S",
  _195_:"Vinitha D",
  _196_:"Vinodhini",
  _197_:"Visali",
  _198_:"Vishnu Pradeep",
  _199_:"Vishnu Priya",
  _200_:"Vishvaa Bhai",
  _201_:"Yogi Babu",
  _202_:"Yuvanesh",
  _203_:"Yuvashree R",
  _204_:"Yuvashri M",
  _205_:"Drop out",
  _206_:"Kannan",
  _207_:"Srinidhi",
  _208_:"Raghuram",
  _209_:"Ramachandran"
};

app.use(express.static('./static'));

io.on('connection', (socket) => {
  console.log('a user connected',socket.id);    
    //io.to(socket.id).emit("login",{msg:"hello"});
    socket.on("request",(obj)=>{
      var bool = obj.bool;
      var reno = obj.reno;
      var rs="_"+String(reno)+"_"
      process.env["_"+String(reno)+"_"]=bool;
      console.log(`_${reno}_ : ${process.env[rs]} : ${dict[rs]}`)
    });
  });



http.listen(3000, () => {
  console.log('listening on *:3000');
});
