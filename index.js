// Code your solutions in this file
function writeCards(array, eventName) {
    let myArray = []
    for (let i=0; i<array.length; i++) {
        myArray[i] = (`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return myArray
}

function countdown(number) {
    for (let i=0; i<=number; i++) {
        console.log(i)
    }
}
