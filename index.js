
const { uuid } = require('uuid');

function generateSquaredNumbersList(length) {
    let squaredList = [];
    for (let i = 1; i <= length; i++) {
        squaredList.push(i * i);
    }
    return squaredList;
}

// Usage
const squaredList = generateSquaredNumbersList(10);
console.log(squaredList);


module.exports = { generateSquaredNumbersList };
