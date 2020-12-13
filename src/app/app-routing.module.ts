import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamingproductComponent } from './gamingproduct/gamingproduct.component';
import {CartComponent} from './cart/cart.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FormComplaintComponent } from './form-complaint/form-complaint.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'gproducts', component: GamingproductComponent },
  { path: 'mycart', component: CartComponent },
  { path: 'mycomplaints', component: ComplaintComponent },
  { path: 'mycomplaints/addcomplaint', component: FormComplaintComponent },
  { path: "update/:id", component:ReactiveFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
