import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule ,FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,HomeComponent,RouterLink],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css'
})
export class AdminhomeComponent {
  errMsg:any;
  successMsg:any;
  successMsg1:any;
  constructor(private api:AuthService){}
  userForm = new FormGroup({
     
    'title': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'subject': new FormControl('',Validators.required),
    'year': new FormControl('',[Validators.required   ]),
    'bookcopy': new FormControl('',Validators.required),
    'image': new FormControl('',Validators.required)
     
  })
  userSubmit(){
    // console.log(this.userForm.value);
    if(this.userForm.valid){
      console.log(this.userForm.value);
      this.api.createData(this.userForm.value).subscribe((res)=>{
        console.log(res,'Data Added Success');
        this.userForm.reset();
        this.successMsg=res.message;
      });
    }
    else{
      this.errMsg='All Fields Are Required';
    }
}
readUser:any;
 
ngOnInit():void{
  this.getAlldata();
}
deleteId(id:any){
  this.api.deleteData(id).subscribe((res)=>{
    console.log(res,'deleted Id No');
    this.successMsg1=res.message;
    this.getAlldata();
  })
}
getAlldata(){
  this.api.getAllUser().subscribe((res)=>{
    console.log('Get All Data ',res);
    this.readUser=res.data;
  })
}
year1:any;
verifyear(){
  const l=2024;
  if(this.year1 >l){
     alert('Invalid Year');
     this.year1='';
  }
}
 
}
