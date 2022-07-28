import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  products: any[];
  cols: any[];
  cols1: any[];
  products1: any[];

  constructor() {
    this.cols = [
      { field: 'num', header: 'Num' },
      { field: 'Narr', header: 'Narrative Sumary Of Objectives' },
      { field: 'IndicatorsVerifiable', header: 'Indicators-Verifiable' },
      { field: 'Means of Verification', header: 'Means of Verification' },
      { field: 'Configuration', header: 'Configuration' },
    ];

    this.products = [{ nar: 12 }];
    //this.products = [{ narrativesummary: 'Resumen Narratuv' }];
    //this.products = [{ IndicatorsVerifiable: "hola" }];
    //this.products = [{ MeansofVerification: "hola" }];
    //this.products = [{ Configuration: "hola" }];

    this.cols1 = [
      { field: 'num', header: 'Num' },
      { field: 'name', header: 'Name' },
      { field: 'obj', header: 'Objectives' },
      { field: 'Configuration', header: 'Configuration' },
    ];
    this.products1 = [{ nar: 12 }];
  }

  ngOnInit(): void {}
}
