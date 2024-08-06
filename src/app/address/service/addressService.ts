
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address } from "../Model/addressModel";

@Injectable({
    providedIn: 'root'
})
export class addressservice{

    addressSaveUrl: string = 'http://localhost:8082/add/save'

    constructor(private httpClient: HttpClient){}

    saveAddress(address: Address){
        return this.httpClient.post<any>(`${this.addressSaveUrl}`,address,{observe:'response'})
      }

}