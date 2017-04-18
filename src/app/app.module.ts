import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './services/index';
import {LanguagesService} from './services/index';
import {AuthGaurdService} from './services/index';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [AuthenticationService, AuthGaurdService, LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
