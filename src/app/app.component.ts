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

  @Input() filter = {};

  data: Person[] = [];

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    console.log("Putting a ngOnInit in the app component works!");
    this.apiService.getPeople().subscribe((people) => this.data = people);
    
  }
  makeFilter(filter: Filter | {}) {

    this.filter = filter;
    console.log("Filter saved in app component");
    console.log(filter);
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
}
