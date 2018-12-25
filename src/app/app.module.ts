import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
// Importando Formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RegistrarseComponent } from './login/registrarse.component';
// Modulo de Paginas
import { PaginasModule } from './paginas/paginas.module';
// Modulo de Servicio
import { ServicioModule } from './servicios/servicio.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Page404Component,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PaginasModule, // Modulo Pagina
    ServicioModule,
    FormsModule,
    ReactiveFormsModule // Para la manipulacion rapida de Validaciones en el formulario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
