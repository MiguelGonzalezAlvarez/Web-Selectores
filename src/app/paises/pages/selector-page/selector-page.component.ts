import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators';

import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../interfaces/paises.interface';


@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: []
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  // Array definition
  regiones: string[] = [];
  paises: Pais[] = [];
  fronteras: string[] = [];

  // Alerts definition
  cargando: boolean = false;
  noFronteras: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    // Rellenamos el array de regiones
    this.regiones = this.paisesService.regiones;

    // Rellenamos el array de paises
    this.miFormulario.get('region')?.valueChanges.pipe(
      tap(() => {
        this.miFormulario.get('pais')?.reset('');
        this.noFronteras = false;
        this.cargando = true;
      }),
      switchMap(regionSelected => this.paisesService.getPaisesPorRegion(regionSelected))
    ).subscribe(response => {
      this.paises = response;
      this.cargando = false;
    });

    // Rellenamos el array de fronteras
    this.miFormulario.get('pais')?.valueChanges.pipe(
      tap(() => {
        this.miFormulario.get('frontera')?.reset('');
        this.cargando = true;
      }),
      switchMap(paisSelected => this.paisesService.getFronterasPorCodigo(paisSelected))
    ).subscribe(response => {
      this.fronteras = response[0]?.borders || [];
      this.cargando = false;
      this.noFronteras = this.fronteras.length === 0;
    });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }

}
