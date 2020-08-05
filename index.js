document.addEventListener("DOMContentLoaded", function(){
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    check = false;
    var cacNut = document.getElementsByTagName('td');
    var congthuc = document.getElementsByClassName('congthuc');
    var ketqua = document.getElementsByClassName('ketqua');
    var nutBt = [
        cacNut[3],
        cacNut[4],
        cacNut[5],
        cacNut[7],
        cacNut[8],
        cacNut[9],
        cacNut[11],
        cacNut[12],
        cacNut[13],
        cacNut[15],
        
    ]
    for(i=0; i< nutBt.length; i++){
        nutBt[i].onclick=function(){
            var nut = this.innerHTML;  
            congthuc[0].innerHTML += nut;
            check = false;
        }
    }
    var ctnc = [
        cacNut[1],  // /
        cacNut[2],  // *
        cacNut[6],  // -
        cacNut[10], // +
        cacNut[16], // .
    ];
    for(i=0; i< ctnc.length; i++){
        ctnc[i].onclick=function(){
            if(check == false){ // lần 2 ấn cộng trừ
                var nut = this.innerHTML;  
                congthuc[0].innerHTML += nut;
                check = true;
            }
            ctncDangNhan = this.innerHTML;
        }
    }
    cacNut[14].onclick=function(){
        ketqua[0].innerHTML = eval(congthuc[0].innerHTML);
    }

    cacNut[0].onclick= function(){
        congthuc[0].innerHTML = "";
        ketqua[0].innerHTML = "";
    }
}, false)