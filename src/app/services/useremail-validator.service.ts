import { Injectable } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()
export class UseremailValidator {
    constructor(private http:Http){
    }
    validateEmail(control:FormControl) {
        return this.http.post('http://localhost:7000/checkEmail', { userEmail: control.value})
        .map((response: Response) => {
            if(response.text() === "available"){
                return null;
            } else { 
                return { validateEmail: true };
            }
        });
    }
}