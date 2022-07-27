import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ExitGuard, RoleGuard } from '@shared/guards';

const routes: Routes = [
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    canActivate: [RoleGuard],
    data: {
      roles: ['admin'],
    },
  },
  {
    path: 'under-maintenance',
    component: UnderMaintenanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommonRoutingModule {}
