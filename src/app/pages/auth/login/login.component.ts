import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThemeTogglerService } from '../../../services/misc/theme-toggler.service';
import { map, Observable, startWith } from 'rxjs';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAsterisk, faHouseLock } from '@fortawesome/free-solid-svg-icons';
import { faApple, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{



  //Icones
  faUser = faUser
  faPassword = faAsterisk
  faGoogle = faGoogle
  faApple = faApple


  constructor(
    private router:Router
  ) {
  }

  

  //Bloco de tratamento do login
  form:FormGroup = new FormGroup({
    usuario:new FormControl('',Validators.required),
    senha:new FormControl('',Validators.required)
  })

  submitForm(){
    //Implementar comunicação com API por meio de service e observable
    //Por hora, para formatação, está enviando direto para a página inicial
    this.router.navigate(['dashboard'])
  }

}
