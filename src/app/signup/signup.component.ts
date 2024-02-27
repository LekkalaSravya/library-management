import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,Validators,FormGroup,FormControl} from '@angular/forms';
import { ApiserviceService } from '../shared/apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  errMsg:any;
  successMsg:any;
   constructor(private api:ApiserviceService,private router:Router){}
   userForm = new FormGroup({
    'name': new FormControl('',Validators.required),
     
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
     
   })
   userSubmit(){
    // console.log(this.userForm.value);
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'Data Added Success');
        this.userForm.reset();
        this.successMsg=res.message;
        this.router.navigate(['/login']);
      });
    }
    else{
      this.errMsg='All Fields Are Required';
    }
}
}
