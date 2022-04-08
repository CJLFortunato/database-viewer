import { Component, Input } from '@angular/core';
import { Filter, Person } from 'src/app/Interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-databases';

  data: Person[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    
    this.apiService.getPeople().subscribe((people) => this.data = people);
    
   
  }

  clearFilter() {
    this.apiService.getPeople().subscribe((people) => this.data = people);

  }

  onDelete(id: string) {
    this.apiService.deletePerson(id).subscribe((res) => {console.log(res); this.apiService.getPeople().subscribe((people) => this.data = people)});
  }

  addPerson(person: Person) {

    this.apiService.addPerson(person).subscribe(() => this.apiService.getPeople().subscribe((people) => this.data = people));

  }

  onEdit(person: Person) {
    this.apiService.editPerson(person).subscribe(() => this.apiService.getPeople().subscribe((people) => this.data = people));
  }

  getFilteredData(filter: Filter) {
    this.apiService.getFilteredData(filter).subscribe((people) => this.data = people);
  }
}
