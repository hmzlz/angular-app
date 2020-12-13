import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { GamingproductComponent } from './gamingproduct/gamingproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { GprodComponent } from './gprod/gprod.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FormComplaintComponent } from './form-complaint/form-complaint.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    GamingproductComponent,
    NavbarComponent,
    CartComponent,
    GprodComponent,
    ComplaintComponent,
    FormComplaintComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
