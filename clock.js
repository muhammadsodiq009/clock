const day  = document.querySelector(".day")
const time = document.querySelector(".time")
const year = document.querySelector(".year")

let sana = new Date()

console.log( sana.getFullYear);
console.log( sana.getMonth + 1 );
console.log( sana.getDate);
console.log( sana.getDay);
console.log( sana.getHours);
console.log( sana.getMinutes);


function formatTime() {
    let date = new Date()
    let hour = date.getHours().toString().padStart(2, "0")
    let minute = date.getMinutes().toString().padStart(2, "0")
    let second = date.getSeconds().toString().padStart(2, "0")
    time.innerHTML= `${hour}:${minute}:${second}`
}
formatTime()

setInterval(() => {
    formatTime()
}, 1000);

function formatDay (){
    let date = new Date()
    let index = date.getDay()
    let dayName = ""
    switch(index){
        case 0:
            dayName = "Sunday"
            break
        case 1:
            dayName = "Monday"
            break
        case 2:
            dayName = "Tuesday"
            break
        case 3:
            dayName = "Wednesday"
            break
        case 4:
            dayName = "Thursday"
            break
        case 5:
            dayName = "Friday"
            break
        case 6:
            dayName = "Saturday"
            break
    }
    day.innerHTML = dayName
}