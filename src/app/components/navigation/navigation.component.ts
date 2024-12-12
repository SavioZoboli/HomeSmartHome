import { Component } from '@angular/core';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import { faAnglesRight, faArrowRightFromBracket, faArrowRightToBracket, faBolt, faChartColumn, faChevronLeft, faChevronRight, faCog, faCogs, faDollar, faDroplet, faHandHoldingHeart, faKey, faListUl, faLock, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Menu } from '../../../types/menu.type';
import { TipoMenu } from '../../../enum/TipoMenu.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(){
    this.separaMenus()
  }

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
  menu:Menu[] = [
    {
      id:1,
      nome:'Dashboard',
      codigo:'DSH',
      tipo:TipoMenu.DASHBOARD,
      rota:'/dashboard',
      icone:faChartColumn
    },{
      id:1,
      nome:'AquaHub',
      codigo:'AQH',
      tipo:TipoMenu.DASHBOARD,
      rota:'/aquahub',
      icone:faDroplet
    },{
      id:1,
      nome:'Sparkmeter',
      codigo:'SPK',
      tipo:TipoMenu.DASHBOARD,
      rota:'/sparkmeter',
      icone:faBolt
    },{
      id:1,
      nome:'GoodLock',
      codigo:'GLK',
      tipo:TipoMenu.DASHBOARD,
      rota:'/goodlock',
      icone:faLock
    },{
      id:1,
      nome:'ComfyHouse',
      codigo:'CFH',
      tipo:TipoMenu.DASHBOARD,
      rota:'/comfyhouse',
      icone:faHandHoldingHeart
    },{
      id:1,
      nome:'Vendas',
      codigo:'V01',
      tipo:TipoMenu.MENU,
      icone:faDollar,
      submenu:[
        {
          id:1,
          nome:'Clientes',
          codigo:'V0101',
          tipo:TipoMenu.ITEM,
          rota:'/cadCliente',
          icone:faUsers
        }
      ]
    },

  ]


  dashboards!:Menu[]
  pagesMenu!:Menu[]

  separaMenus(){
    this.dashboards = this.menu.filter(m=>m.tipo===TipoMenu.DASHBOARD)
    this.pagesMenu = this.menu.filter(m=>m.tipo!=TipoMenu.DASHBOARD)
  }


}
