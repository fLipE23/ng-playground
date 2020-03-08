import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddressService} from '../shared/address.service';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {

  public address  = '';
  public macAddressForm: FormGroup;

  constructor(private service: AddressService) {}


  ngOnInit(): void {
    // this.service.pushAddress('44:38:39:ff:ef:57');

    this.macAddressForm = new FormGroup({
      address: new FormControl(this.address, [
        Validators.pattern('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'),
        Validators.required,
        Validators.minLength(17),
        Validators.maxLength(17),
      ]),
    });
  }

  get mac_address() { return this.macAddressForm.get('address'); }

  addMac() {
    // console.log(this.macAddressForm);
    if (this.macAddressForm.valid) {
      this.service.pushAddress(this.address);
      this.macAddressForm.reset();
      // this.address = '';
    }
  }

}
