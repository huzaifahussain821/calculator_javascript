function getNumber(num){
var result = document.getElementById("result");

result.value += num;
}

function clearresult(){
    var result = document.getElementById("result");
    result.value = " "; 
}


function getresult(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
   
   
}

function getsign() {
    var result = document.getElementById("result");
    var a=result.value; 
   a = a * -1;
   result.value = a;
   
    
}
