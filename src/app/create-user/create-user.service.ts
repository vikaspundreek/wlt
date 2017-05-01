import { Injectable } from '@angular/core';
import {FormGroup } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CreateUserService {
  constructor(private http: Http) { }
  createUser(form:FormGroup) {
        return this.http.post('http://localhost:7000/users', form.value);
    }

}
 
 