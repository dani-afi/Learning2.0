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


const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', ['Michael', 'Peter', 'Steven'], true];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof jonas[i])
    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};
console.log(types);