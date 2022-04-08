import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/Interfaces';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  gender: string = "";
  age: number = 0;
  major: string = "";
  occupation: string = "";
  location: string = "";


  showAdd: boolean = false;

  error: string = "";

  @Output() onAddPerson: EventEmitter<Person> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleAdd() {
    this.showAdd = !this.showAdd;
  }

  onSubmit() {

    if(!this.firstName || !this.lastName || !this.gender || !this.age || !this.major || !this.occupation || !this.location) {
      
      this.error += "All fields must be filled."
      return;
    }

    if (this.firstName.length > 20) {
      this.error += "First name must not contain more than 20 characters."
      return;
    }
    if (this.gender.length > 20) {
      this.error += "Gender must not contain more than 20 characters."
      return;
    }
    if (this.major.length > 20) {
      this.error += "Major must not contain more than 20 characters."
      return;
    }
    if (this.lastName.length > 30) {
      this.error += "Last name must not contain more than 30 characters."
      return;
    }
    if (this.occupation.length > 30) {
      this.error += "Occupation must not contain more than 30 characters."
      return;
    }
    if (this.location.length > 30) {
      this.error += "Location must not contain more than 30 characters."
      return;
    }
    

    const newPerson = {
      id: "tbd",
      first_name: this.firstName,
      last_name: this.lastName,
      gender: this.gender,
      age: this.age,
      major: this.major,
      occupation: this.occupation,
      location: this.location
    };
    console.log(newPerson);
    this.onAddPerson.emit(newPerson);
    console.log("Form submitted");

    this.firstName = "";
    this.lastName = "";
    this.gender = "";
    this.age = 0;
    this.major = "";
    this.occupation = "";
    this.location = "";
    this.error ="";

    this.toggleAdd();

    
  }

}
