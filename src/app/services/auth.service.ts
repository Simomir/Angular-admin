import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  register(data: any): Observable<User> {
    return this.http.post<User>(`${environment.api}/register`, data)
  }

  login(data: any): Observable<any> {
    return this.http.post(`${environment.api}/login`, data, {withCredentials: true})
  }

  user(): Observable<User> {
    return this.http.get<User>(`${environment.api}/user`, {withCredentials: true});
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.api}/logout`, {}, {withCredentials: true});
  }
}
