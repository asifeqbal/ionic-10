import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service'

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {

  constructor(private customerService : CustomerService) { }

  customers = [];

  customers = this.customerService.getCustomers();


  ngOnInit() {

  	
  }

}
