import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL= "http://localhost:8080/api/v1";
 
  constructor(private httpClient : HttpClient) { 

  }


  getEmployeesList(): Observable<Employee[]>{
    console.log(this.baseURL)
    return this.httpClient.get<Employee[]>(this.baseURL +'/list_employees');
   
  }

  createEmployee(employee : Employee): Observable<any>{
    return this.httpClient.post(this.baseURL +'/create_employee',employee);
  }


  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+ '/find_by_id/' +id);
  }


  updateEmployee(id : number , employee : Employee):Observable<any>{
    return this.httpClient.put(this.baseURL +'/update_employee/'+id ,employee);
  }

  deleteemployee(id:number): Observable<Object>{
    return this.httpClient.delete(this.baseURL +'/delete_employee/'+id);
  }

}
