import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { TabViewModule } from 'primeng/tabview';
import { ActivitiesComponent } from './project-form/activities/activities.component';
import { AnnexesComponent } from './project-form/annexes/annexes.component';
import { AttachDocumentsComponent } from './project-form/attach-documents/attach-documents.component';
import { BibliographiesComponent } from './project-form/bibliographies/bibliographies.component';
import { BusinessComponent } from './project-form/business/business.component';
import { CertificateRequestsComponent } from './project-form/certificate-requests/certificate-requests.component';
import { GeneralDataComponent } from './project-form/general-data/general-data.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MembersComponent } from './project-form/members/members.component';
import { ObservationsComponent } from './project-form/observations/observations.component';
import { SignaturesComponent } from './project-form/signatures/signatures.component';
import { WorkplanComponent } from './project-form/workplan/workplan.component';
import { ProjectComponent } from './project.component';
import { ProjectFormComponent } from './project-form/project-form.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    AnnexesComponent,
    AttachDocumentsComponent,
    BibliographiesComponent,
    BusinessComponent,
    CertificateRequestsComponent,
    GeneralDataComponent,
    ProjectComponent,
    ProjectFormComponent,
    ProjectListComponent,
    MembersComponent,
    ObservationsComponent,
    SignaturesComponent,
    WorkplanComponent,
  ],
  imports: [CommonModule, ProjectRoutingModule, TabViewModule],
})
export class ProjectModule {}
