
// function ShortDis(priceFirst,priceWaitTime,distance,waitTime){
//     Total = priceFirst*distance+Math.floor(priceWaitTime*waitTime)
// }
// function LongDis(priceFirst,priceSecond,priceWaitTime,distance,waitTime){
//     Total = priceFirst
// }
// function CalGrab(grabType,distance,waitTime){
//     var Total
//     if(grabType==="GrabCar") {
//         if(distance<19){
//             Total = 8000+(distance-1)*7500+(waitTime/3)*2000
//         }else{
//             Total = 8000+18*7000+(distance-19)*7500+waitTime*2000
//         }
//     }else if (grabType==="GrabSuv"){
//         if(distance<19){
//             Total = 9000+(distance-1)*8500+(waitTime/3)*3000
//         }else{
//             Total = 9000+18*8500+(distance-19)*8000+(waitTime/3)*3000
//         }
//     }else{
//         if(distance<19){
//             Total = 10000+(distance-1)*9500+(waitTime/3)*3500
//         }else{
//             Total = 10000+18*9500+(distance-19)*9000+(Math.floor(waitTime/3))*3500
//         }
//     }
//     return Total
// }

// console.log("CalGrab:", CalGrab("GrabCar",20,6))
// console.log("CalGrab:", CalGrab("GrabSuv",30,6))
// console.log("CalGrab:", CalGrab("GrabBlack",40,5))


var inputX = document.querySelector("#x")
var inputN = document.querySelector("#n")
var btn = document.querySelector("button")
var result = document.querySelector("#result")

var val
btn.onclick = handleSubmit

function handleSubmit(){
    var valueX = Number(inputX.value)
    var valueN = Number(inputN.value)
    console.log(valueX,valueN)
    var total = 0
    for (var i = 0; i<=valueN ; i++){
        total += valueX**i
        console.log(total)
    }
    result.innerHTML = total
}