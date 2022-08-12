import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { RestoreComponent } from './restore/restore.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
   {
    path: 'restore',
    component: RestoreComponent,
  },
   {
    path: 'new-password',
    component: NewPasswordComponent,
  },
  {
    path: 'users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
