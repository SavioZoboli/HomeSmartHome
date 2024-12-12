import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from './dev/style-guide/style-guide.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadClienteComponent } from './pages/vendas/cad-cliente/cad-cliente.component';
import { AquahubDashboardComponent } from './modulos/aquahub/aquahub-dashboard/aquahub-dashboard.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',component:AuthComponent},

  //Dashboard geral
  {path:'dashboard',component:DashboardComponent},

  //AquaHub
  //Tratado em outro módulo, rota abaixo envia o pacote de roteamento para o roteamento
  //Do aquahub module
  {path:'aquahub',children:[
    {path:'dashboard',component:AquahubDashboardComponent}
  ]},

  //Páginas de cadastro de clientes
  {path:'cadCliente',component:CadClienteComponent},

  //Todas as requisições que não encontrare um caminho, vão para a página de erro 404
  {path:'**',pathMatch:'full',component:NotFoundComponent},

  //Ferramentas do desenvolvedor
  {path:'styleguide',component:StyleGuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
