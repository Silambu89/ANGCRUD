import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiURL ='https://gorest.co.in/public/v2/users';
  constructor(private http:HttpClient) { }
  
  LoadCustomer(){
    return this.http.get(this.apiURL);
  }
  SaveCustomer(customerData:any){
    return this.http.post(this.apiURL, customerData);
  }
  LoadCustomerbyId(id:any){
    return this.http.get(this.apiURL+'/'+id);
  }
  RemoveCustomer(id:any){
    return this.http.delete(this.apiURL +'/'+ id);
  }

}
