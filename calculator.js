const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
// const name = prompt("What's your name? ");
// console.log(`Hi, I'm ${name}.`);

const integer1 = Number(prompt("select your first number"));
const integer2 = Number(prompt("select your second number? "));

const operation = prompt("please select an operation")
// console.log (`${integer1} ${operation} ${integer2}`)

if  (!isNaN(integer1) && !isNaN(integer2)) { 

     if  (operation === "+") {
    console.log(integer1 + integer2)
}
    else if (operation === "-") {
console.log(integer1 - integer2)
}

    else if (operation === "*") {
console.log(integer1 * integer2)
}

    else if (operation === "/") {
console.log(integer1 / integer2)
}
    else {
    console.log("invalid operation (error)")
}
}
else {
    console.log ("invalid number")
}