import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/register-user';
import { Observable } from 'rxjs';
const API_BASE_URL="http://localhost:7221/api/account/";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }
  public PostRegister(registerUser:RegisterUser):Observable<RegisterUser>{
    return this.httpClient.post<RegisterUser>(`${API_BASE_URL}register`,registerUser);
  }

}
