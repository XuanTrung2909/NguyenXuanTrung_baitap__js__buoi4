function soSanh(event){
    event.preventDefault();
    var number1 = document.getElementById("number__1").value;
    var number2 = document.getElementById("number__2").value;
    var number3 = document.getElementById("number__3").value;
    
    var minNumber = 0;
    var maxNumber = 0;
    var secondNumber = 0;

    //xử lý

    if( number1 > number2){
        if(number1 > number3){
            maxNumber = number1;
            if(number2 > number3){
                secondNumber = number2;
                minNumber = number3;
            }else{
                secondNumber = number3;
                minNumber = number2;
            }
        }else{
            maxNumber = number3;
            secondNumber = number1;
            minNumber = number2;
        }
    }else{
        if(number2 < number3){
            maxNumber = number3;
            secondNumber = number2;
            minNumber = number1;
        }else{
            maxNumber = number2
            if(number1 > number3){
                secondNumber = number1;
                minNumber = number3;
            }else{
                secondNumber = number3;
                minNumber = number1;
            }
        }
    }

    // in kết qua 

    var tag = document.createElement("div");
    tag.innerHTML = "Sắp xếp tăng: " + minNumber + "->" + secondNumber + "->" + maxNumber;
    document.getElementById("footer__sx__so__nguyen").innerHTML = "";
    document.getElementById("footer__sx__so__nguyen").appendChild(tag);
};