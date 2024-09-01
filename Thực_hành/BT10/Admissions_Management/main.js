scoreMark = document.getElementById("Mark")
scoreMath = document.getElementById("Math")
scoreLiterature = document.getElementById("Literature")
scoreEnglish = document.getElementById("English")
region = document.getElementById("region")
person = document.getElementById("person")
btnSubmit = document.querySelector("button")
pEl = document.querySelector("p")
spanEl = document.querySelector("span")
form = document.querySelector("form")

btnSubmit.onclick = handleCal


console.log(form)
function handleCal(e) {
    e.preventDefault()
    var scoreMarkValue = Number(scoreMark.value)
    var scoreMathValue = Number(scoreMath.value)
    var scoreLiteratureValue = Number(scoreLiterature.value)
    var scoreEnglishValue = Number(scoreEnglish.value)

    var regionValue = region.value
    var personValue = person.value
    var total = scoreMathValue + scoreLiteratureValue + scoreEnglishValue
    
    if(!scoreMarkValue||!scoreMathValue||!scoreLiteratureValue||!scoreEnglishValue){
        alert("Điền thông tin điểm vào ô")
    }
    else if(scoreMarkValue<0||scoreMathValue<0||scoreLiteratureValue<0||scoreEnglishValue<0){
        alert("Điểm số không được âm")
    }
    else if (scoreMathValue>10||scoreLiteratureValue>10||scoreEnglishValue>10)
    {   
        alert("Điểm số vượt quá mức quy định")
    }
    else{
        switch (regionValue) {
            case 'A':
                total+=2
                break;
            case 'B':
                total+=1
                break;
            case 'C':
                total+=0.5
                break;
            case 'X':
                total+=0
                break;
            default:
                break;
        }
    
        switch (personValue) {
            case '0':
                total+=0
                break;
            case '1':
                total+=2.5
                break;
            case '2':
                total+=1.5
                break;
            case '3':
                total+=1
                break;
            default:
                break;
        }
        
        if (total >= scoreMarkValue){
            spanEl.innerText = total
            pEl.innerText = "Đậu"
        }
        else{
            spanEl.innerText = total
            pEl.innerText = "Rớt"
        }
        
        
    }
    form.reset()     
    
}


