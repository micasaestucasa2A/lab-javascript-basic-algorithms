// Iteration 1: Names and Input

let hacker1 = "Nicolas"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Steven"
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest NAME, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest NAME, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long NAMES, ${hacker2.length} characters!`)
}

// Iteration 3: Loops

/* 3.1 */

let result="";

for(let i=0; i < hacker1.length; i++) {
    result += hacker1[i] + " ";
}
console.log(result);

/* 3.2 */

let result2="";

for(let j= hacker2.length -1; j>=0; j--){
    result2+= hacker2[j]
}
console.log(result2);

/* 3.3 */

if (hacker1.localeCompare(hacker2) == -1){
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) == 1){
    console.log("Yo, the navigator goes first definitely.")
}
else  console.log("What?! You both have the same name?")