function sum(arr) {
    return arr.filter(elem => elem > 20)
        .reduce((accumulator, currentValue) => accumulator + currentValue);
};
let input1 = [10, 20, 30, 40, 50];
console.log("1. Sum of " + input1 + " with elements greater than 20 is: " + sum(input1));

const getNewArray = function (arr, letter, length) {
    return arr.filter(elem => elem.length >= length)
        .filter(string => string.includes(letter));
}

let input2 = ["elements", "that", "contains", "letter", "a", "and", "longer", "than", 5];
console.log("Elements that contain a and longer than or equals 5 are: " + getNewArray(input2, "a", 5))