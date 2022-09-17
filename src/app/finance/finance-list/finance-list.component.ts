import { FinanceService } from './../finance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {

  constructor(private service : FinanceService) { }

  ngOnInit(): void {

  }

  getTransfers(){
    this.service.searchTransfer().subscribe((transfers) =>{
      return transfers;
    })
  }

}
