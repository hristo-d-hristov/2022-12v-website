// Това не го копираме
let input = document.getElementById("input").value;

// Копираме от тук надолу
let lines = input.split("\n");
let a = Number(lines[0]);
let b = Number(lines[1]);
let result = a + b;
console.log("X = " + result);
