import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from '../models/LoginResponse';
import { RegisterResponse } from '../models/RegisterInfo';
import { ResetResponse } from '../models/ResetResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  login( loginDetails : any ){
    return this.http.post<loginResponse>('http://localhost:8080/api/user/login',loginDetails);
  }

  register(user : any ){
    return this.http.post<RegisterResponse>('http://localhost:8080/api/user/register',user);
  }

  reset(user: any){
    return this.http.post<ResetResponse>('http://localhost:8080/api/user/searchuser',user);
  }

  resetPassword(passwords : any){
    return this.http.post<ResetResponse>('http://localhost:8080/api/user/reset-password',passwords);
  }

  storeInLocalStorage(res:loginResponse){
    localStorage.setItem('user',JSON.stringify({
      username:res.username,
      token:res.token
    }));
  }

  deleteFromSessionStorage(){
    sessionStorage.removeItem('user');
  }

  isUserLoggedIn():boolean{
    let obj = sessionStorage.getItem('user');
    return obj?true:false;
  }

  getTokenFromStoarge():string | null{
    let obj = sessionStorage.getItem('user');
    if(obj){
      return JSON.parse(obj).token;
    }
    return null;
  }

  getUserNameFromStorage():string | null{
    let obj = sessionStorage.getItem('user');
    if(obj){
      return JSON.parse(obj).username;
    }
    return null;
  }

}
