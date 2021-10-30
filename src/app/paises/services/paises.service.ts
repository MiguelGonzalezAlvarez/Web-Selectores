import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
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
    return this.http.get<Pais[]>(`${this.baseUrl}/region/${region}?fields=name,cca3`);
  }

  getPaisesPorCodigo(codigo: string): Observable<Pais | null> {
    if (!codigo) {
      return of(null);
    }
    return this.http.get<Pais>(`${this.baseUrl}/alpha/${codigo}?fields=borders`);
  }

  getFronteraPorCodigo(codigo: string): Observable<Pais> {
    return this.http.get<Pais>(`${this.baseUrl}/alpha/${codigo}?fields=name,cca3`);
  }

  getFronteras(codigosFronteras: string[]): Observable<Pais[]> {

    if (!codigosFronteras) {
      return of([]);
    }

    const peticiones: Observable<Pais>[] = [];

    codigosFronteras.forEach(codigoFrontera => {
      const peticion = this.getFronteraPorCodigo(codigoFrontera);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }

}
