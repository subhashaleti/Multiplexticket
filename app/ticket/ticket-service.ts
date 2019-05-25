import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Payment } from './payment';

@Injectable()
export class TicketService{
     constructor(private http:Http){}
     getLayout():Promise<any>
     {
         return this.http.get('http://localhost:8765/EaseInfy/EaseInfyApi/getLayout').
         toPromise()
         .then(response=>response.json())
     }
     book(data):Promise<any>
     {
         return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/book',data)
         .toPromise()
         .then(response=>response)
         .catch(response=>response)
     }
    pay(data):Promise<any>{
        return this.http.post('http://localhost:8765/EaseInfy/EaseInfyApi/addPayment',data)
        .toPromise()
        .then(response=>response.json())
        .catch(response=>response)
    }
    resetBook():Promise<any>
    {
        return this.http.get('http://localhost:8765/EaseInfy/EaseInfyApi/resetBook')
        .toPromise()
        .then(response=>response.json())
        .catch(response=>response)
    
    }
    display():Promise<any>
    {
        return this.http.get('http://localhost:8765/EaseInfy/EaseInfyApi/displayMoviesList')
        .toPromise()
        .then(response=>response.json())
        .catch(response=>response.json())
    }
}



