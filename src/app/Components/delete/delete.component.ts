import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/Interfaces';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


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
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDelete() {
    this.showdelete = !this.showdelete;
  }

  onClickDelete(id: string) {
    this.onDeletePerson.emit(id);
  }

}
