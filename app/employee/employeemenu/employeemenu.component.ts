import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employeeservice/employee.service';
import { Vendor } from '../../vendor/vendormodel/vendor';
import { Router } from '@angular/router';
import { FoodItem } from '../../vendor/fooditemmodel/fooditem';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employeemenu',
  templateUrl: './employeemenu.component.html',
  styleUrls: ['./employeemenu.component.css']
})
export class EmployeemenuComponent implements OnInit {

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) { }
  vendors:Vendor[];
  chosenVendor : Vendor;
  empId:string;
  menu:FoodItem[];
  ngOnInit() {
    this.getVendors();
    this.empId=this.route.snapshot.paramMap.get('empId');
  }
  getVendors=function(){
      
      this.employeeService.getVendors().then(response=>this.vendors=response);//to modify for exceptions
  }
  showmenu(vendor:Vendor)
  {
    
    this.chosenVendor=vendor;
    this.employeeService.getMenu(this.chosenVendor.fid).then(response => {this.menu=response;})
    .catch(response=>this.menu=response);
  }
}

