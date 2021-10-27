import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'MainInvoiceComponent',
    component: MainInvoiceComponent,
    children: [{ path: 'detail/:Id/:Active', component: InvoiceComponent }],
    // [{ path: 'listuser/:cat/:test', component: ListUserComponent }],
  },
  {
    path: 'goback',
    component: MainInvoiceComponent,
  },
  {
    path: 'Gotodo2',
    component: AddProductTDComponent,
  },
  {
    path: 'Gotodo3',
    component: AddProductRFComponent,
  }
];
//test
//test

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
