function number(num){
    var result = document.getElementById("result");
    result.value += num;
 }

function calculate(){
document.getElementById("result");
result.value = eval(result.value);
}

function clear(){
    var result = document.getElementById("result")
    result.value = " ";
    }

    function del(){
        result.value = result.value.slice(0,-1);
    }
