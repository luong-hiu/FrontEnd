var number = document.querySelector('#number')
var btn = document.querySelector('button')
var pEL = document.querySelector('p')

btn.onclick = handleCal

function handleCal(){
    if (!number.value){
        alert("Nhập số vào ô")
    }else if(number.value >99||(number.value<10&&number.value>0)){
        alert("Nhập số có 2 ký số")
    }
    else{    
        var unit = Math.abs(Number(number.value))%10
        var tens = Number(number.value)/10
        if(tens>0)
            {tens = Math.floor(tens)}
        else
            {tens = Math.ceil(tens)}
        var total = unit + tens
        console.log(tens, unit)
        pEL.innerText = "Tổng 2 ký số: "+total 
    }
    
}