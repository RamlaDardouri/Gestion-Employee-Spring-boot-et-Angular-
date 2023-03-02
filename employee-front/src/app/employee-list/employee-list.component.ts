import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[];

  constructor(private router : Router,private employeeService: EmployeeService){
    this.getEmployees();
  }


  ngOnInit(): void {
 
    this.getEmployees();
}

private getEmployees(){
this.employeeService.getEmployeesList().subscribe(data => {
  this.employees = data;
  console.log(data)
});

}


updateEmployee(id:number){
this.router.navigate(['/update-employee',id])
}

detailsEmployee(id:number){
  this.router.navigate(['/details-employee',id])
  }
  


deleteEmployee(id:number){
 this.employeeService.deleteemployee(id).subscribe(data=>{
  this.getEmployees();
 });
  }






}
