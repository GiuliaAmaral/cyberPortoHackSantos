import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NaviosProgramados } from '../model/navios-programados.model';
import { NaviosCategorias } from '../model/navios-categorias.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  static readonly apiUrl = environment.baseUrlApi+'/_json/porto_hoje.asp?';

  constructor(private http: HttpClient) { }

  getNaviosProgramados(): Observable<NaviosProgramados[]> {
    return this.http.get<NaviosProgramados[]>(ApiService.apiUrl + 'tipo=programados2');
  }

  getNaviosCategorias(): Observable<NaviosCategorias[]> {
    return this.http.get<NaviosCategorias[]>(ApiService.apiUrl + 'tipo=resumo');
  }
}
