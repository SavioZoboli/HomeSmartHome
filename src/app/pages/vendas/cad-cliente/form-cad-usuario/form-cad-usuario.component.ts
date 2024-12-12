import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTimes, faBan } from '@fortawesome/free-solid-svg-icons';
import { WhiteSpaceValiator } from '../../../../../validators/whitespace.validator';

@Component({
  selector: 'app-form-cad-usuario',
  templateUrl: './form-cad-usuario.component.html',
  styleUrl: './form-cad-usuario.component.scss'
})
export class FormCadUsuarioComponent {
  faSalvar = faFloppyDisk
  faEditar = faPencil
  faCancelar = faTimes
  faDesativar = faBan

  form = new FormGroup({
    login:new FormControl('',[Validators.required,WhiteSpaceValiator.semEspacoEmBranco]),
    regra:new FormControl(''),
    ativo:new FormControl(true)
  })

}
