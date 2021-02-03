var num_9, num_8, num_7,num_6, num_5, num_4,num_3, num_2, num_1,num_0;
var addBtn, minBtn, divBtn, mulBtn, equalBtn, powBtn;
var input;
num_0 = document.getElementById("num_0").value;
num_1 = document.getElementById("num_1").value;
num_2 = document.getElementById("num_2");
num_3 = document.getElementById("num_3").value;
num_4 = document.getElementById("num_4").value;
num_5 = document.getElementById("num_5").value;
num_6 = document.getElementById("num_6").value;
num_7 = document.getElementById("num_7").value;
num_8 = document.getElementById("num_8").value;
num_9 = document.getElementById("num_9").value;
addBtn = document.getElementById("addBtn").value;
minBtn = document.getElementById("minBtn").value;
divBtn = document.getElementById("divBtn").value;
mulBtn = document.getElementById(mulBtn).value;
equalBtn = document.getElementById("equalBtn").value;
powBtn = document.getElementById("powBtn").value;
input  = document.getElementById("input").value;
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculatorKey");
var i = 0;
//document.getElementById("equalBtn").addEventListener("click", utube);
//document.getElementById("btnDel").addEventListener("click", dc);
//document.getElementById("btnAc").addEventListener("click", ac);
function utube(){
    var x = document.getElementById("input").value;
    document.getElementById("input").value = eval(x);
  }

  function ac(){
    document.getElementById("input").value = "0";
  }
  function dc(){
     var previuous = document.getElementById("input").value;
     document.getElementById("input").value = previuous.substr(0,previuous.length - 1);
  }
