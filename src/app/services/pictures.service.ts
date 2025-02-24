import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  private apiUrl = 'https://picsum.photos/v2/list?limit=10';

  constructor(private http: HttpClient) { }

  getRandomPictures(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}