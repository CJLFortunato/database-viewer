import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Person, Filter } from '../Interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://localhost:4200/',
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = `/people`;

  private DATA: Person[] = [];

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    
    return this.http.get<Person[]>(this.apiUrl);
  }

  deletePerson(id: string): Observable<Person>{
    const url= `${this.apiUrl}/${id}`;

    return this.http.delete<Person>(url);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person, httpOptions);
  }
  
  editPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(this.apiUrl, person, httpOptions);
  }

  getFilteredData(filter:Filter) {
    const url= `${this.apiUrl}/filter`;
    return this.http.post<Person[]>(url, filter, httpOptions);

  }
  
}
