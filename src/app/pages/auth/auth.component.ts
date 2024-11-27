import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements AfterViewInit{

  @ViewChild('formContainer',{read:ViewContainerRef}) formContainer!:ViewContainerRef;

  renderedComponent!:string;

  ngAfterViewInit(): void {
      this.renderedComponent = 'login';
      this.renderForm()
  }

  toggleForms(){
    this.renderedComponent = this.renderedComponent=='login'?'signup':'login';
    this.renderForm()
  }

  renderForm(){
    this.formContainer.createComponent(this.renderedComponent=='login'?LoginComponent:SignupComponent);
  }

}
