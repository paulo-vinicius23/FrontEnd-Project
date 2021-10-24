import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCategoriaComponent } from './cadastro-categoria/cadastro-categoria.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { MoveListComponent } from './move/move-list/move-list.component';

const routes: Routes = [
  { path: '', component: MoveListComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'filme_cad', component: CadastroFormComponent, canActivate: [AuthGuard] },
  { path: 'cat_cad', component: CadastroCategoriaComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }