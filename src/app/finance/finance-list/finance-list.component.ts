import { MatSnackBar } from '@angular/material/snack-bar';
import { FinanceService } from './../finance.service';
import { Component, OnInit } from '@angular/core';
import { IFinanceCredit } from 'src/app/models/finance-credit.interface';
import { FinanceStatus } from 'src/app/enums/finance-status.enum';

@Component({
  selector: 'finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {
  data: IFinanceCredit[];
  displayedColumns = [
    'actions',
    'id',
    'account',
    'value',
    'date',
    'status',
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private service : FinanceService) { }

  ngOnInit(): void {
    this.getTransfers();
  }

  getTransfers(){
    this.service.searchTransfer().subscribe((transfers) =>{
      this.data = transfers;
    })
  }

  isValid(data) : boolean{
    return data.date < new Date().toLocaleDateString();
  }

  shouldSyncStatus(data : IFinanceCredit) : void {
    if(data.status == FinanceStatus.ON_PROCESS){
      this.isValid(data.date) ? data.status = FinanceStatus.OK : data.status = FinanceStatus.ERROR;
      this.service.syncStatus(data).subscribe(
        sucess => {
          this._snackBar.open('Atualização completa', 'x');
        },
        error =>  this._snackBar.open('Opá! Alguma coisa deu errado', 'x'));
      }   
  }
}
