/*Exercise 1*/
function destructureExample(obj, arr) {
    const { name, age } = obj;
    const [val0, , val2] = arr;

    return { name, age };
}
const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
console.log(destructureExample(obj, arr));




/*Exercise 2*/
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers(1, 2, 3, 4, 5)); // Output: 15



/*Exercise 3*/
function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}
const name = 'John Doe';
console.log(createGreeting(name));



/*Exercise 4*/

function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
const number = 7;
console.log(isEven(number));



/*Exercise 5*/
const multiply = (a, b) => a * b;


/*Exercise 6*/
function getLargestNumber(a, b) {
    return a > b ? a : b;
}
console.log(getLargestNumber(10, 5));





/*Exercise 7*/
function getAddressCity(address) {
    return address?.city ?? "Unknown";
}
const address = { street: '123 Main St', country: 'USA' };
console.log(getAddressCity(address));



/*Exercise 8*/
function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers));





/*Exercise 9*/
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(filterEvenNumbers(numbers));




/*Exercise 10*/
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));




/*Exercise 11*/
function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
}
const numbers = [5, 2, 8, 1, 4];
console.log(sortNumbers(numbers));

