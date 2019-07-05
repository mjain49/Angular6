function getName():string{
    return "CapGemini";
}
let ename=getName();
console.log(ename);

function addNumber(num1,num2):number{
    return num1+num2;
}

let sum=addNumber(10,20);   
console.log(sum);


var sum1=(a,b):number=>a+b;
let sum2=sum1(10,20);   
console.log(sum2);

function addition(...num){
    var add=0;
    for(let data of num){ //if using of then no need of num[data]
        add=add+data;//data is in array    //if using data in num then add=add+num[data]
    }
    return add;
}

var sum3=addition(10,20,30,40);
console.log(sum3);
