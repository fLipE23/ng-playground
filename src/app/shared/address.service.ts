import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

export interface IMacAddress {
  address: string;
  params?: {};
}


@Injectable({providedIn: 'root'})
export class AddressService {

  // service for fetching data
  constructor(private http: HttpClient) {}

  private addresses: IMacAddress[] = [];

  private key = 'at_BULmXFODqtiqHIVJ6CERtQ11sBwzn';

  private updateInfo(item: IMacAddress): IMacAddress {
    console.log(this.http);
    // let temp = {};
    console.log(
      this.http.get('https://api.macaddress.io/v1?apiKey=' + this.key + '&output=json&search=44:38:39:ff:ef:57')
        .subscribe(res => {
          console.log(res);
        })
    );

    return item;
  }

  push(item: IMacAddress) {
    item = this.updateInfo(item);
    this.addresses.push(item);
  }

  // get info and push
  pushAddress(addressString: string) {
    // alert(address);
    const address: IMacAddress = {
      address: addressString,
    };

    this.push( this.updateInfo(address) );
  }

  getAll() {}

}
