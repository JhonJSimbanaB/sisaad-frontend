import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private url: string = 'http://localhost:8080/api/activity';

  public findById(id: number): Observable<Activity> {
    return this.http.get<Activity>(
      this.url + '/findById/' + id,
      this.httpOptions
    );
  }

  public findAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url + '/findAll', this.httpOptions);
  }
}
