import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private _router: Router,
    private _authenticationService: AuthenticationService
    ) { }
  ngOnInit() { 
  }

  onClickLogut(){
    this._authenticationService.logout();
    this._router.navigate(['login']);
  }

}