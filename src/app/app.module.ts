import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { FinanceModule } from './finance/finance.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AppRoute } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoute,
    MaterialModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
