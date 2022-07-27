import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'careers',
    // loadChildren: () => import('./career/career.module').then(m => m.CareerModule)
  },
  {
    path: 'catalogues',
    // loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule)
  },
  {
    path: 'curricula',
    // loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)
  },
  {
    path: 'information-students',
    // loadChildren: () => import('./information-student/information-student.module').then(m => m.InformationStudentModule)
  },
  {
    path: 'information-teachers',
    // loadChildren: () => import('./information-teacher/information-teacher.module').then(m => m.InformationTeacherModule)
  },
  {
    path: 'institutions',
    // loadChildren: () => import('./institution/institution.module').then(m => m.InstitutionModule)
  },
  {
    path: 'students',
    // loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'subjects',
    // loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
