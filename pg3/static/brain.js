var socket = io("https://we-will-cheat-xx.glitch.me/");

socket.emit("even");

socket.on("even",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});

setInterval(function() {
  socket.emit("even");
}, 3*1000);
