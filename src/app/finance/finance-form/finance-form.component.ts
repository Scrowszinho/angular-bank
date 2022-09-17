import { FinanceService } from './../finance.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss'],
})
export class FinanceFormComponent {
  constructor(
    private service: FinanceService,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    value: 0,
    account: 0,
  });

  onSubmit(): void {
    console.warn(this.form.value);
    let rawValue = this.form.getRawValue();
    this.service.sendTransfer({
      account: rawValue.account || 0,
      value: rawValue.value || 0,
      id: uuidv4(),
      date: new Date(),
      type: 'TED'
    }).subscribe(x => console.log(x));
    this.form.reset();
  }
}
