//var socket = io("localhost:3000");
var socket = io("https://beb59ad1cecb.ngrok.io");
socket.emit("odd")

socket.on("odd",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
