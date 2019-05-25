import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendormodel/vendor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  vendor : Vendor;
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private vendorService:VendorService, private router: Router) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      fid: ['', [Validators.required]],
      password: ['', [Validators.required]]})

  }
  login=function(){
    this.vendorService.getVendorFromData(this.loginForm.value)
    .then(response => {this.vendor=response;this.router.navigate(['/vendorview',this.vendor.fid])})
    .catch(response=>this.vendor=response);
  
  }
}
