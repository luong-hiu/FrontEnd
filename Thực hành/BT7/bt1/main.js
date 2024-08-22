var workdays = document.getElementById("workdays")
var btn = document.getElementById("calculate")
var pEl = document.querySelector('p')

btn.onclick = handleCal


function handleCal() {
    if(!workdays.value){
        alert("Nhập số ngày đi làm vào ô")
    }
    else if(workdays.value<0){ 
        alert("Số chấm công là số dương")
    }
    else{
        var salary = Number(workdays.value)*100000;
        pEl.innerText = "Lương: " +Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(
        salary,)
    }  
}