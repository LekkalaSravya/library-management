import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  cUrl="http://localhost:3030/signup";
  apiUrl="http://localhost:3030/user";
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
