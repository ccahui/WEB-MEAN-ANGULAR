import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'; // Importando Plugin para mensajes

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./login.component.css', './default-dark.css', './bootstrap.min.css', './style.css']
})
export class RegistrarseComponent implements OnInit {

  constructor() {
    swal('Importante', 'Debe de aceptar las condiciones', 'warning');
  }

  ngOnInit() {
  }

}
