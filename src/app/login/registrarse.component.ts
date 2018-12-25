import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'; // Importando Plugin para mensajes
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./login.component.css', './default-dark.css', './bootstrap.min.css', './style.css']
})
export class RegistrarseComponent implements OnInit {

  forma: FormGroup;
  constructor() { }

  sonIguales(campo1, campo2) {
    return (group: FormGroup) => {
      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }

  ngOnInit() {
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required), // Donde los argumentos son : Valor por defecto, Validators
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') }); // Creando mi Propio Validators

    this.forma.setValue({
      nombre: 'test1',
      email: 'test1@gmail.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });

  }
  registrarUsuario() {
    if (this.forma.invalid) {
      return;
    }
    if (!this.forma.value.condiciones) {
      console.log('Debe aceptar las condiciones');
      swal('Importante', 'Debe aceptar las condiciones', 'warning');
      return;
    }
    console.log(this.forma.value);

  }

}
