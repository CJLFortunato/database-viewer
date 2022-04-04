import { Component, OnInit } from '@angular/core';
import { data, Person } from './testData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableData: Person[] = data;

  constructor() { }

  ngOnInit(): void {
  }

}
