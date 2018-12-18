import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './paginas/tablero/tablero.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PaginasComponent } from './paginas/paginas.component';
import { RegistrarseComponent } from './login/registrarse.component';
import { Tablero1Component } from './paginas/tablero1/tablero1.component';
import { PAGINAS_ROUTER } from './paginas/paginas.router';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/tablero', pathMatch: 'full' },
  { path: '**', component: Page404Component }
];

export const APP_ROUTER = RouterModule.forRoot(routes);
