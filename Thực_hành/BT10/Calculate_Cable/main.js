codeClient = document.getElementById("code")
typeClient = document.getElementById("type")
connections = document.getElementById("connections")
premium = document.getElementById("premium_chanel")
btnSubmit = document.querySelector("button")
pEl = document.querySelector("p")

console.log(codeClient, typeClient, connections, premium, btnSubmit)

connections.disabled = true

btnSubmit.onclick = handleCal
typeClient.onchange = changeType

function changeType() {
    if (typeClient.value === "B") {
        connections.disabled = false;
    } else {
        connections.disabled = true
        connections.value = ""
    }
}

function handleCal(e) {
    e.preventDefault()
    if (typeClient.value === "Choose...") {
        alert("Chọn loại hình lắp đặt")
    } 
    else if (!codeClient.value || !premium.value || (typeClient.value === "B" && !connections.value)) {
        alert("Điền thông tin")
    } 
    else if (premium.value<0 || (typeClient.value === "B" && connections.value<10)) {
        alert("Thông tin lắp đặt không được âm")
    }
    else {
        let totalFee;
        if (typeClient.value === "A") {
            var processingFee = 4.5
            var basicServiceFee = 20.5
            var premiumChanelFee = 7.5
            totalFee = processingFee + basicServiceFee + premiumChanelFee * premium.value
        } 
        else {
            var processingFee = 15
            var basicServiceFee = 75
            var premiumChanelFee = 50
            if (connections.value <= 10) {
                totalFee = processingFee + basicServiceFee + premiumChanelFee * premium.value
            } 
            else {
                totalFee = processingFee + basicServiceFee + (connections.value - 10) * 5 + premiumChanelFee * premium.value
            }
        }

        pEl.innerText = "Tổng chi phí lắp đặt: " + totalFee + " USD"
    }
}
