import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

    private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/category";

  public save(category: Category): Observable<Category>{
    return this.http.post<Category>(this.url+"/save", category, this.httpOptions);
  }

  public findById(id: number): Observable<Category>{
    return this.http.get<Category>(this.url+"/"+id, this.httpOptions);
  }

  public deleteById(id: number): Observable<Category>{
    return this.http.delete<Category>(this.url+"/deleteById/"+id, this.httpOptions);
  }

}
