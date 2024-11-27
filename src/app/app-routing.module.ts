import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from './dev/style-guide/style-guide.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthComponent } from './pages/auth/auth.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',component:AuthComponent},
  {path:'**',pathMatch:'full',component:NotFoundComponent},




  //Ferramentas do desenvolvedor
  {path:'styleguide',component:StyleGuideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
