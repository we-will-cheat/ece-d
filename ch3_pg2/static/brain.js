//var socket = io("localhost:3000");
var socket = io("https://we-will-cheat-xx.glitch.me/");
socket.emit("aa")

socket.on("aa",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
