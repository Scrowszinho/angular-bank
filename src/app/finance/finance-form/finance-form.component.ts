import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss']
})
export class FinanceFormComponent {

  public form : FormGroup;

  constructor(
    private formBuilder : FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      value: '',
      account: ''
    })
  }

  teste(){
    let formData = this.form.getRawValue();
    console.log('teste', formData);

  }

}

