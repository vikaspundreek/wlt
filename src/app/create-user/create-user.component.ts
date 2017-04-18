import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../services/index';
import { LanguagesService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  form;
  languages;
  defaultPrimaryLangauge ="English";
  defaultSecondaryLangauge = "Dutch";

  constructor(
    private authenticationService: AuthenticationService,
    private laguagesService: LanguagesService
    ) { }
 
  ngOnInit() {
    this.form = new FormGroup({
      userEmail: new FormControl(),
      userPassword: new FormControl(),
      confirmPassword: new FormControl(),
      primaryLanguage: new FormControl(),
      secondaryLanguage: new FormControl()
    });
    this.laguagesService.getLanguages()
    .subscribe(data=>this.languages = data);
  }

  createUser(){

  }

}
