import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Person } from 'src/app/Interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  

  tableData: Person[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPeople().subscribe((people) => this.tableData = people);
    
  }

  onDelete(id: string) {
    this.apiService.deletePerson(id).subscribe((res) => {console.log(res); this.apiService.getPeople().subscribe((people) => this.tableData = people)});
  }
  
}
