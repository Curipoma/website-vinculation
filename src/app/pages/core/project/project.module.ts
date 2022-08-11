import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';

import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TreeTableModule } from 'primeng/treetable';

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
import { ProjectComponent } from './project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { SignaturesComponent } from './project-form/signatures/signatures.component';
import { WorkplanComponent } from './project-form/workplan/workplan.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ActivitiesComponent,
    AnnexesComponent,
    AttachDocumentsComponent,
    BibliographiesComponent,
    BusinessComponent,
    CertificateRequestsComponent,
    GeneralDataComponent,
    ProjectListComponent,
    MembersComponent,
    ObservationsComponent,
    ProjectComponent,
    ProjectFormComponent,
    SignaturesComponent,
    WorkplanComponent,
  ],
  imports: [
    CalendarModule,
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    DialogModule,
    DividerModule,
    FileUploadModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
    PaginatorModule,
    ProgressBarModule,
    RadioButtonModule,
    SliderModule,
    TableModule,
    TabViewModule,
    TreeTableModule,
  ],
})
export class ProjectModule {}
