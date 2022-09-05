import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceFormComponent } from './finance-form/finance-form.component';



@NgModule({
  declarations: [
    FinanceFormComponent
  ],
  exports: [
    FinanceFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FinanceModule { }
