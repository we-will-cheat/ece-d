var socket = io("https://we-will-cheat-xx.glitch.me/");

socket.emit("even")

socket.on("even",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
