import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent implements OnInit{

  faLight = faSun
  faDark = faMoon

  theme!:'dark'|'light'

  constructor(private cookieService:CookieService){

  }

  ngOnInit(): void {
    this.theme = this.cookieService.get('theme')=='light'?'light':'dark';
      this.applyTheme()
  }

  toggle(){
    this.theme = this.theme=='light'?'dark':'light';
    this.cookieService.set('theme',this.theme);
    this.applyTheme()
  }

  applyTheme(){
    if(this.theme == 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }
}
