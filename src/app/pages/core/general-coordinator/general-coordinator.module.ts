import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralCoordinatorRoutingModule } from './general-coordinator-routing.module';
import { AnnexesComponent } from './projects/annexes/annexes.component';
import { TabViewModule } from 'primeng/tabview';
import { ProjectsComponent } from './projects/projects.component';
import { GeneralDataComponent } from './projects/general-data/general-data.component';
import { BusinessComponent } from './projects/business/business.component';
import { MembersComponent } from './projects/members/members.component';
import { ActivitiesComponent } from './projects/activities/activities.component';
import { WorkplanComponent } from './projects/workplan/workplan.component';
import { SignaturesComponent } from './projects/signatures/signatures.component';
import { BibliographiesComponent } from './projects/bibliographies/bibliographies.component';
import { ObservationsComponent } from './projects/observations/observations.component';
import { AttachDocumentsComponent } from './projects/attach-documents/attach-documents.component';
import { CertificateRequestsComponent } from './projects/certificate-requests/certificate-requests.component';

@NgModule({
  declarations: [AnnexesComponent, ProjectsComponent, GeneralDataComponent, BusinessComponent, MembersComponent, ActivitiesComponent, WorkplanComponent, SignaturesComponent, BibliographiesComponent, ObservationsComponent, AttachDocumentsComponent, CertificateRequestsComponent],
  imports: [CommonModule, GeneralCoordinatorRoutingModule, TabViewModule],
})
export class GeneralCoordinatorModule {}
