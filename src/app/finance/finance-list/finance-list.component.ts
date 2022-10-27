import { ITableColumn } from './../../models/table.interface';
import { FinanceService } from './../finance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {
  data: any;
  displayedColumns: ITableColumn[] = [];
  
  constructor(private service : FinanceService) { }

  ngOnInit(): void {
    this.getTransfers();
    this.listColumns();
  }

  getTransfers(){
    this.service.searchTransfer().subscribe((transfers) =>{
      this.data = transfers;
      console.log(transfers);
    })
  }

  listColumns() : void {
    this.displayedColumns = [
      {
        name: 'ID',
        dataKey: 'id',
      },
    ];
  }

}
