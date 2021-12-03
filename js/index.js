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







// BONUS EXERCICES


// Bonus 1

let para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis nulla ac elit porttitor, quis elementum turpis tincidunt. Maecenas hendrerit, sem vitae feugiat malesuada, turpis massa vehicula enim, nec viverra purus justo at orci. Suspendisse condimentum cursus ipsum, a rutrum turpis molestie eget. Donec elementum mollis nisl, eu aliquam dolor cursus nec. Sed ut justo nisi. Cras et felis orci. Vestibulum vel enim non magna elementum sagittis vitae eget ante. Maecenas lacinia varius dolor. Morbi posuere lectus non consequat suscipit. Sed bibendum elementum consequat. Nunc hendrerit quam non lacus vehicula viverra. Quisque ut gravida nisl. Sed felis nisi, placerat eget urna et, tempus eleifend diam. Sed vel est at massa posuere pulvinar. Quisque in ipsum sit amet elit fringilla feugiat. Sed egestas ligula sodales lacus aliquet dictum. Suspendisse hendrerit purus vel congue venenatis. Nunc massa libero, vehicula quis ultricies non, semper ut orci. Quisque non est arcu. In hac habitasse platea dictumst. Donec pellentesque magna orci, vitae iaculis leo hendrerit vitae. Mauris quis fermentum purus. Nam dapibus dictum eros non laoreet. Integer tortor sem, mattis vel mi vitae, commodo vehicula nulla. Pellentesque dictum non orci sed sagittis. Duis at elit tellus. Cras sed lorem sit amet dui consequat malesuada ut ac libero. Integer quis ultricies mi. Praesent scelerisque lorem sit amet turpis fermentum interdum. Praesent efficitur nisl diam. Phasellus sit amet eros consectetur, convallis velit sed, facilisis nulla. Cras ut felis et arcu elementum suscipit sit amet a diam. Proin pellentesque, neque id consectetur mollis, dui ligula dictum est, in euismod augue velit ac purus. Maecenas faucibus arcu tempor diam malesuada, vitae mattis nisi vestibulum. Etiam quis congue diam."


// function countword(sentence) {
//      let count = 0;
//      for (i=0; i<sentence.length; i=sentence.indexOf(" ")){
//          console.log(i);
//          if (sentence.indexOf(" ")){
//              count++;
//          }
//      }
// }


function countword(sentence){
    let count = 0;
    for (i=0; i<sentence.length; i++){
        if(sentence[i]==" "){
            count++;
        }
    }
    return count+1;
}
console.log(countword(para));

function countEt(sentence){
    let count=0;
    for (i=0;i<sentence.length;i++){
        const char1 = sentence[i];
        const char2 = sentence[i+1];
        const char3 = sentence[i+2];
        const char4 = sentence[i+3];
        if (char1 === " " && char2 === "e" && char3 === "t" && char4 === " ") {
            count++;
        }
    }
    return count;
}
console.log(countEt(para));


const tst = [1, 2, 3];
console.log(typeof tst );






