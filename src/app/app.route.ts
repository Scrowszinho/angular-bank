import { FinanceListComponent } from './finance/finance-list/finance-list.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{path: '', pathMatch: 'full', redirectTo: '/home'},
            {path: 'home', component: FinanceListComponent},
			{path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)},
		])
	],
	exports: [
		RouterModule
	]
})

export class AppRoute {}
