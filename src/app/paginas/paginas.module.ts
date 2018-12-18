import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero/tablero.component';
import { Tablero1Component } from './tablero1/tablero1.component';

import { SharedModule } from '../shared/shared.module';
import { PaginasComponent } from './paginas.component';

@NgModule({
  declarations: [
    TableroComponent,
    Tablero1Component,
    PaginasComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, // Importando un Modulo que contien SideBar, BreadCrum, Navbar
  ],
  exports: [
   // Tablero1Component,
   // Tablero1Component,
   // PaginasComponent
  ]
})
export class PaginasModule { }
