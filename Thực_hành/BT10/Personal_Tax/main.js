incomeMoney = document.getElementById("income")
dependent = document.getElementById("dependent")
btnSubmit = document.querySelector("button")
pEl = document.querySelector("p")
form = document.querySelector("form")

// console.log(incomeMoney, dependent, btnSubmit, pEl, form)

btnSubmit.onclick = handleCal



function handleCal(e) {
    e.preventDefault()
    var taxableIncome = incomeMoney.value - 4 - dependent.value * 1.6 ;
    var tax = 0;

    if (!incomeMoney.value){
        alert("Vui lòng điền thu nhập của bản thân")
    }
    else if(incomeMoney.value < 0 || dependent.value < 0){
        alert("Thông tin điền vào không được là số âm")
    }
    else{
        if (taxableIncome > 960 ) {
            tax += (taxableIncome - 960 ) * 0.35;
            taxableIncome = 960 ;
        }
        if (taxableIncome > 624 ) {
            tax += (taxableIncome - 624 ) * 0.30;
            taxableIncome = 624 ;
        }
        if (taxableIncome > 384 ) {
            tax += (taxableIncome - 384 ) * 0.25;
            taxableIncome = 384 ;
        }
        if (taxableIncome > 210 ) {
            tax += (taxableIncome - 210 ) * 0.20;
            taxableIncome = 210 ;
        }
        if (taxableIncome > 120 ) {
            tax += (taxableIncome - 120 ) * 0.15;
            taxableIncome = 120 ;
        }
        if (taxableIncome > 60 ) {
            tax += (taxableIncome - 60 ) * 0.10;
            taxableIncome = 60 ;
        }
        tax += taxableIncome * 0.05;
        if(tax < 0){
            pEl.innerText = "Bạn không cần đóng thuế thu nhập cá nhân"
        }
        else{
            pEl.innerText = "Thuế thu nhập cá nhân phải nôp là:"+"\n"+Number(tax*1000000).toLocaleString("vi-VN")+" đ"
        }  
    }

}