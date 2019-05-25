import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../ticket/ticket-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Payment } from '../../ticket/payment';
import { OwnerService } from '../owner.service';
import { Movie } from '../moviemodel/movie';

@Component({
  selector: 'app-ownerseat',
  templateUrl: './ownerseat.component.html',
  styleUrls: ['./ownerseat.component.css']
})
export class OwnerseatComponent implements OnInit {
  editForm:FormGroup;
  payForm:FormGroup;
  empId:string;
  OTP:number;
    constructor(private isc:TicketService,private owner:OwnerService, private fb:FormBuilder,private route:ActivatedRoute){
      this.payForm = fb.group({
        'paymentId' : [null, Validators.required],
        'employeeId' : [null, Validators.required],
        'price' : [null, Validators.required],
        'OTP' : [null, Validators.required],
        'quantity':[null,Validators.required],
        'category':["multiplex",Validators.required],
        'iid':["1",Validators.required]
        
  
  
  
    })
    this.editForm=fb.group({
      'mid':['1'],
      'movie':['',Validators.required],
      'ticketCost':['',Validators.required],
      'noOfSeats':[''],
  


    })
  }
  noOfTickets:number;
  s:number=50;
  layout1:layout[];
  addedList:string[]=[];
  finalList:string[]=[];
  hi:string;
  obj:layout[];
  fi:Payment;
  movie:Movie[];
  display()
 {
   this.isc.display().then(response=>this.movie=response).catch(response=>this.movie=response)
 } 
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
    
    this.isc.book(this.addedList).then(response=>{this.hi=response;})
    .catch(response=>{this.hi=response;})
  }
  hello()
  { 
    this.owner.editMovie(this.editForm.value).then(response=>{this.hi=response;this.ngOnInit()})
    .catch(response=>{this.hi=response;this.ngOnInit()})
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
    reset()
    {
      this.isc.resetBook().then(response=>this.ngOnInit());
    }
   pay(){
     
   this.payForm.controls['paymentId'].setValue("123");
  this.payForm.controls['employeeId'].setValue(this.empId);
  this.payForm.controls['quantity'].setValue(this.addedList.length);
  this.book();
  this.isc.pay(this.payForm.value).then(response=>{this.OTP=response;this.ngOnInit()})
  .catch(response=>{this.OTP=response;})
  }
  
    
}
