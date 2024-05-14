//Wednesday: Factorialize!
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.
//
//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
//
//Factorials are often represented with the shorthand notation n!
//
//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

const factorialize = (n) => {
    let current = 1
    let calculationsArray = []
    if(n === 0) {
        console.log(1)
    }
    for(let i = 1; i <= n; i++) {
        current *= i
        calculationsArray.push(i)
    }
    let calculationString =  calculationsArray.join(" * ")
    console.log(`${n}!= ${calculationString} = ${current}`)
}

factorialize(5)