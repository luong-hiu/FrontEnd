var numbers = document.querySelectorAll('.number')
var btn = document.querySelector('#btn')
var pEL = document.querySelector('p')
console.log('numbers:' ,numbers.length)
console.log('btn:' ,btn)

btn.onclick = handleCal

function handleCal(){
    var total = 0
    for ( var i = 0; i<numbers.length;i++){
        if (!numbers[i].value) {
            alert("Nhập số vào các ô")
            return
        }
        total += Number(numbers[i].value);
    }
    var avarage = total/numbers.length

    pEL.innerText = 'Tổng giá trị: ' + avarage
}



