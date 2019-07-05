import {IEmployee} from './Employee'; //no need to write extenxion because we are in the same folder

 //in java Employee emp=new Employee();

 var empall:IEmployee[]=[
 {empId:100,empName:"mayur",empSalary:40000.89,empStatus:true},
 {empId:101,empName:"aman",empSalary:30000.89,empStatus:false},
 {empId:102,empName:"abhi",empSalary:20000.89,empStatus:true}
 ];

 empall.push({empId:103,empName:"avi",empSalary:15000.89,empStatus:true});
 // empall.splice(1,1);
 empall.slice(2,1);
 console.log(empall);
/* 
for(let data of empall){
    console.log(data.empId+" "+data.empName+" "......);
}

*/