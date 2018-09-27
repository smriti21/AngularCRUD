import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Employee } from '../model/employee.model';
import { Router } from '@angular/router';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

@Input() employee: Employee;
  constructor(private _ngZone: NgZone,
    private _router: Router,
    private _employeeService: EmployeeService) { }

  ngOnInit() {
  }

  edit(){
    this._ngZone.run(() => {
      this._router.navigate(['/edit', this.employee.id]);
    });
  }

  delete(){
    this._employeeService.deleteEmployeeById(this.employee.id).subscribe(emp =>
    this._ngZone.run(() => {
      this._router.navigateByUrl('/list');
    })
    );
  }
}
