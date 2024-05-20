import { HttpClient } from '@angular/common/http';
import { Injectable , NgModule} from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get<T>(url: string, option?: Options) {
    return this.httpClient.get<T>(url, option);
  }
  post<T>(url: string, body: any, option?: Options) {
    return this.httpClient.post<T>(url, body, option);
  }
  put<T>(url: string, body: any, option?: Options) {
    return this.httpClient.put<T>(url, body, option);
  }
  delete<T>(url: string, option?: Options){
    return this.httpClient.delete<T>(url, option);
  }
}
