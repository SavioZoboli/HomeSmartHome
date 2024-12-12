import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleGuideComponent } from './dev/style-guide/style-guide.component';
import { ThemeTogglerComponent } from './components/controls/theme-toggler/theme-toggler.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadClienteComponent } from './pages/vendas/cad-cliente/cad-cliente.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormCadClienteComponent } from './pages/vendas/cad-cliente/form-cad-cliente/form-cad-cliente.component';
import { ReportModulosClienteComponent } from './pages/vendas/cad-cliente/report-modulos-cliente/report-modulos-cliente.component';
import { FormCadUsuarioComponent } from './pages/vendas/cad-cliente/form-cad-usuario/form-cad-usuario.component';
import { AquahubDashboardComponent } from './modulos/aquahub/aquahub-dashboard/aquahub-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    ThemeTogglerComponent,
    LoginComponent,
    AuthComponent,
    SignupComponent,
    NotFoundComponent,
    DashboardComponent,
    NavigationComponent,
    LogoComponent,
    CadClienteComponent,
    FormCadClienteComponent,
    ReportModulosClienteComponent,
    FormCadUsuarioComponent,
    AquahubDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }
