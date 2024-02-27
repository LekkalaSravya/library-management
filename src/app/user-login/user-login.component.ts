import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule ,FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { FilterPipe } from '../filter.pipe';
import { HomeComponent } from '../home/home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [ CommonModule,FilterPipe,FormsModule,HomeComponent,RouterLink],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  errMsg:any;
  successMsg:any;
  successMsg1:any;
  searchText:any;
  constructor(private api:AuthService){}
  userForm = new FormGroup({
     
    'title': new FormControl('',Validators.required),
    'author': new FormControl('',Validators.required),
    'subject': new FormControl('',Validators.required),
    'year': new FormControl('',Validators.required ),
    'bookcopy': new FormControl('',Validators.required),
    'image': new FormControl('',Validators.required)
     
  })
   
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
}
