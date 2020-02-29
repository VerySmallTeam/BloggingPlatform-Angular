import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})

export class LiveScrollingService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPosts(part: number): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl + 'home/' + '?partNumber=' + part);
  }

}

