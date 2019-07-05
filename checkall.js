function getName() {
    return "CapGemini";
}
var ename = getName();
console.log(ename);
function addNumber(num1, num2) {
    return num1 + num2;
}
var sum = addNumber(10, 20);
console.log(sum);
var sum1 = function (a, b) { return a + b; };
var sum2 = sum1(10, 20);
console.log(sum2);
function addition() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var add = 0;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var data = num_1[_a];
        add = add + data; //data is in array    
    }
    return add;
}
var sum3 = addition(10, 20, 30, 40);
console.log(sum3);
