import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
 
  id : number
  employee: Employee=new Employee();
  
  constructor( private route :Router, private employeeService: EmployeeService , private router :ActivatedRoute){
 
  }
   ngOnInit(): void {
    this.id =this.router.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
this.employee=data;
    },error=>console.log(error)
    );
      }


  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe(data=>{
this.goToEmployeeList();
    });
    console.log(this.employee)
  
  }


  goToEmployeeList()
  {
    this.route.navigate(['/employees']);
  }
  
}
