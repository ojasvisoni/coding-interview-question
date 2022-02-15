// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    /* const arr = str.split('');
       arr.reverse();
       arr.join(''); 
    */

    let reversed = '';
    let ojasvi ="Hello";

    for(let character of str){
        reversed = character + reversed;
    }

    return reversed;

    }

module.exports = reverse;