import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Person, Filter } from '../Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200/'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  deletePerson(id: string): Observable<Person>{
    const url= `${this.apiUrl}/${id}`;

    return this.http.delete<Person>(url);
  }

  getFilteredPeople(filter: Filter) {
    let urlQuery = this.apiUrl + '/?';

    if(filter.firstname) {
      urlQuery += `first_name=${filter.firstname}`;
    }
    if(filter.lastname) {
      urlQuery += `first_name=${filter.lastname}`;
    }
    if(filter.gender) {
      urlQuery += `first_name=${filter.gender}`;
    }
    if(filter.age) {
      urlQuery += `first_name=${filter.age}`;
    }
    if(filter.major) {
      urlQuery += `first_name=${filter.major}`;
    }
    if(filter.occupation) {
      urlQuery += `first_name=${filter.occupation}`;
    }
    if(filter.location) {
      urlQuery += `first_name=${filter.location}`;
    }

    return this.http.get<Person[]>(urlQuery);

  }
}
