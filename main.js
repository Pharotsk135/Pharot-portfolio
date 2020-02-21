/*var rand1to10 = Math.floor(Math.random()*10+1);
var three = Math.floor(Math.PI);
console.log(rand1to10);
console.log(three);*/
/*var sum = 0;
for (var i = 0;i < 100;i++){
    sum = sum + i;
}
console.log(sum)
do{
    Text += "The number is"+i;
    i++;
}
while(i<10)*/
/*var sum = 0;
for(var i = 0;i<100;i++){
    if(i% 3==0){
        sum = sum + i;
    } 
}
console.log(sum);
var i = 0;
var sum =0;
while(i<100){
    if(i%2==0){
        sum = sum+i
    }
    i++;
}
console.log(sum);*/
/*var name = [];
var names = [5,6,7,8,9,10,11]
name[6] = 5;
console.log(names);*/
/*var a = ['pikachu','squirtle'];
console.log(a);
a.push("magikrap");
console.log(a);
a.unshift('charmender');
console.log(a);
a.pop();
console.log(a);
a.sort();
console.log(a);*/
/*var person = [];
person["firstName"] ="John";
person["lastName"] ="Doe";
person["age"] =46;
varx = Object.keys(person).length;*/
/*var car = {type:"Fiat", model:"500", color:"white"};
console.log(car.model)*/
/*var a = 0;
switch(a){
    case 6:
        Text="Today is Saturday";
        break;
    case 0:
        Text="Today is sunday";
        break;
        default:
            Text="Looking forward to the Weekend";    
}
console.log(Text);*/
/*function myfunction(){
    alert("Hello!");
}
function pageload(){
    var clickButton = document.getElementById("clickme");
    clickButton.onclick = myfunction;
}
window.onload = pageload;*/
window.onload = pageload;
function pageload(){
    var from = document.getElementById("myForm");
    from.onsubmit = myfromfunction;
}
function myfromfunction(){
    alert("ok");
    var x = document.forms["myForm"]["firstname"];
    alert(x.value);
}


