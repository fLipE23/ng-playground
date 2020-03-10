import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from "rxjs";


export interface IMacAddress {
  address: string;
  vendorDetails?: object;
  blockDetails?: object;
  macAddressDetails?: object;
}

interface IMacAddressResponse {
  vendorDetails: object;
  blockDetails: object;
  macAddressDetails: object;
}

@Injectable({providedIn: 'root'})
export class AddressService
{
  // service for fetching data
  constructor(private http: HttpClient) {}

  private addresses: IMacAddress[] = [];

  private API_KEY = 'at_BULmXFODqtiqHIVJ6CERtQ11sBwzn';

  public updateInfo(item: IMacAddress): IMacAddress {
    this.http.get<IMacAddressResponse>('https://api.macaddress.io/v1?apiKey=' + this.API_KEY + '&output=json&search=' + item.address)
      .subscribe(res => {
        item.vendorDetails = res.vendorDetails;
        item.blockDetails = res.blockDetails;
        item.macAddressDetails = res.macAddressDetails;
      });

    return item;
  }

  push(item: IMacAddress) {
    item = this.updateInfo(item);
    this.addresses.push(item);
  }

  // get info and push
  pushAddressString(addressString: string): IMacAddress {
    const address: IMacAddress = {
      address: addressString,
    };
    this.push( this.updateInfo(address)  );

    return address;
  }

  getAll(): IMacAddress[] {
    return this.addresses;
  }

}
