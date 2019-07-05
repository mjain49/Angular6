var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.printallEmployee = function () {
        console.log(this.empId, " " + this.empName, " " + this.empSalary, " " + this.empStatus);
    };
    return Employee;
}());
var emp = new Employee(); //in java Employee emp=new Employee();
emp.empStatus = true;
emp.empId = 100;
emp.empName = "aman";
emp.empSalary = 50000.40;
emp.printallEmployee();
