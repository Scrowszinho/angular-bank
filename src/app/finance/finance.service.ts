import { IFinanceForm } from './../models/FinanceFormModule';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private httpClient: HttpClient) { }
   apiUrl = environment.apiUrl + '/transfers';

  searchTransfer() : Observable<IFinanceForm[]>{
    return this.httpClient.get<IFinanceForm[]>(this.apiUrl);
  }

  sendTransfer(data : IFinanceForm){

    return this.httpClient.post<IFinanceForm>(this.apiUrl, data)
  }



}
