import { Injectable } from '@angular/core';
import {clone} from 'lodash';
import { findIndex } from 'lodash';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'
import { Employee } from '../employeemodel/employee';
import { Vendor } from '../../vendor/vendormodel/vendor';
import { FoodItem } from '../../vendor/fooditemmodel/fooditem';
import { Movie } from '../../owner/moviemodel/movie';

@Injectable()
export class EmployeeService {
  getEmployeeFromData(employee):Promise<Employee>{
    
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/login', employee)
      .toPromise()
      .then(response =>response.json())
      .catch(error => Promise.reject(error.json() || error)) ;
      
  }
  view(empId:string):Promise<Employee>
  {
      return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/employeedetails', empId)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  addEmployee(employee:any){
    
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/getEmployee', employee)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));

  }
  constructor(private http: Http) { }
  getVendors():Promise<Vendor[]>
  {
    return this.http.get('http://localhost:8765/EaseInfy/EaseInfyApi/vendorList')
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  getMenu(fid:string):Promise<FoodItem[]>
  {
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/menudetails',fid)
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  getMovies():Promise<Movie[]>
  {
    return this.http.get('http://localhost:8765/EaseInfy/EaseInfyApi/displayMoviesList')
      .toPromise()
      .then(response => response.json())
      .catch(error => Promise.reject(error.json() || error));
  }
  
  addBalance(data):Promise<any>{
    
    return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/addBalance',data)
    .toPromise()
    .then(response=>response.json())
    .catch(response=>response)
}
pay(data):Promise<any>{
  return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/addPayment',data)
  .toPromise()
  .then(response=>response.json())
  .catch(response=>response)
}
}
