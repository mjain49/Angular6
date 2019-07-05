import { Component } from "@angular/core";
import { empty } from "rxjs";

@Component({
    selector:'add-emp',  //css selector
    templateUrl:'app.add.html'
    // template: '<h1>showemployee.html...</h1>'  //template is used if we want to use html inside a component internally single quptes for multiple lines
    /*
    template:`Employee ID is {{empId}} <br>
    Employee Name is {{empName}} <br>
    Employee Salary is {{empSalary}} <br>
    {{addEmployee()}}`
    //This is the tagged Template Example of String in TypeScript
    */  
})
export class AddEmployeeComponent{
    [x: string]: any;
    empId:number;
    empName:String;
    empSalary:number;
    array:AddEmployeeComponent[]=[];
    addEmployee():any{
    // for single entry Display// alert("Employee Added....."+this.empId+" "+this.empName+" "+this.empSalary);
      var emp:AddEmployeeComponent= new AddEmployeeComponent();
      emp.empId=this.empId;
      emp.empName=this.empName;
      emp.empSalary=this.empSalary;
      this.array.push(emp);

      for(var data of this.array){
            console.log(data);
      }
      this.empId=null;
      this.empName=null;
      this.empSalary=null;
     // this.emp.push(empId:this.empId,empName:this.empName,empSalary:this.empSalary);
    }

    deleteEmp(data:number):any{
        this.array.splice(data,1);
    }
    
    updateEmp(data:number):any{
        var emp1:AddEmployeeComponent= new AddEmployeeComponent();
       // emp1.empId=this.array[data].empId;
       emp1.empId=this.array[data].empId;
       emp1.empName=null;
       emp1.empSalary=null;
    }
}