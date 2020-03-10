import {Component, Input, OnInit} from '@angular/core';
import {IMacAddress} from "../shared/address.service";

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements OnInit {

  @Input() macAddress: IMacAddress;
  constructor() { }

  ngOnInit(): void {
  }



}
