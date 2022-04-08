import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Person } from 'src/app/Interfaces';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  firstName: string = this.person.first_name;
  lastName: string = this.person.last_name;
  gender: string = this.person.gender;
  age: number = this.person.age;
  major: string = this.person.major;
  occupation: string = this.person.occupation;
  location: string = this.person.location;


  showEdit: boolean = false;

  error: string = "";

  @Output() onEditPerson: EventEmitter<Person> = new EventEmitter();


  toggleAdd() {
    this.showEdit = !this.showEdit;
  }

  onSubmit() {

    if(!this.firstName || !this.lastName || !this.gender || !this.age || !this.major || !this.occupation || !this.location) {
      
      this.error = "All fields must be filled."
      return;
    }

    const editedPerson = {
      id: this.person.id,
      first_name: this.firstName,
      last_name: this.lastName,
      gender: this.gender,
      age: this.age,
      major: this.major,
      occupation: this.occupation,
      location: this.location
    };
    console.log(editedPerson);
    this.onEditPerson.emit(editedPerson);
    console.log("Form submitted");

    this.toggleAdd();

    
  }

}
