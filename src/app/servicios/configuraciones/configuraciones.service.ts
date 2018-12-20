import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {
  ajustes: Ajustes = {
    temaClase: 'skin-blue',
    tema: 'blue'
  };
  constructor(@Inject(DOCUMENT) private document) {
    this.cargarAjustes();
  }
  cargarAjustes() {
    // Castea el string en una Objeto tipo JSON
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
    }
    this.aplicarAjustes(this.ajustes.tema, this.ajustes.temaClase);
  }
  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }
  aplicarAjustes(tema: string, classTema: string) {

    this.ajustes.tema = tema;
    this.ajustes.temaClase = classTema;
    this.document.getElementById('tema').setAttribute('class', classTema);

  }
}

interface Ajustes {
  temaClase: string;
  tema: string;
}
