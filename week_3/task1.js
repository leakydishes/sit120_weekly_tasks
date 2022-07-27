
//String method #1 - includes performs case sensitive search
console.log('String Method #2 Prints method include to perform a case sensitive search for word: ')
const sentence = 'The quick brown cat jumps over the lazy dog.';

const word = 'cat';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"
console.log(' ')



//String method #2 - print a specific character
console.log('String Method #2 Print a specific character (second character (1) in string "Swimmer"): ')
let helloworld = 'Swimmer';
console.log(helloworld.charAt(1))
console.log(' ')




//String method #3 - Compare strings
console.log('String Method #3 Print comparison of strings: ')
const a = 'Dog';
const b = 'Cat';
if (a < b) { // true
    console.log(a + ' is less than ' + b)
} else if (a > b) {
    console.log(a + ' is greater than ' + b)
} else {
    console.log(a + ' and ' + b + ' are equal.')
}
console.log(' ')




//String method #4 - Print repeats
console.log('String Method #4 prints repeats ')
const song = 'Because I\'m la la la. ';

console.log(`Song lyrics for "la": ${song.repeat(20)}`);
console.log(' ')




//String method #5 - Print ends with, determines if string ends with character
const str1 = 'Programmers are the best!';

console.log(str1.endsWith('best!'));
// expected output: true

console.log(str1.endsWith('best', 3));
// expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// expected output: false
console.log(' ')
