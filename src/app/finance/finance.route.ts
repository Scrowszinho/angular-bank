import { FinanceFormComponent } from './finance-form/finance-form.component';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
	imports: [
		RouterModule.forRoot([
			{path: 'finance', pathMatch: 'full', redirectTo: '/finance', children: [
                {path: '', component: FinanceListComponent},
                {path: '/add', component: FinanceFormComponent},
                {path: '/edit:id', component: FinanceFormComponent},
            ]},
            
		])
	],
	exports: [
		RouterModule
	]
})

export class FinanceRoute {}
