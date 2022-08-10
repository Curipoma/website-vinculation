import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectFormComponent } from './project/project-form/project-form.component';

const routes: Routes = [
  { path: '', component: TeacherComponent,children: [
    { path: '', component: ProjectListComponent },
    { path: 'projects/:id', component: ProjectFormComponent },
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
