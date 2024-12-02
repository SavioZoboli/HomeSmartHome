import { Component } from '@angular/core';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight, faArrowRightFromBracket, faArrowRightToBracket, faBolt, faChartColumn, faChevronLeft, faChevronRight, faCog, faCogs, faDroplet, faKey, faListUl, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  //Chavron to toggler
  faToggler = faAnglesRight

  //Abre e fecha o menu de navegação
  estado_nav:'inicial'|'aberto'|'fechado' = 'fechado';

  toggle(estado?:boolean){
    if(estado){
      this.estado_nav = estado?'aberto':'fechado';
      return;
    }
    if(this.estado_nav!='aberto'){
      this.estado_nav = 'aberto';
      return;
    }
    this.estado_nav ='fechado';
  }

  //Icones das páginas
  faDashboard = faChartColumn
  faAquaHub = faDroplet
  faSparkMeter = faBolt
  faGoodLock = faKey

  faAdministracao = faCogs
  faUsuario = faUser
  faMenu = faListUl
  faAcesso = faLock


  //Icone de configurações
  faConfig = faCog


}
