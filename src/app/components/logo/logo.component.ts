import { Component, Input, OnInit } from '@angular/core';
import { ThemeTogglerService } from '../../services/misc/theme-toggler.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit{

    //Observable da logo
    logo!:Observable<string>
    logoPath!:string;

    //Qual logo é para mostrar
    @Input() tipo = '';

    constructor(
      private themeTogglerService: ThemeTogglerService
    ){
    }


  ngOnInit():void{

    if(this.tipo == 'sem_escrita'){
      this.logoPath = '/assets/img/logo_sem_escrita.png';
      return;
    }

    //Erro expressionChangedAfterItHasBeenChecked sendo jogado no console
    //Não consegui ajustar o erro mas ele acontece pois a variável logo é
    //alterada após o Angular iniciar o processo de checkagem. 
    //O erro não impacta em outras funcionalidades
    this.logo = this.themeTogglerService.theme$.pipe(
      map((theme:string)=>(theme==='dark'?'/assets/img/logo_dark.png':'/assets/img/logo_light.png'))
    )
    this.logo.subscribe((val:string)=>{
      if(this.tipo == 'sem_escrita'){
        this.logoPath = '/assets/img/logo_sem_escrita.png';
        return;
      }
      this.logoPath = val;
    })
  }
}
