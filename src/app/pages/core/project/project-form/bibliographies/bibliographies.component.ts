import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bibliographies',
  templateUrl: './bibliographies.component.html',
  styleUrls: ['./bibliographies.component.scss'],
})
export class BibliographiesComponent implements OnInit {
  estrategy: string;
  cols3: any[];
  products3: any[];
  cols4: any[];
  products4: any[];
  constructor() {
    this.estrategy =
      'Dado a la ardua labor que realiza la Fundación Alas de Colibrí que busca el ejercicio efectivo de los Derechos Humanos a través de la atención integral a personas en situaciones de riesgo: Mujeres adolescentes sobrevivientes del delito de trata de personas. Niños, niñas y adolescentes en situación de vulnerabilidad. Personas en riesgo de sufrir Violencia Basada en Género en el contexto de movilidad humana.  Todo bajo un enfoque de Derechos Humanos .';

    this.cols3 = [
      { field: 'num', header: 'Num' },
      { field: 'estrategys', header: 'Estrategias' },
    ];
    this.products3 = [
      {
        num: 1,
        estrategys:
          'Registros de asistencia y cumplimiento de objetivos acorde a la planeación del proyecto.',
      },
      {
        num: 2,
        estrategys:
          'Informes de seguimiento y cumplimiento mensuales en los cuales se especificará el cumplimiento de los requerimientos.',
      },
      {
        num: 3,
        estrategys:
          'Informes de seguimiento y cumplimiento mensuales en los cuales se especificará el cumplimiento de los requerimientos.',
      },
      {
        num: 4,
        estrategys:
          'Informes de seguimiento y cumplimiento mensuales en los cuales se especificará el cumplimiento de los requerimientos.',
      },
    ];

    this.cols4 = [
      { field: 'num', header: 'Num' },
      { field: 'bibliografys', header: 'Bibliografias' },
    ];
    this.products4 = [
      {
        num: 1,
        bibliografys:
          'KENDALL & KENDALL, Análisis y Diseño de Sistemas, Prentice Hall, 2011',
      },
      {
        num: 2,
        bibliografys:
          'ROGER PRESMAN, Ingeniería de Software enfoque práctico, Mc Graw Hill,2010',
      },
      {
        num: 3,
        bibliografys:
          'ROGER PRESMAN, Ingeniería de Software enfoque práctico, Mc Graw Hill,2010',
      },
      {
        num: 4,
        bibliografys:
          'ROGER PRESMAN, Ingeniería de Software enfoque práctico, Mc Graw Hill,2010',
      },
    ];
  }

  ngOnInit(): void {}
}
