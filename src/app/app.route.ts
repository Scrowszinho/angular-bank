import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({
	imports: [
		RouterModule.forRoot([
			{path: '', pathMatch: 'full', redirectTo: '/home'},
            {path: 'home', component: HomeComponent},
			{path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)},
		])
	],
	exports: [
		RouterModule
	]
})

export class AppRoute {}
