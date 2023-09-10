const student = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        //console.log(this.name, ' is participating in an exam')
        return (this.name + ' is participating in an exam')
    },
    improveExam: function (subject) {
        this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`;
    },
    treatdey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    },

};
//console.log(student);
//student.exam();
const output = student.exam();
console.log(output);

const result = student.improveExam('algebra');
console.log(result);

const remaining = student.treatdey(900, 100);
console.log(remaining);

const eidSelami = student.treatdey(500, 50);
console.log(eidSelami);