/*Create a function that takes an array and returns the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0.*/

function getFirstValue (arr){
return arr[0]
}
console.log(getFirstValue([1, 2, 3]))
console.log(getFirstValue([80, 5, 100]))
console.log(getFirstValue([-500, 0, 50]))