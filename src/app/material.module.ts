import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    CommonModule
  ]
})
export class MaterialModule { }
