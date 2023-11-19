// Question 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// a 

console.log(ages[ages.length - 1] - ages[0])

// b used push to add new ages to array

ages.push(12)
console.log(ages[ages.length - 1] - ages[0])
ages.push(25)
console.log(ages[ages.length - 1] - ages[0])

// c

let sum = 0;
for (i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum/ages.length)

// Question 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

// a - Used for loop from above and added .length to calculate string length

let nameSum = 0
for (let i = 0; i < names.length; i++) {
    nameSum += names[i].length;
}
console.log(nameSum/names.length)

// b - Interpolated previous for loop, set allNames to blank string

let allNames = '';
for (let i = 0; i < names.length; i++) {
    allNames += names[i] + ' '
}
console.log(allNames)

// Question 3

console.log(names[names.length-1])

// Question 4

console.log(names[0])

// Question 5 - used push to add name lengths to new array, set nameLengths to blank array, reused .length

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log(nameLengths)

// Question 6 

let nameLengthsSum = 0
for (let i = 0; i < names.length; i++) {   
    nameLengthsSum += nameLengths[i]
}
console.log(nameLengthsSum)

// Question 7 - used fat arrow for function, defined total as blank string

let question7 = (word, n) => {
    let total = '';
    for (let i = 0; i < n; i++) {
        total += word
    }
    return total
}
console.log(question7('Hey', 4))

// Question 8 - used backticks to space first and last names, ${} to execute function

let fullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(fullName('Marcus', 'Ehirim'))

// Question 9 - created two arrays

let numbers1 = [22, 33, 44] // adds up to 99
let numbers2 = [22, 33, 46] // adds up to 101

let numbersCheck = (numbersSet) => {
    let numberTotal = 0
    for (let i = 0; i < numbersSet.length; i++) {
    numberTotal += numbersSet[i]
    }
    if (numberTotal > 100) {
        return true;
    } else {
        return false;
    }
}

console.log(numbersCheck(numbers1))
console.log(numbersCheck(numbers2))

// Question 10

let array10 = [1, 2, 3, 4, 5]
let question10 = (array10) => {
    let total = 0;
    for (let i = 0; i < array10.length; i++) {
        total += array10[i];
    }
    return total/array10.length
}
console.log(question10(array10))

// Question 11 - created function within function to get averages and determine if true/false

let firstArray = [4, 5, 6]
let secondArray = [1, 2, 3]

let questionEleven = (firstArray, secondArray) => {
    let average = (array) => {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i]
        }
        return total/array.length
    }
    if (average(firstArray) > average(secondArray)) {
        return true;
    } else {
        return false;
    }
}
console.log(questionEleven(firstArray, secondArray))
console.log(questionEleven(secondArray, firstArray))

// Question 12

let willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 11))
console.log(willBuyDrink(true, 10))
console.log(willBuyDrink(false, 11))
