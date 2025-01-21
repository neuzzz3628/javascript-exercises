// Method 1
const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const peopleWithAge = arr.map((person) => {
        if (!person.yearOfDeath){
            person.yearOfDeath = currentYear;
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        return {name: person.name, age: age}
    })
    return peopleWithAge.sort((a,b) => b.age - a.age)[0]
};

//Method 2 (from solution)
// const getAge = function (birth, death) {
//     if (!death) {
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// };

// const findTheOldest = function (people) {
//     return people.reduce((oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldest;
//     });
// };

// Do not edit below this line
module.exports = findTheOldest;
