import { Component, OnInit } from '@angular/core';
import { TicketService } from './ticket-service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Payment } from './payment';
import { Movie } from '../owner/moviemodel/movie';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
payForm:FormGroup;
empId:string;
OTP:number;
  constructor(private isc:TicketService,private fb:FormBuilder,private route:ActivatedRoute){
    this.payForm = fb.group({
      'paymentId' : [null, Validators.required],
      'employeeId' : [null, Validators.required],
      'price' : [null, Validators.required],
      'OTP' : [null, Validators.required],
      'quantity':[null,Validators.required],
      'category':["multiplex",Validators.required],
      'iid':["1",Validators.required]
      



  })
}
noOfTickets:number;
s:number=50;
layout1:layout[];
addedList:string[]=[];
finalList:string[]=[];
hi:string;
obj:layout[];
movie:Movie[];
fi:Payment;

  modify(x)
  {
    if((document.getElementById(x) as HTMLInputElement).checked)
{
this.addedList.push(x)}
else{

  this.addedList.splice(this.addedList.indexOf(x),1);
}

  }
  

book()
{
  
  this.isc.book(this.addedList).then(response=>{this.hi=response;this.ngOnInit()})
  .catch(response=>{this.hi=response;})
}
  ngOnInit() {
    this.empId=this.route.snapshot.paramMap.get('empId');
    this.isc.getLayout().then(response=>{this.layout1=response;console.log(this.layout1);
      this.display();
   if(this.layout1){
   this.obj=this.layout1.sort((t1,t2)=>{
     if(+t1.seatId>+t2.seatId){
       return 1;
     }
     if(+t1.seatId<+t2.seatId)
     {
       return -1;

     }
     return 0;
    
   });}
   
   

    
    
    
    
    
    });
  }
  validate()
  {
    if(this.addedList.length==0)
    {
      return true;
    }
    else
    return false;
  }
 pay(){
   
 this.payForm.controls['paymentId'].setValue("123");
this.payForm.controls['employeeId'].setValue(this.empId);
this.payForm.controls['quantity'].setValue(this.addedList.length);

this.isc.pay(this.payForm.value).then(response=>{this.OTP=response;if(this.OTP>0){this.book()};this.ngOnInit()})
.catch(response=>{this.OTP=response;})
}

 display()
 {
   this.isc.display().then(response=>this.movie=response).catch(response=>this.movie=response)
 } 
select()
{
  if(this.OTP>0)
  {
    return true;
  }
  else
  {
    return false;
  }
}


}

