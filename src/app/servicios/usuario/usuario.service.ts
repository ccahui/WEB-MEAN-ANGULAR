import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from 'src/app/configuraciones/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: string;
  token: string;
  constructor(public http: HttpClient) {
    this.cargarStorage();
  }


  estaLogueado() {
    // this.cargarStorage();
    if (this.token) {
      return true;
    }
    return false;
  }
  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = localStorage.getItem('usuario');
    } else {
      this.token = null;
      this.usuario = null;
    }
  }
  guardarStorage(id: string, token: string, usuario: Usuario) {

    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    // Recordad localStorage solo acepta String
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }


  crearUsuario(usuario: Usuario) {
    const URL = URL_SERVICE + '/usuario';
    return this.http.post(URL, usuario)
      .pipe(
        map((resp: any) => {
          swal('Usuario Creado', usuario.email, 'success');
          return resp.usuario;
        })
      );
  }
  // Recuedame es opcional recuerdame?boolean
  login(usuario: Usuario, recuedame = false) {

    const url = URL_SERVICE + '/login';
    if (recuedame === true) { // El recuerdame esta activo
      localStorage.setItem('email', usuario.email);
    } else {
      // Si esta desactivo se remueve
      localStorage.removeItem('email');
    }

    return this.http.post(url, usuario)
      .pipe(
        map((res: any) => {
          // Almacenando en el LocalStorage
          this.guardarStorage(res.id, res.token, res.usuario);
          return true;
        })
      );
  }
  loginGoogle(token: string) {
    const URL = URL_SERVICE + '/login/google';

    return this.http.post(URL, { token })
      .pipe(
        map((res: any) => {
          // Almacenando en el LocalStorage
          this.guardarStorage(res.id, res.token, res.usuario);
          return true;
        })
      );
  }
  logout() {
    this.usuario = null;
    this.token = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('item'); // Inncesario ?

    window.location.href = '/login';

  }
}
