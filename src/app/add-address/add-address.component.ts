import { Component } from '@angular/core';
import { Address } from '../address/Model/addressModel';
import { addressservice } from '../address/service/addressService';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.css'
})
export class AddAddressComponent {
  constructor(private addressservice: addressservice){}
  addressName:Address={
    name: '',
    city: '',
    mobile: '',
  }
  createAddress(addressName:Address){
      console.log("Data");
      this.addressservice.saveAddress(addressName).subscribe({
        next:res=>{
          console.log(addressName);
        }
      })
    }
  }
  
