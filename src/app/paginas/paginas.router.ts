import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './tablero/tablero.component';
import { PaginasComponent } from './paginas.component';
import { Tablero1Component } from './tablero1/tablero1.component';

const routesPagina: Routes = [
  {
    path: '',
    component: PaginasComponent,
    children: [
      { path: 'tablero', component: TableroComponent },
      { path: 'tablero1', component: Tablero1Component },
      { path: '', redirectTo: '/tablero', pathMatch: 'full' },
    ]
  },
];
export const PAGINAS_ROUTER = RouterModule.forChild(routesPagina);
