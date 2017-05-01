import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    isLoggedIn = false;
    constructor(private http: Http) { }
    login(username: string, password: string) {
         return new Promise((resolve, reject) => {
            this.http.post('http://localhost:7000/login', { loginUserName: username, loginPassword: password })
                .subscribe( (res) => {
                    let user = res.json();
                    if (user && user.token) {
                        let headers = new Headers( {
                            'Authorization': "Bearer " + user.token
                        });
                        let requestOptions = new RequestOptions({ 'headers': headers});
                        let userInfoReuest = this.http.post('http://localhost:7000/getUserInfo', {"accessToken":user.token}, requestOptions)
                        .map(res => res = res.json())
                        .subscribe(res => {
                            if(!res.error){
                                    this._setlocalStorageData( user.token, res.data);
                                    this.isLoggedIn = true;
                                    resolve(true);
                            }else{ 
                                reject(false);
                            }
                        }); 
                    }
            },
            err =>{
                console.log(err);
                reject(false);
            }) 
         })
         
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('wlt-token');
        localStorage.removeItem('wlt-uid'); 
        localStorage.removeItem('wlt-userName'); 
        localStorage.removeItem('wlt-userEmail'); 
        localStorage.removeItem('wlt-secondaryLanguage'); 
        localStorage.removeItem('wlt-primaryLanguage'); 
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
                uid:localStorage.getItem('wlt-uid'),
                userName:localStorage.getItem('wlt-userName'),
                userEmail:localStorage.getItem('wlt-userEmail'),
                secondaryLanguage:localStorage.getItem('wlt-secondaryLanguage'),
                primaryLanguage:localStorage.getItem('wlt-primaryLanguage')
            };
        }
    }
    private _setlocalStorageData(token, user) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log(user);
        localStorage.setItem('wlt-token', token);
        localStorage.setItem('wlt-uid', user.uid);
        localStorage.setItem('wlt-userName', user.userName);
        localStorage.setItem('wlt-userEmail', user.userEmail);
        localStorage.setItem('wlt-secondaryLanguage', user.secondaryLanguage);
        localStorage.setItem('wlt-primaryLanguage', user.primaryLanguage);
        localStorage.setItem('wlt-tokenExpire', (Date.now() + 60000).toString());
    }

}
