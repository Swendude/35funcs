# 35 functions

Here are a bunch of challenges for you to learn more about logic and functions in javascript. We do not require you to use arrow functions but we highly recommend it.

## ❌ 01: double 1
Write a function with a `number` argument that logs 
double the first argument. 

Call it `double1`.

## ❌ 02: double 2
Write a function with a `number` argument that returns 
double the first argument. 

Call it `double2`.

## ❌ 03: double 3
Write a function with two `number` arguments that returns 
double the largest argument. 

Call it `double3`.

## ❌ 04: repeat
Write a function with a `string` argument and a `number` argument that repeates the string from the first argument but repeated the amount of times equal to the second argument.

Call it `repeat`.


## ❌ 05: batman
Write a function without any arguments. Have it return the string `'na'` repeated 10 times followed by the string `'batman!'`. Use the `repeat` function you used before to accomplish this.

Call it `batman`.

## ❌ 06: max

Write a function with two `number` arguments. Have it return the largest number of the two.

Call it `max`.

## ❌ 07: maxDivide

Write a function with two `number` arguments. Have it return the smallest number of the two divided by the largest number.

Call it `maxDivide`.

## ❌ 08: maxStr

Write a function with two `string` arguments. Have it return the longest string.

Call it `maxStr`.

## ❌ 09: even

Write a function with a single `number` argument. Return a boolean that indicated wether this number is even.

> Tip: use the `%`(remainder) operator to determine if something is divisible by something else. Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder). 

Call it `numberEven`.

## ❌ 10: evenBelow

Write a function with a single `number` argument. Return an array of all the numbers lower than this argument that are even.

Call it `evenBelow`.

## ❌ 11: evenIn

Write a function with a single `array of numbers` argument. Return an array of all the numbers in this array that are even.

Call it `evenIn`.

## ❌ 12: multiplyArray

Write a function with a single `array of numbers` argument. Return the result of multiplying all the numbers.

Call it `multiplyArray`.

## ❌ 13: divideArray

Write a function with a single `array of numbers` argument. Return the result of dividing the number from left to right. So the first number gets divided by the second and the result of that gets divided by the third (and so on..).

Call it `divideArray`.

## ❌ 14: splitCombine

Write a function with two `string` arguments. Split both strings in halves and recombine the halves. Return the longest results of the two combinations (or the first one if both have the same length).

Call it `splitCombine`.

## ❌ 15: getName
Write a function with one `{name: string}` argument. Return the name property.

Call it `getName`

## ❌ 16: getNames
Write a function with one `[{name: string}]`(list of object) argument. Return an array with all the name properties.

Call it `getNames`

## ❌ 17: combineName
Write a function with one `[{firstname: string, lastname: string}]`(list of object) argument. Return an array with all the full names (both the first and the last name as a single string with a space in between them).

Call it `combineName`

## ❌ 18: uniqueCountries
Write a function with one `[{country: string}]`(list of object) argument. Return an array with every unique country value in the input array.

Call it `uniqueCountries`

## ❌ 19: countCountries
Write a function with one `[{country: string}]`(list of object) argument. Return an object with all the unique values as keys and the amount of occurences as value.

Call it `countCountries`

## ❌ 20: highestNumber
Write a function with one `[number]` argument. Return the highest number.

Call it `highestNumber`

## ❌ 21: average
Write a function with one `[number]` argument. Return the average.

Call it `average`

## ❌ 22: mode
Write a function with one `[number]` argument. Return the mode (most frequent value).

Call it `mode`

## ❌ 23: reverse
Write a function with one `string` argument. Return the reversed string.

Call it `reverse`

## ❌ 24: palindrome
Write a function with one `string` argument. Return true or false wether this string is a palindrome.

> A palindrome is a string that stays the same when you reverse it. Like 'Bob' or 'Racecar'.

Call it `palindrome`

## ❌ 25: pyramid
Write a function with one `number` argument. Have it log a pyramid of that size. For example:
`pyramid(4)` shoud log:

```javascript
*
* *
* * *
* * * *
```
Call it `pyramid`

## ❌ 26: array_intersect
Write a function that takes two `[number]` arguments and return an array that contains all numers that are in both arrays.

Call it `array_intersect`

## ❌ 27: key_intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are in both objects.

Call it `key_intersect`

## ❌ 28: value_intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the values that are in both objects.

Call it `value_intersect`

## ❌ 29: intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are in both object which have the same value.

Call it `intersect`

## ❌ 30: difference
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are only in one of the two objects.

Call it `difference`

## ❌ 31: evenIds
Write a function that takes a `[{}] (array of objects)` argument, every object will have an `id` key (which is a number). Return an array with all the objects having a even number as key.

Call it 'evenIds'

## ❌ 32: destroyLongestArrays
Write a function that takes a `[[]] (array of arrays)` argument, remove the longest array and return the result. If there are multiple array that are the longest, remove both.

Call it 'destroyLongestArray'

## ❌ 33: togglePower
Write a function that takes a `[{id:number, power:boolean}] (array of objects)` and a `number` argument. Toggle the `power` bool from false to true or from true to false if the id matches the second argument and return the result.   

Call it 'togglePower'

## ❌ 34: reverseSentence
Write a function that takes a `string`. Return the string with the seperate words in the reverse order.
Example:
```javascript
reverseSentence("We are Codaisseur") === "Codaisseur are we" // this is true
```

Call it 'reverseSentence'

## ❌ 35: numberPalindrome
Write a function that takes a `number`. Return a boolean if the number stays the same when reverted.

Call it 'numberPalindrome'
