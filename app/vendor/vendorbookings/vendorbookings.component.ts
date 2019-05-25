import { Component, OnInit } from '@angular/core';
import { Payment } from '../../ticket/payment';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendorbookings',
  templateUrl: './vendorbookings.component.html',
  styleUrls: ['./vendorbookings.component.css']
})
export class VendorbookingsComponent implements OnInit {
  pay:Payment[];

  constructor(private vendorService:VendorService) { }

  ngOnInit() {
    this.viewPayment();
    
    
      }
      viewPayment(){
        this.vendorService.viewPayment("food").then(response=>{this.pay=response;})
        
      }

}
