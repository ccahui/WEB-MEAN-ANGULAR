import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTER } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { SharedModule } from './shared/shared.module'; // alt + arriba


import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
// import { TableroComponent } from './paginas/tablero/tablero.component';
// import { PaginasComponent } from './paginas/paginas.component';
import { RegistrarseComponent } from './login/registrarse.component';
import { PaginasModule } from './paginas/paginas.module';
// import { Tablero1Component } from './paginas/tablero1/tablero1.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbComponent,
    LoginComponent,
    Page404Component,
   // TableroComponent,
   // PaginasComponent,
    RegistrarseComponent,
   // Tablero1Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTER,
    PaginasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
