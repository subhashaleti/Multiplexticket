import { Injectable } from '@angular/core';
import { Owner } from '../owner/ownermodel/owner';
import { Http } from '@angular/http';
import { Payment } from '../ticket/payment';
import { Movie } from './moviemodel/movie';

@Injectable()
export class OwnerService {
  getOwnerFromData(owner):Promise<Owner>{
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/multiplexOwnerLogin', owner)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  view(id:string):Promise<Owner>
  {
      return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/multiplexownerdetails', id)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  constructor(private http: Http) { }
  viewPayment(category:string):Promise<Payment[]>
  {
      return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/displayPaymentList',category)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  editMovie(data):Promise<string>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/editMovie', data)
      .toPromise()
      .then(response => response.json())
      .catch(response => response.json());
  }

}
