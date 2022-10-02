import { IFinanceCredit } from '../models/finance-credit.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FinanceStatus } from '../enums/finance-status.enum';
@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpClient: HttpClient) { }
   apiUrl = environment.apiUrl + '/transfers';

  searchTransfer() : Observable<IFinanceCredit[]>{
    return this.httpClient.get<IFinanceCredit[]>(this.apiUrl);
  }

  sendTransfer(data : IFinanceCredit){
    return this.httpClient.post<IFinanceCredit>(this.apiUrl, data)
  }

  getStatusColor(status : FinanceStatus){
		let color, bkColor;
		 if (status == FinanceStatus.ON_PROCESS) {
			color = 'black';
			bkColor = '#FDD835';
		} else if (status == FinanceStatus.OK) {
			color = 'white';
			bkColor = '#1B5E20';
		} else if (status == FinanceStatus.ERROR) {
			color = 'white';
			bkColor = '#d32f2f';
		} else if (status == FinanceStatus.CANCELED) {
			color = 'white';
			bkColor = '#d32f2f';
		}

    return {
			'color': color,
			'background-color': bkColor,
			'font-weight': 'bold',
		};
  }


}
