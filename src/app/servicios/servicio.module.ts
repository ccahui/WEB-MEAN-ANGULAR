import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionesService, SharedService, SidebarService } from './servicio.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConfiguracionesService,
    SharedService,
    SidebarService
  ]
})
export class ServicioModule { }
