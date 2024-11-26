import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { ThemeTogglerService } from '../../../services/misc/theme-toggler.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent{

  faLight = faSun
  faDark = faMoon

  theme!:string

  constructor(private themeTogglerService:ThemeTogglerService){
    this.themeTogglerService.theme$.subscribe({
      next:(theme:string)=>{
        console.log(theme);
        this.theme = theme;
      }
    })
  }

  toggle(){
    let nextTheme:'light'|'dark' = this.theme == 'light'?'dark':'light';
    this.themeTogglerService.setTheme(nextTheme)
  }



}
