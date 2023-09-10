const bottle = {
    color: 'yellow',
    price: 25,
    isCleaned: true,
    capacity: 1
};
// to know only keys or propertys
const keys = Object.keys(bottle);
console.log(keys);

// to know only values of keys
const values = Object.values(bottle);
console.log(values);

//to do two dimentional array
const pair = Object.entries(bottle);
console.log(pair);
// seal korle shudhu value change kora jai, others action kora jai na
Object.seal(bottle)

// delete a item from a object
delete bottle.isCleaned;
//console.log(bottle);

//add a key in a object
bottle.height = '20cm';
console.log(bottle)

//freze kore rakhle kono action kora jai na
Object.freeze(bottle);