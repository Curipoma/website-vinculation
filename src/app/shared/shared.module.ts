import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPermissionsDirective } from '@shared/directives/roles-permissions.directive';
import { ErrorMessageDirective } from '@shared/directives/error-message.directive';
import { TokenDirective } from '@shared/directives/token.directive';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { LabelDirective } from './directives/label.directive';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageModule } from 'primeng/message';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { RolePipe } from './pipes/user/role.pipe';
import { DateFormatPipe, ExtensionsPipe } from '@shared/pipes';

@NgModule({
  declarations: [
    SkeletonComponent,
    ProgressBarComponent,
    SearchComponent,
    ErrorMessageDirective,
    LabelDirective,
    RolesPermissionsDirective,
    TokenDirective,
    ExtensionsPipe,
    DateFormatPipe,
    RolePipe,
  ],
  exports: [
    SkeletonComponent,
    ProgressBarComponent,
    SearchComponent,
    ErrorMessageDirective,
    LabelDirective,
    RolesPermissionsDirective,
    TokenDirective,
    ExtensionsPipe,
    DateFormatPipe,
    RolePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkeletonModule,
    TableModule,
    ProgressBarModule,
    PaginatorModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    TooltipModule,
    FileUploadModule,
    MessageModule,
    InputTextareaModule,
    DividerModule,
    CardModule,
    OverlayPanelModule,
  ],
})
export class SharedModule {}
