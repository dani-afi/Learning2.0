// Introduction to objecta
const john = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};



// Dot vs. Breaket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName); // real property name
console.log(jonas['lastName']) //we can use a computed name
const nameKey = 'Name';


console.log(jonas['first' + nameKey]);

console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
}
else {
    prompt('Wrong request! Choose between firstName, lastName, age, job and friends')

}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`)



const peter = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }


    // calcAge: function () {
    //     console.log()
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`

    }
};

// console.log(peter.calcAge());
// console.log(peter.age());
// console.log(peter.age());
// console.log(peter.age());
// console.log(peter['calcAge'](1991));
console.log(peter.getSummary());


