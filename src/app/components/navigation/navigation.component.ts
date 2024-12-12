import { Component } from '@angular/core';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight, faArrowRightFromBracket, faArrowRightToBracket, faBolt, faChartColumn, faChevronLeft, faChevronRight, faCog, faCogs, faDollar, faDroplet, faKey, faListUl, faLock, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

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
    let details = document.querySelectorAll('details')
    details.forEach(detail=>{
      detail.removeAttribute('open');
    })
  }

  //Icones das páginas
  faDashboard = faChartColumn
  faAquaHub = faDroplet
  faSparkMeter = faBolt
  faGoodLock = faKey

  faAdministracao = faCogs
  faMenu = faListUl
  faAcesso = faLock

  faVendas = faDollar
  faCliente = faUsers


  //Icone de configurações
  faConfig = faCog


  //Menu dinamico base ##SERÁ SUBSTITUIDO PELO RETORNO DO BANCO DE DADOS ##


}
