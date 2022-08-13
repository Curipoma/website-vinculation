import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-assignment',
  templateUrl: './projects-assignment.component.html',
  styleUrls: ['./projects-assignment.component.scss']
})
export class ProjectsAssignmentComponent implements OnInit {
  selectedValue: string = '';
  careers: { name: string }[];
  teachers: { name: string }[];
  projects: { name: string }[];
  projectCode: { name: string }[];
  cycle: { name: string }[];

  constructor() { 
    this.careers = [
      {
        name: 'desarrollo de software',
      },
      {
        name: 'control de incendios',
      },
      {
        name: 'gia nacional de turismo',
      },
      {
        name: 'gastronomía',
      },
      {
        name: 'diseño de modas',
      },
      {
        name: 'marketing',
      },
    ];
    this.teachers = [
      {
        name: 'Pablo Robayo',
      },
      {
        name: 'Maritza Tituaña',
      },
      {
        name: 'Daniel Rivas',
      },
      {
        name: 'Juan Pablo',
      },
      {
        name: 'Daniela Sosa',
      },
      {
        name: 'Liz Zuniga',
      },
    ];

    this.projects = [
      {
        name: 'FastCell',
      },
      {
        name: 'DeviceOnline',
      },
      {
        name: 'Sistema de control de acceso',
      },
      {
        name: 'Sistema de camaras de seguridad',
      },
      {
        name: 'RetributionRed',
      },
      {
        name: 'GreenLantern',
      },
    ];

    this.projectCode = [
      {
        name: '1005HG69',
      },
      {
        name: '7896Fr45',
      },
      {
        name: 'roub8952',
      },
      {
        name: '2564GST69',
      },
      {
        name: '2548SH69',
      },
      {
        name: 'TRI895A',
      },
    ];

    this.cycle = [
      {
        name: 'Vespertino',
      },
      {
        name: 'Matutino',
      },
    ];
  }

  ngOnInit(): void {
  }

}
