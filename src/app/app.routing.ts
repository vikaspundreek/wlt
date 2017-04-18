import {Router, RouterModule} from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {AuthGaurdService} from './services/index';
import {DashboardComponent} from './dashboard/dashboard.component';


export const routing = RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',component:DashboardComponent, canActivate:[AuthGaurdService]},
    {path:'create-user',component:CreateUserComponent}
])