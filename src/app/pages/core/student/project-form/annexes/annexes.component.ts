import { Component } from '@angular/core';
import { StudentModel, ColumnModel } from '@models/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-annexes',
  templateUrl: './annexes.component.html',
  styleUrls: ['./annexes.component.scss'],
})
export class AnnexesComponent {
  businessAnnexes: StudentModel[] = [
    {
      id: 1,
      explanation: 'Carta de compromiso',
      documentStatus:'Subido',
      state: 'desaprobado',
      observation:'Icono de observaciones',
    },
    {
      id: 2,
      explanation: 'Informe del proyecto',
      documentStatus:'Subido',
      state: 'Aprobado',
      observation:'Icono de observaciones',
    },
    {
      id: 3,
      explanation: 'Cumplimiento de objetivos',
      documentStatus:'Subido',
      state: 'Aprobado',
      observation:'Icono de observaciones',

    },
    {
      id: 4,
      explanation: 'Informe final',
      documentStatus:'Subido',
      state: 'Aprobado',
      observation:'Icono de observaciones',
    },
    {
      id: 5,
      explanation: 'Encuesta de percepcion',
      documentStatus:'Subido',
      state: 'Aprobado',
      observation:'Icono de observaciones',
    },
    {
      id: 6,
      explanation: 'Control de asistencias',
      documentStatus:'Subido',
      state: 'Aprobado',
      observation:'Icono de observaciones',

    },
   
    
  ];

  columns: ColumnModel[] = [
    { field: 'explanation', header: 'Tienes que subir este archivo' },
    { field: 'documentStatus', header: 'Estado del documento' },
    { field: 'state', header: 'Estado' },
    { field: 'observation', header: 'Observaciones' },
  ];
  loaded$ = this.coreService.loaded$;
  selectedBusinessAnnexes: any[] = [];
  selectedInstitutionalAnnexes: any[] = [];

  constructor(private coreService: CoreService) {}
  download() {}
  onUpload(e: any) {}

 
}
