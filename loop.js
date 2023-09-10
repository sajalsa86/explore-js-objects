let sum = 0;
const numbers = [12, 54, 63, 3, 54];
for (const number of numbers) {
    sum += number;
    // console.log(`${number} = ${sum}`);
}
// we can not use on object= for of loop 
const bottle = {
    color: 'yellow',
    price: 25,
    isCleaned: true,
    capacity: 1
};
/* 
3 way we can read object propertise
bottle.clolr
bottle['color']
bottle[key]
*/
// first option
const keys = Object.keys(bottle);
for (const key of keys) {
    //console.log(key); // for propertise
    //console.log(bottle[key]); // for value
    const keyAndValue = `${key} : ${bottle[key]}`; // for value and propertise
    //console.log(keyAndValue);
}
// 2nd option
//best way on object= for in loop
for (const key in bottle) {
    // console.log(key, bottle[key]); or
    const value = bottle[key];
    //console.log(key, value);
}

//advance
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}