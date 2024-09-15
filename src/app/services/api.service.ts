import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NaviosProgramados } from '../model/navios-programados.model';
import { NaviosCategorias } from '../model/navios-categorias.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  static readonly apiUrl = environment.baseUrlApi+'/_json/porto_hoje.asp?';
  private apiUrlGemini = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=AIzaSyBNV7q-XSbErqGORB--d9Ypx39dJT7mc2w';

  constructor(private http: HttpClient) { }

  getNaviosProgramados(): Observable<NaviosProgramados[]> {
    return this.http.get<NaviosProgramados[]>(ApiService.apiUrl + 'tipo=programados2');
  }

  getNaviosCategorias(): Observable<NaviosCategorias[]> {
    return this.http.get<NaviosCategorias[]>(ApiService.apiUrl + 'tipo=resumo');
  }

  enviarDadosParaGemini(message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      "contents": [
        {
          "role": "user",
          "parts": [
            {
              "text": message
            }
          ]
        }
      ],
      "generationConfig": {
        "temperature": 1,
        "topK": 1,
        "topP": 1,
        "maxOutputTokens": 500192,
        "stopSequences": []
      },
      "safetySettings": [
        {
          "category": "HARM_CATEGORY_HARASSMENT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_HATE_SPEECH",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
          "threshold": "BLOCK_MEDIUM_AND_ABOVE"
        }
      ]
    }

    return this.http.post(this.apiUrlGemini, body, { headers });
  }
}
