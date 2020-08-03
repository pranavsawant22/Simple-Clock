
function greetings(){
var today = new Date();
var hours =   today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
if (hours>12){
    hours = hours-12
}

    document.getElementById("h").innerHTML = hours;
    document.getElementById("m").innerHTML = " :"+minutes;
    document.getElementById("s").innerHTML = " :"+seconds;
}

setInterval(greetings,1000)
