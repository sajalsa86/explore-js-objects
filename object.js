// 1. create object using object literals
const person = {};
person.name = 'Sajal Hossain';
person.specialty = "Web Developer";
person.code = function () {
    console.log('learning html, css, js, node js, react');
}
console.log(person);
person.code();

const student = {
    name: 'Sajal Hossain',
    address: ['Dighirpar', 'Atrai', 'Naogaon'],
    isMarried: true,
    rollNumber: 521299,
    experience: {
        html: 'done',
        css: 'done',
        js: 'About Done',
        react: 'not Done'
    },
    job: 'islami Bank'
};

console.log(student);

//2.object constructor
const people = new Object();
console.log(people);

//object create method
//const item = Object.create(null);
const item2 = Object.create(student);
console.log(item2.name);

//4. class
class personTwo {
    name = 'abul';
    address = 'sodor ghat';
    constructor(age, isMarried) {
        this.age = age;
        this.isMarried = isMarried;
    }
};
const show = new personTwo(56, true);
console.log(show);