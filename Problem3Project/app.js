
// problem 2 
function showNumbers() {

    for (let i = 1; i <= 100; i++) {

        if (i % 15 == 0) { console.info('FizzBuzz') }
        else if (i % 3 == 0) { console.info('Fizz') }
        else if (i % 5 == 0) { console.info('Bizz') }
        else console.info(i)
    }  
}
// showNumbers() 

// Problem no 3 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,0]
// getting the sum of numbers 
const sum = arr.reduce((a, b) => { return a + b }, 0)
console.info(sum)

// problem no 4 
function positiveNegative(x,y) {
    if ((x<0 && y >0) || x>0 && y<0) {
        return true
    } else {
        return false 
    }
}
console.info(positiveNegative(2, 2))
console.info(positiveNegative(-2, 2))
console.info(positiveNegative(2, -2))
console.info(positiveNegative(-2, -2))


// problem 5 
function swap(arra) {
    [arra[0], arra[arra.length - 1]] = [arra[arra.length - 1], arra[0]]
    return arra
}
console.info(swap(arr))

// problem 6 

array = [1,2,3,4,5,6,7,8,9,10]
function findMinMax() {
    minValue = Math.min(...array)
    console.info(`The Array ${array}`)
    console.info(`The min value in the array is ${minValue}`)
    maxValue = Math.max(...array)
    console.info(`The max value in the array is ${maxValue}`)
}
findMinMax()

// porblem 7 

function min() {
    let s = 0;
    let p = 1;
    let i;
    for (i = 0; i < array.length; i += 1){
        s += array[i]
        p *= array[i]
    }
    let ave = s / array.length

    console.info(`The Average vale of the array is ${ave}`)
}
min()

// problem 8 

function vowelConsonant(char) {
    let x 
    if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'
        ||x =="A" || x =="E" || x == 'I' || x == "O" || x == "U"
    ) {
        console.info(`The given character is Vowel`)
    } else {
        console.info(`The given Characer is consonent`)
    }  
}

// problem 10 

function checkLeapYear(year) {
    if ((0 === year % 4) && (0 != year % 100 ) || ( 0 == year% 400)) {
        console.info(`the ${year} is a leap year`)
    } else {
        console.info(`The ${year} is not a leap year`)
    }
    
}

console.info(checkLeapYear(2015))
console.info(checkLeapYear(2014))
console.info(checkLeapYear(2020))
console.info(checkLeapYear(2000))
