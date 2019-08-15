import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
  declarations: [CustomerAddComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule
  ]
})
export class CustomersModule { }
