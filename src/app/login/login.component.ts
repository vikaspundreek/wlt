import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';

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
    private router: Router
  ) { }


  ngOnInit() {
    this.authenticationService.logout();
    this.targetUrl = this.route.snapshot.queryParams['originUrl'] || '/';
    this.form = new FormGroup({
      loginUserName: new FormControl(),
      loginPassword: new FormControl
    });
  }


  login() {
    this.loading = true;
    this.authenticationService.login(this.form._value.loginUserName, this.form._value.loginPassword)
      .subscribe(
      data => {
        this.router.navigate([this.targetUrl]);
      },
      error => {
        console.log(this.form);
        this.loading = false;
        this.form.reset();
        this.authenticationError = true;
      }
      )
  }


}
