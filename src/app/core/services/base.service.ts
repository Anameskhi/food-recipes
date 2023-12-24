import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class BaseService {
  BASE_PATH = environment.apiUrl

  constructor(private http: HttpClient) { }

  get<T>(url: string): Observable<T>{
    return this.http.get<T>(this.BASE_PATH + url)
  }

  post<T>(url: string, body: any ): Observable<T>{
    return this.http.post<T>(this.BASE_PATH + url, body)
  }

  delete<T>(url: string): Observable<T>{
    return this.http.delete<T>(this.BASE_PATH + url)
  }
}
