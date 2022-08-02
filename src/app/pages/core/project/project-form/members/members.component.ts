import { Component, OnInit } from '@angular/core';
import { CoreService } from '@services/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  estudiantess: any[];
  columns: any[];
  loaded$ = this.coreService.loaded$;

  constructor(private coreService: CoreService) {
    this.estudiantess = [
      {
        Cedula: 1751515649,
        Estudiantes: 'Nathy Benavides',
        Curso: '5 VB',
        Portafolio: ' VER PORTAFOLIO',
        Calificaciones: '100',
      },
      {
        Cedula: 1753070570,
        Estudiantes: 'Jhonatan Quito',
        Curso: '5 VB',
        Portafolio: ' VER PORTAFOLIO',
        Calificaciones: '100',
      },
      {
        Cedula: 1727088757,
        Estudiantes: 'Kevin Motoche',
        Curso: '5 VB',
        Portafolio: ' VER PORTAFOLIO',
        Calificaciones: '100',
      },
    ];
    this.columns = [
      { field: 'Cedula', header: 'Numero' },
      { field: 'Estudiantes', header: 'Nombre ' },
      { field: 'Curso', header: 'Curso del semestre' },
      {
        field: 'Portafolio',
        header: 'Portafolio del estudiante',
      },
      { field: 'Calificaciones', header: 'Calificacion' },
    ];
  }

  ngOnInit(): void {}

  remove(id: number) {
    this.estudiantess = this.estudiantess.filter(
      (estudiantess) => estudiantess.id != id
    );
  }
}
