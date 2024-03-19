
function add(){
    var a = parseInt(document.getElementById("n1").value);
    var b= parseInt(document.getElementById("n2").value);
    document.getElementById("result").value=a+b;

}
function multiply(){
    var a = parseInt(document.getElementById("n1").value);
    var b= parseInt(document.getElementById("n2").value);
   
    document.getElementById("result").value = a*b;

}
function divide(){
    var a = parseInt(document.getElementById("n1").value);
    var b= parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = a/b;

}
function subtract(){
    var a = parseInt(document.getElementById("n1").value);
    var b= parseInt(document.getElementById("n2").value);
    document.getElementById("result").value = a-b;

}