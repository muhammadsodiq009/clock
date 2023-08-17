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
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    time.innerHTML= `${hour}:${minute}:${second}`
}
formatTime()

setInterval(() => {
    formatTime()
}, 1000);