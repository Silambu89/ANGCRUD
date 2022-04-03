import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Service/customer.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private service: CustomerService) {
    this.LoadCustomer();
  }
  
  customerData : any;
  ngOnInit(): void {
  }
  LoadCustomer(){
    this.service.LoadCustomer().subscribe(data => {
      console.log(data);
      this.customerData = data;
    })
  }
}
