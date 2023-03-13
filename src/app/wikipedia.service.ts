import { Injectable } from '@angular/core';
import { Palabra } from './palabra';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WikipediaService {
  constructor(
    private http: HttpClient) {
  }

  getLista(url: string): Observable<Palabra[]> {
    return this.http.get<Palabra[]>(url)
  }

}