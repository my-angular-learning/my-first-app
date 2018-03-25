import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getBooks() {
    return this.http.get('http://localhost:8080/api/book/all');
  }
}
