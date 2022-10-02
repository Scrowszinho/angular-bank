import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceFormComponent } from './finance-form/finance-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    FinanceFormComponent,
    FinanceListComponent
  ],
  exports: [
    FinanceFormComponent,
    FinanceListComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    CommonModule
  ]
})
export class FinanceModule { }
