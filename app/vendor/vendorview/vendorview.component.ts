import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendormodel/vendor';
import { FoodItem } from '../fooditemmodel/fooditem';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-vendorview',
  templateUrl: './vendorview.component.html',
  styleUrls: ['./vendorview.component.css']
})
export class VendorviewComponent implements OnInit {
  vendor : Vendor = new Vendor(); 
  fid : string;
  menuitems : FoodItem[];
  eForm : FormGroup;
  newItem:FoodItem;
  message:string;
  eForm1:FormGroup;
constructor(private vendorService:VendorService, private router: Router,private route:ActivatedRoute,private fb: FormBuilder) { 
  this.eForm = fb.group({
    'mid' : [null, Validators.required],
    'id' : [null, Validators.required],
    'item' : [null, Validators.required],
    'price' : [null, Validators.required],
    'servings':[null,Validators.required]
  });
  
}
fi:FoodItem;
ngOnInit() {
  this.getVendor();
}
getVendor=function(){
    this.fid=this.route.snapshot.paramMap.get('fid');
    this.vendorService.view(this.fid).then(response=>this.vendor=response);//to modify for exceptions
    this.vendorService.getFoodItems(this.fid).then(response=>this.menuitems=response);
}
editForm(fi:FoodItem)
{
  this.fi=fi;
}
update()
{

 
  this.eForm.setValue({
    mid:(<HTMLInputElement>document.getElementById("itemId")).value,
    id:(<HTMLInputElement>document.getElementById("vendorId")).value,
    item:(<HTMLInputElement>document.getElementById("item")).value,
    price:(<HTMLInputElement>document.getElementById("price")).value,
    servings:(<HTMLInputElement>document.getElementById("servings")).value


  })
  
  this.vendorService.updateFoodItems(this.eForm.value).then(res=>{this.message=res;this.ngOnInit()})
  .catch(res=>this.ngOnInit());
      
}
delete(fid:string){
this.fid=fid;
this.vendorService.deleteFoodItem(this.fid).then(response=>{this.message=response;this.ngOnInit()})
.catch(response=>{this.message=response;this.ngOnInit()});
}
addItem(){
  this.eForm.controls['id'].setValue(this.fid)
  
  
  this.vendorService.addFoodItem(this.eForm.value).then(response=>{this.message=response;this.ngOnInit()})
  .catch(response=>{this.message=response;this.ngOnInit()});
}


}
