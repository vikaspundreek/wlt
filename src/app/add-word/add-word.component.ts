import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  AuthenticationService,
  LanguagesService
} from '../services/index';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {
  form;
  languages;
  defaultPrimaryLangauge = "English";
  defaultSecondaryLangauge = "Dutch";

  constructor(
    private laguagesService: LanguagesService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      primaryLanguage:['', Validators.required],
      secondaryLanguage:['', Validators.required],
      primaryWord:['', Validators.required]
    });
    this.laguagesService.getLanguages()
    .subscribe(data=>this.languages = data); 
  }

}
