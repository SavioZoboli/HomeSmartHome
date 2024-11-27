import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThemeTogglerService } from '../../../services/misc/theme-toggler.service';
import { map, Observable, startWith } from 'rxjs';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAsterisk, faHouseLock } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{

  //Observable da logo
  logo!:Observable<string>

  //Icones
  faUser = faUser
  faPassword = faAsterisk

  faGoogle = faGoogle
  faApple = faApple


  constructor(private themeTogglerService: ThemeTogglerService) {
  }

  ngOnInit():void{
    //Erro expressionChangedAfterItHasBeenChecked sendo jogado no console
    //Não consegui ajustar o erro mas ele acontece pois a variável logo é
    //alterada após o Angular iniciar o processo de checkagem. 
    //O erro não impacta em outras funcionalidades
    this.logo = this.themeTogglerService.theme$.pipe(
      map((theme:string)=>(theme==='dark'?'/assets/img/logo_dark.png':'/assets/img/logo_light.png'))
    )
  }

}
