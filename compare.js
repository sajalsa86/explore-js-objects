const first = { a: 5, b: 2, c: 5 };
const second = { a: 5, b: 2, c: 5 };

const compareObjects = (first, second) => {
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if (firstKeys.length === secondKeys.length) {
        for (const key of firstKeys) {
            if (first[key] !== second[key]) {
                return false;
            }
        }
    }
    else {
        return false;
    }
    return true;
};
const isSame = compareObjects(first, second);
console.log(isSame);