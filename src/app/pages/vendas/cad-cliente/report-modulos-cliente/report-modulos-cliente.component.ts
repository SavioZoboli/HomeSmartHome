import { Component } from '@angular/core';
import { faPencil, faBan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-report-modulos-cliente',
  templateUrl: './report-modulos-cliente.component.html',
  styleUrl: './report-modulos-cliente.component.scss'
})
export class ReportModulosClienteComponent {
  faEditar = faPencil
  faDesativar = faBan
}
