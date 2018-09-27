import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { ViewEmployeeComponent } from './employee/view-employee.component'; 
import {HttpClientModule} from '@angular/common/http';
import {EmployeeListResolver} from './service/employee-list-resolver.service';

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeeComponent, resolve: {employeeList : EmployeeListResolver} },
  { path: 'edit/:id', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, EmployeeListResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }