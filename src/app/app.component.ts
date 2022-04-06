import { Component } from '@angular/core';
import { Filter } from './Interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fun-with-databases';

    filter: Filter  = {
    firstname: "",
    lastname: "",
    gender: "",
    age: 0,
    major: "",
    occupation: "",
    location: ""
  };

  makeFilter(filter: Filter) {

    this.filter = filter;
    console.log("Filter saved in app component");
  }
}
