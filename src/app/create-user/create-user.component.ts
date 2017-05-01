import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {  AuthenticationService, 
          LanguagesService, 
          PasswordValidator, 
          UseremailValidator
      } from '../services/index';
import { Router } from '@angular/router';
import {CreateUserService} from './create-user.service';
import { Observable } from 'rxjs/Observable';


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
  serverCreationError = false;

  constructor(
    private authenticationService: AuthenticationService,
    private laguagesService: LanguagesService,
    private fb:FormBuilder,
    private useremailValidator:UseremailValidator,
    private createUserService:CreateUserService,
    private router:Router
    ) { } 
  
  ngOnInit() {
    this.form = this.fb.group({
      userName:['Vikas', Validators.required],
      userEmail: ['',  
        Validators.required
       , this.useremailValidator.validateEmail.bind(this.useremailValidator)
        ],
      userPassword:['Password123', Validators.compose([
        Validators.required,
        PasswordValidator.complexPassword
      ])],
      confirmPassword:['Password123', Validators.required],
      primaryLanguage:['', Validators.required],
      secondaryLanguage:['', Validators.required]
    },
    {validator:PasswordValidator.confirmPasswordMatch});
    this.laguagesService.getLanguages()
    .subscribe(data=>this.languages = data); 
  }


  createUser(){
    this.createUserService.createUser(this.form)
    .map(res => res = res.json())
    .subscribe(res => {
      console.log(res.error);
      if(res.error){
        this.serverCreationError = true;
      }else { 
        this.router.navigate(["/login"]);
      }
    });
  }

}
