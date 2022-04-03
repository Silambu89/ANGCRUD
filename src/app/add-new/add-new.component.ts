import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../Service/customer.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  msgclass = '';
  msg = '';
  constructor(private service: CustomerService) { }

  ngOnInit(): void {
  }

  register = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.compose([Validators.required, Validators.email])),
    gender: new FormControl("", Validators.required),
  })
  saveCustomer() {
    if (this.register.valid) {
      this.service.SaveCustomer(this.register.value).subscribe(data => {
        if (data != null) {
          this.msgclass = "success"
          this.msg = "Data saved successfully"
          this.clearcus();
        }
      })

    }
    else {

      this.msgclass = "error"
      this.msg = "please enter valid data"
      this.clearcus();
    }
  }

  clearcus(){
  this.register = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    gender: new FormControl("")
  })
}
}
