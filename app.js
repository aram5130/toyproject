ran = parseInt(Math.random() *100+1);
count = 1;

function guess() {
    num1 = document.getElementById("plyernumber").value;
    if (num1 == "") {
        alert('숫자를 입력하세요!');
    }
    if (num1 == ran) {
        document.getElementById("textarea").innerHTML = "wow!정답!";
    } else {
        if(ran > num1){
            document.getElementById("result").value = (num1 + "보다 UPUP!");
    } else { 
        document.getElementById("result").value = (num1 + "보다 DOWN!");
        }
    }
    if(count == 5){
        document.getElementById("btn").disabled = true;
        document.getElementById("textarea").style.color = "tomato";
        document.getElementById("textarea").innerHTML = "정답은 "+ran+" !";
    }
    document.getElementById("trycount").value=((count++) + "번 도전했슴다.");
}
