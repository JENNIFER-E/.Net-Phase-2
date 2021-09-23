import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';

import { HomeComponent } from './home/home.component';
import { EditComponent } from './items/edit/edit.component';
import { ItemsComponent } from './items/items.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './orders/payment/payment.component';

const routes: Routes = [
  {path: "",component:CustomerComponent},
  {path: "home",component:HomeComponent},
  {path: "admin",component:AdminComponent},
  {path: "customer",component:CustomerComponent},
  {path: "home/customer/order",component:OrdersComponent},
  {path: "home/customer/order/bill",component:PaymentComponent},
  {path: "home/admin/item",component:ItemsComponent},
  {path: "home/admin/item/add/:id",component:EditComponent},
  {path: "home/admin/item/edit/:id",component:EditComponent}
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[HomeComponent,CustomerComponent,AdminComponent,OrdersComponent,PaymentComponent,ItemsComponent,EditComponent]
