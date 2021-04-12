/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sumOfTwo = (num1, num2) => {
    if (num1 === num2) return (num1 + num2) * 3
    return num1 + num2
}

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
const isTotalOrContains50 = (num1, num2) => {
    return num1 === 50 || num1 === 50 || num1 + num2 === 50
}

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
const removeCharAt = (string, location) => {
    let alteredString = string.split("")
    alteredString.splice(location - 1, 1)
    return alteredString.join("")
}

/*
4)
 Create a function to find the largest of three given integers.
*/
const biggestOfThree = (num1, num2, num3) => {
    let biggest = num1

    if (num2 > biggest) biggest = num2
    if (num3 > biggest) biggest = num3

    return biggest
}

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const numberInRange = (num1, num2) => {
    if (num1 <= 40 && num1 >= 60 && num2 <= 40 && num2 >= 60) return true
    if (num1 <= 70 && num1 >= 100 && num2 <= 70 && num2 >= 100) return true

    return false
}

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/
const newString = (input, copies) => {
    let newString = ""
    for (let i = 0; i < copies; i++) newString += input
    return newString
}

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const cityName = (city) => {
    let match = city.substring(0, 3).toLowerCase()
    if (match === "los" || match === "new") return city
    return null
}

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumFromArray = (numArray) => {
    let sum = 0
    for (const element of numArray) sum += element
    return sum
}

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const testFor1And3 = (numArray) => {
    for (const element of numArray) if (element === 1 || element === 3) return true
    return false
}

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const testForNot1And3 = (numArray) => {
    return !testFor1And3(numArray)
}

/*
11)
Create a function to find the longest string from a given array of strings.
*/
const longestStringFromArray = (stringArray) => {
    let longest = -Infinity
    for (const string of stringArray) if (string.length > longest) longest = string.length
    return longest
}

/*
12)
Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const getAngleType = (angle) => {
    if (angle >= 0 && angle < 90) return "Acute angle"
    if (angle === 90) return "Right angle"
    if (angle < 90 && angle > 180) return "Btuse angle"
    if (angle === 180) return "Straight angle"
}

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
const findBiggestIndex = (numArray) => {
    let biggest = -Infinity
    let biggestIndex = 0

    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > biggest) {
            biggest = numArray[i]
            biggestIndex = i
        }
    }

    return biggestIndex
}

/*
14)
Create a function to get the largest even number from an array of integers.
*/
const largestEvenNumber = (numArray) => {
    let biggest = -Infinity
    for (const number of numArray) if (number % 2 === 0 && number > biggest) biggest = number
    return number
}

/*
15)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const checkUnevenSign = (num1, num2) => {
    return (num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)
}

/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
const stringCasing = (string) => {
    string = string.toUpperCase()
    if (string.length >= 3) string.substring(0, 3).toLowerCase()
    return string
}

/*
17)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const sumInRange = (num1, num2) => {
    let sum = num1 + num2
    if (sum >= 50 && sum <= 80) return 65
    return 80
}

/*
18)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/
const factorOutput = (num1) => {
    let output = null

    if (num1 % 7 === 0) output += "Stefano"
    if (num1 % 5 === 0) output += "Riccardo"
    if (num1 % 3 === 0) output += "Diego"

    return output ? output : num1
}

/*
19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/
const makeAcronym = (string) => {
    return string
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .join("")
}
