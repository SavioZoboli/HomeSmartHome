import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faBan, faFloppyDisk, faPencil, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cad-cliente',
  templateUrl: './cad-cliente.component.html',
  styleUrl: './cad-cliente.component.scss'
})
export class CadClienteComponent {

  //Icones
  faSalvar = faFloppyDisk
  faEditar = faPencil
  faCancelar = faTimes
  faDesativar = faBan

  


}
