import { FinanceService } from './../finance.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { FinanceStatus } from 'src/app/enums/finance-status.enum';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss'],
})
export class FinanceFormComponent {
  public form : FormGroup;

  constructor(
    private service: FinanceService,
    private router : Router,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      'value': [null, [Validators.required]],
      'account': [null, [Validators.required]],
    });
  }

  onSubmit(): void {
    let rawValue = this.form.getRawValue();
    // TODO - CREATE CAMPS IN FORM
    if(rawValue.account && rawValue.value){
    this.service.sendTransfer({
      id: uuidv4(),
      account: rawValue.account || 0,
      value: rawValue.value || 0,
      date: new Date().toLocaleDateString(),
      status: FinanceStatus.ON_PROCESS,
      name: '',
      description: ''
    }).subscribe(
        sucess => {
          this.router.navigateByUrl('finance/list')
          this._snackBar.open('Transação cadastrada', 'x');
        },
        error =>  this._snackBar.open('Opá! Alguma coisa deu errado', 'x'));
    this.form.reset();
  }
  }

}
