import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';
import { PaginasComponent } from './paginas.component';
import { Tablero1Component } from './tablero1/tablero1.component';
import { ConfiguracionesComponent } from './configuraciones/configuraciones.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../servicios/servicio.index';

// Guards para evitar acceso a usuarios no logeados
const routesPagina: Routes = [
  {
    path: '',
    component: PaginasComponent,
    canActivate: [ LoginGuard ],
    children: [
      { path: 'tablero', component: TableroComponent, data: { titulo: 'Gráficas' } },
      { path: 'tablero1', component: Tablero1Component, data: { titulo: 'Tablero' } },
      { path: 'configuraciones', component: ConfiguracionesComponent, data: { titulo: 'Configuraciones de Tema' } },
      { path: 'promesas', component: PromesaComponent, data: { titulo: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'Rxjs' } },
      { path: '', redirectTo: '/tablero', pathMatch: 'full' },
    ]
  },
];
export const PAGINAS_ROUTER = RouterModule.forChild(routesPagina);
