var socket = io("https://we-will-cheat-xx.glitch.me/");

var flag = "none";

function odd()
{
    document.getElementById("odd").style.backgroundColor="rgba(247, 2, 2, 0.356)";
    document.getElementById("done").style.backgroundColor="rgba(247, 2, 2, 0.356)";
    document.getElementById("even").style.backgroundColor="rgba(0,0,0,0.5)";
    flag="odd";
}

function even()
{
    document.getElementById("even").style.backgroundColor="rgba(2, 239, 247, 0.356)";
    document.getElementById("done").style.backgroundColor="rgba(2, 239, 247, 0.356)";
    document.getElementById("odd").style.backgroundColor="rgba(0,0,0,0.5)";
    flag = "even";
}

function done()
{
    var reg=Number(document.getElementById("r").value);
    if((reg>=154 && reg <=209)||reg==46)
    {
        if(flag=="none")
            {console.log("none");}
        else if(flag=="odd")
        {
            console.log("odd");
            socket.emit("request",{bool:"odd",reno:reg});
            
        }
        else if(flag=="even")
        {
            console.log("even");
            socket.emit("request",{bool:"even",reno:reg});
            
        }
        else
            {console.log("exception "+flag);}
    }
    else
        console.log("No input given");
}
