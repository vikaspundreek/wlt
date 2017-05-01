import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService, ConfigurationService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form;
  loading = false;
  targetUrl: string = "/";
  authenticationError = false;


  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private configurationService: ConfigurationService
  ) { }


  ngOnInit() {
    this.authenticationService.logout();
    this.targetUrl = this.route.snapshot.queryParams['originUrl'] || '/';
    this.form = new FormGroup({
      loginUserName: new FormControl(),
      loginPassword: new FormControl
    });
    //this.configurationService.load();
    //console.log(this.configurationService.configuration());
  }


  login() {
    this.loading = true;
  
    var d = this.authenticationService.login(this.form._value.loginUserName, this.form._value.loginPassword);
 
 
    d.catch(
      error => {
        this.loading = false;
        this.form.reset();
        this.authenticationError = true;
      }
      ).then(
      data => {
        this.router.navigate([this.targetUrl]);
      })
      ; 
  }


}
