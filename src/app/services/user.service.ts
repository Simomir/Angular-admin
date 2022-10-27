import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint: string = '';

  constructor(private http: HttpClient) {
    this.endpoint = `${environment.api}/users`;
  }

  all() {
    return this.http.get(this.endpoint);
  }
}
