import { Injectable } from '@angular/core';
import { Vendor } from '../vendor/vendormodel/vendor';
import { Http } from '@angular/http';
import { FoodItem } from './fooditemmodel/fooditem';
import { Payment } from '../ticket/payment';

@Injectable()
export class VendorService {
  getVendorFromData(vendor):Promise<Vendor>{
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/foodLogin', vendor)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  view(fid:string):Promise<Vendor>
  {
      return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/fooddetails', fid)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  getFoodItems(fid:string):Promise<FoodItem[]>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/menudetails', fid)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  updateFoodItems(item:FoodItem):Promise<string>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/updateFoodList', item)
      .toPromise()
      .then(response => response.json())
      .catch(response => response.json());
  }
  addFoodItem(data):Promise<string>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/addFoodItem', data)
      .toPromise()
      .then(response => response.json())
      .catch(response => response.json());
  }
  deleteFoodItem(fid:string):Promise<string>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/deleteFoodItem', fid)
      .toPromise()
      .then(response => response.json())
      .catch(response => response.json());
  }

  viewPayment(category:string):Promise<Payment[]>
  {
      return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/displayPaymentList',category)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  constructor(private http: Http) { }

}
