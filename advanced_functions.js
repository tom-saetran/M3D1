/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const maxChar = (input) => {}

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const anagrams = (input1, input2) => {}

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const anagrams2 = (input) => {}

/* +++++7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const reverse = (input) => {
    let reverseInput = ""

    for (let i = input.length - 1; i >= 0; i--) reverseInput += input[i]

    return reverseInput
}

/* +++++5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reverseInt = (num) => {
    let minus = num < 0
    num = parseInt(reverse(Math.abs(num).toString()))
    if (minus) num = -num
    return num
}

/* +++++4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
const palindrome = (input) => {
    return input === reverse(input)
}

/* +++++6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####'
*/
const steps = (n) => {
    n = Math.abs(n)

    if (n === 0) return null

    let steps = "'"

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) steps += "#"
        for (let k = n; k > i; k--) steps += " "

        if (i !== n) steps += "'\n'"
    }

    return steps + "'"
}

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunk = () => {}

/* +++++9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####'
        
*/
const pyramid = (n) => {
    n = Math.abs(n)

    if (n === 0) return null

    let numSpaces = n - 1
    let numStars = 1

    let pyramid = "'"

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < numSpaces; j++) pyramid += " "
        for (let j = 0; j < numStars; j++) pyramid += "#"

        for (let k = n; k > i; k--) {
            pyramid += " "
        }

        if (i !== n) pyramid += "'\n'"

        numSpaces--
        numStars += 2
    }

    return pyramid + "'"
}

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
const matrix = (n) => {}
