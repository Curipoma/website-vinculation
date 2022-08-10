import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';

import { ActivitiesComponent } from './project/project-form/activities/activities.component';
import { AnnexesComponent } from './project/project-form/annexes/annexes.component';
import { AttachDocumentsComponent } from './project/project-form/attach-documents/attach-documents.component';
import { BibliographiesComponent } from './project/project-form/bibliographies/bibliographies.component';
import { BusinessComponent } from './project/project-form/business/business.component';
import { CertificateRequestsComponent } from './project/project-form/certificate-requests/certificate-requests.component';
import { GeneralDataComponent } from './project/project-form/general-data/general-data.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { MembersComponent } from './project/project-form/members/members.component';
import { ObservationsComponent } from './project/project-form/observations/observations.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';
import { SignaturesComponent } from './project/project-form/signatures/signatures.component';
import { WorkplanComponent } from './project/project-form/workplan/workplan.component';

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
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TeacherComponent, 
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
    ProjectFormComponent,
    SignaturesComponent,
    WorkplanComponent,
  ],
  imports: [
    CalendarModule,
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
    CommonModule,
    TeacherRoutingModule,
  ],
})
export class TeacherModule {}
