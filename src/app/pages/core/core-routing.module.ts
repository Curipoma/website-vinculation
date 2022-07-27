import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'general-coordinators',
    loadChildren: () =>
      import('./general-coordinator/general-coordinator.module').then(
        (m) => m.GeneralCoordinatorModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
