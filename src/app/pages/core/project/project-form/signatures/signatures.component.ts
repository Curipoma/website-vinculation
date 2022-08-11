import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signatures',
  templateUrl: './signatures.component.html',
  styleUrls: ['./signatures.component.scss'],
})
export class SignaturesComponent implements OnInit {
  products2: any[];
  cols2: any[];

  constructor() {
    this.cols2 = [
      { field: 'num', header: 'Num' },
      { field: 'carge', header: 'Puesto en cargo' },
      { field: 'nombre', header: 'Nombre y Titulo Profesional' },
      { field: 'ci', header: 'Cedula De Identidad' },
    ];
    this.products2 = [
      {
        num: 1,
        carge: 'Puesto de Carga Ejemplo1',
        nombre: 'Ing Pablo Robayo-Master en Cibersugirad',
        ci: '1719798645',
      },

      {
        num: 2,
        carge: 'Puesto de Carga Ejemplo2',
        nombre: 'Ing Maritza Tituaña -Master en Datos',
        ci: '1745367891',
      },

      {
        num: 3,
        carge: 'Puesto de Carga Ejemplo3',
        nombre: 'Ing Yogledis Herrera -Master en Analitica',
        ci: '1236985320',
      },

      {
        num: 4,
        carge: 'Puesto de Carga Ejemplo4',
        nombre: 'Ing Diego Yanez -Master en Hack Cibernetico',
        ci: '1489632014',
      },
    ];

    //this.products2 = [{ name: 'Resumen Narratuv' }];
    //this.products = [{ IndicatorsVerifiable: "hola" }];
    //this.products = [{ MeansofVerification: "hola" }];
    //this.products = [{ Configuration: "hola" }];
  }

  ngOnInit(): void {}
}
