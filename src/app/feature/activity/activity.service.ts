import { Injectable } from '@angular/core';
import { Activity } from './activity';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/activity";

  constructor(
    private http: HttpClient
  ) { }

    //Create
    public save(activity: Activity): Observable<Activity>{
      return this.http.post<Activity>(this.url+"/save", activity, this.httpOptions);
    }

    //Read
    public findById(id: number): Observable<Activity>{
      return this.http.get<Activity>(this.url+"/"+id, this.httpOptions);
    }

    public deleteById(id: number): Observable<void>{
      console.log(id);
      return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
    }

}
