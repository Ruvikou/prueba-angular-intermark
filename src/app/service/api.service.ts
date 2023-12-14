import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserResponse } from '../models/userResponse.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private api_url = environment.API_URL;
  private api_url_user = environment.API_URL_USER;

  constructor(private http: HttpClient) { }

  public getData(name: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.api_url}?q=${name}`);
  }

  public getUserData(name: string): Observable<User> {
    return this.http.get<User>(`${this.api_url_user}/${name}`);
  }
}
