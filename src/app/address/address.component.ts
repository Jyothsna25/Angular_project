import { Component } from '@angular/core';
import { Address } from './Model/addressModel';
import { addressservice } from './service/addressService';

@Component({
  selector: 'app-address',
  templateUrl:'./address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

}
export class AppComponent {
  title = 'students';
address:Address=new Address();
savedAddress:[]=[];

  constructor(private addressservice: addressservice){}
  
    createAddress(address:Address){
      console.log("Data");
      console.log(this.address)
      this.addressservice.saveAddress(this.address).subscribe({
        next:res=>{
          console.log(address);
        }
      })
    }
  
  }