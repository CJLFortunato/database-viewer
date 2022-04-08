import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Filter, Person } from 'src/app/Interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() tableData: Person[] = [];

  @Output() onClickDelete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(id: string) {
    this.onClickDelete.emit(id);
  }
  


  
}
