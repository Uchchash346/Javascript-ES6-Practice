/*function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(5);
console.log(result);*/

/*const doubleIt = function myFun(num){
    return num * 2;
}
const result = doubleIt(5);
console.log(result)*/

const doubleIt = (num) => num * 2; //Single Parameter
const add = (x, y) => x + y; // More than one parameter
const give5 = () => 5; //without parameter
const doMath = (x,y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5()
const result3 = doMath(7, 5);
console.log(result3);