import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Filter, Person } from 'src/app/Interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() filter: Filter  = {
    firstname: "",
    lastname: "",
    gender: "",
    age: 0,
    major: "",
    occupation: "",
    location: ""
  };

  tableData: Person[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPeople().subscribe((people) => this.tableData = people);
    
  }

  onDelete(id: string) {
    this.apiService.deletePerson(id).subscribe((res) => {console.log(res); this.apiService.getPeople().subscribe((people) => this.tableData = people)});
  }

  callFilter(filter: Filter) {
    console.log("Filter made it to table component");
    if(!filter.firstname && !filter.lastname && !filter.gender && !filter.age && !filter.major && !filter.occupation && !filter.location) {
      return;
    }
    this.apiService.getFilteredPeople(filter).subscribe((people) => this.tableData = people);
    console.log("Filter was sent to service");
  }
  
}
