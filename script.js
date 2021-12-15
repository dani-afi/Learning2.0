// // Introduction to objecta
// const john = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };



// // Dot vs. Breaket Notation

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);

// console.log(jonas.lastName); // real property name
// console.log(jonas['lastName']) //we can use a computed name
// const nameKey = 'Name';


// console.log(jonas['first' + nameKey]);

// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// }
// else {
//     prompt('Wrong request! Choose between firstName, lastName, age, job and friends')

// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)



// const peter = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear;
//     // }


//     // calcAge: function () {
//     //     console.log()
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`

//     }
// };

// // console.log(peter.calcAge());
// // console.log(peter.age());
// // console.log(peter.age());
// // console.log(peter.age());
// // console.log(peter['calcAge'](1991));
// console.log(peter.getSummary());


// // Coding challenge #3

// const Mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBmi: function () {
//         this.Bmi = this.mass / (this.height * this.height);
//         return this.Bmi;
//         // return `${this.fullName} weights ${this.mass} kg and is ${this.height} m tall and he has a ${this.Bmi} BMI.`
//     }

// };
// console.log(Mark.calcBmi());
// const John = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBmi: function () {
//         this.Bmi = this.mass / (this.height * this.height);
//         return this.Bmi;
//         // return `${this.fullName} weights ${this.mass} kg and is ${this.height} m tall. and he has a ${this.Bmi} BMI.`
//     }

// }
// console.log(John.calcBmi());

// if (Mark.Bmi > John.Bmi) {
//     console.log(`${Mark.fullName}'s BMI (${Mark.Bmi}) is higher than ${John.fullName}'s BMI (${John.Bmi})!`)
// }
// else { console.log(`${John.fullName}'s BMI (${John.Bmi}) is higher than ${Mark.fullName}'s BMI (${Mark.Bmi})!`) }




// console.log('Lifting weights repetition 1');

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}.`);
// }




// function isPrime(num) {
//     for (var i = 2; i < num; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// console.log(isPrime(5));


// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     //Reading from jonas array
//     console.log(jonas[i], typeof jonas[i])
//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// };
// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// //continue and break
// console.log('--Only Strings--')

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i])
// }


// console.log('---Break with number---')

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i])
// }

//Looping Backwards and Loops in Loops

// const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

// //0, 1, ....4
// //4, 3,....0

// for (i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`--- Starting exercise----${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}:--- Lifting weights----${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

//While loop
// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: Lifting weights repetition ${rep}`)
//     rep++
// };

// let dice = Math.trunc(Math.random() * 6) + 1;
// if (dice === 6) { console.log('You just hit 6 ') }
// else {

//     while (dice !== 6) {
//         console.log(`You rolled a ${dice}`);
//         dice = Math.trunc(Math.random() * 6) + 1;
//         if (dice === 6) console.log('Loop is about to end...')
//     }
// };


// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];


// let calcTip = function (a) {
//     if (a >= 50 && a <= 300) { return a * 0.15 }
//     else { return a * 0.2 }

// }
// //  console.log(calcTip(90));

// for (i = 0; i < bills.length; i++) {
//     //     console.log(calcTip(bills[i]))
//     tips.push(calcTip(bills[i]))
//     //     console.log(tips);
// };

// totals = [...bills].map((e, i) => e + tips[i]);
// console.log(bills, tips, totals);

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals)


const calcAvarage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAvarage([2, 3, 7]));