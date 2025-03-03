// Lakshmi Vara Prasad Gatiganti
// ITMD 541-01 Graduate Student

// Exercise #1 (minMaxAverage) calculates and logs total numbers, minimum value, maximum value, and average of an array of numbers.
function minMaxAverage(arr) {
    const totalNumbers = arr.length;
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const average = (arr.reduce((sum, num) => sum + num, 0) / totalNumbers).toFixed(2);

    console.log(`Total Numbers: ${totalNumbers}, Min Value: ${minValue}, Max Value: ${maxValue}, Average: ${average}`);
}

// Test cases for Exercise #1
minMaxAverage([2, 5, 23, 6, 9, 4, 30, 1]); // Total Numbers: 8, Min Value: 1, Max Value: 30, Average: 9.00
minMaxAverage([1, 5, 3, 5, 10, 12, 8, 6]); // Total Numbers: 8, Min Value: 1, Max Value: 12, Average: 6.25
minMaxAverage([10, 15, 5, 20, 30]); // Total Numbers: 5, Min Value: 5, Max Value: 30, Average: 16.00

// Exercise #2 (countVowels) counts vowels in a string and logs the result.
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`${str}: ${count} vowels`);
}

// Test cases for Exercise #2
countVowels("Winter"); // Winter: 2 vowels
countVowels("Apple"); // Apple: 2 vowels
countVowels("Sky"); // Sky: 0 vowels

// Exercise #3 (sortNumbers) sorts an array of numbers in ascending order and logs both the original and sorted arrays.
function sortNumbers(arr) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    console.log(`Original Array: [${arr}] Sorted Array: [${sortedArray}]`);
}

// Test cases for Exercise #3
sortNumbers([9, 4, 6, 2]); // Original Array: [9, 4, 6, 2] Sorted Array: [2, 4, 6, 9]
sortNumbers([15, 5, 10, 30, 1]); // Original Array: [15, 5, 10, 30, 1] Sorted Array: [1, 5, 10, 15, 30]
sortNumbers([100, 45, 78, 33]); // Original Array: [100, 45, 78, 33] Sorted Array: [33, 45, 78, 100]

// Exercise #4 (celsiusToFahrenheit) converts Celsius to Fahrenheit and handles string input values.
function celsiusToFahrenheit(celsius) {
    let tempCelsius = parseFloat(celsius);
    if (isNaN(tempCelsius)) {
        console.log('Invalid input');
        return;
    }
    const fahrenheit = (tempCelsius * 9/5) + 32;
    console.log(`${tempCelsius.toFixed(1)} Celsius = ${fahrenheit.toFixed(1)} Fahrenheit`);
}

// Test cases for Exercise #4
celsiusToFahrenheit(30); // 30.0 Celsius = 86.0 Fahrenheit
celsiusToFahrenheit(100); // 100.0 Celsius = 212.0 Fahrenheit
celsiusToFahrenheit("35"); // 35.0 Celsius = 95.0 Fahrenheit
celsiusToFahrenheit("invalid"); // Invalid input

// Exercise #5 (sortPeopleByAge) sorts an array of people objects by age and logs an introduction for each person.
function sortPeopleByAge(people) {
    const sortedPeople = people.sort((a, b) => a.age - b.age);
    sortedPeople.forEach(person => {
        console.log(`${person.name} is ${person.age} and from ${person.city}`);
    });
}

// Test cases for Exercise #5
const peopleArray = [
    {name: 'Alice', age: 28, city: 'Chicago'},
    {name: 'Bob', age: 23, city: 'New York'},
    {name: 'Charlie', age: 32, city: 'Los Angeles'},
    {name: 'David', age: 25, city: 'Boston'},
    {name: 'Eve', age: 30, city: 'San Francisco'}
];
sortPeopleByAge(peopleArray);
// Expected output:
// Bob is 23 and from New York
// David is 25 and from Boston
// Alice is 28 and from Chicago
// Eve is 30 and from San Francisco
// Charlie is 32 and from Los Angeles

// Another test case for Exercise #5
const peopleArray2 = [
    {name: 'James', age: 22, city: 'Miami'},
    {name: 'Sophia', age: 19, city: 'Dallas'},
    {name: 'Olivia', age: 24, city: 'Seattle'},
    {name: 'Liam', age: 30, city: 'Austin'},
    {name: 'Mason', age: 27, city: 'Denver'}
];
sortPeopleByAge(peopleArray2);
// Expected output:
// Sophia is 19 and from Dallas
// James is 22 and from Miami
// Olivia is 24 and from Seattle
// Mason is 27 and from Denver
// Liam is 30 and from Austin
