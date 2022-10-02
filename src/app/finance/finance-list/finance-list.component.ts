import { FinanceService } from './../finance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {
  data: any;
  displayedColumns = [
    'id',
    'account',
    'value',
    'date',
    'status'
  ];
  constructor(private service : FinanceService) { }

  ngOnInit(): void {
    this.getTransfers();
    console.log(this.data);

  }

  getTransfers(){
    this.service.searchTransfer().subscribe((transfers) =>{
      this.data = transfers;
    })
  }

}
