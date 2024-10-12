function Validation (){
    this.checkEmpty = function(inputValue,id,message){
        if(inputValue.trim()===""){
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return false
        }
        else{
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true
        }
    }
    this.checkDuplicateTask = function(code,name,task,id,message,list){
        let index = list.findIndex((item) => 
            item.code === code && 
            item.name === name && 
            item.task.toLowerCase()
                .replace(/\s/g, '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '') ===
            task.toLowerCase()
                .replace(/\s/g, '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
        )
        if(index != -1){
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return false
        }
        else{    
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true
        }
    }
    this.checkCharacters = function(inputValue,id,message){
        var pattern = new RegExp(
            '^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
              'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ' +
              'ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$'
        );
        if(pattern.test(inputValue)){
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true
        }
        else{
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return false
        }
    }
    this.checkCharactersCode = function(inputValue,id,message){
        var pattern = new RegExp(
            '[ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ' +
            'ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ' +
            'ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]'
        );
        if (pattern.test(inputValue)) {
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return false;
        } 
        else {
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true;
        }
    }
    this.checkCorrect = function(code,name,id,message,list){
        let index = list.findIndex((item)=>item.code === code)
        if(index == -1 ){
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";

            return true
        }
        else if (index != -1 && list[index].name !== name){
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return false  
        }
        else {
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true 
        }
    }
    this.checkSpace = function(inputValue,id,message){
        let inputValueTrim = inputValue.trim()
        if(inputValue !== inputValueTrim){
            getELE(id).style.display = 'block';
            getELE(id).innerHTML = message;
            return true
        }
        else{
            getELE(id).style.display = 'none';
            getELE(id).innerHTML = "";
            return true
        }
    }
}