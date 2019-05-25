import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeservice/employee.service';
import { Employee } from '../employeemodel/employee';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  employee : Employee;
  loginForm:FormGroup;
  hello:string;
  condition2:boolean=true;
  constructor(private fb: FormBuilder,private employeeService:EmployeeService, private router: Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      empId: ['', [Validators.required]],
      password: ['', [Validators.required]]})

  }
  
  login=function(){
    this.employeeService.getEmployeeFromData(this.loginForm.value).then(response => {this.employee=response;this.router.navigate(['/employeeview',this.employee.empId])})
    .catch(response=>this.employee=response);
   
  }

//   clicklogin(){
//     this.condition2=false;
//     //alert(this.condition);
//   }
//   clickregister(){
//     this.condition2=true;
//    // alert(this.condition2);
// }
}