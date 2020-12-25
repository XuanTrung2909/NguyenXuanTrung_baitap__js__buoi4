function loiChao(event){
    event.preventDefault();
    var nguoiDung = document.getElementById("who").value;

    var chao = "";

    if((nguoiDung == "B") || (nguoiDung == "b")){
        chao = "Bố";
    }
    if((nguoiDung == "M") || (nguoiDung == "m")){
        chao = "Mẹ";
    }
    if((nguoiDung == "A") || (nguoiDung == "a")){
        chao = "Anh Trai";
    }
    if((nguoiDung == "E") || (nguoiDung == "e")){
        chao = "Em Gái";
    }

    var tag = document.createElement("div");
    tag.innerHTML = "Xin Chào: " + chao;
    document.getElementById("footer__loi__chao").innerHTML = "";
    document.getElementById("footer__loi__chao").appendChild(tag);
};