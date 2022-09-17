import { Component } from '@angular/core';
import { FinanceFormComponent } from './finance/finance-form/finance-form.component';
import { FinanceListComponent } from './finance/finance-list/finance-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
}
