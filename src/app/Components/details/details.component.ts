import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/Interfaces';
import { faTimes, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  faTimes = faTimes;
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() person: Person = {
    id: "",
    first_name: '',
    last_name: '',
    gender: '',
    age: 0,
    major: '',
    occupation: '',
    location: ''
};

  showdetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showdetails = !this.showdetails;
  }

}
