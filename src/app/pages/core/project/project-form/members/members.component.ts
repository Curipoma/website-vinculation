import { Component, OnInit } from '@angular/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  coordinadores: any[];
  columns: any[];
  loaded$ = this.coreService.loaded$;

  constructor(private coreService: CoreService) {
    this.coordinadores = [
      {
        id: 1,
        nameTitle: 'ing.Pablo Robayo',
        workingHours: 'según hoario de trabajo',
        position: 'Representante Legal',
        assignedDuties: 'Representante Legal',
      },
      {
        id: 2,
        nameTitle: 'ing.Pablo Robayo',
        workingHours: 'según hoario de trabajo',
        position: 'Representante Legal',
        assignedDuties: 'Representante Legal',
      },
      {
        id: 3,
        nameTitle: 'ing.Pablo Robayo',
        workingHours: 'según hoario de trabajo',
        position: 'Representante Legal',
        assignedDuties: 'Representante Legal',
      },
    ];
    this.columns = [
      { field: 'id', header: 'Num' },
      { field: 'nameTitle', header: 'Nombre y título profesiona' },
      { field: 'workingHours', header: 'Horario de trabajo para el proyecto' },
      {
        field: 'position',
        header: 'Cargo o función en la institución benefica',
      },
      { field: 'assignedDuties', header: 'Funciones asignadas' },
    ];
  }

  ngOnInit(): void {}

  remove(id: number) {
    this.coordinadores = this.coordinadores.filter(
      (coordinador) => coordinador.id != id
    );
  }
}
