1. Create a function that takes an array containing only numbers and return the first element.

getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500


2. Given two arguments, return an array which contains these two arguments.

makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215]


3. Create a function that takes an array of numbers and returns the second largest number.

secondLargest([10, 40, 30, 20, 50]) ➞ 40

secondLargest([25, 143, 89, 13, 105]) ➞ 105

secondLargest([54, 23, 11, 17, 10]) ➞ 23


4. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

Examples
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"



5. Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

example
comp("AB", "CD") ➞ true

comp("ABC", "DE") ➞ false

comp("hello", "edabit") ➞ false



Create a function that takes an array and a string as arguments and return the index of the string.


findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

//functions
Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
n will always be greater than 2.
The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
sumPolygon(3) ➞ 180

sumPolygon(4) ➞ 360

sumPolygon(6) ➞ 720


Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.
reverseCapitalize("abc") ➞ "CBA"

reverseCapitalize("hellothere") ➞ "EREHTOLLEH"

reverseCapitalize("input") ➞ "TUPNI"