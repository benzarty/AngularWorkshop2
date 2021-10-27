import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    AddProductTDComponent,
    AddProductRFComponent,
    ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
