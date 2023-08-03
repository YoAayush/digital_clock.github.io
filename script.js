function displayTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var day = d.getDay();
    var year = d.getFullYear();
    if(h >= 12){
        meridiem ='PM';
    } else{
        meridiem=' AM' ;
    }
    //day
    if(day==1){
        day = "Monday";
    } else if(day==2){
        day = "Tuesday";
    } else if(day==3){
        day = "Wednesday";
    } else if(day==4){
        day = "Thursday";
    } else if(day==5){
        day = "Friday";
    } else if(day==6){
        day = "Saturday";
    } else {
        day ="Sunday";
    }
    var time = h + " : " + m + " : " + s + " " + meridiem + " , " + day + " " + year;
    document.getElementById("clock").innerHTML = time;
}
setInterval(displayTime,1000)