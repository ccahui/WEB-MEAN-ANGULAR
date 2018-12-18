import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero1',
  templateUrl: './tablero1.component.html',
  styleUrls: ['./tablero1.component.css']
})
export class Tablero1Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  porcentaje: number = 50;
  constructor() { }

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
  }

}
