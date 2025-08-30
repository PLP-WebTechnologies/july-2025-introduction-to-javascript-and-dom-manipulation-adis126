// ==========================
// Part 1: Variables & Operators
// ==========================
const favNumber = 7;
console.log('My favorite number is ' + favNumber);

// Arithmetic examples
console.log(15 + 25);   // addition
console.log(12 * 8);    // multiplication
console.log(45 / 9);    // division
console.log(29 % 5);    // modulus

// Comparison
console.log(10 == "10");   // true (value only)
console.log(10 === "10");  // false (type check)

// ==========================
// Part 2: Functions
// ==========================

// Named function
function greet() {
    console.log('👋 Greetings from JavaScript!');
}
greet();

// Function expression
const welcome = function() {
    console.log('✨ Welcome to my practice code!');
};
welcome();

// Arrow function
const farewell = () => console.log("👋 See you later!");
farewell();

// Function with parameters + return
function addThreeNumbers(a, b, c) {
    return a + b + c;
}
console.log(addThreeNumbers(5, 10, 15));
console.log(addThreeNumbers(20, 30, 40));

// ==========================
// Part 3: Loops
// ==========================

// For loop
for (let i = 1; i <= 3; i++) {
    console.log("Looping with for:", i);
}

// While loop
let counter = 5;
while (counter > 0) {
    console.log("Countdown:", counter);
    counter--;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================
function changeText() {
    // Change an element’s text + style
    let title = document.getElementById("title");
    title.textContent = "🎉 You just pressed the button!";
    title.style.color = "green";

    // Add a new element
    let newDiv = document.createElement("div");
    newDiv.textContent = "✨ Surprise! This text was added with JS.";
    newDiv.style.fontWeight = "bold";
    document.body.appendChild(newDiv);
}
