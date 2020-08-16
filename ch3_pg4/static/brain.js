var socket = io("https://we-will-cheat-xx.glitch.me/");

socket.emit("cc")

socket.on("cc",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
