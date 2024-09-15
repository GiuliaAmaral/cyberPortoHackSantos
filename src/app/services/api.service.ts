import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Atracagem } from '../model/atracagem.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'api/_json/porto_hoje.asp?tipo=programados2';

  constructor(private http: HttpClient) { }

  getAtracagens(): Observable<Atracagem[]> {
    return this.http.get<Atracagem[]>(this.apiUrl);
  }
}
