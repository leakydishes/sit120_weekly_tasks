//Array Variable (string array) #1 - Method length
console.log("#1 - Length Method: Declare an array of string type, index first element and length Method")
let food1 = new Array("toast", "butter", "jam");
console.log(food1);
console.log(food1[0]);
console.log(food1.length)
console.log(' ')

//Array Variable (string array) #2 - Method For Loop
console.log("#2 - Method For Loop: goes through an array")
let cats = ['Hodgman', 'Frankie', 'Charlie']
for (let index = 0; index < cats.length; index++) {
    console.log(cats[index]);
}
console.log(' ')

//Array Variable (number array) #3 - Method sort
console.log("#3 - Sort Method: on an array of numbers")
let integerarray = [2, 1, 4, 3, 5]
console.log(integerarray.sort())

console.log(' ')

//Array Variable (number array) #4 - Method every
console.log("#4 - Method every: test all elements in array pass provided conditions")
let num1 = [5, -3, 2, 5760];

let Positive = num1.every(function (num1) {
    return num1 > 0;
});
console.log(Positive); // false 

num2 = [2, 30, 2, 45];

Positive = num2.every(function (num2) {
    return num2 > 0;
});
console.log(Positive); // true
console.log(' ')



//Array Variable (number array) #5 - forEach loop method
console.log("#5 - Method forEach: loop method that goes through an array of numbers")
let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
months.forEach(element => {
    console.log(element);
})
console.log(' ')

