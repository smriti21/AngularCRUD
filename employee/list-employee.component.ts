import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
employees: Employee[];
  constructor(private _route: ActivatedRoute) {
    this.employees = _route.snapshot.data['employeeList'];
   }

  ngOnInit() {
  
  }
}
