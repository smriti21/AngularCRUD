import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from "./employee.service";
import { Employee } from "../model/employee.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeListResolver implements Resolve<Employee[]>{
    constructor(private _employeeService : EmployeeService)
    {

    }

    resolve(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<Employee[]>{
        return this._employeeService.getAllEmployees();
    }
}