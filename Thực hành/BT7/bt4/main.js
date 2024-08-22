var lengthRec = document.querySelector('#length')
var widthRec = document.querySelector('#width')
var btn = document.querySelector('button')
var perimeter = document.querySelector('#perimeter')
var area = document.querySelector('#area')
btn.onclick = handleCal

function handleCal(){
    if(!lengthRec.value||!widthRec.value){
        alert("Nhập số vào ô")
    }else if(lengthRec.value<=0 || widthRec.value<=0){
        alert("Cạnh hình chữ nhật phải là số dương khác không")
    }
    else {
        var resOfPerimeter = (Number(lengthRec.value)+Number(widthRec.value))*2
        var resOfArea = Number(lengthRec.value)*Number(widthRec.value)
        perimeter.innerText = "Chu vi: " + resOfPerimeter
        area.innerText = "Diện tích: " + resOfArea
    }
    
 
}