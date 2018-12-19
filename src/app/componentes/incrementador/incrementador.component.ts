import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() leyenda: string;
  @Input() porcentaje: number;
  constructor() {
    this.leyenda = 'Leyenda';
    this.porcentaje = 50;
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
  }

}
