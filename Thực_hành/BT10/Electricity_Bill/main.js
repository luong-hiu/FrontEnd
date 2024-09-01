numberKw = document.getElementById("Kw")
btnSubmit = document.querySelector("button")
pEl = document.querySelector("p")
form = document.querySelector("form")
// console.log(numberKw, btnSubmit , pEl)

btnSubmit.onclick = handleCal

function handleCal(e){
    e.preventDefault()
    
    var numberKwValue = numberKw.value
    var moneyElec = 0
    if (!numberKwValue){
        alert("Nhập số thông tin điện vào ô")
    }
    else if(numberKwValue<0){
        alert("Số chữ điện không được âm")
    }
    else{
        if (numberKwValue<50){
            moneyElec = numberKwValue*500
        }
        else if(numberKwValue<100){
            moneyElec = 50*500+(numberKwValue-50)*650
        }
        else if(numberKwValue<200){
            moneyElec = 50 * 500 + 50 * 650 +(numberKwValue-100)*850
        }
        else if(numberKwValue<350){
            moneyElec = 50 * 500 + 50 * 650 + 100 * 850+(numberKwValue-200)*1100
        }
        else{
            moneyElec = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 +(numberKwValue-350)*1300
        }
        
        pEl.innerText = "Tiền điện tháng này là: " +"\n"+ moneyElec + "đ"
        form.reset()
    }
    
}