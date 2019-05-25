import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employeeservice/employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Employee} from '../employeemodel/employee';
import { FormGroup ,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {
    employee:Employee = new Employee(); 
    empId : string;
    balanceMessage:string; 
    balanceForm:FormGroup;
  constructor(private employeeService:EmployeeService, private router: Router,private route:ActivatedRoute,private fb:FormBuilder) { 
    this.balanceForm = fb.group({
      empId: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(6),Validators.pattern('[0-9]{6}')]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone:[null, [Validators.required]],
      password:['',[Validators.required]],
      confirm:[null,[Validators.required]],
      balance:['',[Validators.required,Validators.min(100),Validators.max(1000)]]
      })
  }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee=function(){
      this.empId=this.route.snapshot.paramMap.get('empId');
      this.employeeService.view(this.empId).then(response=>this.employee=response);//to modify for exceptions
  }
  movies()
  {
    this.router.navigate(['employeemoviesComponent',this.empId])
  }
  food()
  {
    this.router.navigate(['employeemenuComponent',this.empId])

  }
  addBalance(){
    
    this.balanceForm.controls['empId'].setValue(this.empId);
    this.balanceForm.controls['password'].setValue(this.employee.password);


    this.employeeService.addBalance(this.balanceForm.value).then(response=>{this.balanceMessage=response;this.ngOnInit()})

  }
}
