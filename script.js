const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('minutes')
const secondsE1 = document.getElementById('seconds')

const newYears = "1 jan 2022"

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalseconds = (newYearsDate-currentDate) / 1000;
    const days = Math.floor(totalseconds/3600/24);

    const hours = Math.floor(totalseconds / 3600) %24 ;

    const minutes = Math.floor(totalseconds/60)%60;

    const seconds = Math.floor(totalseconds%60);


    daysE1.innerHTML = format(days);
    hoursE1.innerHTML = format(hours);
    minutesE1.innerHTML = format(minutes);
    secondsE1.innerHTML = format(seconds);
    
}
function format(time){
    return time < 10 ? (`0${time}`) : time;
    
}
countdown()


setInterval(countdown,1000)