import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero1',
  templateUrl: './tablero1.component.html',
  styleUrls: ['./tablero1.component.css']
})
export class Tablero1Component implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  porcentaje: number;
  constructor() {
    this.porcentaje = 50;
  }

  ngOnInit() {
  }

}
