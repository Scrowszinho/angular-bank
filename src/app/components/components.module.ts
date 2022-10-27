import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TableComponent } from './table/table.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
    TableComponent,
  ],
  declarations: [
    TableComponent,
  ],
})
export class ComponentsModule { }
