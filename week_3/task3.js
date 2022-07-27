//JS Date method #1
console.log("#1 What is the date now: ")
let date = new Date(Date.now());
console.log(date);
console.log(" ")


//JS Date method #2
console.log("#2 Check if todays date is before a certain date")
const today = new Date();
const anotherday = new Date();
anotherday.setFullYear(2030, 2, 4);

if (anotherday > today) {
    console.log("Today is before Feburary 4, 2030.");
} else {
    console.log("Today is after Feburary 4, 2030.");
}
console.log(" ")



//JS Date method #3
console.log("#3 What day was a born on? Sun-Sat: 0-6")
const specialDay = new Date('January 20, 1993 23:00:00');
const day1 = specialDay.getDay();

console.log(day1);
console.log(" ")



//JS Date method #4
console.log("#4 Sets the hour for a specific date for universal time, return the number of mili sec since Jan 1, 1970 to UTCHours")
const day4 = new Date('March 30, 1984 20:00:00 GMT-3:00');

console.log(day4.toUTCString());
console.log(day4.getUTCHours());
day4.setUTCHours(23);
console.log(day4.toUTCString());
console.log(" ")


//JS Date method #5
console.log("#5 Date to string, first three letters of week, month, two digit for month and four digit for year")
const date2 = new Date(2022, 5, 27, 20, 00, 00);

console.log(date2 .toString());
console.log(date2 .toDateString());



