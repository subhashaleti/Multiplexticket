import { Component, OnInit } from '@angular/core';
import { Employee } from '../../employeemodel/employee';
import { EmployeeService } from '../../employeeservice/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
  employee:Employee = new Employee(); 
  empId : string;
  constructor(private employeeService:EmployeeService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('empId');
    this.employeeService.view(this.empId).then(response => this.employee=response);
  }

}
