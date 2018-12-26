import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';
import { UsuarioService } from '../servicios/servicio.index';
// Google API el script importado en index.html
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './default-dark.css', './bootstrap.min.css', './style.css']
})

export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean;
  // Google
  auth2: any; // Objeto de Login

  constructor(public usuarioService: UsuarioService, public router: Router) {
    this.recuerdame = false;
    this.email = '';
  }

  ngOnInit() {
    this.googleInit();

    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      this.recuerdame = true;
    } else {
      this.email = '';
      this.recuerdame = false;
    }

  }
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '274424266167-6urlvebi95c6n9v4tsm11a62140a94ei.apps.googleusercontent.com',
        cookiepolice: 'single_host_origin',
        scope: 'profile email' // Datos que deseo Obtener
      });
      this.adjuntarSignIn(document.getElementById('btnGoogle'));
    });
  }
  // Ingresar Google
  adjuntarSignIn(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      // const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      // console.log(token);
      this.usuarioService.loginGoogle(token)
        .subscribe(estado => {
          console.log(estado);
          window.location.href = '/tablero';
        });
    });
  }


  ingresar(formulario: NgForm) {

    if (formulario.invalid) {
      return;
    }

    const usuario = new Usuario(null, formulario.value.email, formulario.value.password);
    this.usuarioService.login(usuario, this.recuerdame)
      .subscribe(estado => {
        // this.router.navigate(['/tablero']); Recordad el problema de los scripts 
        window.location.href = '/tablero';

      });
  }
}
