import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/servicios/servicio.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarServicio: SidebarService) {
   }

  ngOnInit() {
  }

}
