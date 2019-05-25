import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../owner.service';
import { Payment } from '../../ticket/payment';

@Component({
  selector: 'app-ownerbookings',
  templateUrl: './ownerbookings.component.html',
  styleUrls: ['./ownerbookings.component.css']
})
export class OwnerbookingsComponent implements OnInit {
pay:Payment[];
  constructor(private ownerService:OwnerService) { 

  }

  ngOnInit() {
this.viewPayment();


  }
  viewPayment(){
    this.ownerService.viewPayment("multiplex").then(response=>{this.pay=response;})
    
  }

}
