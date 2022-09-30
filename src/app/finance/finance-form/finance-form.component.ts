import { FinanceService } from './../finance.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FinanceStatus } from 'src/app/enums/finance-status.enum';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss'],
})
export class FinanceFormComponent {
  constructor(
    private service: FinanceService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    value: null,
    account: null,
  });

  onSubmit(): void {
    let rawValue = this.form.getRawValue();

    if(rawValue.account && rawValue.value){
    this.service.sendTransfer({
      id: uuidv4(),
      account: rawValue.account || 0,
      value: rawValue.value || 0,
      date: new Date().toLocaleDateString(),
      status: FinanceStatus.ON_PROCESS
    }).subscribe(
        sucess => this._snackBar.open('Transação cadastrada'),
        error =>  this._snackBar.open('Opá! Alguma coisa deu errado'));
    this.form.reset();
  }
  }

}
