import {Router, RouterModule} from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginComponent} from './login/login.component';
import {AuthGaurdService} from './services/index';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddWordComponent} from './add-word/add-word.component';


export const routing = RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'',component:DashboardComponent, canActivate:[AuthGaurdService]},
    {path:'add-word',component:AddWordComponent, canActivate:[AuthGaurdService]},
])