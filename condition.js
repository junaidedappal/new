
var r =require("readline-sync")
num1=r.question("enter a number")
num2= r.question("enter another number")
if (num1>num2) {
    console.log(num1+" is graeter")
}else if (num2>num1){
    console.log(num2+" is greater")
}else{
    console.log("its are equal")
}