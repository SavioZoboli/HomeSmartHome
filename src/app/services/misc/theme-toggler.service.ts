import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeTogglerService {
//Inicializa a variável privada do objeto assíncrono
  private themeSubject:BehaviorSubject<string>

//Construtor do serviço
  constructor(private cookieService:CookieService) {
    //Busca o tema nos cookies e, caso não possua o tema, usa o claro
    const initialTheme = this.cookieService.get('theme')=='light'?'light':'dark';
    //Adiciona o valor do tema no objeto observavel
    this.themeSubject = new BehaviorSubject<string>(initialTheme);
    //Executa a função de aplicação do tema
    this.setTheme(initialTheme)
   }

   //Método para observar as mudanças
   //Retorna o subject como um objeto observavel (observable)
   get theme$():Observable<string>{
    return this.themeSubject.asObservable()
   }

   //Altera o tema
   setTheme(theme:'light'|'dark'){
    //Atualiza o cookie
    this.cookieService.set('theme',theme);
    //Atualiza o observable acionando o gatilho next
    this.themeSubject.next(theme);
    //Muda o tema do projeto
    const root = document.documentElement;
    if(theme === 'dark'){
      root.classList.add('dark');
    }else{
      root.classList.remove('dark');
    }
   }


  



}
