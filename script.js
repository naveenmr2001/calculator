var count = 0;
var firstvalue = 0;
var symbol = "";
var flag = false;
var secondvalue = 0;
var answer = 0;
const onClick = (id) =>{
    var value = document.getElementById(id).innerHTML;
    console.log(value)
    if(value === "AC"){
        document.getElementsByClassName("answer")[0].innerHTML = "";
    }else if(value=="DEL"){
        document.getElementsByClassName("answer")[0].innerHTML = document.getElementsByClassName("answer")[0].innerHTML.substring(0,document.getElementsByClassName("answer")[0].innerHTML.length-1)
    }else if(value === "="){
        var result = eval(document.getElementsByClassName("answer")[0].innerHTML)
        document.getElementsByClassName("answer")[0].innerHTML = parseInt(result).toFixed(2);
    }
    else{
        document.getElementsByClassName("answer")[0].innerHTML+=value;
    }
}