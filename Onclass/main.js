var payementMoney = document.getElementById('Payment_money')
var tipMoney = document.getElementById('Tip_money')
var share = document.getElementById('Share')
var calculate = document.getElementById('calculate')
var pEl = document.querySelector('p')


calculate.onclick = handleCalculate 

function handleCalculate(e){
    e.preventDefault();
    if (!payementMoney.value||!share.value){
        alert("Dien du thong tin")
    }
    else if (!tipMoney || !tipMoney.value ==="0") {
        pEl.innerText = "Tien/Nguoi" + 0
    }
    else{
        console.log("Hieu Ngu")
        var result = (Number(payementMoney.value)*Number(tipMoney.value/100))/Number(share.value)
        pEl.innerText = "Tien : " + result;
        console.log("result:", result)
    }
}



// var email = document.getElementById('exampleInputEmail1')
// var password = document.getElementById('exampleInputPassword1')
// var btn = document.querySelector('.btn-primary')
// console.log(email)
// console.log(password)
// console.log(btn)


// btn.onclick = handleSubmit

// function handleSubmit(e){
//     e.preventDefault(); // when the page reload doesn't show console
//     console.log("email:",email.value);
//     console.log("pass:",password.value)
//     alert("Tai khoan cua ban")
// }




























// var lightBuldElement = document.querySelector('#light_buld')
// var btnClick = document.querySelector('.Click')

// lightBuldElement.classList.add('onBuld')

// btnClick.onclick = Click

// function Click(){
//     console.log(lightBuldElement.className)
//     // console.log(lightBuldElement.classList)
//     if (lightBuldElement.className === "onBuld")
//     {
//         lightBuldElement.classList.remove("onBuld")
//         lightBuldElement.classList.add("offBuld")
//     }
//     else{
//         lightBuldElement.classList.remove("offBuld")
//         lightBuldElement.classList.add("onBuld")
//     }
// }


// var btnOn = document.querySelector('.On')
// var btnOff = document.querySelector('.Off')
// var pEl=document.querySelector('p')

// lightBuldElement.classList.add('onBuld')
// console.log('btnON:',btnOn)


// var btnOn = document.querySelector('.On')
// btnOff.onclick = turnOff
// btnOn.onclick = turnOn

// function turnOn(){
//     lightBuldElement.classList.remove('offBuld')
//     lightBuldElement.classList.add('onBuld')
// }
// function turnOff(){
//     lightBuldElement.classList.remove('onBuld')
//     lightBuldElement.classList.add('offBuld')
// }

