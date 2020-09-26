/*Given a string, return true if its length is even or 
false if the length is odd.
Examples
oddOrEven("apples") ➞ true
oddOrEven("pears") ➞ false
oddOrEven("cherry") ➞ true*/
function oddOrEven (str){
let result = str.length % 2
if (result == 0) {
    console.log ("EVEN")
} else {
    console.log ("ODD")
}
}
oddOrEven("apples") 
oddOrEven("pears") 
oddOrEven("cherry")




