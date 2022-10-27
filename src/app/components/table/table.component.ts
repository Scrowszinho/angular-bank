import { Component, Input, OnInit } from '@angular/core';
import { ITableColumn } from 'src/app/models/table.interface';

@Component({
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    
    @Input() isPageable = false;

    ngOnInit(): void {

    }

}
