import { Component, OnInit } from '@angular/core';
import {AddressService, IMacAddress} from '../shared/address.service';

@Component({
  selector: 'app-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss']
})
export class AddressesListComponent implements OnInit {

  constructor(private service: AddressService) {}

  public addresses: IMacAddress[] = [];

  ngOnInit(): void {
    // get from service
    this.addresses = this.service.getAll();
  }

  getKeyValObjectsArr(props: object) {
    let arr = [];
    for (let prop in props) {
      arr.push({key: prop, val: props[prop]});
    }
    return arr;
  }


}


