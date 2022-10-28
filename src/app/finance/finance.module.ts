import { FinanceRoute } from './finance.route';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceFormComponent } from './finance-form/finance-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { MaterialModule } from '../material.module';
import { ComponentsModule } from '../components/components.module';

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
    MaterialModule,
    ComponentsModule,
    FinanceRoute,
    CommonModule
  ]
})
export class FinanceModule { }
