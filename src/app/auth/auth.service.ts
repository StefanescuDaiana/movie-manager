import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {

  }

  public logIn(email:string, password:string) {
    let body = {
      "email": email,
      "password": password
    }

    return  this.httpClient.post(`${environment.apiUrl}/api/auth/login`, body);
  }

  public register(email:string, password:string, reTypePassword:string) {
    let body = {
      "email": email,
      "password": password,
      "retypePassword": reTypePassword
    }
    return  this.httpClient.post(`${environment.apiUrl}/api/auth/register`, body);
  }


}
