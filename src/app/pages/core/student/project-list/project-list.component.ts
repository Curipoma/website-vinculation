import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CareerModel } from '@models/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects: any[];
  careers: CareerModel[];
  states: any[];
  selectedStates: any = {};


  constructor(private router: Router) {
    this.projects = [
      {
        id: 1,
        name: 'Solicitud de vinculación',
        state: 'Approved',
        date:  '12/07/2022',
        date1:  '19/07/2022',
        coment: 'Sin Comentario',
      },
      {
        id: 2,
        name: 'Certificado de vinculación',
        state: 'Refused',
        date:  '15/07/2022',
        date1:  '00/00/0000',
        coment: 'Comentado',
      },
      {
        id: 3,
        name: 'Solicitud de vinculación',
        state: 'Refused',
        date:  '18/07/2022',
        date1:  '00/00/0000',
        coment: 'Comentado',
      },
      {
        id: 4,
        name: 'Certificado de vinculación',
        state: 'Pending',
        date:  '21/07/2022',
        date1:  '00/00/0000',
        coment: 'Sin Comentario',
      },
    ];
    this.careers = [
      {
        name: 'Solicitud de vinculación',
      },
      {
        name: 'Certificado de vinculaciód',
      },
    ];
    this.states = [
      {
        name: 'pendiente',
      },
      {
        name: 'aprobado',
      },
      {
        name: 'rechazado',
      },
    ];
  }

  ngOnInit(): void {}

  create() {
    this.router.navigate(['/core/project/']);
  }
}
