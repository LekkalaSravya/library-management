import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,Validators,FormGroup,FormControl} from '@angular/forms';
import { ApiserviceService } from '../shared/apiservice.service';
import { Router, RouterLink } from '@angular/router';
import { UserLoginComponent } from '../user-login/user-login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,CommonModule ,FormsModule ,UserLoginComponent ,RouterLink,SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errMsg:any;
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  login() {
    this.http.post('http://localhost:3030/login', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response.message);
        this.router.navigate(['/uslo']);
        // Handle successful login
      }, (error) => {
        console.error(error.error.message);
        // Handle login error
        this.errMsg='Wrong Credientials';
      })
  
}
}
