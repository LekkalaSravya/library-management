import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminhomeComponent } from '../adminhome/adminhome.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-adminlog',
  standalone: true,
  imports: [CommonModule  ,FormsModule,ReactiveFormsModule,AdminhomeComponent,RouterLink,HomeComponent],
  templateUrl: './adminlog.component.html',
  styleUrl: './adminlog.component.css'
})
export class AdminlogComponent {
  errMsg:any;
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient,private router:Router) {}

  login() {
    this.http.post('http://localhost:3030/admlogin', { email: this.email, password: this.password })
      .subscribe((response: any) => {
        console.log(response.message);
        this.router.navigate(['/admhom']);
        // Handle successful login
      }, (error) => {
        console.error(error.error.message);
        // Handle login error
        this.errMsg='Wrong Credientials';
      })
  
}
}
