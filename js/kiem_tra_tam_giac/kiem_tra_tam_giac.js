function tamGiac(event){
    event.preventDefault();
    
    var canh1 = document.getElementById("canh__1").value;
    var canh2 = document.getElementById("canh__2").value;
    var canh3 = document.getElementById("canh__3").value;

    if((canh1 == canh2) && (canh1 == canh3)){
        var result = "Đây là tam giác đều";
    }else{
        if((canh1 == canh2) || (canh1 == canh3) || (canh2 == canh3)){
            if((canh1 * canh1 == (canh2 * canh2) + (canh3 * canh3)) || (canh2 * canh2 == (canh1 * canh1) + (canh3 * canh3)) || (canh3 * canh3 == (canh2 * canh2) + (canh1 * canh1))){
                result = "Đây là tam giác vuông cân";
            }else{
                result = "Đây là tam giác cân";
            }
        }else{
            if((canh1 * canh1 == (canh2 * canh2) + (canh3 * canh3)) || (canh2 * canh2 == (canh1 * canh1) + (canh3 * canh3)) || (canh3 * canh3 == (canh2 * canh2) + (canh1 * canh1))){
                result = "Đây là tam giác vuông"
            }else{
                result = "Đây là tam giác thường";
            }
        }
    }

    var tag = document .createElement("div");
    tag.innerHTML = result;
    document.getElementById("footer__kiem__tra__tam__giac").innerHTML = "";
    document.getElementById("footer__kiem__tra__tam__giac").appendChild(tag);
}