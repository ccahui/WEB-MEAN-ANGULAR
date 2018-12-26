import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario.model';
import { UsuarioService } from '../servicios/servicio.index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './default-dark.css', './bootstrap.min.css', './style.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame: boolean;

  constructor(public usuarioService: UsuarioService, public router: Router) {
    this.recuerdame = false;
    this.email = '';
  }

  ngOnInit() {

    if (localStorage.getItem('email')) {
      this.email = localStorage.getItem('email');
      this.recuerdame = true;
    } else {
      this.email = '';
      this.recuerdame = false;
    }

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
