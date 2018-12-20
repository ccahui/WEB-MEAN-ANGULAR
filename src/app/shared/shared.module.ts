import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent, // Exporto estos componenetes porque va a ser utilizados
    HeaderComponent,  // En este caso en Modulo Paginas, donde utilizo, header, Breadcrumb,Sidebar
    SidebarComponent
  ]
})
export class SharedModule { }
