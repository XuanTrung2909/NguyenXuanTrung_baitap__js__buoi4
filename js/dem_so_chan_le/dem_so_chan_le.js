function demSo(event){
    event.preventDefault();
    var number1 = document.getElementById("int__1").value;
    var number2 = document.getElementById("int__2").value;
    var number3 = document.getElementById("int__3").value;

    var countEven = 0;
    var countOdd = 0;

    if((number1 % 2 ) == 0){
        countEven++;
    }else{
        countOdd++;
    }
    if((number2 % 2) == 0){
        countEven++;
    }else{
        countOdd++;
    }
    if((number3 % 2) == 0){
        countEven++;
    }else{
        countOdd++;
    }

    var tag = document.createElement("div");
    tag.innerHTML = "có " + countEven + " số chẵn và " + countOdd + " số lẻ.";
    document.getElementById("footer__dem__so__chan__le").innerHTML = "";
    document.getElementById("footer__dem__so__chan__le").appendChild(tag);
}