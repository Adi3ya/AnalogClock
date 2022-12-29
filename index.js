setInterval(()=>{
    d = new Date();
    hourTime = d.getHours();
    minTime = d.getMinutes();
    secTime = d.getSeconds();
    // formula has already been calculated and derived from our data file
    hourRotation = 30 * hourTime + minTime / 2;
    minRotation = 6*minTime;
    secRotation = 6 * secTime;

    hour.style.transform = `Rotate(${hourRotation}deg)`;
    minute.style.transform = `Rotate(${minRotation}deg)`;
    second.style.transform = `Rotate(${secRotation}deg)`;
},1000); //setInterval -> for every 1000s repeat the action