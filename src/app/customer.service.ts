import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private customerService : CustomerService) 

  { }

  customers: any = [
  {id:1,name:"Asif",email:"asif@gmail.com",number:9681396392,address:"Electronic city, Banglore"},
  {id:0,name:"Amir",email:"amir@gmail.com",number:"8951359417",address:"Marathalli, Bangalore"}];

  getCustomers ()
  {
  	return this.customers;
  }

}
