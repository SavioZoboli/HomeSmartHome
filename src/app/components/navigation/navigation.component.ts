import { Component } from '@angular/core';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight, faArrowRightFromBracket, faArrowRightToBracket, faBolt, faChartColumn, faChevronLeft, faChevronRight, faCog, faDroplet, faKey } from '@fortawesome/free-solid-svg-icons';

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

  toggle(){
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


  //Icone de configurações
  faConfig = faCog


}
