import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeservice/employee.service';
import {clone} from 'lodash';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Employee } from '../employeemodel/employee';

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.css']
})
export class EmployeeregistrationComponent implements OnInit {
  //employees:Employee[];
  employee:Employee;
  newEmployee:any={};
  employeeRegistrationForm:FormGroup;
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeRegistrationForm = this.fb.group({
      empId: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]{6}')]],
      name: ['', [Validators.required,Validators.pattern('[a-z A-Z]+')]],
      email: ['', [Validators.required,Validators.email]],
      phone:['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      password:['',[Validators.required]],
      balance:['',[Validators.required]]
    })
  }

  registerEmployee=function(newEmployee:any){
    
     this.employeeService.addEmployee(newEmployee).then(res=>this.employee=res);
      this.router.navigate(['/employeelogin ']);
  }

}
