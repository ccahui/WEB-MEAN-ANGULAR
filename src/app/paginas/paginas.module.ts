import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableroComponent } from './tablero/tablero.component';
import { Tablero1Component } from './tablero1/tablero1.component';

import { SharedModule } from '../shared/shared.module';
import { PaginasComponent } from './paginas.component';
import { PAGINAS_ROUTER } from './paginas.router';
import { FormsModule} from '@angular/forms';
 import { IncrementadorComponent } from '../componentes/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../componentes/grafico-dona/grafico-dona.component';
// Grafica
import { ChartsModule } from 'ng2-charts';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
@NgModule({
  declarations: [
    TableroComponent,
    Tablero1Component,
    PaginasComponent,
    IncrementadorComponent,  // NO SE IMPORTA se DECLARA para poder usarlo dentro de este modulo
    GraficoDonaComponent, ConfiguracionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule, // Importando un Modulo que contien SideBar, BreadCrum, Navbar
    PAGINAS_ROUTER,
    FormsModule,
    ChartsModule
  ],
  exports: [
  Tablero1Component,  // No lo exporto porque estas componenetes no van a ser utilizadas
  Tablero1Component,  // Las componentes no son llamada directamente en otros Modulos
  PaginasComponent,
  // IncrementadorComponent
  ]
})
export class PaginasModule { }
