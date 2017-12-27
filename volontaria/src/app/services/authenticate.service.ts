import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class AuthenticateService {

  token: string;
  private serverUrl = 'https://my-json-server.typicode.com/volontaria/mock-api/authenticate';

  constructor(private http: HttpClient) {

  }

  authenticate(username: string, password: string): Observable<string> {
    const body = {
      login: username,
      password: password
    };
    const obs = new Subject<string>();
    this.http.post<object>(this.serverUrl, body).subscribe(data => {
      this.token = data['token'];
      obs.next(this.token);
    });
    return obs;
  }
  isConnected(): boolean {
    if (this.token) {
      return true;
    }
  }
  isAdmin(): boolean {
    return true;
  }
}
