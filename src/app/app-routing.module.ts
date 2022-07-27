import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      {
        path: 'core',
        title: 'Core',
        loadChildren: () =>
          import('./pages/core/core.module').then((m) => m.CoreModule),
      },
      {
        path: 'administration',
        title: 'Administration',
        loadChildren: () =>
          import('./pages/auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: 'auth',
    title: 'Auth',
    component: BlankComponent,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'common',
    title: 'Common',
    component: BlankComponent,
    loadChildren: () =>
      import('./pages/common/common.module').then((m) => m.CommonModule),
  },
  {
    path: '**',
    redirectTo: '/common/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
