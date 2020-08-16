var socket = io("https://we-will-cheat-xx.glitch.me/");

socket.emit("bb")

socket.on("bb",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
