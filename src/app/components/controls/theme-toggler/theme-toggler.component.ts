import { Component, OnInit } from '@angular/core';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeEnum } from '../../../../enums/themes.enum';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrl: './theme-toggler.component.scss'
})
export class ThemeTogglerComponent implements OnInit{

  faLight = faSun
  faDark = faMoon

  theme!:ThemeEnum

  ngOnInit(): void {
      this.toggle()
  }

  toggle(){
    this.theme = this.theme=='light'?ThemeEnum.DARK:ThemeEnum.LIGHT;
    if(this.theme == 'dark'){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
  }
}
