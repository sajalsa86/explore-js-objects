const kodomAli = {
    name: 'Kodom Ali',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function () {
        //console.log(this.name, ' is participating in an exam')
        return (this.name + ' is participating in an exam')
    },
    improveExam: function (subject) {
        // this.exam();
        return `${this.name} is takeing improvement exam on ${subject}`;
    },
    treatdey: function (amount, tips) {
        this.money = this.money - amount - tips;
        return this.money;
    },

};

const badanAli = {
    name: 'Badam Ali',
    money: 8000
};
const result = kodomAli.exam.call(badanAli);
//console.log(result);

const result2 = kodomAli.treatdey.call(badanAli, 1000, 500);
console.log(result2)

const result3 = kodomAli.improveExam.call(badanAli, 'statistics');
console.log(result3);

//we can aloso use apply
const result4 = kodomAli.treatdey.apply(badanAli, [1000, 500]);
console.log(result4);

const result5 = kodomAli.improveExam.apply(badanAli, ['bangla']);
console.log(result5);
//we can aloso use bind
const badamSubject = kodomAli.improveExam.bind(badanAli);
const result6 = badamSubject('English');
console.log(result6);