import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Practica} from './Practica';
import { Observable } from 'rxjs';
import{PracticaDetail} from './PracticaDetail';

@Injectable({
  providedIn: 'root'
})
export class ListarPracticaService {
private apiUrl = environment.baseUrl ;
constructor(private http: HttpClient) { }

getPracticas(): Observable<PracticaDetail[]> {
  return this.http.get<PracticaDetail[]>(this.apiUrl);
}
}
