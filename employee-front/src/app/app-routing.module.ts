import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponentComponent } from './create-component/create-component.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employees',component:EmployeeListComponent},
{path: '', redirectTo: 'employees', pathMatch:'full'},
{path: 'create-employee',component:CreateComponentComponent},
{path: 'update-employee/:id',component: UpdateEmployeeComponent},
{path: 'details-employee/:id',component: EmployeeDetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
