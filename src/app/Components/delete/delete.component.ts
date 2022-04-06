import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Interfaces';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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
  @Output() onDeletePerson:EventEmitter<string> = new EventEmitter();

  showdelete: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDelete() {
    this.showdelete = !this.showdelete;
    console.log('click');
  }

  onClickDelete(id: string) {
    this.onDeletePerson.emit(id);
  }

}