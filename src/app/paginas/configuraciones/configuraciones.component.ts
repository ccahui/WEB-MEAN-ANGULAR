import { Component, OnInit } from '@angular/core';
import { ConfiguracionesService } from 'src/app/servicios/configuraciones.service';
@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.component.html',
  styleUrls: ['./configuraciones.component.css']
})
export class ConfiguracionesComponent implements OnInit {

  constructor(private configuracion: ConfiguracionesService) {
   }

  ngOnInit() {
  }
  actualizarTema(newTema: string) {
    // id : Tema es un elemto de index.html el contenedor Principal
    const classTema = `skin-${newTema}`;
    this.configuracion.aplicarAjustes(newTema, classTema);
    this.configuracion.guardarAjustes();
  }
}
