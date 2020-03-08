import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddressService} from '../shared/address.service';
// import {Store, select} from '@ngrx/store';
// import * as fromRoot from '../store/reducers';

// import { AppState } from '../store/state/app.state';
// import {MacAddressState} from "../store/state/macAddress.state";
// import {GetMacAddress} from "../store/actions/macAddress.actions";


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})

export class AddFormComponent implements OnInit {

  public address  = '';
  public macAddressForm: FormGroup;

  // tslint:disable-next-line:variable-name
  // constructor(private _store: Store<MacAddressState> ) { }
  constructor(private service: AddressService) {}


  ngOnInit(): void {
    // this._store.dispatch(new GetMacAddress());

    // console.log(this._store);

    this.macAddressForm = new FormGroup({
      address: new FormControl(this.address, [
        Validators.pattern('[a-zA-Z ]*'),
        Validators.required,
        Validators.minLength(3),
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
