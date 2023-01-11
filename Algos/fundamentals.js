
var myName = "Jme";
var myNumber = 4;

function swapVar() {
    var currentValue = myName;
    myName = myNumber;
    myNumber = currentValue;
}
// swapVar()
// swapVar()
// console.log(`My name is ${myName}`)
// console.log(`My favorite number is ${myNumber}`)

function multipleFive(start, end) {
    var num = start;
    var count = 0;
    while (num <= end) {
        if(num % 5 == 0) {
            console.log(num)
            num++
            count++
        }
        else {
            num++
        }
    }
    console.log(`There were ${count} multiples of 5 between ${start} and ${end}`)
}

// multipleFive(512, 4096)

function increment() {
    for(var i= -52; i < 1066; i++) {
        console.log(i)
    }
}

// increment()

function multipleSix() {
    var num = 1;
    while(num <= 120) {
        if(num % 6 == 0) {
            console.log(num)
            num++
        } else {
            num++
        }
    }
}

// multipleSix();

function beCheerful(repeat) {
    var greeting = 'Good Morning!'
    console.log(greeting.repeat(repeat))
}

// beCheerful(98);

function countingDojo(end) {
    var num = 1;
    while (num <= end) {
        if(num % 10 == 0 && num % 5 == 0) {
            console.log('Coding Dojo')
            num++
        } else if (num % 5 == 0 ) {
            console.log('Coding')
            num++
        } else {
            console.log(num);
            num++
        }
    }
}

// countingDojo(100);

function notAllThree() {
    for(var i =-300; i <= 0; i++) {
        if (i % 3 == 0) {
            if(i != -6 && i != -3) {
                console.log(i)
            }
        }
    }
}

// notAllThree();

function incomingMsg(incoming) {
    console.log(incoming)
}

// incomingMsg('Here is my message');

// var thisNum = 2000;

// while (thisNum <= 5280) {
//     console.log(thisNum)
//     thisNum++
// }

// var myNum = 2016;
// while (myNum > 0) {
//     if (myNum % 2 == 0) {
//         console.log(myNum)
//         myNum-=4
//     } else {
//         myNum-=4
//     }
// }

function byThree() {
    var total = 0;
    for(var i = -10; i <= 10; i++) {
        if(i % 3 == 0) {
            total+=i;
        }
    }
    console.log(total)
}

byThree()




