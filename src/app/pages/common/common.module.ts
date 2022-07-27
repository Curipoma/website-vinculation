import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MessageModule } from 'primeng/message';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonRoutingModule } from './common-routing.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { UnderMaintenanceComponent } from './under-maintenance/under-maintenance.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AccessDeniedComponent,
    UnderMaintenanceComponent,
  ],
  imports: [
    NgCommonModule,
    CommonRoutingModule,
    ButtonModule,
    RippleModule,
    MessageModule,
  ],
})
export class CommonModule {}
