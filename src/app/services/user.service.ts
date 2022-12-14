import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.api}/ambassadors`;
  }

  all(): Observable<User[]> {
    return this.http.get<User[]>(this.endpoint);
  }
}
