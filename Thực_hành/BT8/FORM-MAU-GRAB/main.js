var grabType = document.getElementsByName('selector');
var distance = document.getElementById('distance');
var waitTime = document.getElementById('time');
var btn = document.getElementById('btn');
var grabPrice = document.getElementById('divThanhTien')
var price = document.getElementById('xuatTien')
console.log(grabPrice)

btn.onclick = handleCal;

function handleCal() {
    var selectedType = null;
    var distanceValue = distance.value;
    var waitTimeValue = waitTime.value;

    for (var i = 0; i < grabType.length; i++) {
        if (grabType[i].checked) {
            selectedType = grabType[i].value;
            break;
        }
    }
   
    if(selectedType === "GrabCar"){
        if(distanceValue <= 19){
                var firstKm = 8000
                var secondKm = 7500
                var waitPrice = 2000
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
        else{
                var firstKm = 8000
                var secondKm = 7000
                var waitPrice = 2000 
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
    }else if (selectedType === "GrabSUV"){
        if(distanceValue <= 19){
                var firstKm = 9000
                var secondKm = 8500
                var waitPrice = 3000
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
        else{
                var firstKm = 9000
                var secondKm = 8000
                var waitPrice = 3000 
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
    }
    else{
        if(distanceValue <= 19){
                var firstKm = 10000
                var secondKm = 9500
                var waitPrice = 3500
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
        else{
                var firstKm = 10000
                var secondKm = 9000
                var waitPrice = 3500 
        total = firstKm + (distanceValue-1)*secondKm + (waitTimeValue/3)*waitPrice
        }
    }
    
    
    console.log(total)

    grabPrice.style.display = 'block'
    price.innerText = Math.floor(total)


}