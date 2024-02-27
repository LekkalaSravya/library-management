import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'uslo',component:UserLoginComponent},
    {path:'admin',component:AdminlogComponent},
    {path:'admhom',component:AdminhomeComponent}
];
