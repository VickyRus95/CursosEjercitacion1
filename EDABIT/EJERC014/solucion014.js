/*You call your spouse in anger and a "little" argument takes place. Count the total amount of adjectives used. Given an object with a list of adjectives, return the total amount of adjectives used.

Examples
totalAmountAdjectives({ a: "moron" }) ➞ 1

totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
Notes
The list will never be empty (no empty object). */

function totalAmountAdjectives(obj) {
    return Object.keys(obj).length
  }
console.log(totalAmountAdjectives({ a: "moron" }))

console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) 

console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }))