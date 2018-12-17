import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './paginas/tablero/tablero.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { PaginasComponent } from './paginas/paginas.component';
import { RegistrarseComponent } from './login/registrarse.component';

const routes: Routes = [
  
  {
    path: '',
    component: PaginasComponent,
    children: [
      { path: 'tablero', component: TableroComponent },
      { path: '', redirectTo: '/tablero', pathMatch: 'full' },
    ]
  }/*
  { path: 'login', component: LoginComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: '', redirectTo: '/tablero', pathMatch: 'full' },
  { path: '**', component: Page404Component }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
