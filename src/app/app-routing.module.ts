import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';

const routes: Routes = [
  // {path:'employee',component:EmployeeComponent},
  {path:'address',component:AddAddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
