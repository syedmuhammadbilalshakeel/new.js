// chapter-26 to 30

// qno#01
var number = 3.45617;
var round = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
document.write("number: " + number + "<br>" + "round of value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil);

// qno#02
var number = -2.673;
var round = Math.round(number);
var floor = Math.floor(number);
var ceil = Math.ceil(number);
document.write("number: " + number + "<br>" + "round of value: " + round + "<br>" + "floor value: " + floor + "<br>" + "ceil value: " + ceil);

// qno#03
var num = -4;
var abs = Math.abs(num)
document.write("The absolute value of " + num + " is " + abs);

// qno#04
var random = Math.ceil(Math.random() * 6);
document.write("random dice value: " + random);

// qno#05
var head = Math.ceil(Math.random() * 2);
if (head === 1){
    document.write(head + "<br>" + " random coin value: Heads")
}
else if (head === 2){
    document.write(head + "<br>" + " random coin value: Tails")
}

// qno#06
var random = Math.ceil(Math.random() * 100);
document.write("random number between 1 and 100: " + random);

// qno#07
var userInput = prompt("Enter your weight");
var rando = Math.random() * userInput;
var fixed = rando.toFixed(1);
document.write("The weight of user is " + fixed + " Kilograms");

//qno#08
var rando = Math.ceil(Math.random() * 10); 
var userInput = +prompt("Enter a number between 1 and 10");
if (userInput === rando){
    alert("Congratulation the number Matched");
}
else {
    alert("Try again");
}

 
 
