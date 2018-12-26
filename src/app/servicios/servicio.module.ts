import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionesService, SharedService, SidebarService, UsuarioService, LoginGuard } from './servicio.index';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ConfiguracionesService,
    SharedService,
    SidebarService,
    UsuarioService,
    LoginGuard
  ]
})
export class ServicioModule { }
