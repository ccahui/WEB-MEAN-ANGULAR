import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICE } from 'src/app/configuraciones/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { }

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
          localStorage.setItem('id', res.id);
          localStorage.setItem('token', res.token);
          // Recordad que res.USUARIO es un Objeto, y localStorage solo acepta String
          localStorage.setItem('usuario', JSON.stringify(res.usuario));
          return true;
        })
      );
  }
}
