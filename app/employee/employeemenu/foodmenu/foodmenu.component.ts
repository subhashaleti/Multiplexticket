import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Vendor } from '../../../vendor/vendormodel/vendor';
import { EmployeeService } from '../../employeeservice/employee.service';
import { FoodItem } from '../../../vendor/fooditemmodel/fooditem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
payForm:FormGroup
  constructor(private employeeService : EmployeeService,private fb:FormBuilder, private router:Router) { 

    this.payForm = fb.group({
      'paymentId' : [null, Validators.required],
      'employeeId' : [null, Validators.required],
      'price' : [null, Validators.required],
      'OTP' : [null, Validators.required],
      'quantity':[null,Validators.required],
      'category':["food",Validators.required],
      'iid':["1",Validators.required]
      



  })
  }
  @Input()
  chosenVendor : Vendor;
  @Input()
  menu:FoodItem[];
  @Input()
  empId:String;
  otp:number;
  ngOnInit() {
  
    //this.getFoodMenu();
  }
  getFoodMenu()
  {
    this.employeeService.getMenu(this.chosenVendor.fid).then(response => {this.menu=response;})
    .catch(response=>this.menu=response);
  }
  order(iid:string){
    
    this.payForm.controls['employeeId'].setValue(this.empId);//change this to employee id
    this.payForm.controls['quantity'].setValue(1);
    this.payForm.controls['iid'].setValue(iid);
   
    this.employeeService.pay(this.payForm.value).then(response => {this.otp=response;this.ngOnInit()})
    .catch(response=>{this.otp=response;this.ngOnInit()});
  }
  select()
  {
    if(this.otp>0)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  hi()
  {
    this.router.navigate(["/employeeview",this.empId])
  }
  
  }
