import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    isLoggedIn = false;
    constructor(private http: Http) { }
    login(username: string, password: string) {
        return this.http.post('http://localhost:7000/login', { loginUserName: username, loginPassword: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    this._setlocalStorageData(user);
                    this.isLoggedIn = true;
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('wlt-token');
        localStorage.removeItem('wlt-username');
        localStorage.removeItem('wlt-uid');
        localStorage.removeItem('wlt-tokenExpire');
        this.isLoggedIn = false;
    }
    isLoginActive(): Boolean {
        var tokenExpire = Number(localStorage.getItem("wlt-tokenExpire"));
        this.isLoggedIn = (Date.now() < tokenExpire);
        return this.isLoggedIn;
    }
    getUserDetail() {
        var userDats;
        if (this.isLoginActive()) {
            return {
                token:localStorage.getItem('wlt-token'),
                username:localStorage.getItem('wlt-username'),
                uid:localStorage.getItem('wlt-uid')
            };
        }
    }
    private _setlocalStorageData(user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('wlt-token', user.token);
        localStorage.setItem('wlt-username', user.username);
        localStorage.setItem('wlt-uid', user.uid);
        localStorage.setItem('wlt-tokenExpire', (Date.now() + 60000).toString());
    }

}
