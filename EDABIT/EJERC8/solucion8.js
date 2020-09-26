/*Create a function that returns 
true if a string is empty and false otherwise.
Examples
isEmpty("") ➞ true
isEmpty(" ") ➞ false
isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.
Don't forget to return the result.*/
function isEmpty (str){
if (!str){
 return true
} else {
    return false
}
}
console.log(isEmpty(""))
console.log(isEmpty(" ")) 
console.log(isEmpty("a"))