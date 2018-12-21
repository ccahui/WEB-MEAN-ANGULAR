import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Principal',
      icono: 'fa fa-dashboard',
      submenu: [
        { titulo: 'tablero', url: '/tablero1' },
        { titulo: 'grafico', url: '/tablero' },
        { titulo: 'configuraciones', url: '/configuraciones' }
      ]
    }
  ];
  constructor() { }
}
