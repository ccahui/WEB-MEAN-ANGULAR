import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }
  actualizarTema(newTema: string) {
    // id : Tema es un elemto de index.html el contenedor Principal
    const classTema = `skin-${newTema}`;
    this.document.getElementById('tema').setAttribute('class', classTema);


  }
}
