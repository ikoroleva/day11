// console.log(typeof 123);

// console.log(typeof 123.45);

// console.log(typeof 'abc');

// console.log(typeof {});

// console.log(typeof undefined);

// console.log(typeof null);

// console.log(typeof false);


// let firstName = 'Jan';

// console.log(firstName);

// firstName = 'Honza';

// console.log(firstName);

// const greeting = 'Hello, ' + firstName;

// console.log(greeting);

// // greeting = 'Goodbye, ' + firstName;

// const age = 30;

// const thisYear = 2022;

// const yearOfBirth = thisYear - age;

// console.log('I was born in the year ' + yearOfBirth)

// console.log((2 / 3).toFixed(2));

let number = 0;

// number++;

// console.log(number);
// // is the same as 
// number = number + 1;

// console.log(number);

// number--;

// console.log(number);

// let foo = 'abc';
// console.log(!foo);

//console.log(number++);

// const age = 17;

// const greeting = 'the greeting ' + (age < 18 ? 'Restricted to minors' : 'Welcome!');

const sayWelcomeMessage = (age, language) => {
    //const age = 27;

    console.log(age);
    const greeting = language == 'en'
        ? (age < 18 ? 'Restricted to minors!' : 'Welcome!')
        : (age < 18 ? 'Prohibidado!' : 'Bienventure!');

    console.log(greeting);
}

const welcome3Times = () => {
    sayWelcomeMessage(17, 'en');

    sayWelcomeMessage(30, 'sp');

    sayWelcomeMessage(18, 'en');

}

welcome3Times();

const myFunction = () => {
    console.log('Hello')
}

myFunction();

let someVariable = myFunction();

const add = (a, b) => {
    return a + b;
}

console.log(add(3, 4));


const name = prompt('What is your name?');

