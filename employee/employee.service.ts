import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
  baseUrl : string = "http://localhost:3004/employees";
  constructor(private _httpClient: HttpClient){

  }

       /*
      Method to get all employees
      */
      getAllEmployees(): Observable<Employee[]>{
      return this._httpClient.get<Employee[]>(this.baseUrl);
      }

       /*
      Method to create a new employee
      {employee} : employee
      */
      addEmployee(newEmployee : Employee) : Observable<Employee>{
        if(newEmployee.id == null)
        {
        return this._httpClient.post<Employee>(this.baseUrl,
        newEmployee,
        { headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
    }
    else{
      return this.updateEmployee(newEmployee)
    }
      }

       /*
      Method to update an employee
      {employee} : employee
      */
      updateEmployee(employee: Employee): Observable<Employee> {
        return this._httpClient.put<Employee>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
    }

     /*
      Method to get an employee by its id
      {id} : employee Id
      */
      getEmployeeById(id: number) : Observable<Employee>{
      return this._httpClient.get<Employee>(`${this.baseUrl}/${id}`)
      }

      /*
      Method to delete an employee
      {id} : employee Id
      */
      deleteEmployeeById(id: number): Observable<void>{
        var x = `${this.baseUrl}/${id}`
        console.log(x);
        return this._httpClient.delete<void>(`${this.baseUrl}/${id}`)
      }
}