import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint)
  }
}
