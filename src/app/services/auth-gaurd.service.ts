import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthenticationService } from '../services/index';

@Injectable()
export class AuthGaurdService implements CanActivate {
   constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) { }
 canActivate(){
   if(this._authenticationService.isLoginActive()){
     return true;
   }else{ 
    this._router.navigate(['login']);
    return false;
   } 
 }

}
