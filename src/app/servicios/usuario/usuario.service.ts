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
}
