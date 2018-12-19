import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
// Import de un form lo realizamos en el modulo que lo contiene
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string;
  @Input() porcentaje: number;
  @Output() cambioPorcentaje: EventEmitter<number>; // Este debe ser importado de @angular/core
  @ViewChild('txtPorcentaje') txtProgreso: any;
  constructor() {
    this.leyenda = 'Leyenda';
    this.porcentaje = 50;
    this.cambioPorcentaje = new EventEmitter();
  }
  ngOnInit() {
  }
  cambiarPorcentaje(porcentaje: number) {
    if (this.porcentaje >= 100 && porcentaje > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && porcentaje < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + porcentaje;
    this.cambioPorcentaje.emit(this.porcentaje); // Este evento emitira un mensaje a los componentes que lo contengan
  }
  eventoInput(valor: number) {

    // let inputHtml: any;
    // inputHtml = document.getElementsByName('porcentaje')[0];

    if (valor >= 100) {
      this.porcentaje = 100;
    } else if (valor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
    }
    // inputHtml.value = this.porcentaje;
    this.txtProgreso.nativeElement.value = this.porcentaje;
    this.cambioPorcentaje.emit(this.porcentaje);
  }
}
