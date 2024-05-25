import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  cUrl="https://library-backend-1-4g5r.onrender.com/signup";
  apiUrl="https://library-backend-1-4g5r.onrender.com/user";
  constructor(private http:HttpClient) { }
  createData(data:any):Observable<any>{
    console.log(data,'Data Created');
    return this.http.post(`${this.cUrl}`,data);
  }
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
}
checkData(password:any):Observable<any>{
  let ids=password;
  return this.http.get(`${this.apiUrl}/${ids}`);
  
}
}
