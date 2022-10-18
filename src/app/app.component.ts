import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceFormComponent } from './finance/finance-form/finance-form.component';
import { FinanceListComponent } from './finance/finance-list/finance-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private route: Router,
  ) {}

  nav(tab : number) : void{
    if(tab == 1){
      this.route.navigate(['finance/add']);
      debugger;
    }
    this.route.navigate(['finance']);
  }

}
