const numbers = [89, 35, 98, 12];
const student = {
     name: 'Robert jr',
    age: 52,
    movies: ['Avengers Assemble', 'iron man']
};

// 1. template string
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];


numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);


// normal array concat() method
let arr = [1,2,3];
let arr2 = [4,5];

arr = arr.concat(arr2);

console.log(arr); // [ 1, 2, 3, 4, 5 ]


// normal array concat() method
let user = [1,2,3];
let user1 = [4,5];

user = user1.concat(user1);

console.log(user); // [ 1, 2, 3, 4, 5 ]

