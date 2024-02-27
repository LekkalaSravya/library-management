import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminlogComponent } from './adminlog/adminlog.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SignupComponent,LoginComponent,UserLoginComponent,AdminlogComponent,AdminhomeComponent,FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}
