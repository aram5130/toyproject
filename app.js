ran = parseInt(Math.random()*100+1);
count = 1;

function guess() {
    num1 = document.getElementById("plyernumber").value;
    if (num1 == "") {
        alert('숫자를 입력하세요!');
    }
    if (num1 == ran) {
    document.getElementById("textarea").innerHTML="정답!";
    } else {
        if(ran > num1){
            document.getElementById("result").value=(num1 + "보다 UP!");
    } else { 
        document.getElementById("result").value=(num1 + "보다 DOWN!");
    }
    }
}