import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pais } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private _regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(
    private http: HttpClient
  ) { }

  getPaisesPorRegion(region: string): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${region}`);
  }

  getFronterasPorCodigo(codigo: string): Observable<Pais[]> {
    if(!codigo) {
      return of([]);
    }
    return this.http.get<Pais[]>(`${this.baseUrl}/alpha/${codigo}`);
  }

}
