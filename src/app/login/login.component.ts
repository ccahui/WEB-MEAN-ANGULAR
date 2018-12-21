import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './default-dark.css', './bootstrap.min.css', './style.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
  ingresar() {
    console.log('Ingresando...');
    // this.router.navigate(['/tablero']);
    window.location.assign('tablero');
  }
}
