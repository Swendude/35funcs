## ✅ 0: double1
Write a function with one `number` argument that returns double the argument.

## ❌ 1: double2
Write a function with two `number` arguments that returns double the first argument.
### ⚠️ Errors:
	- Function `double2` not found in index.js, did you export it?

## ❌ 2: double3
Write a function with two `number` arguments that returns double the largest argument.
### ⚠️ Errors:
	- Function `double3` not found in index.js, did you export it?

## ❌ 3: repeat
Write a function with a `string` argument and a `number` argument that repeates the string from the first argument but repeated the amount of times equal to the second argument. If the second number is negative, return an empty string.
### ⚠️ Errors:
	- Function `repeat` not found in index.js, did you export it?

## ❌ 4: batman
Write a function without any arguments. Have it return the string `'na'` repeated 10 times followed by the string `' batman'`. Use the `repeat` function you used before to accomplish this.
### ⚠️ Errors:
	- Function `batman` not found in index.js, did you export it?

## ❌ 5: max
Write a function with two `number` arguments. Have it return the largest number of the two.
### ⚠️ Errors:
	- Function `max` not found in index.js, did you export it?

## ❌ 6: maxDivide
Write a function with two `number` arguments. Have it return the smallest number of the two divided by the largest number.
### ⚠️ Errors:
	- Function `maxDivide` not found in index.js, did you export it?

## ❌ 7: maxStr
Write a function with two `string` arguments. Have it return the longest string.
### ⚠️ Errors:
	- Function `maxStr` not found in index.js, did you export it?

## ❌ 8: even
Write a function with a single `number` argument. Return a boolean that indicated wether this number is even.
### 🧠 Tips:
> use the `%`(remainder) operator to determine if something is divisible by something else. Read about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder).
### ⚠️ Errors:
	- Function `even` not found in index.js, did you export it?

## ❌ 9: evenBelow
Write a function with a single `number` argument. Return an array of all the numbers lower than this argument that are even.
### ⚠️ Errors:
	- Function `evenBelow` not found in index.js, did you export it?

## ❌ 10: evenIn
Write a function with a single `array of numbers` argument. Return an array of all the numbers in this array that are even.
### ⚠️ Errors:
	- Function `evenIn` not found in index.js, did you export it?

## ❌ 11: multiplyArray
Write a function with a single `array of numbers` argument. Return the result of multiplying all the numbers. If the input contains just 1 number, return that number.
### ⚠️ Errors:
	- Function `multiplyArray` not found in index.js, did you export it?

## ❌ 12: divideArray
Write a function with a single `array of numbers` argument. Return the result of dividing the number from left to right. So the first number gets divided by the second and the result of that gets divided by the third (and so on..). If the array contains a zero, return zero. If the array contains just one number, return that number.
### ⚠️ Errors:
	- Function `divideArray` not found in index.js, did you export it?

## ❌ 13: splitCombine
Write a function with two `string` arguments. Split both strings in halves and recombine the halves. Return the longest results of the two combinations (or the first one if both have the same length).
### ⚠️ Errors:
	- Function `splitCombine` not found in index.js, did you export it?

## 🔴 14: getName
Write a function with one `{name: string}` argument. Return the name property.

## 🔴 15: getNames
Write a function with one `[{name: string}]`(list of object) argument. Return an array with all the name properties.

## 🔴 16: combineName
Write a function with one `[{firstname: string, lastname: string}]`(list of object) argument. Return an array with all the full names (both the first and the last name as a single string with a space in between them).

## 🔴 17: uniqueCountries
Write a function with one `[{country: string}]`(list of object) argument. Return an array with every unique country value in the input array.

## 🔴 18: countCountries
Write a function with one `[{country: string}]`(list of object) argument. Return an object with all the unique values as keys and the amount of occurences as value.

## 🔴 19: highestNumber
Write a function with one `[number]` argument. Return the highest number.

## 🔴 20: average
Write a function with one `[number]` argument. Return the average.

## 🔴 21: mode
Write a function with one `[number]` argument. Return the mode (most frequent value).

## 🔴 22: reverse
Write a function with one `string` argument. Return the reversed string.

## 🔴 23: palindrome
Write a function with one `string` argument. Return true or false wether this string is a palindrome.
### 🧠 Tips:
> A palindrome is a string that stays the same when you reverse it. Like 'Bob' or 'Racecar'.

## 🔴 24: pyramid
Write a function with one `number` argument. Have it log a pyramid of that size.

## 🔴 25: array_intersect
Write a function that takes two `[number]` arguments and return an array that contains all numers that are in both arrays.

## 🔴 26: key_intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are in both objects.

## 🔴 27: value_intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the values that are in both objects.

## 🔴 28: intersect
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are in both object which have the same value.

## 🔴 29: difference
Write a function that takes two `{key:value} (objects)` arguments and return an array that contains all the keys that are only in one of the two objects.

## 🔴 30: evenIds
Write a function that takes a `[{}] (array of objects)` argument, every object will have an `id` key (which is a number). Return an array with all the objects having a even number as key.

## 🔴 31: destroyLongestArrays
Write a function that takes a `[[]] (array of arrays)` argument, remove the longest array and return the result. If there are multiple array that are the longest, remove both.

## 🔴 32: togglePower
Write a function that takes a `[{id:number, power:boolean}] (array of objects)` and a `number` argument. Toggle the `power` bool from false to true or from true to false if the id matches the second argument and return the result.

## 🔴 33: reverseSentence
Write a function that takes a `string`. Return the string with the seperate words in the reverse order.
### 💭 Examples:
```javascript reverseSentence("We are Codaisseur") === "Codaisseur are we" // this is true```

## 🔴 34: numberPalindrome
Write a function that takes a `number`. Return a boolean if the number stays the same when reverted.
