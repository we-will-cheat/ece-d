var socket = io("https://beb59ad1cecb.ngrok.io");

socket.emit("even")

socket.on("even",(obj)=>{
    document.getElementById("content").innerHTML=obj.data;
});
