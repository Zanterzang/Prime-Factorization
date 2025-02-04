const numbers = [document.getElementById("I"), [document.getElementById("II"), "rgb(255 0 0)"], [document.getElementById("III"), "rgb(0 0 255)"], document.getElementById("IV"), [document.getElementById("V"), "rgb(0 255 0)"], document.getElementById("VI"), [document.getElementById("VII"), "rgb(255, 255, 0)"], document.getElementById("VIII"), document.getElementById("IX"), document.getElementById("X")];
let btn = document.getElementById("gen");
let numofnum = 10;
let i = 0;
let factor = 2;
let product = 1;
let f = 1;
let factors = [];
let divisor = 2;
var dividend = 1;
var prime = 0;
let ratio = 1;
let background = "";
const parent = document.getElementById("list");
btn.addEventListener("click", generate);
function isprime(num) {
    factor = 2;
    while (!(num % factor === 0)) {
        factor++;
    }
    if (factor === num) {
        return true;
    } else {
        return false;
    }
}
function multiply(...args) {
    product = 1;
    for (f in args) {
        product = product * args[f];
    }
    return product;
}
function generate() {
    for (i=numofnum+1; i<numofnum+6; i++) {
        parent.insertBefore(document.createTextNode("\n"), btn)
        if (isprime(i)) {
            numbers.push([document.createElement("div"), `rgb(${randomint(0, 255)} ${randomint(0, 255)} ${randomint(0,255)})`]);
            numbers[i-1][0].textContent = i;
            parent.insertBefore(numbers[i-1][0], btn);
            numbers[i-1][0].style.backgroundColor = numbers[i-1][1];
        } else {
            numbers.push(document.createElement("div"));
            numbers[i-1].textContent = i;
            parent.insertBefore(numbers[i-1], btn)
            factors = [];
            dividend = i; 
            while (!(multiply(...factors) === i)) {
                divisor = 2;
                while (!((dividend % divisor === 0) & (isprime(divisor)))) {
                    divisor++;
                }
                dividend = dividend/divisor;
                factors.push(divisor);
            }
            background = "conic-gradient(";
            ratio = 360/factors.length;
            for (prime in factors) {
                console.log(prime)
                if (prime == factors.length-1) {
                    background = background + `${numbers[factors[prime]-1][1]} ${prime*ratio}deg, ${numbers[factors[prime]-1][1]} ${(1*prime+1)*ratio}deg)`;
                } else {
                    background = background + `${numbers[factors[prime]-1][1]} ${prime*ratio}deg, ${numbers[factors[prime]-1][1]} ${(1*prime+1)*ratio}deg, `;
                }
            }
            console.log(background)
            numbers[i-1].style.backgroundImage = background;
        }
    }
    numofnum += 5;
}
function randomint(n, x) {
    return Math.floor(Math.random() * (x-n+1) + n);
      }
