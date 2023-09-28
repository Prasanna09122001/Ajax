function showtime()
{
    const date = new Date();
    return date.getHours() +"Hrs: "+date.getMinutes() +"Mins: "+date.getSeconds()+"Secs";
}
function ShowSessionExpire()
{
    console.log("Activity-B: Your Session expired at "+showtime());
}
console.log("Activity-A: Triggering Activity-B at"+showtime());
setTimeout(ShowSessionExpire,10000);
console.log("Activity-A: Triggering Activity-B at"+showtime()+" will execute after 5 secs");