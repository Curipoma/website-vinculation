import { Component, OnInit } from '@angular/core';
import { ProjectModel } from '@models/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  project: ProjectModel = {
    title:
      'IMPLEMENTACIÓN DE UN SISTEMA WEB QUE PERMITA DAR A CONOCER LOS SERVICIOS Y PRODUCTOS QUE OFRECE LA FUNDACIÓN ALAS DE COLIBRÍ',
    code: 'ISTBJ-VC-DS-003-2021',
  };
  constructor() {}

  ngOnInit(): void {}

  generatePdf() {}
  generateConvenio() {}
}
