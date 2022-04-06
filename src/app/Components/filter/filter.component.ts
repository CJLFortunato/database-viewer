import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../Interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  gender: string = "";
  age: number = 0;
  major: string = "";
  occupation: string = "";
  location: string = "";

  @Output() onApplyFilter: EventEmitter<Filter | {}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    if(!this.firstName && !this.lastName && !this.gender && !this.age && !this.major && !this.occupation && !this.location) {
      return;
    }

    const filterParams = {
      firstname: this.firstName,
      lastname: this.lastName,
      gender: this.gender,
      age: this.age,
      major: this.major,
      occupation: this.occupation,
      location: this.location
    };

    this.onApplyFilter.emit(filterParams);

    this.firstName = "";
    this.lastName = "";
    this.gender = "";
    this.age = 0;
    this.major = "";
    this.occupation = "";
    this.location = "";

    
  }

  

}
