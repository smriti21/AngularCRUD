import { Component, OnInit, NgZone } from '@angular/core';
import { Department } from '../model/department.model';
import { EmployeeService } from './employee.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  departments : Department[] =[{
    id:"1",
    name:"Help Desk"
  },
  {
    id:"2",
    name:"HR"
  },
  {
    id:"3",
    name:"IT"
  },
  {
    id:"4",
    name:"Payroll"
  },
]

employee: Employee;
previewPhoto : boolean = false;
  constructor(private _employeeService: EmployeeService,
    private _router: Router,
    private _ngZone: NgZone,
    private _route : ActivatedRoute
    ) { }

  ngOnInit() {
      this._route.paramMap.subscribe(parameterMap => {
        const id = +parameterMap.get('id');
        this.getEmployee(id);
      });
  }

  getEmployee(id : number){
    if(id == 0){
this.employee = {
  id: null,
  name: null,
  gender: null,
  contactPreference: null,
  phoneNumber: null,
  email: null,
  dateOfBirth: null,
  department: null,
  isActive: null,
  imagePath: null
};
    }
    else{
    this._employeeService.getEmployeeById(id).subscribe( emp =>
      this.employee = emp);
    }
  }
  saveEmployee(): void {
    this._employeeService.addEmployee(this.employee).subscribe(
      (data:Employee) => 
      this._ngZone.run(() => {
        this._router.navigateByUrl('/list');
      })
    );  
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
