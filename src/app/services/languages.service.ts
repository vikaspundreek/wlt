import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LanguagesService {
  constructor(private http: Http) { }
  getLanguages(){
    return this.http.get('http://localhost:7000/languages')
    .map(res=>res.json().message);
  }
}